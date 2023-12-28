
import './App.css';

function App() {
  const onclick = ()=>{
    console.log("Nghia");
  }
  let number = 0;
  const onchange = () =>{
    number++;
    console.log(number);
  }
  const n = "Nghia";
  const onchange1 = (number) =>{
    console.log(number);
  }
  return (
    <div className="App">
      <button onClick={onclick}>Nhan me</button>
      <input onChange={onchange}></input>
      <button onClick={()=> {onchange1(n)}}>giam</button>
    </div>
  );
}

export default App;
