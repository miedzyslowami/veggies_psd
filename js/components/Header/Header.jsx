import React from 'react';
import ReactDOM from 'react-dom';
import scss from './Header.scss';
import Divider from '../Divider/Divider.jsx';

class Header extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            menuItems:['Contact','Menu Cart','About','Special','Home'],
            sliderText:['Veggie gram fava bean leek dandelion silver beet eggplant bush tomato','Dandelion cucumber earthnut pea peanut soko zucchini']
        }
    }

    componentDidMount(){

    }
    componentWillUnmount(){

    }
    slider = () =>{

    }
    render() {
        let menuItems = this.state.menuItems.map((item,i)=>{
            return <li className={scss.menu__item} key={i}>{item}</li>
        })
        return (<header id={scss.header} className={scss.slider__1}>
                    <h1>Veggies</h1>
                    <nav>
                    <ul>
                    {menuItems}
                    </ul>
                    </nav>
                    <div className={scss.slider__text}><p >{this.state.sliderText[0]}</p><Divider/></div>
                    </header>)
    }
}
export default Header;
