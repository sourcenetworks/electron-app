import React from 'react';
import { remote } from 'electron';
import gearImagePath from '../../static/img/gear.png';

const onClick = function popupSettingsMenu() {
  const menu = remote.Menu.buildFromTemplate([
    {
      role: 'preferences',
      label: 'Preferences',
    },
    {
      role: 'help',
      label: 'Help Center',
      click() {
        // @TODO: We need a help center page for our app. It should be whiteliste by our routers!
        remote.shell.openExternal('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      },
    },
    {
      type: 'separator',
    },
    {
      role: 'quit',
      label: 'Quit Source',
    },
  ]);
  menu.popup(remote.getCurrentWindow(), 300, 65);
};

export default function HeaderGearButton() {
  return (
    <button className="gear-button btn-reset" onClick={onClick}>
      <img alt="Gear icon for settings button" src={gearImagePath} />
    </button>
  );
}
