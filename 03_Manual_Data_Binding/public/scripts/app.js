"use strict";

//JSX - JavaScript XML

var count = 0;
var appRoot = document.getElementById('app');

var addOne = function addOne() {
    count++;
    renderApp();
};

var minusOne = function minusOne() {
    count--;
    renderApp();
};

var reset = function reset() {
    count = 0;
    renderApp();
};

var renderApp = function renderApp() {
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

    ReactDOM.render(template, appRoot);
};

renderApp();
