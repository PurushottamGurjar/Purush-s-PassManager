import React, { useState } from 'react'
import "./Body.css"

const Body = () => {
    const [form,setForm]=useState(
        {
            site:"",
            username:"",
            password:""
        }
    );
    const HandleSubmit=(e)=>{
         e.preventDefault();
        console.log(form);

        setForm({
            site:"",
            username:"",
            password:""
        })
    }
  return (
    <div className='body'>
        <p className="pass-heading">Welcome to your Personal Password Manager</p>
        
            <form action="" onSubmit={HandleSubmit}>
                <div className="input-containers">
                <input type="text" name="site" value={form.site}  className="site-name"  placeholder='Enter the Website... Example: https://www.purushottam.online'  onChange={(e)=>setForm({...form,site:e.target.value})}/>
            <div className="input-container-secondary">
                <input type="text" name="username"  value={form.username} className="site-password"  placeholder='Enter Your Username...' onChange={(e)=>setForm({...form,username:e.target.value})}/>
                <input type="text" name="password" value={form.password} className="site-password"   placeholder='Enter the password....' onChange={(e)=>setForm({...form,password:e.target.value})}/>
            </div>
            <button className="submit-button" type="submit">Add Your Password</button>
            </div>
            </form>
        
      
    </div>
  )
}

export default Body;
