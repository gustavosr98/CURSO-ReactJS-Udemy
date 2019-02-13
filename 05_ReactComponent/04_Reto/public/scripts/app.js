"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Titulo = function (_React$Component) {
    _inherits(Titulo, _React$Component);

    function Titulo() {
        _classCallCheck(this, Titulo);

        return _possibleConstructorReturn(this, (Titulo.__proto__ || Object.getPrototypeOf(Titulo)).apply(this, arguments));
    }

    _createClass(Titulo, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "Titulo" },
                this.props.valor && React.createElement(
                    "h1",
                    null,
                    this.props.valor
                )
            );
        }
    }]);

    return Titulo;
}(React.Component);

var Visibilidad = function (_React$Component2) {
    _inherits(Visibilidad, _React$Component2);

    function Visibilidad(props) {
        _classCallCheck(this, Visibilidad);

        var _this2 = _possibleConstructorReturn(this, (Visibilidad.__proto__ || Object.getPrototypeOf(Visibilidad)).call(this, props));

        _this2.manejarClick = _this2.manejarClick.bind(_this2);

        //SETTEAR STATUS - ATRIBUTOS DEL COMPONENTE
        _this2.state = {
            seVe: false
        };
        return _this2;
    }

    _createClass(Visibilidad, [{
        key: "manejarClick",
        value: function manejarClick() {
            this.setState(function (prevState) {
                return {
                    seVe: !prevState.seVe
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "Visibilidad" },
                React.createElement(
                    "button",
                    { onClick: this.manejarClick },
                    this.state.seVe ? "Ocultar" : "Ver"
                ),
                this.state.seVe && React.createElement(
                    "p",
                    null,
                    this.props.mensajeOculto
                )
            );
        }
    }]);

    return Visibilidad;
}(React.Component);

var Home = function (_React$Component3) {
    _inherits(Home, _React$Component3);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Titulo, { valor: this.props.titulo }),
                React.createElement(Visibilidad, { mensajeOculto: "La curiosidad mato al gato bro..." })
            );
        }
    }]);

    return Home;
}(React.Component);

ReactDOM.render(React.createElement(Home, { titulo: "App de Ocultacion Magica" }), document.getElementById('app'));
