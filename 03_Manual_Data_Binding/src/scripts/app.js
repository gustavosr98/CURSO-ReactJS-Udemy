//JSX - JavaScript XML

let count = 0;
let appRoot = document.getElementById('app');

const addOne = () => {
    count++
    renderApp()
}

const minusOne = () => {
    count--
    renderApp()
}

const reset = () => {
    count = 0
    renderApp()
}

const renderApp = () => {
    let template = (
        <div>
            <h1> Count: {count} </h1>
            <button onClick={addOne} className="boton">+1</button>
            <button onClick={minusOne} className="boton">-1</button>
            <button onClick={reset} className="boton">Reset</button>
        </div>
    );

    ReactDOM.render(template , appRoot);
}

renderApp()

