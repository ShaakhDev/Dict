import ProdConfig from './config.prod';
import DevConfig from './config.dev';

const Config = __DEV__ ? DevConfig : ProdConfig;

export default Config;
