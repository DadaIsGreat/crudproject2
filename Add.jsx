import React, { useState } from 'react'
import Employees from './Employees'
import {Link,useNavigate} from 'react-router-dom'
import {v4 as uuid} from 'uuid';

const Add = () => {
   const [name, setname] = useState("");
   const [age, setage] = useState("");
   let history=useNavigate();
   let change=(e)=>{
    e.preventDefault()
    let a=name;
    let b=age;
    let uniqId=uuid()
    let ids=uniqId.slice(0,8)

    Employees.push({id : ids,name : a,age : b})
    history('/')



   }
    
  return (
    <div>
      <form>
        <input type="text" placeholder='enter name'value={name} onChange={(e)=>{
            setname(e.target.value)
        }}/>
        <br /><br />
        <input type="number" placeholder='enter age'value={age} onChange={(e)=>{
            setage(e.target.value)
        }}/>
        <br /><br />
        <button type="submit" onClick={(e)=>change(e)}>submit</button>

      </form>
    </div>
  )
}

export default Add
