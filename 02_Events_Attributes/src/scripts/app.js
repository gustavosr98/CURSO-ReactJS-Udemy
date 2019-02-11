//JSX - JavaScript XML

let count = 0;

const addOne = () => {
    console.log(+1)
}

const minusOne = () => {
    console.log(-1)
}

const reset = () => {
    console.log('reset')
}

let template = (
    <div>
        <h1> Count: {count} </h1>
        <button onClick={addOne} className="boton">+1</button>
        <button onClick={minusOne} className="boton">-1</button>
        <button onClick={reset} className="boton">Reset</button>
    </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(template , app);