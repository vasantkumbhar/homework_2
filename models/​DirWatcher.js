var common = require('./common');
var commonEmitter = common.commonEmitter;
const fs = require('fs');

class DirWatcher{
    constructor() {
        this.numberOfFiles = 0;
        this.fileList = [];
        fs.readdirSync('./data/').forEach(file => {
            this.numberOfFiles++;
            this.fileList.push(file);
        });

        console.log('​DirWatcher class');
    }

    dirWatcher(path){
        this.currentNumberOfFiles = 0;
        this.currentFileList = [];
        this.dirDiff = [];
        fs.readdirSync(path).forEach(file => {
            this.currentNumberOfFiles++;
            this.currentFileList.push(file);
            console.log(file);
        });
        if(this.numberOfFiles !== this.currentNumberOfFiles){
            if(this.currentNumberOfFiles > this.numberOfFiles){
                this.dirDiff = this.currentFileList.filter(x=> !this.fileList.includes(x));
                commonEmitter.emit('changeInDirectory', this.dirDiff, path);
            }
            else{
                console.log('File has been deleted.');
            }
            this.numberOfFiles = this.currentNumberOfFiles;
            this.fileList = this.currentFileList;
            
        }
    }
    
}

exports.DirWatcher = DirWatcher;