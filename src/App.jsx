
import './App.css'
import Counter from './Counter'


function App() {
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = () =>{
    alert('button clicked 2')
  }
  const addToFive = (num) =>{
    alert(num + 5);
  }
  

  return (
    <>
      
      <h3>React core concepts</h3>
       
       <Counter></Counter>
      
      
      
      
      
      <button onClick={handleClick}>click me</button>
     <button onClick={handleClick2}>click 2</button>
      <button onClick={() =>{alert('third click')}}>third</button>
       <button onClick={() => addToFive(3)}>five</button>
    </>
  )
}

export default App
