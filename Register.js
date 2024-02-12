import React from 'react'

export default function Register() {

    const RegisterCloser=()=>{document.getElementById('Register').style.display = 'none';}

    const R_SignUpBtn=(e)=>{
        e.target.style.borderBottom = '2px solid #3a0505';
        document.getElementById('R_LoginBtn').style.borderBottom = 'none';
        document.getElementById('Register_signup').style.display = 'block'; 
        document.getElementById('Register_login').style.display = 'none'; 
    }
    const R_LoginBtn=(e)=>{
        e.target.style.borderBottom = '2px solid #3a0505';
        document.getElementById('R_SignUpBtn').style.borderBottom = 'none';
        document.getElementById('Register_signup').style.display = 'none'; 
        document.getElementById('Register_login').style.display = 'block';
    }

    const RS_submitter=(e)=>{
      e.preventDefault(); 
      var Rollno = document.getElementById('R_Rollno').value; 
      var Name = document.getElementById('R_Username').value;
      var Contact = document.getElementById('R_Contact').value;
      var Email = document.getElementById('R_email').value;
      if(Name.trim() !== ''  & Rollno.trim() !== ''){ 
            sessionStorage.setItem('Name',Name);
            sessionStorage.setItem('Contact',Contact);
            sessionStorage.setItem('Rollno', Rollno); 
            sessionStorage.setItem('Email',Email);
            sessionStorage.setItem('Register','in');
            window.location.reload(); 
      }
    }

    const R_contact=(e)=>{
      if(e.target.value.length >= 11){
        e.target.style.outline = '3px dashed red';
      }else{e.target.style.outline = 'none';}
    }

    const RL_submitter=()=>{
      if(document.getElementById('RL_Rollno').value === sessionStorage.getItem('Rollno')){
        sessionStorage.setItem('Register','in')
        window.location.reload();
      }else{alert('You are not Sign ined')}
    }
  return (
    <div id='Register'>
      <div id="Register_box">
        <div id="Register_box_nav">
            <button onClick={RegisterCloser} className="fa-solid fa-angle-left"></button>
            <h6>Register</h6>
        </div>
        <div id="RegisterOptions">
            <button id='R_LoginBtn' onClick={R_LoginBtn}>Login</button>
            <button id='R_SignUpBtn' onClick={R_SignUpBtn} style={{borderBottom:'2px solid #3a0505'}}>SignUp</button> 
        </div>
        <div id="Register_boxCon">
             <center id="Register_login" style={{display:'none'}}>
                <input type="number" placeholder='Your Enrollment no.' id="RL_Rollno" />
                <button id="RL_submitter" onClick={RL_submitter}>Login</button>
             </center>
             <form id="Register_signup" >
                <center>
                    <input type="text" required placeholder='Your name' id="R_Username" />
                    <input type="email" id='R_email' required placeholder='Your Email' /> 
                    <input type="number" onInput={R_contact} required placeholder='Your Contact (Whatsapp no.)' id="R_Contact" /> 
                    <input type="text" id='R_Rollno' required placeholder='Your Enrollment no.' /> 
                    
                    <button id="RS_submitter" onClick={RS_submitter}>Sign Up</button>
                </center>
             </form>
        </div>
      </div>
    </div>
  )
}
