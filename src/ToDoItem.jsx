export default function ToDoItem({toDo,deleteToDos,toggleToDo}){
    return(
        <li key={toDo.id}>
                  <input type="checkbox" checked={toDo.completed} 
                  onChange={e=> toggleToDo(toDo.id, e.target.checked)}/>
                  {toDo.title}
                  <button onClick={() => deleteToDos(toDo.id)}>Delete</button>
                </li>
    )
}