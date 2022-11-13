import React from 'react'
import  "./FormStyles.css";

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Sizning Ismingiz</label>
            <input type='text'></input>
            
            <label>Gmail / Mail</label>
            <input type='email'></input>
            
            <label> Subjekt</label>
            <input type='text'></input>
            
            <label>Detailes</label>
            <textarea rows='6' placeholder='Type a short massage here '/>
            <button className='btn'>Submit</button>
        </form>
        
    </div>
  )
}

export default Form