console.log('App.js is running!');

const app = {
  title: 'Indecision App.',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const dimeQueHacer = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const msj = app.options[randomNumber];
  alert(msj);
}

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      <button disabled={!(app.options.length > 0)} onClick={dimeQueHacer}>Dime que hacer</button>
      <ol>
        {
          app.options.map( (option, i) => {
            return <li key={i}>{option}</li>;
          })
        }
        {/*(array) arrayA.map()*/}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Options</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
