"use strict";

//JSX - JavaScript XML

var count = 0;

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "p",
        null,
        " Count: ",
        count,
        " "
    ),
    React.createElement(
        "button",
        { id: "myBoton", className: "boton" },
        "+1"
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, app);
