import React, { PropTypes } from 'react';
import '../../styles/screen.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * A basic component to be used on other Screens in the app.
 *
 * Should have a Header component followed by a ScreenContents component.
 */
export default function Screen({ children }) {
  return (
    <div className="screen">
      {children}
    </div>
  );
}

Screen.propTypes = propTypes;
