import { useContext } from 'react';
import Home from '../../Contexts/Home';

import { useState } from "react";

function Line({ movie }) {

    const { setRateData } = useContext(Home);

    const [rate, setRate] = useState(5);

    const doRating = () => {
        setRateData({
            id: movie.id,
            rate
        });
        setRate(5);
    }

    return (
        <li className="list-group-item">
            <div className="home">
                <div className="home__content">
                    <div className="home__content__info">
                        <h2>{movie.title}</h2>
                        {movie.image ? <div className='img-bin'>
                            <img src={movie.image} alt={movie.title}>
                            </img>
                        </div> : null}
                    </div>
                    <div className="home__content__price">
                        {movie.price} Eur
                    </div>

                    <div className="home__content__cat">
                        {movie.catTitle}
                    </div>

                    <div className="home__content__info">
                        {movie.rating ?? 'no rating'}
                        <select value={rate} onChange={e => setRate(e.target.value)}>
                            {
                                [...Array(10)].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)
                            }
                        </select>
                    </div>
                    <div className="home__buttons">
                    <button onClick={doRating} type="button" className="btn btn-outline-success">Rate</button>
                </div>
                </div>
            </div>
        </li>
    )
}

export default Line;