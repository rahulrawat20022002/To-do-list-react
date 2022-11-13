import React,{useState} from 'react'

function Todo() {
    const [item,setItem]=useState([])
    const [input,setInput]=useState('')
    const check=(e)=>{
        if(input===""){
            e.preventDefault()
            alert("Enter the input")
    }
    else{
        additem(e)
    }

    }
    const additem=(e)=>(
        e.preventDefault(),
        setItem([...item,{
            text:input,
            completed:false,
            id:item.length
        }]),
        setInput('')

    )
        

    
    //Delete item

    const deleteItem=(e,id)=>{
        e.preventDefault()
        setItem([...item].filter(item=>
                item.id!==id
            ))
        console.log({id})
    }
  return (
    <div>
        <h2>
            To Do List
        </h2>
        <form>

                <div>
                    <input type='text' value={input} onChange={e=>setInput(e.target.value)}></input>
                </div>
                <div>
                    <button onClick={check}>ADD ITEM</button>
                </div>
                <ul>
                    {item.map(item=>(
                        <li key={item.id}>{item.text} <button onClick={(e)=>deleteItem(e,item.id)}>Delete</button></li>
                    ))}
                </ul>
                <p>
                    {item.length<1?'You have no task to do':`Tasks:${item.length}`}
                </p>
                
        </form>
    </div>
  )
}

export default Todo