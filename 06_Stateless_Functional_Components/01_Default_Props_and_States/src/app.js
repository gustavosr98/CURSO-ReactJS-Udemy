let count = 0;
let appRoot = document.getElementById('app');

class Counter extends React.Component {
  constructor(props){
    super(props)

    //BINDING METHODS
    this.addOne = this.addOne.bind(this)
    this.minusOne = this.minusOne.bind(this)
    this.reset = this.reset.bind(this) 

    this.state = {
      count : this.props.count
    }
  }
  addOne(){
    this.setState( (prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  minusOne(){
    this.setState( (prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  reset(){
    this.setState( () => {
      return {
        count: this.props.count
      }
    })
  }
  render(){
    return (
      <div>
          <h1> Count: {this.state.count} </h1>
          <button onClick={this.addOne} className="boton">+1</button>
          <button onClick={this.minusOne} className="boton">-1</button>
          <button onClick={this.reset} className="boton">Reset</button>
      </div>
  )}
}

Counter.defaultProps = {
  count : 0
}

ReactDOM.render( 
  <div>
    <Counter count={10}/>
    <Counter count={-12}/>
    <Counter count={0}/>
  </div>
  ,
  document.getElementById('app')
);