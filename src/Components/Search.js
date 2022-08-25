import React from 'react'
import "./Search.css"
export default function Search(props) {
  return (
    <div className='search'>
        <h1>SafeSearch</h1>
        <div className='main'>
            <input onChange={(i)=>{
                props.handleChange(i)
            }} value={props.value}></input>
        </div>
        <button onClick={props.handleClick}>I feel comfortable</button>
      </div>
  )
}
