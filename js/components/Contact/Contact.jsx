import React from 'react';
import ReactDOM from 'react-dom';
import scss from './Contact.scss';
import Divider from '../Divider/Divider.jsx';

class Contact extends React.Component {
    render() {
        return (
              <section id={scss.contact} className={scss.contact}>
                  <h2>Contact</h2>
                  <div className={scss.divider__wrap}>
                      <Divider/>
                  </div>
                  <div className={scss.contact__box}>
                  <div className={scss.contact__midsection}>
                      <div>
                          <h4>Veggie</h4>
                          <p className={scss.contact__address}>3428 Magnolia Avenue Hackettstown, NJ 07840</p>
                      </div>
                          <div><h4>Reservations</h4>
                          <a className={scss.contact__details} href="mailto:reservations@vegggie.com">reservations@vegggie.com</a><a className={scss.contact__details} href="tel:+482025550114">tel: +48 202-555-0114</a>
                      </div>
                  </div>
                  <form className={scss.contact__form}>
                        <h3>Contact us</h3>
                      <input className={scss.form__name} type="text" placeholder='Name' aria-label='name' required/>
                      <input className={scss.form__email} type="email" placeholder='Email' aria-label='e-mail'required/>
                      <textarea className={scss.write__message}placeholder='Message' aria-label='message'></textarea>
                      <button className={scss.btn__submit} type="submit" value="Send">Send</button>
                  </form>
                   </div>

              </section>
        )
    }
}
export default Contact;
