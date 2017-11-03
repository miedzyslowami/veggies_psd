import React from 'react';
import ReactDOM from 'react-dom';
import scss from './MenuCart.scss';
import Divider from '../Divider/Divider.jsx';
import MenuCartPosition from '../MenuCartPosition/MenuCartPosition.jsx';
import menuPositions from '../../data/data.js';

class MenuCart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage:'starters',
            cartPage:[
                {name:'Starters',
                type: 'starters'},
                {name:'Main Dishes',
                type: 'mainDishes'},
                {name:'Desserts',
                type: 'desserts'},
                {name:'Drinks',
                type: 'drinks'}],
                positions: Object.values(menuPositions)
            }
    }

    goToPage = (e) =>{
        this.setState({currentPage:e.target.dataset.type});
    }
    render() {
        let menuNavigation = this.state.cartPage.map((page,i)=>{
            return <li data-type={page.type} key={i} onClick={this.goToPage}>{page.name}</li>
        })
        let menuPositions = this.state.positions.map((position,i)=>{
            if(position.type == this.state.currentPage){
                return <MenuCartPosition key={i} position={position}/>
            }
        })
        return (<section className={scss.menu__cart}>
                <h2>Menu cart</h2>
                <Divider/>
                <ul className={scss.menu__cart__navigation}>
                {menuNavigation}
                </ul>
                <ul className={scss.menu__page__wrapper}>
                {menuPositions}
                </ul>

              </section>
        )
    }
}
export default MenuCart;
