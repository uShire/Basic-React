import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoForm from './toDoForm';
import ToDoList from './ToDoList';

function App() {
  // const [count, setCount] = useState(0); //array destructuring
const [newItem,setNewItem]= useState("");
const [toDos,setToDos]= useState([]);


const handleNewItem=(e)=>{
  const item = e.target.value;
  console.log(item);
  setNewItem(item);
}


const handleSubmit=(e)=>{
 e.preventDefault(); //prevents refresh
//  console.log("Form Submitted.")
setToDos((currentToDos) => {
  return[
    ...currentToDos,
    {id: crypto.randomUUID(), title: newItem, completed:false}
  ];
})
setNewItem("")
}


//Checks or Unchecks a To Do
const toggleToDo=(id, completed) => {
  setToDos(currentToDos => {
    return currentToDos.map(todo => {
      if(todo.id === id){
        return{...todo,completed}
      }
      return todo;
    })
  })
}


//deletes To Dos
const deleteToDos=(id) =>{
  setToDos(currentToDos => {
    return currentToDos.filter(toDos => toDos.id !==id)
  })
}


  return (
    <section >
      <div className="container">
        {/* <ToDoForm className="add" onSubmit={handleSubmit}>
          <input type="text" 
          // value={newItem} 
          // onChange={handleNewItem} 
          />
          <button>Add</button>
        </ToDoForm> */}
        <ToDoForm handleSubmit={handleSubmit} handleNewItem={handleNewItem} newItem={newItem}/>
        <h3>To Do List</h3>
       <ToDoList toDos={toDos} toggleToDo={toggleToDo} deleteToDos={deleteToDos}/>
      {/* <div>
      <ul>
          {
          toDos.map(toDo =>{
            console.log(toDo)
            return (
              <li key={toDo.id}>
                <input type="checkbox" checked={toDo.completed} 
                onChange={e=> toggleToDo(toDo.id, e.target.checked)}/>
                {toDo.title}
                <button onClick={() => deleteToDos(toDo.id)}>Delete</button>
              </li>
            )
          })}
        </ul>
      </div> */}
        

      </div>
    </section>
  );
//  function handleCount(){
//   setCount((c) => c + 1);
//  }

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={handleCount}> 
  //         count is {count}
  //       </button>
  //       {/* <button onClick={() => setCount((c) => c + 1)}> 
  //         count is {count}
  //       </button> */}
  //       <p  style={{color: "red"}}>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs" style={{fontSize:"1rem", color:"#ffffff"}}>
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}



export default App
