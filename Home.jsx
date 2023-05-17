import React from 'react'
import Employees from './Employees'
import {Link,useNavigate} from 'react-router-dom'


const Home = () => {
  let history=useNavigate();
  let handleEdit=(id,name,age, indexx)=>{
    // localStorage.setItem('Name',name)
    // localStorage.setItem('Age',age)
    localStorage.setItem('Id',id)
    localStorage.setItem('INDEX',indexx)
  }

  const handleDelete=(id)=>{
    var index=Employees.map((e)=>{
      return e.id
    }).indexOf(id)
    Employees.splice(index,1);
    history('/');
  }
  return (
    <div>
        <table border={2}>
            <thead>
            <tr>
            <th>name</th>
            <th>age</th>
            <th>actions</th>
            </tr>
            </thead>
            <tbody>
                {
                  Employees && Employees.length > 0
                  ?
                  Employees.map((item, index)=>{
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>
                                <Link to='/edit'>
                                <button onClick={()=>handleEdit(item.id,item.name,item.age, index)}>Edit</button>
                                </Link>
                                &nbsp;
                                <button onClick={()=>handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                        
                    )
                  }) 
                  :
                  "no data available" 
                }
            </tbody>
            
        </table>
        <Link to='/creat'>
          <button>creat</button>
        </Link>
      
    </div>
  )
}

export default Home
