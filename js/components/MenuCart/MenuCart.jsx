import React from 'react';
import ReactDOM from 'react-dom';
import scss from './MenuCart.scss';
import Divider from '../Divider/Divider.jsx';
import Starters from '../Starters/Starters.jsx';
import Desserts from '../Desserts/Desserts.jsx';
import Drinks from '../Drinks/Drinks.jsx';
import MainDishes from '../MainDishes/MainDishes.jsx';

class MenuCart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage:3,
            cartPage:[
                {name:'Starters',
                component: <Starters/>},
                {name:'Main Dishes',
                component: <MainDishes/>},
                {name:'Desserts',
                component: <Desserts/>},
                {name:'Drinks',
                component: <Drinks/>}],
            }
    }

    goToPAge = (e) =>{
        this.setState({currentPage:parseInt(e.target.dataset.id)})
    }
    render() {

        let menuNavigation = this.state.cartPage.map((page,i)=>{
            return <li data-id={i} key={i} onClick={this.goToPAge}>{page.name}</li>
        })
        return (<section className={scss.menu__cart}>
                <h2>Menu cart</h2>
                <Divider/>
                <ul className={scss.menu__cart__navigation}>
                {menuNavigation}
                </ul>

                {this.state.cartPage[this.state.currentPage].component}

              </section>
        )
    }
}
export default MenuCart;
