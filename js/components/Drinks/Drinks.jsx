import React from 'react';
import ReactDOM from 'react-dom';
import scss from './Drinks.scss';
import MenuCartPosition from '../MenuCartPosition/MenuCartPosition.jsx';
class Drinks extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            drinks:[{title:'Tytuł drinka',price:'12$',ingridients:'ingridients'},
            {title:'Tytuł drinka',price:'12$',ingridients:'ingridients'},
            {title:'Tytuł drinka',price:'12$',ingridients:'ingridients'},
            {title:'Tytuł drinka',price:'12$',ingridients:'ingridients'},
            {title:'Tytuł drinka',price:'12$',ingridients:'ingridients'},
            {title:'Tytuł drinka',price:'12$',ingridients:'ingridients'},
        ]
        }
    }
    render() {
        let drinks = this.state.drinks.map((drink,i)=>{
            return <MenuCartPosition key={i} position={drink}/>
        })
        return (
              <ul className={scss.cart__menu__wrapper}>
              {drinks}
              </ul>
        )
    }
}
export default Drinks;
