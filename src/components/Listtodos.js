import React, { useEffect, useState } from "react";




const Listtodos = () => {
    const [todos, setTodos] = useState([ ]);

    const deleteTodo =async (id)=>{
      try {
        const deleteTodo=await fetch(`http://localhost:5000/todos/${id}`,{
          method:"DELETE"
        });
        setTodos(todos.filter(todo => todo.todo_id !== id))
        alert(`Todo number ${id} is deleted`);
        
      } catch (err) {
        console.error(err)
        
      }
    
    }


    
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos")
        .then((res) => res.json())
        .then((data) => setTodos(data));
        console.log(todos);
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    getTodos();
  }, []);
  

  return (
  <div>
    {
        todos.map(todo=>(
            
            <div key={todo.todo_id} className='w-full mt-4 flex flex-col' >
                <div className=" m-auto flex gap-2 ">
                <h3>{todo.todo_id}</h3>
                 <p> {todo.description} </p>
                </div>
            <button className="mr-2">Edit</button>
            <button onClick={()=> deleteTodo(todo.todo_id)}>Delete</button>
            </div>
        ))
    }
  </div>
  )
};

export default Listtodos; 
