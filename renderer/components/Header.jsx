import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node.isRequired,
};

export const HEADER_HEIGHT_PX = 60;

export default function Header({ children }) {
  return (
    <div className="header">
      <div className="content">
        <div className="content-inner">
          {children}
        </div>
      </div>
      <div className="arrow" />
      <div className="arrow shadow" />
    </div>
  );
}

Header.propTypes = propTypes;
