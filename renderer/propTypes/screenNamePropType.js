import { PropTypes } from 'react';
import { values } from 'lodash';
import * as allScreenNames from '../constants/screenNames';

export default PropTypes.oneOf(values(allScreenNames));
