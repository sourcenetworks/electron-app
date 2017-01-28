import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ScreenContent({ children }) {
  return (
    <div className="screen-content">
      {children}
    </div>
  );
}

ScreenContent.propTypes = propTypes;
