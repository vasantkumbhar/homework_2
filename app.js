// import config from './config/config';
import { DirWatcher }  from './models';
import { Importer } from './models/Importer';

const watchObj = new DirWatcher();
watchObj.watcherFunc('./data/product.csv');

const transformData = () =>     console.log('transformData function called');

const importerObj = new Importer();
watchObj.on('changed', transformData);