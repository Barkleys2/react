// import { useContext } from 'react';
// import Home from '../../Contexts/Home';

function Line({ movie }) {

    // const { cats } = useContext(Home);

    return (
        <li className="list-group-item">
            <div className="line">
                <div className="line__content">
                    <div className="line__content__info">
                        {movie.image ? <div className='img-bin'>
                            <img src={movie.image} alt={movie.title}>
                            </img>
                        </div> : <span className="red-image">No image</span>}
                    </div>
                    <div className="line__content__title">
                        {movie.title}
                    </div>
                    <div className="line__content__info">
                        {movie.price}
                    </div>
                    <div className="line__content__info">
                        {movie.rating ?? 'no rating'}
                    </div>
                    <div className="line__content__info">
                        {/* {cats.find(c => c.id === movie.cat_id)?.title} */}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Line;