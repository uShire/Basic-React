export default function ToDoForm({handleSubmit, handleNewItem, newItem}){
    return(
        <div>
            <h2>New Item</h2>
            <form className="add" onSubmit={handleSubmit}>
              <input type="text" 
              value={newItem} 
              onChange={handleNewItem} 
              />
              <button type="submit">Add</button>
            </form>
        </div>
            
      
    )
}