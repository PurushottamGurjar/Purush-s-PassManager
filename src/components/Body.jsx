import React, { useState,useEffect } from 'react'
import "./Body.css"

const Body = () => {
    const [passwordArray,setPasswordArray]=useState([]);
    const [passwordIndex,setPasswordIndex]=useState(1);
    const [form,setForm]=useState({index:passwordIndex,site:"",username:"",password:""});
    
    useEffect(() => {
          let passwords=localStorage.getItem("passwords");
          if(passwords){
            setPasswordArray(JSON.parse(passwords));
            setPasswordIndex(JSON.parse(passwords).length+1);
            console.log("the curr len of the password array is ",passwordIndex);
          }else{
            passwords=[];
          }
    }, []);

    const HandleSubmit=(e)=>{
        e.preventDefault();
        form.index=passwordIndex;
        setPasswordIndex(passwordIndex+1);
        setPasswordArray([...passwordArray,form]);
        localStorage.setItem("passwords",JSON.stringify([...passwordArray,form]));

        setForm({site:"",username:"",password:"",index:passwordIndex+1});
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
                <p className="password-displayer-heading-index">Index</p>
                <p className="password-displayer-heading-site">Website Name</p>
                <p className="password-displayer-heading-site">Your UserName</p>
                <p className="password-displayer-heading-site">Your Password</p>
            </div>
            <div className="password-displayer-content">
                {passwordArray.map((items,id)=>(
                    <div key={id} className="password-displayer-item">

                        <div className="index-delete-container">
                            <p className="password-displayer-index">{items.index}</p>
                            <svg xmlns="http://www.w3.org/2000/svg "
                                style={{alignSelf:'center'}} 
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" 
                                stroke-width="2" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" 
                                d="M6 7h12M9 7V4h6v3M10 11v6m4-6v6m5-10H5l1 14h12l1-14z" />
                            </svg>
                        </div>

                        <p className="password-displayer-site">{items.site}</p>
                        <p className="password-displayer-site">{items.username}</p>
                        <p className="password-displayer-site">{items.password}</p>
                    </div>
                ))}
            </div>
            <div className="extra"></div>

           

        </div>
        
      
    </div>
  )
}

export default Body;
