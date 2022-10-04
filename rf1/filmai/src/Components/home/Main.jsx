import Home from "../../Contexts/Home";
import List from "./List";
import { useState, useEffect } from 'react';
import axios from 'axios';

function Main() {

        const [lastUpdate, setLastUpdate] = useState(Date.now());
        const [movies, setMovies] = useState(null);
        const [rateData, setRateData] = useState(null);


        // READ for list
        useEffect(() => {
            axios.get('http://localhost:3003/home/movies')
                .then(res => {
                    setMovies(res.data);
                })
        }, [lastUpdate]);


        useEffect(() => {
            if (null === rateData) {
                return;
            }
            axios.put('http://localhost:3003/home/movies/' + rateData.id, rateData)
            .then(res => {
                setLastUpdate(Date.now());
            });
        }, [rateData]);

      return (
        <Home.Provider value={{
            movies,
            setRateData
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