//GET: currency/getForList
[{
    "_id": "USD",
    "active": true,
    "decPlace": 2,
    "symbol": "$",
    "name": "USD"
}, {
    "_id": "EUR",
    "active": true,
    "decPlace": 2,
    "symbol": "€",
    "name": "EUR"
}]
// GET: paymentMethod/getForList
[{
    "_id": "565f2e05ab70d49024242e10",
    "name": "CASH EUR",
    "account": "CASH EUR",
    "currency": "EUR",
    "bank": "",
    "swiftCode": "",
    "address": "",
    "fullName": "",
    "owner": "CASH EUR",
    "chartAccount": {
        "_id": "589c92ec8703b8ba7cf43a23",
        "code": 101502,
        "__v": 0,
        "createdBy": {
            "date": "2017-02-09T16:03:56.950Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f81",
        "subAccount": null,
        "name": "101502 Cash EUR",
        "account": "Cash EUR"
    }
}, {
    "_id": "565f2e05ab70d49024242e0f",
    "name": "CASH USD",
    "account": "CASH USD",
    "currency": "USD",
    "bank": "",
    "swiftCode": "",
    "address": "",
    "fullName": "",
    "owner": "CASH USD",
    "chartAccount": {
        "_id": "565eb53a6aa50532e5df0bd2",
        "code": 101500,
        "type": "57da4d62713d3fe825f074ae",
        "createdBy": {
            "date": "2019-01-28T01:51:36.336Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": "565c610f618d81c97e786eee",
        "budgeted": false,
        "category": "5810c75b2b225158086d7f81",
        "subAccount": null,
        "name": "101500 Cash USD",
        "account": "Cash USD"
    }
}]
//paymentTerm/getForList
[{
    "_id": "55536e52475b7be475f335fa",
    "name": "Custom"
}, {
    "_id": "55536e52475b7be475f335fb",
    "name": "Due on Receipt"
}, {
    "_id": "55536e52475b7be475f335f6",
    "name": "Net 15",
    "count": 15
}, {
    "_id": "55536e52475b7be475f335f7",
    "name": "Net 30",
    "count": 30
}, {
    "_id": "55536e52475b7be475f335f8",
    "name": "Net 45",
    "count": 45
}, {
    "_id": "55536e52475b7be475f335f9",
    "name": "Net 60",
    "count": 60
}]
//GET: accountsCategories/
[{
    "_id": "5810c75b2b225158086d7f7e",
    "__v": 0,
    "productsCount": 2,
    "removable": false,
    "main": false,
    "sequence": 0,
    "nestingLevel": 0,
    "editedBy": {
        "date": "2016-10-26T15:10:19.904Z",
        "user": null
    },
    "createdBy": {
        "date": "2016-10-26T15:10:19.904Z",
        "user": null
    },
    "users": [],
    "child": [],
    "parent": null,
    "fullName": "Income Summary",
    "name": "Income Summary"
}, {
    "_id": "5810c75b2b225158086d7f7f",
    "__v": 0,
    "productsCount": 2,
    "removable": false,
    "main": false,
    "sequence": 1,
    "nestingLevel": 0,
    "editedBy": {
        "date": "2016-10-26T15:10:19.913Z",
        "user": null
    },
    "createdBy": {
        "date": "2016-10-26T15:10:19.913Z",
        "user": null
    },
    "users": [],
    "child": [],
    "parent": null,
    "fullName": "Equity",
    "name": "Equity"
}, {
    "_id": "5810c75b2b225158086d7f89",
    "__v": 0,
    "productsCount": 21,
    "removable": false,
    "main": false,
    "sequence": 0,
    "nestingLevel": 0,
    "editedBy": {
        "date": "2016-10-26T15:10:19.927Z",
        "user": null
    },
    "createdBy": {
        "date": "2016-10-26T15:10:19.926Z",
        "user": null
    },
    "users": [],
    "child": [],
    "parent": null,
    "fullName": "Expenses",
    "name": "Expenses"
}, {
    "_id": "5810c75b2b225158086d7f85",
    "__v": 0,
    "productsCount": 1,
    "removable": false,
    "main": false,
    "sequence": 0,
    "nestingLevel": 0,
    "editedBy": {
        "date": "2016-10-26T15:10:19.919Z",
        "user": null
    },
    "createdBy": {
        "date": "2016-10-26T15:10:19.919Z",
        "user": null
    },
    "users": [],
    "child": [],
    "parent": null,
    "fullName": "Other Income",
    "name": "Other Income"
}, {
    "_id": "5810c75b2b225158086d7f83",
    "__v": 0,
    "productsCount": 2,
    "removable": false,
    "main": false,
    "sequence": 0,
    "nestingLevel": 0,
    "editedBy": {
        "date": "2016-10-26T15:10:19.918Z",
        "user": null
    },
    "createdBy": {
        "date": "2016-10-26T15:10:19.918Z",
        "user": null
    },
    "users": [],
    "child": [],
    "parent": null,
    "fullName": "Income",
    "name": "Income"
}, {
    "_id": "5810c75b2b225158086d7f86",
    "__v": 0,
    "productsCount": 1,
    "removable": false,
    "main": false,
    "sequence": 0,
    "nestingLevel": 0,
    "editedBy": {
        "date": "2016-10-26T15:10:19.920Z",
        "user": null
    },
    "createdBy": {
        "date": "2016-10-26T15:10:19.920Z",
        "user": null
    },
    "users": [],
    "child": [],
    "parent": null,
    "fullName": "Prepayments",
    "name": "Prepayments"
}, {
    "_id": "584e47953d2d06b40d2e9dc0",
    "__v": 0,
    "productsCount": 0,
    "removable": false,
    "main": false,
    "sequence": 0,
    "nestingLevel": 1,
    "editedBy": {
        "date": "2016-12-12T06:45:41.456Z",
        "user": "5797555d10343a8c275f3e70"
    },
    "createdBy": {
        "date": "2016-12-12T06:45:41.456Z",
        "user": "5797555d10343a8c275f3e70"
    },
    "users": [],
    "child": ["5810c75b2b225158086d7f8a", "5810c75b2b225158086d7f88"],
    "parent": null,
    "fullName": "Liabilities",
    "name": "Liabilities"
}, {
    "_id": "584aa1e84881bdc437c60828",
    "__v": 0,
    "productsCount": 0,
    "removable": false,
    "main": false,
    "sequence": 0,
    "nestingLevel": 1,
    "editedBy": {
        "date": "2016-12-09T12:22:00.065Z",
        "user": "5797555d10343a8c275f3e70"
    },
    "createdBy": {
        "date": "2016-12-09T12:22:00.065Z",
        "user": "5797555d10343a8c275f3e70"
    },
    "users": [],
    "child": ["5810c75b2b225158086d7f82", "5810c75b2b225158086d7f80", "5810c75b2b225158086d7f84", "5810c75b2b225158086d7f87", "5810c75b2b225158086d7f81"],
    "parent": null,
    "fullName": "Assets",
    "name": "Assets"
}, {
    "_id": "5810c75b2b225158086d7f82",
    "__v": 0,
    "productsCount": 1,
    "removable": false,
    "main": false,
    "sequence": 1,
    "nestingLevel": 1,
    "editedBy": {
        "date": "2016-10-26T15:10:19.917Z",
        "user": null
    },
    "createdBy": {
        "date": "2016-10-26T15:10:19.917Z",
        "user": null
    },
    "users": [],
    "child": [],
    "parent": {
        "_id": "584aa1e84881bdc437c60828",
        "name": "Assets"
    },
    "fullName": "Assets / Fixed Assets",
    "name": "Fixed Assets"
}, {
    "_id": "5810c75b2b225158086d7f84",
    "__v": 0,
    "productsCount": 1,
    "removable": false,
    "main": false,
    "sequence": 2,
    "nestingLevel": 1,
    "editedBy": {
        "date": "2016-10-26T15:10:19.918Z",
        "user": null
    },
    "createdBy": {
        "date": "2016-10-26T15:10:19.918Z",
        "user": null
    },
    "users": [],
    "child": [],
    "parent": {
        "_id": "584aa1e84881bdc437c60828",
        "name": "Assets"
    },
    "fullName": "Assets / Non-current Assets",
    "name": "Non-current Assets"
}, {
    "_id": "5810c75b2b225158086d7f88",
    "__v": 0,
    "productsCount": 7,
    "removable": false,
    "main": false,
    "sequence": 0,
    "nestingLevel": 1,
    "editedBy": {
        "date": "2016-10-26T15:10:19.926Z",
        "user": null
    },
    "createdBy": {
        "date": "2016-10-26T15:10:19.926Z",
        "user": null
    },
    "users": [],
    "child": [],
    "parent": {
        "_id": "584e47953d2d06b40d2e9dc0",
        "name": "Liabilities"
    },
    "fullName": "Liabilities / Current Liabilities",
    "name": "Current Liabilities"
}, {
    "_id": "5810c75b2b225158086d7f8a",
    "__v": 0,
    "productsCount": 1,
    "removable": false,
    "main": false,
    "sequence": 0,
    "nestingLevel": 1,
    "editedBy": {
        "date": "2016-10-26T15:10:19.927Z",
        "user": null
    },
    "createdBy": {
        "date": "2016-10-26T15:10:19.927Z",
        "user": null
    },
    "users": [],
    "child": [],
    "parent": {
        "_id": "584e47953d2d06b40d2e9dc0",
        "name": "Liabilities"
    },
    "fullName": "Liabilities / Non-current Liabilities",
    "name": "Non-current Liabilities"
}, {
    "_id": "5810c75b2b225158086d7f80",
    "__v": 0,
    "productsCount": 3,
    "removable": false,
    "main": false,
    "sequence": 3,
    "nestingLevel": 2,
    "editedBy": {
        "date": "2016-10-26T15:10:19.915Z",
        "user": null
    },
    "createdBy": {
        "date": "2016-10-26T15:10:19.915Z",
        "user": null
    },
    "users": [],
    "child": ["5810c75b2b225158086d7f81", "5810c75b2b225158086d7f87"],
    "parent": {
        "_id": "584aa1e84881bdc437c60828",
        "name": "Assets"
    },
    "fullName": "Assets / Current Assets",
    "name": "Current Assets"
}, {
    "_id": "5810c75b2b225158086d7f81",
    "__v": 0,
    "productsCount": 13,
    "removable": false,
    "main": false,
    "sequence": 4,
    "nestingLevel": 3,
    "editedBy": {
        "date": "2016-10-26T15:10:19.916Z",
        "user": null
    },
    "createdBy": {
        "date": "2016-10-26T15:10:19.916Z",
        "user": null
    },
    "users": [],
    "child": [],
    "parent": {
        "_id": "5810c75b2b225158086d7f80",
        "name": "Current Assets"
    },
    "fullName": "Assets / Current Assets / Bank and Cash",
    "name": "Bank and Cash"
}, {
    "_id": "5810c75b2b225158086d7f87",
    "__v": 0,
    "productsCount": 3,
    "removable": false,
    "main": false,
    "sequence": 5,
    "nestingLevel": 3,
    "editedBy": {
        "date": "2016-10-26T15:10:19.924Z",
        "user": null
    },
    "createdBy": {
        "date": "2016-10-26T15:10:19.924Z",
        "user": null
    },
    "users": [],
    "child": [],
    "parent": {
        "_id": "5810c75b2b225158086d7f80",
        "name": "Current Assets"
    },
    "fullName": "Assets / Current Assets / Inventory",
    "name": "Inventory"
}]
//GET: expensesCategories/
[]
//GET taxSettings/
{
    "data": [{
        "_id": "589894b749cd23e02ca7c323",
        "isDefault": true,
        "country": "",
        "sequence": 0,
        "rate": 0.15,
        "code": "DT",
        "fullName": "DT Default Tax 15%",
        "name": "Default Tax"
    }]
}
//GET organizationSettings
{
    "data": {
        "_id": "57d669589a9879d511e83254",
        "name": "Sơn Cát Tường",
        "__v": 0,
        "startDate": "2019-01-24T00:00:00.000Z",
        "paymentTerms": null,
        "bankAccount": null,
        "workInProgress": null,
        "discount": {
            "_id": "565eb53a6aa50532e5df0b21",
            "code": 220002,
            "createdBy": {
                "date": "2019-01-28T01:51:37.340Z",
                "user": null
            },
            "editedBy": {
                "user": null
            },
            "payMethod": null,
            "budgeted": false,
            "category": "5810c75b2b225158086d7f89",
            "subAccount": null,
            "name": "220002 Sales Discount",
            "account": "Sales Discount"
        },
        "shipping": {
            "_id": "565eb53a6aa50532e5df0b20",
            "code": 220001,
            "createdBy": {
                "date": "2019-01-28T01:51:37.311Z",
                "user": null
            },
            "editedBy": {
                "user": null
            },
            "payMethod": null,
            "budgeted": false,
            "category": "5810c75b2b225158086d7f89",
            "subAccount": null,
            "name": "220001 Shipping Expenses",
            "account": "Shipping Expenses"
        },
        "carriedTax": {
            "_id": "565eb53a6aa50532e5df0b18",
            "code": 111202,
            "createdBy": {
                "date": "2019-01-28T01:51:37.328Z",
                "user": null
            },
            "editedBy": {
                "user": null
            },
            "payMethod": null,
            "budgeted": false,
            "category": "5810c75b2b225158086d7f88",
            "subAccount": null,
            "name": "111202 VAT Carried Forward",
            "account": "VAT Carried Forward"
        },
        "payableTax": {
            "_id": "565eb53a6aa50532e5df0b19",
            "code": 102002,
            "createdBy": {
                "date": "2019-01-28T01:51:37.372Z",
                "user": null
            },
            "editedBy": {
                "user": null
            },
            "payMethod": null,
            "budgeted": false,
            "category": "5810c75b2b225158086d7f84",
            "subAccount": null,
            "name": "102002 Taxes Payable",
            "account": "Taxes Payable"
        },
        "purchaseTax": {
            "_id": "565eb53a6aa50532e5df0b17",
            "code": 102001,
            "createdBy": {
                "date": "2019-01-28T01:51:37.372Z",
                "user": null
            },
            "editedBy": {
                "user": null
            },
            "payMethod": null,
            "budgeted": false,
            "category": "5810c75b2b225158086d7f84",
            "subAccount": null,
            "name": "102001 VAT Deductible (Purchase)",
            "account": "VAT Deductible (Purchase)"
        },
        "salesTax": {
            "_id": "565eb53a6aa50532e5df0b12",
            "code": 111201,
            "createdBy": {
                "date": "2019-01-28T01:51:37.349Z",
                "user": null
            },
            "editedBy": {
                "user": null
            },
            "payMethod": null,
            "budgeted": false,
            "category": "5810c75b2b225158086d7f88",
            "subAccount": null,
            "name": "111201 VAT Deductible (Sales)",
            "account": "VAT Payable (Sales)"
        },
        "contactName": "Nguyen Thanh Tung",
        "user": null,
        "language": null,
        "defaultEmail": true,
        "contact": {
            "_id": "52203e707d4dba8813000003",
            "__v": 0,
            "attachments": [],
            "lastAccess": "2019-01-28T01:50:21.707Z",
            "profile": 1387275598000,
            "imports": {
                "importedCount": 0,
                "conflictedItems": [],
                "skipped": [],
                "delimiter": ",",
                "comparingField": "",
                "type": "",
                "stage": 1,
                "filePath": "",
                "fileName": ""
            },
            "relatedEmployee": null,
            "favorite": {
                "dashboards": [],
                "reports": []
            },
            "savedFilters": [],
            "kanbanSettings": {
                "tasks": {
                    "foldWorkflows": ["528ce3caf3f67bc40b000013", "528ce3acf3f67bc40b000012", "528ce30cf3f67bc40b00000f", "528ce35af3f67bc40b000010"],
                    "countPerPage": 10
                },
                "applications": {
                    "foldWorkflows": ["Empty"],
                    "countPerPage": 10
                },
                "opportunities": {
                    "foldWorkflows": ["528cdef4f3f67bc40b00000a", "528cdf1cf3f67bc40b00000b"],
                    "countPerPage": 10
                }
            },
            "credentials": {
                "verify_token": "",
                "access_token": "",
                "refresh_token": ""
            },
            "linkedin": {
                "profileUrl": "",
                "country": "",
                "userId": ""
            },
            "google": {
                "userId": ""
            },
            "facebook": {
                "userId": ""
            },
            "contactName": {
                "last": "",
                "first": ""
            },
            "company": "EasyERP",
            "website": "easyerp.com",
            "mobilePhone": "+312456987545",
            "pass": "bcb15f821479b4d5772bd0ca866c00ad5f926e3580720659cc80d39c9d09802a",
            "email": "info@thinkmobiles.com",
            "login": "superAdmin",
            "imageSrc": "data:image/png;base64,"
        },
        "industry": {
            "_id": "574c54e22b7598157b94f14c",
            "name": "Information Technology/IT",
            "__v": 0
        },
        "currency": {
            "_id": "EUR",
            "active": true,
            "decPlace": 2,
            "symbol": "€",
            "name": "EUR"
        },
        "website": "soncattuong.com",
        "phone": "916678845",
        "imageSrc": "data:image/png;base64,=",
        "address": {
            "country": "Viet Nam",
            "fax": "916678845",
            "zip": "8400",
            "state": "Nam Dinh",
            "city": "Nam Dinh",
            "street": "No 35 Dien Hong street, Quang Trung Ward"
        }
    }
}
//GET chartOfAccount/getForDd
{
    "data": [{
        "_id": "565eb53a6aa50532e5df0bc8",
        "code": 100000,
        "type": "57da4d62713d3fe825f074b2",
        "parent": "5810c75b2b225158086d7f82",
        "createdBy": {
            "date": "2019-01-28T01:51:37.942Z",
            "user": null
        },
        "editedBy": {
            "date": "2015-12-02T14:19:59.504Z",
            "user": "52203e707d4dba8813000003"
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f82",
        "subAccount": null,
        "name": "100000 Fixed Asset Account",
        "account": "Fixed Asset Account"
    }, {
        "_id": "565eb53a6aa50532e5df0bc9",
        "code": 101200,
        "type": "57da4d62713d3fe825f074b6",
        "createdBy": {
            "date": "2019-01-28T01:51:37.944Z",
            "user": null
        },
        "editedBy": {
            "date": "2016-05-06T10:04:35.796Z",
            "user": "563f673270bbc2b740ce89ae"
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f80",
        "subAccount": null,
        "name": "101200 Account Receivable",
        "account": "Account Receivable"
    }, {
        "_id": "565eb53a6aa50532e5df0bd2",
        "code": 101500,
        "type": "57da4d62713d3fe825f074ae",
        "createdBy": {
            "date": "2019-01-28T01:51:37.944Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": "565c610f618d81c97e786eee",
        "budgeted": false,
        "category": "5810c75b2b225158086d7f81",
        "subAccount": null,
        "name": "101500 Cash USD",
        "account": "Cash USD"
    }, {
        "_id": "565eb53a6aa50532e5df0bd3",
        "code": 101501,
        "type": "57da4d62713d3fe825f074ae",
        "createdBy": {
            "date": "2019-01-28T01:51:37.945Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": "565c610f618d81c97e786eef",
        "budgeted": false,
        "category": "5810c75b2b225158086d7f81",
        "subAccount": null,
        "name": "101501 Cash UAH",
        "account": "Cash UAH"
    }, {
        "_id": "565eb53a6aa50532e5df0bd4",
        "code": 101700,
        "type": "57da4d62713d3fe825f074b6",
        "createdBy": {
            "date": "2019-01-28T01:51:37.945Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f80",
        "subAccount": null,
        "name": "101700 Liquidity Transfers",
        "account": "Liquidity Transfers"
    }, {
        "_id": "565eb53a6aa50532e5df0bd5",
        "code": 101600,
        "type": "57da4d62713d3fe825f074b3",
        "createdBy": {
            "date": "2019-01-28T01:51:37.948Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f85",
        "subAccount": null,
        "name": "101600 Opening Income Account",
        "account": "Opening Income Account"
    }, {
        "_id": "565eb53a6aa50532e5df0bd7",
        "code": 102000,
        "type": "57da4d62713d3fe825f074bc",
        "parent": "5810c75b2b225158086d7f84",
        "createdBy": {
            "date": "2019-01-28T01:51:37.949Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f84",
        "subAccount": null,
        "name": "102000 Non-current assets",
        "account": "Non-current assets"
    }, {
        "_id": "565eb53a6aa50532e5df0bd8",
        "code": 103000,
        "type": "57da4d62713d3fe825f074ba",
        "createdBy": {
            "date": "2019-01-28T01:51:37.949Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f86",
        "subAccount": null,
        "name": "103000 Prepayments",
        "account": "Prepayments"
    }, {
        "_id": "565eb53a6aa50532e5df0bd9",
        "code": 104000,
        "type": "57da4d62713d3fe825f074b7",
        "createdBy": {
            "date": "2019-01-28T01:51:37.950Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f87",
        "subAccount": null,
        "name": "104000 Finished Goods",
        "account": "Finished Goods"
    }, {
        "_id": "565eb53a6aa50532e5df0bda",
        "code": 104001,
        "type": "57da4d62713d3fe825f074b7",
        "createdBy": {
            "date": "2019-01-28T01:51:37.951Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f87",
        "subAccount": null,
        "name": "104001 Work In Process",
        "account": "Work In Process"
    }, {
        "_id": "565eb53a6aa50532e5df0bdb",
        "code": 111000,
        "type": "57da4d62713d3fe825f074bd",
        "createdBy": {
            "date": "2019-01-28T01:51:37.951Z",
            "user": null
        },
        "editedBy": {
            "date": "2016-05-06T12:33:40.687Z",
            "user": "563f673270bbc2b740ce89ae"
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f88",
        "subAccount": null,
        "name": "111000 Unearned  Service Revenue",
        "account": "Unearned  Service Revenue"
    }, {
        "_id": "565eb53a6aa50532e5df0bdc",
        "code": 111100,
        "type": "57da4d62713d3fe825f074bd",
        "createdBy": {
            "date": "2019-01-28T01:51:37.952Z",
            "user": null
        },
        "editedBy": {
            "date": "2016-05-06T12:33:40.686Z",
            "user": "563f673270bbc2b740ce89ae"
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f88",
        "subAccount": null,
        "name": "111100 Account Payable",
        "account": "Account Payable"
    }, {
        "_id": "565eb53a6aa50532e5df0bdd",
        "code": 111200,
        "type": "57da4d62713d3fe825f074bd",
        "createdBy": {
            "date": "2019-01-28T01:51:37.953Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f88",
        "subAccount": null,
        "name": "111200 Tax Received",
        "account": "Tax Received"
    }, {
        "_id": "565eb53a6aa50532e5df0bde",
        "code": 111300,
        "type": "57da4d62713d3fe825f074bd",
        "createdBy": {
            "date": "2019-01-28T01:51:37.953Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f88",
        "subAccount": null,
        "name": "111300 Reserve and Profit/Loss Account",
        "account": "Reserve and Profit/Loss Account"
    }, {
        "_id": "565eb53a6aa50532e5df0bdf",
        "code": 112000,
        "type": "57da4d62713d3fe825f074be",
        "createdBy": {
            "date": "2019-01-28T01:51:37.954Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f8a",
        "subAccount": null,
        "name": "112000 Non-current Liabilities",
        "account": "Non-current Liabilities"
    }, {
        "_id": "565eb53a6aa50532e5df0be0",
        "code": 200000,
        "type": "57da4d62713d3fe825f074bb",
        "createdBy": {
            "date": "2019-01-28T01:51:37.955Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f83",
        "subAccount": null,
        "name": "200000 Product Sales",
        "account": "Product Sales"
    }, {
        "_id": "565eb53a6aa50532e5df0be1",
        "code": 201000,
        "type": "57da4d62713d3fe825f074bb",
        "createdBy": {
            "date": "2019-01-28T01:51:37.956Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f83",
        "subAccount": null,
        "name": "201000 Foreign Exchange Gain",
        "account": "Foreign Exchange Gain"
    }, {
        "_id": "565eb53a6aa50532e5df0be2",
        "code": 210000,
        "type": "57da4d62713d3fe825f074b5",
        "createdBy": {
            "date": "2019-01-28T01:51:37.957Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "210000 Cost of Goods Sold",
        "account": "Cost of Goods Sold"
    }, {
        "_id": "565eb53a6aa50532e5df0be3",
        "code": 211000,
        "type": "57da4d62713d3fe825f074b5",
        "createdBy": {
            "date": "2019-01-28T01:51:37.957Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "211000 Foreign Exchange Loss",
        "account": "Foreign Exchange Loss"
    }, {
        "_id": "565eb53a6aa50532e5df0be4",
        "code": 212100,
        "type": "57da4d62713d3fe825f074b5",
        "createdBy": {
            "date": "2019-01-28T01:51:37.957Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "212100 Salary Expenses",
        "account": "Salary Expenses"
    }, {
        "_id": "565eb53a6aa50532e5df0be5",
        "code": 212200,
        "type": "57da4d62713d3fe825f074b5",
        "createdBy": {
            "date": "2019-01-28T01:51:37.958Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "212200 Purchase of Equipments",
        "account": "Purchase of Equipments"
    }, {
        "_id": "565eb53a6aa50532e5df0be6",
        "code": 212300,
        "type": "57da4d62713d3fe825f074b5",
        "createdBy": {
            "date": "2019-01-28T01:51:37.959Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "212300 Bank Fees",
        "account": "Bank Fees"
    }, {
        "_id": "565eb53a6aa50532e5df0be7",
        "code": 212400,
        "type": "57da4d62713d3fe825f074b5",
        "createdBy": {
            "date": "2019-01-28T01:51:37.959Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "212400 Selling And Marketing",
        "account": "Selling And Marketing"
    }, {
        "_id": "565eb53a6aa50532e5df0be8",
        "code": 212401,
        "type": "57da4d62713d3fe825f074b5",
        "createdBy": {
            "date": "2019-01-28T01:51:37.960Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "212401 Software&cloud",
        "account": "Software&cloud"
    }, {
        "_id": "565eb53a6aa50532e5df0be9",
        "code": 212500,
        "type": "57da4d62713d3fe825f074b5",
        "createdBy": {
            "date": "2019-01-28T01:51:37.960Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "212500 Office Supply",
        "account": "Office Supply"
    }, {
        "_id": "565eb53a6aa50532e5df0bea",
        "code": 212500,
        "type": "57da4d62713d3fe825f074b5",
        "createdBy": {
            "date": "2019-01-28T01:51:37.961Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "212500 Office Furniture",
        "account": "Office Furniture"
    }, {
        "_id": "565eb53a6aa50532e5df0beb",
        "code": 212600,
        "type": "57da4d62713d3fe825f074b5",
        "createdBy": {
            "date": "2019-01-28T01:51:37.962Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "212600 Rent&Utilities",
        "account": "Rent&Utilities"
    }, {
        "_id": "565eb53a6aa50532e5df0bec",
        "code": 212700,
        "type": "57da4d62713d3fe825f074b5",
        "createdBy": {
            "date": "2019-01-28T01:51:37.964Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "212700 Hardware",
        "account": "Hardware"
    }, {
        "_id": "565eb53a6aa50532e5df0bed",
        "code": 212800,
        "type": "57da4d62713d3fe825f074b5",
        "createdBy": {
            "date": "2019-01-28T01:51:37.964Z",
            "user": null
        },
        "editedBy": {
            "date": "2016-04-15T08:15:30.560Z",
            "user": "52203e707d4dba8813000003"
        },
        "payMethod": null,
        "budgeted": true,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "212800 Admin Salary Expenses",
        "account": "Admin Salary Expenses"
    }, {
        "_id": "565eb53a6aa50532e5df0bee",
        "code": 212801,
        "type": "57da4d62713d3fe825f074b5",
        "createdBy": {
            "date": "2019-01-28T01:51:37.966Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "212801 Outsource",
        "account": "Outsource"
    }, {
        "_id": "565eb53a6aa50532e5df0bef",
        "code": 212802,
        "type": "57da4d62713d3fe825f074b5",
        "createdBy": {
            "date": "2019-01-28T01:51:37.966Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "212802 Events/meetings",
        "account": "Events/meetings"
    }, {
        "_id": "565eb53a6aa50532e5df0bf0",
        "code": 212803,
        "type": "57da4d62713d3fe825f074b5",
        "createdBy": {
            "date": "2019-01-28T01:51:37.967Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "212803 Events/meetings",
        "account": "Events/meetings"
    }, {
        "_id": "565eb53a6aa50532e5df0bf1",
        "code": 220000,
        "type": "57da4d62713d3fe825f074b5",
        "createdBy": {
            "date": "2019-01-28T01:51:37.967Z",
            "user": null
        },
        "editedBy": {
            "date": "2016-04-15T08:16:13.478Z",
            "user": "52203e707d4dba8813000003"
        },
        "payMethod": null,
        "budgeted": true,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "220000 Admin Expenses",
        "account": "Admin Expenses"
    }, {
        "_id": "565eb53a6aa50532e5df0bf2",
        "code": 300100,
        "type": "57da4d62713d3fe825f074b9",
        "createdBy": {
            "date": "2019-01-28T01:51:37.968Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f7f",
        "subAccount": null,
        "name": "300100 Capital",
        "account": "Capital"
    }, {
        "_id": "565eb53a6aa50532e5df0bf3",
        "code": 300200,
        "type": "57da4d62713d3fe825f074b9",
        "createdBy": {
            "date": "2019-01-28T01:51:37.969Z",
            "user": null
        },
        "editedBy": {
            "date": "2016-04-15T08:15:56.524Z",
            "user": "52203e707d4dba8813000003"
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f7f",
        "subAccount": null,
        "name": "300200 Retained Earnings",
        "account": "Retained Earnings"
    }, {
        "_id": "56c4444eb81fd51e19207f3e",
        "type": "57da4d62713d3fe825f074bd",
        "__v": 0,
        "code": 111101,
        "accountType": "Credit",
        "createdBy": {
            "date": "2016-02-17T09:58:38.810Z",
            "user": null
        },
        "editedBy": {
            "date": "2016-05-06T10:04:35.796Z",
            "user": "563f673270bbc2b740ce89ae"
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f88",
        "subAccount": null,
        "name": "111101 Salary Payable",
        "account": "Salary Payable"
    }, {
        "_id": "56c9d4c7c3b88f6d64490fb4",
        "code": 212102,
        "type": "57da4d62713d3fe825f074b5",
        "__v": 0,
        "accountType": "Credit",
        "createdBy": {
            "date": "2016-02-21T15:16:23.022Z",
            "user": null
        },
        "editedBy": {
            "date": "2016-02-23T14:50:12.960Z",
            "user": "52203e707d4dba8813000003"
        },
        "payMethod": null,
        "budgeted": true,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "212102 Vacation & Holiday Expense",
        "account": "Vacation & Holiday Expense"
    }, {
        "_id": "56c9d555c3b88f6d64490fb5",
        "code": 212103,
        "type": "57da4d62713d3fe825f074bd",
        "__v": 0,
        "accountType": "Credit",
        "createdBy": {
            "date": "2016-02-21T15:18:45.244Z",
            "user": null
        },
        "editedBy": {
            "date": "2016-05-06T10:04:35.795Z",
            "user": "563f673270bbc2b740ce89ae"
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f88",
        "subAccount": null,
        "name": "212103 Salary Overtime Paybale",
        "account": "Salary Overtime Paybale"
    }, {
        "_id": "56cc6b62541812c071973569",
        "code": 212104,
        "accountType": "Credit",
        "type": "57da4d62713d3fe825f074b5",
        "__v": 0,
        "createdBy": {
            "date": "2016-02-23T14:23:30.848Z",
            "user": null
        },
        "editedBy": {
            "date": "2016-07-01T14:10:54.472Z",
            "user": null
        },
        "payMethod": null,
        "budgeted": true,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "212104 Idle Time Expenses",
        "account": "Idle Time Expenses"
    }, {
        "_id": "56cc6bf2541812c07197356a",
        "code": 212110,
        "accountType": "Credit",
        "type": "57da4d62713d3fe825f074b5",
        "__v": 0,
        "createdBy": {
            "date": "2016-02-23T14:25:54.728Z",
            "user": null
        },
        "editedBy": {
            "date": "2016-07-01T14:18:01.361Z",
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "212110 Total  Expenses",
        "account": "Total  Expenses"
    }, {
        "_id": "56f538149c85020807b4001f",
        "code": 400000,
        "type": "57da4d62713d3fe825f074b0",
        "__v": 0,
        "createdBy": {
            "date": "2016-03-25T13:07:32.320Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f7e",
        "subAccount": null,
        "name": "400000 Income Summary",
        "account": "Income Summary"
    }, {
        "_id": "572346da8ba4fd1330062723",
        "code": 700300,
        "type": "57da4d62713d3fe825f074bd",
        "__v": 0,
        "createdBy": {
            "date": "2016-05-06T06:01:49.000Z",
            "user": null
        },
        "editedBy": {
            "date": "2016-05-06T12:41:41.127Z",
            "user": "563f673270bbc2b740ce89ae"
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f88",
        "subAccount": null,
        "name": "700300 Dividends Payable",
        "account": "Dividends Payable"
    }, {
        "_id": "577679ee832a51132161e03a",
        "code": 212105,
        "type": "57da4d62713d3fe825f074b5",
        "__v": 0,
        "createdBy": {
            "date": "2016-07-01T14:10:54.336Z",
            "user": null
        },
        "editedBy": {
            "date": "2016-07-01T14:12:35.703Z",
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "212105    Marketing Expenses",
        "account": "   Marketing Expenses"
    }, {
        "_id": "57767b99ca7bd4d021041d32",
        "code": 212111,
        "type": "57da4d62713d3fe825f074b5",
        "__v": 0,
        "createdBy": {
            "date": "2016-07-01T14:18:01.040Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "212111  R&D Expenses",
        "account": " R&D Expenses"
    }, {
        "_id": "5788b4be52adaf4c49e4b51c",
        "code": 104002,
        "type": "57da4d62713d3fe825f074b7",
        "__v": 0,
        "createdBy": {
            "date": "2016-07-15T10:02:38.331Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f87",
        "subAccount": null,
        "name": "104002 Inventory",
        "account": "Inventory"
    }, {
        "_id": "58073e4e49519eac0c535a08",
        "code": 111400,
        "__v": 0,
        "createdBy": {
            "date": "2016-10-27T08:33:20.832Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f88",
        "subAccount": null,
        "name": "111400 Stock received not Invoiced",
        "account": "Stock received not Invoiced"
    }, {
        "_id": "565eb53a6aa50532e5df0b15",
        "code": 201001,
        "type": "57da4d62713d3fe825f074bb",
        "createdBy": {
            "date": "2019-01-28T01:51:37.977Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f83",
        "subAccount": null,
        "name": "201001 Unrealized Exchange Gain",
        "account": "Unrealized Exchange Gain"
    }, {
        "_id": "565eb53a6aa50532e5df0b16",
        "code": 211001,
        "type": "57da4d62713d3fe825f074b5",
        "createdBy": {
            "date": "2019-01-28T01:51:37.978Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "211001 Unrealized Exchange Loss",
        "account": "Unrealized Exchange Loss"
    }, {
        "_id": "5853a166cd4751bc2b831b0f",
        "code": 101300,
        "__v": 0,
        "createdBy": {
            "date": "2016-12-16T08:10:14.180Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f80",
        "subAccount": null,
        "name": "101300 Tax Paid",
        "account": "Tax Paid"
    }, {
        "_id": "565eb53a6aa50532e5df0b12",
        "code": 111201,
        "createdBy": {
            "date": "2019-01-28T01:51:37.979Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f88",
        "subAccount": null,
        "name": "111201 VAT Deductible (Sales)",
        "account": "VAT Payable (Sales)"
    }, {
        "_id": "565eb53a6aa50532e5df0b17",
        "code": 102001,
        "createdBy": {
            "date": "2019-01-28T01:51:37.979Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f84",
        "subAccount": null,
        "name": "102001 VAT Deductible (Purchase)",
        "account": "VAT Deductible (Purchase)"
    }, {
        "_id": "565eb53a6aa50532e5df0b18",
        "code": 111202,
        "createdBy": {
            "date": "2019-01-28T01:51:37.979Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f88",
        "subAccount": null,
        "name": "111202 VAT Carried Forward",
        "account": "VAT Carried Forward"
    }, {
        "_id": "565eb53a6aa50532e5df0b19",
        "code": 102002,
        "createdBy": {
            "date": "2019-01-28T01:51:37.980Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f84",
        "subAccount": null,
        "name": "102002 Taxes Payable",
        "account": "Taxes Payable"
    }, {
        "_id": "565eb53a6aa50532e5df0b20",
        "code": 220001,
        "createdBy": {
            "date": "2019-01-28T01:51:37.981Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "220001 Shipping Expenses",
        "account": "Shipping Expenses"
    }, {
        "_id": "565eb53a6aa50532e5df0b21",
        "code": 220002,
        "createdBy": {
            "date": "2019-01-28T01:51:37.981Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "220002 Sales Discount",
        "account": "Sales Discount"
    }, {
        "_id": "589c92ec8703b8ba7cf43a23",
        "code": 101502,
        "__v": 0,
        "createdBy": {
            "date": "2017-02-09T16:03:56.950Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f81",
        "subAccount": null,
        "name": "101502 Cash EUR",
        "account": "Cash EUR"
    }, {
        "_id": "589c9cdde660d67d0f216ef4",
        "code": 111004,
        "createdBy": {
            "date": "2019-01-28T01:51:37.982Z",
            "user": null
        },
        "editedBy": {
            "user": null
        },
        "payMethod": null,
        "budgeted": false,
        "category": "5810c75b2b225158086d7f89",
        "subAccount": null,
        "name": "111004v Sales Returns",
        "account": "Sales Returns"
    }]
}
//GET paymentMethod
{
    "data": [{
        "_id": "565f2e05ab70d49024242e10",
        "name": "CASH EUR",
        "account": "CASH EUR",
        "currency": "EUR",
        "bank": "",
        "owner": "CASH EUR",
        "chartAccount": {
            "_id": "589c92ec8703b8ba7cf43a23",
            "code": 101502,
            "createdBy": {
                "date": "2017-02-09T16:03:56.950Z",
                "user": null
            },
            "editedBy": {
                "user": null
            },
            "payMethod": null,
            "budgeted": false,
            "category": "5810c75b2b225158086d7f81",
            "subAccount": null,
            "name": "101502 Cash EUR",
            "account": "Cash EUR",
            "__v": 0
        },
        "fullName": "",
        "address": "",
        "swiftCode": "",
        "defaultPaymentMethod": 0
    }, {
        "_id": "565f2e05ab70d49024242e0f",
        "name": "CASH USD",
        "account": "CASH USD",
        "currency": "USD",
        "bank": "",
        "owner": "CASH USD",
        "chartAccount": {
            "_id": "565eb53a6aa50532e5df0bd2",
            "code": 101500,
            "account": "Cash USD",
            "type": "57da4d62713d3fe825f074ae",
            "name": "101500 Cash USD",
            "payMethod": "565c610f618d81c97e786eee",
            "category": "5810c75b2b225158086d7f81"
        },
        "fullName": "",
        "address": "",
        "swiftCode": "",
        "defaultPaymentMethod": 0
    }]
}
//GET paymentTerm
{
    "data": [{
        "_id": "55536e52475b7be475f335fa",
        "name": "Custom",
        "defaultPaymentTerm": 0
    }, {
        "_id": "55536e52475b7be475f335fb",
        "name": "Due on Receipt",
        "defaultPaymentTerm": 0
    }, {
        "_id": "55536e52475b7be475f335f6",
        "name": "Net 15",
        "count": "15",
        "defaultPaymentTerm": 0
    }, {
        "_id": "55536e52475b7be475f335f7",
        "name": "Net 30",
        "count": "30",
        "defaultPaymentTerm": 0
    }, {
        "_id": "55536e52475b7be475f335f8",
        "name": "Net 45",
        "count": "45",
        "defaultPaymentTerm": 0
    }, {
        "_id": "55536e52475b7be475f335f9",
        "name": "Net 60",
        "count": "60",
        "defaultPaymentTerm": 0
    }]
}
//Querry
//GET /rates/?filter=
//filter[date][value][0]: Tue Jan 01 2019 08:51:37 GMT+0700 (Giờ Đông Dương)
//filter[date][value][1]: Mon Jan 28 2019 08: 51: 37 GMT + 0700(Giờ Đông Dương)
//page: 1
//count: 50
[]