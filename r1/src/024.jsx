import "./App.scss";
// import Square from "./Components/0001/Square";

// function App() {
//     return <div className="App-header">
//         <Square color="darkcyan" />
//     </div>;
// }

// export default App;

function App() {

    const bu = () => {
        console.log('Būūūūūūūū');
    }
    return (
        <div className="App">
            <header className="App-header">
            <h1>Total Recall 1</h1>
            <button onClick={() => console.log('Būūūūūūūū')}>Būūūūūū</button>
            <button onClick={bu}>Būūūūūū ver. 2</button>
            </header>
        </div>
    );
}

export default App;