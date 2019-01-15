'use strict';

var mongoose = require('mongoose');
var async = require('async');



var connectOptions;
// var mainDb;
var app;

require('pmx').init();

async function connectData() {
    var dbsObject = {};
    var mainDb = {};
    var models = require('./helpers/models')(dbsObject);
    var dbsNames = {};
    process.env.NODE_ENV = process.env.NODE_ENV || 'production';
    require('./config/environment/' + process.env.NODE_ENV);

    connectOptions = {
        // db: {
        //     native_parser: true
        // },
        // server: {
        //     poolSize: 5
        // },
        // w: 1,
        // j: true
        poolSize: 5
    };
    // mainDb = mongoose.createConnection(process.env.MAIN_DB_HOST, process.env.MAIN_DB_NAME, process.env.DB_PORT, connectOptions);
    const uri = `mongodb://${process.env.MAIN_DB_HOST}:${process.env.DB_PORT}/${process.env.MAIN_DB_NAME}`

    mainDb = await mongoose.connect(uri, connectOptions).then(function callback({
        open,
        error
    }) {
        if (error) {
            console.error(error);

            process.exit(1, error);
        }
        console.log('Connection to mainDB is success');
    });
    var mainDBSchema;
    var port = parseInt(process.env.PORT, 10) || 8089;
    var instance = parseInt(process.env.NODE_APP_INSTANCE, 10) || 0;
    var main;

    port += instance;
    // mainDb.dbsObject = dbsObject;

    // dbsObject.mainDB = mainDb;



    require('./models/index.js');

    mainDBSchema = mongoose.Schema({
        _id: Number,
        url: {
            type: String,
            default: 'localhost'
        },
        DBname: {
            type: String,
            default: ''
        },
        pass: {
            type: String,
            default: ''
        },
        user: {
            type: String,
            default: ''
        },
        port: Number
    }, {
        collection: 'easyErpDBS'
    });

    main = mongoose.model('easyErpDBS', mainDBSchema);
    main.find().exec(function(err, result) {
        if (err) {
            process.exit(1, err);
        }

        async.each(result, function(_db, eachCb) {
            var dbInfo = {
                DBname: '',
                url: ''
            };
            var opts = {
                db: {
                    native_parser: true
                },
                server: {
                    poolSize: 5
                },
                w: 1,
                j: true
            };
            const uriDbObject = `mongodb://${_db.url}:${_db.port}/${_db.DBname}`

            var dbObject = mongoose.connect(uriDbObject, connectOptions)

            dbObject.then('error', function(err) {
                console.error(err);
                eachCb(err);
            });
            dbObject.then('open', function() {
                console.log('Connection to ' + _db.DBname + ' is success');

                dbInfo.url = _db.url;
                dbInfo.DBname = _db.DBname;
                dbsObject[_db.DBname] = dbObject;
                dbsNames[_db.DBname] = dbInfo;

                eachCb();
            });
        }, function(err) {
            if (err) {
                return console.error(err);
            }
            app = require('./app')(mainDb, dbsNames);

            app.listen(port, function() {
                var Scheduler = require('./services/scheduler')(models);
                var scheduler = new Scheduler(dbsObject);

                console.log('==============================================================');
                console.log('|| server instance=' + instance + ' start success on port=' + port + ' in ' + process.env.NODE_ENV + ' version ||');
                console.log('==============================================================\n');

                if (result.length > 0) {
                    scheduler.initEveryDayScheduler();
                }
            });
        });
    });

    // mainDb.mongoose = mongoose;
}




connectData();