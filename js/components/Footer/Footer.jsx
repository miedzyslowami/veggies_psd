import React from 'react';
import ReactDOM from 'react-dom';

import scss from './Footer.scss';

export class Footer extends React.Component {
    render() {
        return (
          <div className={scss.footer}>
             <div>Copyright 2017 © by Małgorzata Grajewska</div>
             <div>Design by Anna Dadej</div>
          </div>
        )
    }
}

export default Footer;
