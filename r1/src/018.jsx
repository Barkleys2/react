import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import rand from './Functions/rand';
import './App.scss';
function App() {

    const [news, setNews] = useState(null);
    const time = useRef(0);

    useEffect(() => {
        axios.get('https://in3.dev/vinted/api/news/')
            .then(res => setNews(res.data));
    }, []);

    useEffect(() => {
        if (null === news) {
            return;
        }
        if (time.current === 1) {
            return;
        }
        time.current++;
        news.forEach(n => {
            let store = localStorage.getItem('vinted_' + n.id);
            if (store !== null) {
                store = JSON.parse(store);
                setNews(n1 => n1.map(n2 => n2.id === n.id ? store : { ...n2 }));
            } else {
                axios.get('https://in3.dev/vinted/api/products/' + n.id)
                    .then(res => {
                        setNews(n1 => n1.map(n2 => n2.id === n.id ? res.data : { ...n2 }));
                        localStorage.setItem('vinted_' + n.id, JSON.stringify(res.data));
                    });
            }
        });
    }, [news]);


    const [kv, setKv] = useState(null);
    const undo = useRef([]);

    useEffect(() => {
        const k = localStorage.getItem('kv');
        if (null === k) {
            setKv([]);
        } else {
            setKv(JSON.parse(k));
        }
    }, []);

    useEffect(() => {
        if (null === kv) {
            return;
        }
        localStorage.setItem('kv', JSON.stringify(kv));
        undo.current.push(kv);
    }, [kv]);


    const add = () => {
        setKv(k => [...k ?? [], ...[...Array(rand(5, 10))]]);
    }

    const rem = () => {
        setKv([]);
    }

    const un = () => {
        const first = undo.current.pop();
        if(!first) {
            return;
        }
        if (first.length === kv.length) {
            setKv(undo.current.pop());
        } else {
            setKv(first);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="dog-bin">
                    {
                        kv?.map((_, i) => <div className="dog" key={i}></div>)
                    }
                </div>
                <button onClick={add}>ADD</button>
                <button onClick={rem}>REMOVE</button>
                <button onClick={un}>UNDO</button>
            </header>
        </div>
    );
}

export default App;