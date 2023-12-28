import {useState} from "react"
import './App.css';

function App() {
  const onclick = ()=>{
    console.log("Nghia");
  }
  let [number,setNumber] = useState(0);
  const onchange = () =>{
    number++;
    console.log(number);
  }
  const Increment = () =>{
    setNumber(number+1);
    console.log(number);
  }
  const onchange1 = (setNumber) =>{
    setNumber(number-1);
    console.log(number);
  }
  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={onclick}>Nhan me</button>
      <input onChange={onchange}></input>
      <button onClick={()=> {onchange1(setNumber)}}>giam</button>
      <button onClick={Increment}>tang</button>
    </div>
  );
}

export default App;
