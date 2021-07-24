import { Component } from 'react';
import './style.css';
import {postitsImg} from '../../services/imgService';

class Content extends Component{ 

    render(){
        return(
            <main className="content">
                <nav className="content__nav">
                    <ul className="postIts">
                        {postitsImg.map(v => 
                            <li className="postIt"><h2 className="postIt__title">{v.title}</h2><img className="postIt__img" src={v.img} alt="" /><button className="content__button">Buy</button></li>
                        )}
                    </ul>
                </nav>
            </main>          
        )
    }
}

export default Content;