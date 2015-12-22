import React from 'react';

import settings from '../settings.json';
import { PxPopover } from '../components/index';
import { Button } from 'react-bootstrap';

import style from './Home.css';

export default class Home extends React.Component {
  render() {
    return (
      <section className={style.section}>
        <span>Home Page - {settings.app_title}</span>
        <p></p>

        <PxPopover>
          <div data-trigger>
            <Button>Show Popover</Button>
          </div>
          <div data-content>
            My Form (ESC to close)<p></p>
            <input type="text"/><p></p>
            <Button bsStyle="primary" data-dismiss>Dismiss</Button>
          </div>
        </PxPopover>
      </section>
    );
  }
}
