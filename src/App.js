import { useState } from 'react';
import './App.css';

function App() {	
  return (
    <div className="App">
		<Counter></Counter>
    </div>
  );
}


//Cretate Counter Component
function Counter(){
	const [count,setCount] = useState(0);
	
// 1st way	
	// const increaseCount = () =>{
	// 	const newValue = count + 1;
	// 	setCount(newValue);
	// }

// 2nd way		
	const increaseCount = () => setCount(count + 1);
	const decreaseCount = () => setCount(count - 1);

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={increaseCount}>Increase</button>
			<button onClick={decreaseCount}>Decrease</button>
		</div>
	)
}





// const products = [
// 	{name:'Laptob', price: 153000},
// 	{name:'phone', price: 93000},
// 	{name:'Watch', price: 33000},
// 	{name:'Tablat', price: 5000},
// ]

// {
// 	products.map(product=>{
// 		return <Product name={product.name} price={product.price}></Product>
// 	})
// }
// <Product name="Laptop" price="47000"></Product>
// <Product name="Phone" price="75000"></Product>
// <Product name="Watch" price="3500"></Product>

//Component Create
// function Product(props){
// 	return (
// 		<div className="product">
// 			<h3>Name: {props.name}</h3>
// 			<p>Price: {props.price}</p>
// 		</div>
// 	)
// }

export default App;
 