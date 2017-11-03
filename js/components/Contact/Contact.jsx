import React from 'react';
import ReactDOM from 'react-dom';
import scss from './Contact.scss';
import Divider from '../Divider/Divider.jsx';

class Contact extends React.Component {
    render() {
        return (
              <section id={scss.contact}>
                  <div className={scss.contact__box}>
                  <h2>Contact</h2>
                  <Divider/>
                  <div className={scss.contact__midsection}>
                      <div>
                          <h4>Veggie</h4>
                          <p>3428 Magnolia Avenue Hackettstown, NJ 07840</p>
                      </div>
                          <div><h4>Reservations</h4>
                          <p>reservations@vegggie.com +48 202-555-0114</p>
                      </div>
                  </div>
                  <form className={scss.contact__form}>
                        <h3>Contact us</h3>
                      <input type="text" placeholder='Name' required/>
                      <input type="email" placeholder='Email' required/>
                      <textarea placeholder='Message'></textarea>
                      <input type="submit" value="Send"/>
                  </form>

                  <div className={scss.social__icons}>
                  <img/><img/>
                  </div>
                   </div>
                 
              </section>
        )
    }
}
export default Contact;
