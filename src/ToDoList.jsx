import ToDoItem from "./ToDoItem"
export default function ToDoList({toDos, toggleToDo,deleteToDos}){
    return(
        <div>
        <ul>
            {
            toDos.map(toDo =>{
              console.log(toDo)
              return (
                <ToDoItem toDo={toDo} deleteToDos={deleteToDos} toggleToDo={toggleToDo}/>
              )
            })
            }
          </ul>
        </div>
    )
}