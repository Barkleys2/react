import Home from "../../Contexts/Home";
import List from "./List";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRef } from "react";

function Main() {

        const [lastUpdate, setLastUpdate] = useState(Date.now());
        const [movies, setMovies] = useState(null);
        const [rateData, setRateData] = useState(null);
        const filterOn = useRef(false);
        const filterWhat = useRef(null);


        // READ for list
        useEffect(() => {
            axios.get('http://localhost:3003/home/movies')
                .then(res => {
                    if (filterOn.current) {
                        setMovies(res.data.map((d, i) =>
                         filterWhat.current === d.cat_id ? {...d, show: true, row: i} : {...d, show: false, row: i}));
                    } else {
                        setMovies(res.data.map((d, i) => ({...d, show: true, row: i})));
                    }
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
            setRateData,
            setMovies,
            filterOn,
            filterWhat
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