import logo from './logo.svg';
import './App.css';

function App() {
 const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman']
 const products = [
   {name: 'Photoshop', price:'$99.99'},
   {name:'Illustrator', price:'$60.99'},
   {name: 'PDF Reader', price: '$3.44'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>This is my first app React</p>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
        <Person name='Munna' job='Facerker'></Person>
        <Person name='Alomgir' job='Markerter'></Person>

      </header>
    </div>
  );
}

function Product(props){
  const productStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'300px',
    width:'400px',
    float:'left'
  }
  return(
    <div style={productStyle}>
      <h2>Name:{props.name}</h2>
      <h1>{props.price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  return(
    <div style={{border:'2px solid gold', width:'400px'}}>
      <h3>My Name: {props.name} </h3>
      <p>My Profession: {props.job} </p>
    </div>
  )
}

export default App;