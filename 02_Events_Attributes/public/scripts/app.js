"use strict";

//JSX - JavaScript XML

var count = 0;

var addOne = function addOne() {
    console.log(+1);
};

var minusOne = function minusOne() {
    console.log(-1);
};

var reset = function reset() {
    console.log('reset');
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        " Count: ",
        count,
        " "
    ),
    React.createElement(
        "button",
        { onClick: addOne, className: "boton" },
        "+1"
    ),
    React.createElement(
        "button",
        { onClick: minusOne, className: "boton" },
        "-1"
    ),
    React.createElement(
        "button",
        { onClick: reset, className: "boton" },
        "Reset"
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, app);
