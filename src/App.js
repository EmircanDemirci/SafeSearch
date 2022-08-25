import './App.css';
import Search from './Components/Search';
import { useState } from 'react';

function App() {
  const values = [
    {id:0 , value:"adult content"},
    {id:1,value:"architect"},
    {id:2 , value:"architecture"},
  ]
  const[database , setDatabase]  = useState(values)
  const[value , setValue] = useState("")
  const[click , setClick] = useState(false)
  const handleChange = (input)=>{
    setValue(input.target.value)
    console.log(value)
  }

  const handleClick = () =>{
    setClick(!click)
  }
  return (
    <div className="App">
      <Search handleClick = {handleClick} handleChange = {handleChange} value = {value} database = {database}/>
      <div className='search-results'>
      {
        database.filter((val)=>{
          if (value == "") {
            
          }
          else if(val.value.toLowerCase().includes(value.toLowerCase())){
            return val
          }
        }).map((val,key)=>{
          if(click == true){
            if (val.value.toLowerCase() =="adult content" ) {
              return(
                <div className='search-res filter'>
                  <h4>+18 content</h4>
                </div>
              )
            }
            else{
              return(
                <div className='search-res'>
                  <h4>{val.value}</h4>
                </div>
              )
            }
          }
          else{
            return(
              <div className='search-res'>
                <h4>{val.value}</h4>
              </div>
            )
          }
          
        })
      }
      </div>
    </div>
  );
}

export default App;
