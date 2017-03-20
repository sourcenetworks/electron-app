import React from 'react';
import Header from './Header';
import HeaderGearButton from './HeaderGearButton';

export default function SimpleHeader() {
  return (
    <Header>
      <div className="header-text-simple">
        <p>Source</p>
      </div>
      <div className="align-right">
        <HeaderGearButton />
      </div>
    </Header>
  );
}
