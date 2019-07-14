import { DirWatcher }  from './models';
import { Importer } from './models/Importer';

const dirWatchhObj = new DirWatcher();
const importerObj = new Importer();

setInterval(() => {
    dirWatchhObj.dirWatcher('./data/');
}, 10000);