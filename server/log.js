{
    "error": {
        "stackframes": [{
            "file_name": "C:\\inetpub\\wwwroot\\ERP\\node_modules\\cookie\\index.js",
            "line_number": 145
        }, {
            "file_name": "C:\\inetpub\\wwwroot\\ERP\\node_modules\\express-session\\index.js",
            "line_number": 636
        }, {
            "file_name": "C:\\inetpub\\wwwroot\\ERP\\node_modules\\express-session\\index.js",
            "line_number": 242
        }, {
            "file_name": "C:\\inetpub\\wwwroot\\ERP\\node_modules\\on-headers\\index.js",
            "line_number": 46
        }, {
            "file_name": "_http_server.js",
            "line_number": 200
        }, {
            "file_name": "_http_outgoing.js",
            "line_number": 585
        }, {
            "file_name": "_http_outgoing.js",
            "line_number": 567
        }, {
            "file_name": "_stream_readable.js",
            "line_number": 666
        }, {
            "file_name": "C:\\inetpub\\wwwroot\\ERP\\node_modules\\harmony-reflect\\reflect.js",
            "line_number": 2064
        }, {
            "file_name": "events.js",
            "line_number": 182
        }, {
            "file_name": "C:\\inetpub\\wwwroot\\ERP\\node_modules\\harmony-reflect\\reflect.js",
            "line_number": 2064
        }, {
            "file_name": "domain.js",
            "line_number": 441
        }, {
            "file_name": "_stream_readable.js",
            "line_number": 283
        }, {
            "file_name": "_stream_readable.js",
            "line_number": 264
        }, {
            "file_name": "_stream_readable.js",
            "line_number": 219
        }, {
            "file_name": "internal/fs/streams.js",
            "line_number": 181
        }, {
            "file_name": "fs.js",
            "line_number": 463
        }]
    },
    "level": "error",
    "message": "uncaughtException: option expires is invalid\nTypeError: option expires is invalid\n    at Object.serialize (C:\\inetpub\\wwwroot\\ERP\\node_modules\\cookie\\index.js:145:13)\n    at setcookie (C:\\inetpub\\wwwroot\\ERP\\node_modules\\express-session\\index.js:636:21)\n    at ServerResponse.<anonymous> (C:\\inetpub\\wwwroot\\ERP\\node_modules\\express-session\\index.js:242:7)\n    at ServerResponse.writeHead (C:\\inetpub\\wwwroot\\ERP\\node_modules\\on-headers\\index.js:46:16)\n    at ServerResponse._implicitHeader (_http_server.js:200:8)\n    at write_ (_http_outgoing.js:585:9)\n    at ServerResponse.write (_http_outgoing.js:567:10)\n    at ReadStream.ondata (_stream_readable.js:666:20)\n    at Object.apply (C:\\inetpub\\wwwroot\\ERP\\node_modules\\harmony-reflect\\reflect.js:2064:37)\n    at ReadStream.emit (events.js:182:13)\n    at Object.apply (C:\\inetpub\\wwwroot\\ERP\\node_modules\\harmony-reflect\\reflect.js:2064:37)\n    at ReadStream.EventEmitter.emit (domain.js:441:20)\n    at addChunk (_stream_readable.js:283:12)\n    at readableAddChunk (_stream_readable.js:264:11)\n    at ReadStream.Readable.push (_stream_readable.js:219:10)\n    at lazyFs.read (internal/fs/streams.js:181:12)\n    at FSReqWrap.wrapper [as oncomplete] (fs.js:463:17)",
    "stack": "TypeError: option expires is invalid\n    at Object.serialize (C:\\inetpub\\wwwroot\\ERP\\node_modules\\cookie\\index.js:145:13)\n    at setcookie (C:\\inetpub\\wwwroot\\ERP\\node_modules\\express-session\\index.js:636:21)\n    at ServerResponse.<anonymous> (C:\\inetpub\\wwwroot\\ERP\\node_modules\\express-session\\index.js:242:7)\n    at ServerResponse.writeHead (C:\\inetpub\\wwwroot\\ERP\\node_modules\\on-headers\\index.js:46:16)\n    at ServerResponse._implicitHeader (_http_server.js:200:8)\n    at write_ (_http_outgoing.js:585:9)\n    at ServerResponse.write (_http_outgoing.js:567:10)\n    at ReadStream.ondata (_stream_readable.js:666:20)\n    at Object.apply (C:\\inetpub\\wwwroot\\ERP\\node_modules\\harmony-reflect\\reflect.js:2064:37)\n    at ReadStream.emit (events.js:182:13)\n    at Object.apply (C:\\inetpub\\wwwroot\\ERP\\node_modules\\harmony-reflect\\reflect.js:2064:37)\n    at ReadStream.EventEmitter.emit (domain.js:441:20)\n    at addChunk (_stream_readable.js:283:12)\n    at readableAddChunk (_stream_readable.js:264:11)\n    at ReadStream.Readable.push (_stream_readable.js:219:10)\n    at lazyFs.read (internal/fs/streams.js:181:12)\n    at FSReqWrap.wrapper [as oncomplete] (fs.js:463:17)",
    "exception": true,
    "date": "Wed Jan 16 2019 07:44:25 GMT+0700 (Indochina Time)",
    "process": {
        "pid": 8468,
        "uid": null,
        "gid": null,
        "cwd": "C:\\inetpub\\wwwroot\\ERP",
        "execPath": "C:\\Program Files\\nodejs\\node.exe",
        "version": "v10.14.2",
        "argv": ["C:\\Program Files\\nodejs\\node.exe", "C:\\inetpub\\wwwroot\\ERP\\server\\server.js"],
        "memoryUsage": {
            "rss": 106139648,
            "heapTotal": 141570048,
            "heapUsed": 127184892,
            "external": 149291931
        }
    },
    "os": {
        "loadavg": [0, 0, 0],
        "uptime": 604643
    },
    "trace": [{
        "column": 13,
        "file": "C:\\inetpub\\wwwroot\\ERP\\node_modules\\cookie\\index.js",
        "function": "Object.serialize",
        "line": 145,
        "method": "serialize",
        "native": false
    }, {
        "column": 21,
        "file": "C:\\inetpub\\wwwroot\\ERP\\node_modules\\express-session\\index.js",
        "function": "setcookie",
        "line": 636,
        "method": null,
        "native": false
    }, {
        "column": 7,
        "file": "C:\\inetpub\\wwwroot\\ERP\\node_modules\\express-session\\index.js",
        "function": null,
        "line": 242,
        "method": null,
        "native": false
    }, {
        "column": 16,
        "file": "C:\\inetpub\\wwwroot\\ERP\\node_modules\\on-headers\\index.js",
        "function": "ServerResponse.writeHead",
        "line": 46,
        "method": "writeHead",
        "native": false
    }, {
        "column": 8,
        "file": "_http_server.js",
        "function": "ServerResponse._implicitHeader",
        "line": 200,
        "method": "_implicitHeader",
        "native": false
    }, {
        "column": 9,
        "file": "_http_outgoing.js",
        "function": "write_",
        "line": 585,
        "method": null,
        "native": false
    }, {
        "column": 10,
        "file": "_http_outgoing.js",
        "function": "ServerResponse.write",
        "line": 567,
        "method": "write",
        "native": false
    }, {
        "column": 20,
        "file": "_stream_readable.js",
        "function": "ReadStream.ondata",
        "line": 666,
        "method": "ondata",
        "native": false
    }, {
        "column": 37,
        "file": "C:\\inetpub\\wwwroot\\ERP\\node_modules\\harmony-reflect\\reflect.js",
        "function": "Object.apply",
        "line": 2064,
        "method": "apply",
        "native": false
    }, {
        "column": 13,
        "file": "events.js",
        "function": "ReadStream.emit",
        "line": 182,
        "method": "emit",
        "native": false
    }, {
        "column": 37,
        "file": "C:\\inetpub\\wwwroot\\ERP\\node_modules\\harmony-reflect\\reflect.js",
        "function": "Object.apply",
        "line": 2064,
        "method": "apply",
        "native": false
    }, {
        "column": 20,
        "file": "domain.js",
        "function": "ReadStream.EventEmitter.emit",
        "line": 441,
        "method": "emit",
        "native": false
    }, {
        "column": 12,
        "file": "_stream_readable.js",
        "function": "addChunk",
        "line": 283,
        "method": null,
        "native": false
    }, {
        "column": 11,
        "file": "_stream_readable.js",
        "function": "readableAddChunk",
        "line": 264,
        "method": null,
        "native": false
    }, {
        "column": 10,
        "file": "_stream_readable.js",
        "function": "ReadStream.Readable.push",
        "line": 219,
        "method": "push",
        "native": false
    }, {
        "column": 12,
        "file": "internal/fs/streams.js",
        "function": "lazyFs.read",
        "line": 181,
        "method": "read",
        "native": false
    }, {
        "column": 17,
        "file": "fs.js",
        "function": "FSReqWrap.wrapper [as oncomplete]",
        "line": 463,
        "method": "wrapper [as oncomplete]",
        "native": false
    }]
}