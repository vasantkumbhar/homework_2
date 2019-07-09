const csvtojsonV1=require("csvtojson/v1");
var EventEmitter = require('events'); 

class Importer extends EventEmitter {
    
    constructor() {
        super();
        console.log('Importer Module');
    }
}

exports.Importer = Importer;
