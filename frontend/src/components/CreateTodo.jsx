import { useState } from "react";

export function CreateTodo(){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("")
    return(
        <div>
            <input style={{
                padding:10,
                margin:10
            }} type="text" placeholder="title" onChange={function(e){
                const value=e.target.value;
                setTitle(value);
            }}></input><br/>
            <input style={{
                padding:10,
                margin:10
            }} type="text" placeholder="description" onChange={function(e){
                const value=e.target.value;
                setDescription(value);
            }}></input><br/>
            
            <button style={{
                padding:10,
                margin:10
            }} onClick={()=>{
                fetch("http://13.60.57.80:3000/todo",{
                    method:"POST",
                    body: JSON.stringify({
                        title,
                        description
                    }),
                    headers:{
                        "Content-type":"application/json"
                    }
                }).then(async function(res){
                    const json=await res.json();
                    alert("todo added")
                })

            }}>Add a todo</button>
        </div>
    )
}