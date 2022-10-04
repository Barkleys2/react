import Home from "../../Contexts/Home";
import List from "./List";
import { useState, useEffect } from 'react';
import axios from 'axios';

function Main() {

        const [movies, setMovies] = useState(null);


        // READ for list
        useEffect(() => {
            axios.get('http://localhost:3003/home/movies')
                .then(res => {
                    setMovies(res.data);
                })
        }, []);

      return (
        <Home.Provider value={{
            movies
        }}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <List/>
                </div>
            </div>
        </div>
        </Home.Provider>
    );
}

export default Main;