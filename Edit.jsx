import React, { useEffect, useState } from 'react'
import Employees from './Employees'
import {Link,useNavigate} from 'react-router-dom'

const Edit = ({}) => {

    const [namee, setname] = useState("");
    const [agee, setage] = useState("");
    const idd = localStorage.getItem('Id');
    console.log(idd +" iam local id")
    const indexx=localStorage.getItem('INDEX')
    let history=useNavigate();
    let index=Employees.map((e)=>{
        return e.id
    }).indexOf(idd);
   
   let empData= Employees[index]
    let change=(e)=>{
        e.preventDefault()
         let a=Employees[indexx];
         
        a.name=namee;
        a.age=agee;

        history('/')
    
    
    
       }
      //  useEffect(()=>{
      //   setname(localStorage.getItem('Name '))
      //   setage(localStorage.getItem('Age'))
      //   //setid(localStorage.getItem('Id'))
      //  },[])
  return (
    <div>
        <form>
        <input type="text" placeholder='enter name'value={namee} onChange={(e)=>{
            setname(e.target.value)
        }}/>
        <br /><br />
        <input type="text" placeholder='enter age'value={agee} onChange={(e)=>{
            setage(e.target.value)
        }}/>
        <br /><br />
        <button type="submit" onClick={(e)=>change(e)}>submit</button>

      </form>
      
    </div>
  )
}

export default Edit
