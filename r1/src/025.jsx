import './App.scss';
import Buttons from './Components/025/Buttons';
import { useEffect, useState } from 'react';
import randColor from './Functions/randColor';

function App() {

    const [number, setNumber] = useState(0);
    const [color, setColor] = useState(null);

    useEffect(() => {
        setColor(randColor());
    }, [number]);



    useEffect(() => {
        const timerId = setInterval(() => {
            setNumber(n => n + 1);
        }, 100);
        return () => {
            clearInterval(timerId);
        }
    }, []);


    return (
        <div className="App">
            <header className="App-header">
            <h2 style={{color}}>{number}</h2>
            <h1>Total Recall 2</h1>
            <Buttons setNumber={setNumber} color="red" t={0} c={100}/>
            <Buttons setNumber={setNumber} color="green" t={100} c={20} />
            <Buttons setNumber={setNumber} color="blue" t={120}  c={5}/>
            </header>
        </div>
    );
}

export default App;