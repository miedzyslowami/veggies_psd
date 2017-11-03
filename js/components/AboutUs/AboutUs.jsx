import React from 'react';
import ReactDOM from 'react-dom';
import scss from './AboutUs.scss';
import Divider from '../Divider/Divider.jsx';

class AboutUs extends React.Component {
    render() {
        return (<section id={scss.about__us}>
                        <div className={scss.about__us__box}>
                        <h2>About us</h2>
                        <Divider/>
                        <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                        </p>
                        <img src='assets/signature.png'/>
                        </div>
            </section>)
            }
}
export default AboutUs;
