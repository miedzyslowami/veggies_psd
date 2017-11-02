import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header.jsx';
import Contact from './components/Contact/Contact.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import MenuCart from './components/MenuCart/MenuCart.jsx';
import Specials from './components/Specials/Specials.jsx';
import WeirdSection from './components/WeirdSection/WeirdSection.jsx';
import scss from '../index.scss';
class App extends React.Component {
    render() {
        return (
            <div id={scss.app}>
            <Header/>
            <WeirdSection/>
            <AboutUs/>
            <Specials/>
            <MenuCart/>
            <Contact/>
          </div>
        )
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
