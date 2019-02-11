"use strict";

//JSX - JavaScript XML

var obj = {
    name: "Tato",
    noName: null
};

var subs1 = ["Ingles", "Espanol", "Aleman"];

var subs2 = [];

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Estatico"
        ),
        React.createElement(
            "p",
            null,
            "Age: 20"
        ),
        React.createElement(
            "p",
            null,
            "Location: Venezuela"
        )
    ),
    React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Probando Expresiones Dinamicas"
        ),
        obj.name && React.createElement(
            "p",
            null,
            "Name: ",
            obj.name
        ),
        obj.noName && React.createElement(
            "p",
            null,
            "Name: ",
            obj.name
        ),
        React.createElement(
            "p",
            null,
            subs1.length > 0 ? "Primer sub disp -> " + subs1[0] : "No hay subs disponibles"
        ),
        React.createElement(
            "p",
            null,
            subs2.length > 0 ? "Primer sub disp ->" + subs2[0] : "No hay subs disponibles"
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, app);
