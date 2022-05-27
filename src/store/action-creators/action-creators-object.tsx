import * as filterActionCreators from './filterActions';
import * as productInfoActionCreators from './productInfoAction';
import * as sortActionCreators from './sortActions';
import * as catalogActionCreators from './catalogActions';


export default {
    ...filterActionCreators,
    ...productInfoActionCreators,
    ...sortActionCreators,
    ...catalogActionCreators
}