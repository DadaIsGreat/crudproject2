import logo from './logo.svg';
import './App.css';
//import Usememoo from './components/HOOKS/Usememoo';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Add from './components/Add';
import Edit from './components/Edit';


// import Useffectt from './components/Useffectt';
// import Multipler from './components/Multipler';
//import Usereff from './components/HOOKS/Usereff';
//import { useReducer } from 'react';


//==========reduser=======================
// let intialvalue ={count : 0}
// let reducer=(state,action)=>{
//   switch(action.type)
//   {
//     case 'increment':
//       return {count : state.count+1};
//       case 'decrement':
//         return {count : state.count-1}; 
//       default :
//        throw new Error()
//   }
// }


function App() {
  //let [state, dispatch]=useReducer(reducer,intialvalue);
  return (
    <div className="App">
      
      {/* <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type : 'increment'})}>increment</button>
      <button onClick={()=>dispatch({type : 'decrement'})}>decrement</button> */}

      {/* -------------------------------------------------------------------- */}


      {/* ===============CRDPROJRCT=========== */}
      
      <Router>
        <Routes>
         
          <Route path='/' element={<Home/>}/>
          <Route path='/creat' element={<Add/>}/>
          <Route path='/edit' element={<Edit/>}/>
         
            
          
        </Routes>
      </Router>

      {/* =================================== */}
      {/* <Useffectt/> */}
      {/* <Multipler/> */}
      {/* ====useref========== */}
      {/* <Usereff/> */}
      {/* <Usememoo/> */}
      
    </div>
  );
}

export default App;
