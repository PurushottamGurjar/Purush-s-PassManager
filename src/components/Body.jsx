import React, { useState,useEffect } from 'react'
import "./Body.css"

const Body = () => {
    const [passwordArray,setPasswordArray]=useState([]);
    const [form,setForm]=useState({site:"",username:"",password:""});
    useEffect(() => {
          let passwords=localStorage.getItem("passwords");
          if(passwords){
            setPasswordArray(JSON.parse(passwords));
          }else{
            passwords=[];
          }
    }, []);

    const HandleSubmit=(e)=>{
        e.preventDefault();
        setPasswordArray([...passwordArray,form]);
        localStorage.setItem("passwords",JSON.stringify([...passwordArray,form]));
        console.log([...passwordArray,form]);
        console.log(form);

        setForm({site:"",username:"",password:"" });
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

        <div className="password-displayer">
            <p>Welcome to Your Saved Passwords</p>
        </div>
        <div className="password-displayer-container">
            <div className="password-displayer-heading">
                <p className="password-displayer-heading-site">Website Name</p>
                <p className="password-displayer-heading-site">Your UserName</p>
                <p className="password-displayer-heading-site">Your Password</p>
            </div>
            <div className="password-displayer-content">
                {passwordArray.map((items,id)=>(
                    <div key={id} className="password-displayer-item">
                        <p className="password-displayer-site">{items.site}</p>
                        <p className="password-displayer-site">{items.username}</p>
                        <p className="password-displayer-site">{items.password}</p>
                    </div>
                ))}
            </div>

           

        </div>
        
      
    </div>
  )
}

export default Body;
