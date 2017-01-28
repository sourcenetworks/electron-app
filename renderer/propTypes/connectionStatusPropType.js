import { PropTypes } from 'react';
import { values } from 'lodash';
import * as allConnectionStatuses from '../constants/connectionStatus';

export default PropTypes.oneOf(values(allConnectionStatuses));
