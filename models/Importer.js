const csvtojson=require("csvtojson");
var common = require('./common');
var commonEmitter = common.commonEmitter;

class Importer {
 
    constructor() {
        console.log('Importer Module');
        commonEmitter.on('changeInDirectory', (data, path)=>{
            console.log('directory diff in importer module: ', data, path);
            this.url = path + data[0];
            console.log('this.url: ', this.url);
            csvtojson()
            .fromFile(this.url)
            .then((jsonObj)=>{
                console.log(jsonObj);
            })
            .error(()=>{
                console.log('File has been deleted.');
            })
            
        })
    }
}

exports.Importer = Importer;
