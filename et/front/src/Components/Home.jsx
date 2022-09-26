import { useEffect, useState } from 'react';
import randColor from '../Functions/randColor';

function Home() {

    const [fill, setFill] = useState(null);

    useEffect(() => {
        const timerId = setInterval( () => {
            setFill(randColor());
        }, 3000);
        return () => {
            clearInterval(timerId);
        }
    }, []);

    return (
        <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="image">
                <svg style={{fill}}><use xlinkHref="#electro" ></use></svg>
                <svg style={{fill}}><use xlinkHref="#electro" ></use></svg>
                <svg style={{fill}}><use xlinkHref="#electro" ></use></svg>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;