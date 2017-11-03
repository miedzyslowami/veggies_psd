import React from 'react';
import ReactDOM from 'react-dom';
import scss from './MenuCartPosition.scss';

class MenuCartPosition extends React.Component {
    constructor(props){
        super(props)

    }
    render() {
        return (
              <li className={scss.menu__cart__position}>
                <div className={scss.menu__cart__position__line}>
                    <div className={scss.menu__cart__position__title}>
                    {this.props.position.title}
                    </div>
                    <div className={scss.dots}>..........</div>
                    <div>{this.props.position.price}
                    </div>
                </div>
                <div>{this.props.position.ingridients}</div>
              </li>
        )
    }
}
export default MenuCartPosition;
