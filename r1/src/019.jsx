import { useReducer } from 'react';
import { useState } from 'react';
import { add, add1, rem, rem1 } from './Actions';
import './App.scss';
import StarContext from './Components/019/StarContext';
import countReducer from './Reducers/countReducers';
// import Tevelis from './Components/019/Tevelis';

function App() {

    const [star, setStar] = useState('');
    const [plus, setPlus] = useState('');

    const [count, countDispach] = useReducer(countReducer, 10);
    const [number, setNumber] = useState(0);


    // const add1 = () => {
    //     const action = {
    //         type: 'add_one'
    //     }
    //     countDispach(action);
    // }

    // const rem1 = () => {
    //     const action = {
    //         type: 'remove_one'
    //     }
    //     countDispach(action);
    // }
    // const addSome = () => {
    //     const action = {
    //         type: 'add',
    //         payload: parseInt(number)
    //     }
    //     countDispach(action);
    // }
    // const remSome = () => {
    //     const action = {
    //         type: 'remove',
    //         payload: parseInt(number)
    //     }
    //     countDispach(action);
    // }

    return (
        <div className="App">
            <StarContext.Provider value={
                {
                    star: star,
                    plus: plus,
                    setPlus,
                    setStar
                }
            }>
            <header className="App-header">
                <h1>CONTEX + REDUCER {count}</h1>
                <div className="red-square">
                {/* <button onClick={() => setStar(s => s + '*')}>Make Star</button>
                <button onClick={() => setPlus(s => s + '+')}>Make Plus</button>
                <Tevelis/> */}
                <button onClick={() => countDispach(add1())}>+1</button>
                <button onClick={() => countDispach(rem1())}>-1</button>
                <input type="number" value={number} onChange={e => setNumber(e.target.value)}></input>
                <button onClick={() => countDispach(add(number))}>+++</button>
                <button onClick={() => countDispach(rem(number))}>---</button>
                </div>
            </header>
            </StarContext.Provider>
        </div>
    );
}

export default App;
