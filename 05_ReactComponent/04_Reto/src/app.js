class Titulo extends React.Component {
    render(){
        return (
            <div className="Titulo">
                {this.props.valor && <h1>{this.props.valor}</h1>}
            </div>
        )
    }
}

class Visibilidad extends React.Component {
    constructor(props){
        super(props)
        this.manejarClick = this.manejarClick.bind(this)
        
        //SETTEAR STATUS - ATRIBUTOS DEL COMPONENTE
        this.state = {
            seVe : false
        }
    }

    manejarClick(){
        this.setState( (prevState) => {
            return {
                seVe : !prevState.seVe
            }
        })
    }

    render(){
        return (
            <div className="Visibilidad">
                <button onClick={this.manejarClick}>{this.state.seVe ? "Ocultar" : "Ver"}</button>
                {this.state.seVe && <p>{this.props.mensajeOculto}</p>}
            </div>
        )
    }
}

class Home extends React.Component {
    render(){
        return (
            <div>
                <Titulo valor={this.props.titulo} />
                <Visibilidad mensajeOculto="La curiosidad mato al gato bro..."/>
            </div>
        )
    }
}

ReactDOM.render( <Home titulo="App de Ocultacion Magica"/>, document.getElementById('app'))