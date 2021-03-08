import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman', 'Sahinur', 'Justin baybire', 'Alon Mask']
 const products = [
   {name: 'Photoshop', price:'$99.99'},
   {name:'Illustrator', price:'$60.99'},
   {name: 'PDF Reader', price: '$3.44'},
   {name: 'Indegeusn', price: '$3.46'}
  ]
  const profession =[
    {name: 'Mnuna', job: 'Facebooker'},
    {name: 'Alomgir', job: 'Marketer'},
    {name: 'Hasmot Mondol', job: 'Digital Marketar'},
    {name: 'Sahinur Islam', job: 'Full Stock Devoloper'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>This is my first app React</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product productInfo={product}></Product>)
        }
        {
          profession.map(person => <Person info={person}></Person>)
        }
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.website}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count -1)}>Decrease</button>
      <button onClick={() => setCount(count +1)}>Increase</button>
    </div>
  )
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
      <h2>Name:{props.productInfo.name}</h2>
      <h1>{props.productInfo.price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  return(
    <div style={{border:'2px solid gold', width:'400px'}}>
      <h3>My Name: {props.info.name} </h3>
      <p>My Profession: {props.info.job} </p>
    </div>
  )
}

export default App;
