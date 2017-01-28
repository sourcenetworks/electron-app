import React, { PropTypes } from 'react';
import gearImagePath from '../../static/img/gear.png';

const propTypes = {
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick() {},
};

export default function HeaderGearButton({ onClick }) {
  return (
    <button className="gear-button btn-reset" onClick={onClick}>
      <img alt="Gear icon for settings button" src={gearImagePath} />
    </button>
  );
}

HeaderGearButton.propTypes = propTypes;
HeaderGearButton.defaultProps = defaultProps;
