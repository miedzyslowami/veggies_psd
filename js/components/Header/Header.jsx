import React from 'react';
import scss from './Header.scss';
import Divider from '../Divider/Divider.jsx';

class Header extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            menuItems:['Contact','Menu Cart','About','Special','Home'],
            sliderText:'Veggie gram fava bean leek dandelion silver beet eggplant bush tomato',
            currentSlider:scss.slider__1,
            menuClass:''
        }
    }
    componentWillMount(){
        this.setState({currentSliderText:this.state.sliderText[0]})
    }
    componentDidMount(){
        let timer = setInterval(this.slider,3500);
    }
    componentWillUnmount(){
        clearInterval(timer);
    }
    slider = () =>{
        this.state.currentSlider === scss.slider__1 ? this.setState({currentSlider:scss.slider__2}) : this.setState({currentSlider:scss.slider__1})
    }
    showMenu =() =>{
        this.state.menuClass == '' ? this.setState({menuClass:scss.menu__item__displayed}) : this.setState({menuClass:''})
    }
    render() {
        let menuItems = this.state.menuItems.map((item,i)=>{
            return <li className={scss.menu__item + ' ' + this.state.menuClass} key={i}>{item}</li>
        })
        return (<header id={scss.header} className={this.state.currentSlider}>
                    <h1>Veggies</h1>
                    <nav className={scss.classic__menu}>
                    <div className={scss.hamburger} onClick={this.showMenu}>Menu</div>
                    <ul>
                    {menuItems}
                    </ul>
                    </nav>
                    <div className={scss.slider__text}><p>{this.state.sliderText}</p>
                    <div className={scss.divider__wrap}>
                    <Divider />
                    </div>
                    </div>
                    </header>)
    }
}
export default Header;
