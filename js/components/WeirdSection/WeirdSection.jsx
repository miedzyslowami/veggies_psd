import React from 'react';
import ReactDOM from 'react-dom';
import scss from './WeirdSection.scss';
import SVGCoffee from '../SVGCoffee/SVGCoffee.jsx';
import SVGVege from '../SVGVege/SVGVege.jsx';
import SVGSweet from '../SVGSweet/SVGSweet.jsx';

class WeirdSection extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      weirdItems:[{title:'turnip greens',description:'Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage.'},
                    {title:'beetroot water',description:'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek.'},
                    {title:'get social' ,description:'Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama.'}]
    }
  }
    render() {
      let weirdItems = this.state.weirdItems.map((item,i)=>{
        return (<div className={scss.weird__box} key={i}>
                  {i == 0 ? <SVGVege/> : (i == 1 ? <SVGSweet/> : <SVGCoffee/>)}
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>)
      })
        return (
            <section id={scss.weird__section}>
            {weirdItems}
            </section>
        )
    }
}
export default WeirdSection;
