//JSX - JavaScript XML

var obj = {
    name: "Tato",
    noName: null
}

var subs1 = [
   "Ingles","Espanol","Aleman" 
]

var subs2 = []

var template = (
    <div>
        <div>
            <h1>Estatico</h1>
            <p>Age: 20</p>
            <p>Location: Venezuela</p>
        </div>
        <div>
            <h1>Probando Expresiones Dinamicas</h1>
            {/* COND && tmpJSX*/}
            {obj.name && <p>Name: {obj.name}</p>}
            {obj.noName && <p>Name: {obj.name}</p>}

            {/* <tag> {Ternary} </tag>*/}
            <p>{ subs1.length > 0 ? "Primer sub disp -> " + subs1[0] : "No hay subs disponibles" }</p>
            <p>{ subs2.length > 0 ? "Primer sub disp ->" + subs2[0] : "No hay subs disponibles" }</p>
        </div>
    </div>
);

var appRoot = document.getElementById('app')

ReactDOM.render(template , app)