import React from 'react';
import ReactDOM from 'react-dom';
import Divider from '../Divider/Divider.jsx';
import scss from './Specials.scss';

class Specials extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            specials:[
                {title:'Greens fava',
                text:'Nori grape silver beet broccoli kombu beet greens fava',
                price:'19$'
                },
                {title:'Celery quand',
                text:'Celery quandong swiss chard chicory earthnut pea',
                price:'18$'
                },
                {title:'Pea horser',
                text:'Kohlrabi radish okra azuki bean corn fava bean mustard',
                price:'7$'
                },
                {title:'Soko radicchio',
                text:'Dandelion zucchini burdock yarrow chickpea dandelion',
                price:'25$'
                },
                {title:'Tigernut',
                text:'Grape silver beet watercress potato tigernut',
                price:'14$'
                },
                {title:'Yarrow sweet',
                text:'Gumbo kakadu plum komatsuna black-eyed pea green',
                price:'8$'
                }
            ],
        }
    }
    render() {
        let specials = this.state.specials.map((special,i) => {
            return (<div className={scss.special} key={i}>
                    <img src={'assets/special-'+ (i + 1) +'.png'} alt={special.title} aria-hidden/>
                    <div>
                    <h4>{special.title}</h4>
                    <hr/>
                    <p>{special.text}</p>
                    <div>{special.price}</div>
                    </div>
                    </div>)
        });
        return (<section id={scss.specials}>
            <h2>This month specials</h2>
            <div className={scss.divider__wrap}>
            <Divider />
            </div>
            <div className={scss.specials}>
            {specials}
            </div>
            </section>)
    }
}
export default Specials;
