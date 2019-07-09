var watch = require('node-watch');
var EventEmitter = require('events'); 

class DirWatcher extends EventEmitter {
    
    constructor() {
        super();
        console.log('​DirWatcher class');
    }

    watcherFunc(path, delay){
        watch(path, { recursive: true }, function(event, filename) {
            console.log('event is: ' + event);
            if (filename) {
                console.log('filename provided: ' + filename);
                this.emit('changed');
            } else {
                console.log('filename not provided');
            }
        });
    }
}

exports.DirWatcher = DirWatcher;