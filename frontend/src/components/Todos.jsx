export function Todos({todos}){
   
    return <div>
            { todos.map(function(todo){
        return <div>
            <h1>{todo.title} </h1>
            <h2>{todo.description}</h2>
            <button 
            onClick={async function(){
                try {
                    const response = await fetch('http://13.60.57.80:3000/completed', {
                      method: 'PUT',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ id:todo._id }), // Sending id in the body
                    });
                
                    if (!response.ok) {
                      throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                
                    const data = await response.json();
                    console.log('Response:', data);
                  } catch (error) {
                    console.error('Error:', error);
                  }
            }}
            
            >{todo.completed==true?"Completed":"Complete Todo"}</button>
        </div>
                })
            }
        </div>
    
}