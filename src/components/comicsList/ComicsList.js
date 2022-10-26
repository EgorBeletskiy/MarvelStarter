import './comicsList.scss';
import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';
import { useState } from 'react';

const ComicsList = () => {
    const [items] = useState([
        {
            title: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB',
            price: '9.99$'
        },
        {
            title: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB',
            price: '9.99$'
        },
        {
            title: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB',
            price: '9.99$'
        },
        {
            title: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB',
            price: '9.99$'
        }
    ])
    return (
        <div className="comics__list">
            <ul className="comics__grid">
                {items.map(el => (
                <li className="comics__item" key={el.title}>
                <a href="#">
                    <img src={uw} alt="ultimate war" className="comics__item-img"/>
                    <div className="comics__item-name">{el.title}</div>
                    <div className="comics__item-price">{el.price}</div>
                </a>
            </li>
                ))}
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;