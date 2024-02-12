import React from 'react'
import Cart from './Cart';

export default function Profile() {

    const Profile_box_nav_backBtn=()=>{
        document.getElementById('Profile').style.display = 'none';
    }
 
    function ProfileBtn(e){
        for (let a = 0;a < 4;a++) { 
            var b = a + 1;
            var ETarget = 'ProOpts' + b; 
            var AllPageCard = 'ProOpts' + b + '_card'; 
            document.getElementById(ETarget).style.backgroundColor = '';
            document.getElementById(AllPageCard ).style.display = 'none'; 
        }
        var ETargeted = e.target, ETargetCard = e.target.id + '_card'; 
        document.getElementById(ETargetCard).style.display = 'flex';
        ETargeted.style.backgroundColor = '#570e0e23'; 
    }

    const Profile_SignoutBtn=()=>{
        var Checker = window.confirm('Are you sure?');
        if(Checker){
            sessionStorage.setItem('Register','');
            window.location.reload();
        }
    }

    const PPOC3_C_cover=(e)=>{
        var BrowseValue = e.target.id;
        window.location.href = `/Item/${BrowseValue}`; 
    }

  return (
    <div id='Profile'>
        <div id="Profile_box">
            <div id="Profile_box_nav">
                <button className="fa-solid fa-angle-left" onClick={Profile_box_nav_backBtn} id='Profile_box_nav_backBtn'></button> 
                <button id="Profile_SignoutBtn" onClick={Profile_SignoutBtn}><i className="fa-solid fa-right-from-bracket"></i> SignOut</button>
            </div>

            <div id="Profile_con">
            <center id="Profile_con_menu">
                <button><i className="fa-regular fa-user"></i> <p>Profile</p><h6 style={{backgroundColor:'#570e0e23'}} onClick={ProfileBtn} id='ProOpts1'></h6></button>
                <button><i className="fa-regular fa-file"></i> <p>Applications</p><h6 onClick={ProfileBtn} id='ProOpts2'></h6></button>
                <button><i className="fa-regular fa-bookmark"></i> <p>Saved Items</p><h6 onClick={ProfileBtn} id='ProOpts3'></h6></button>
                <button><i className="fa-solid fa-clock-rotate-left"></i> <p>History</p><h6 onClick={ProfileBtn} id='ProOpts4'></h6></button>
            </center>
            <div id="Profile_con_displayer">
                <div id="ProOpts1_card">
                    <span className='PPOC1_info'>
                        <h6>Name :</h6>
                        <p>{sessionStorage.getItem('Name')}</p>
                    </span>
                    <span className='PPOC1_info'>
                        <h6>Contact :</h6>
                        <p>{sessionStorage.getItem('Contact')}</p>
                    </span>
                    <span className='PPOC1_info'>
                        <h6>Enrollment number :</h6>
                        <p>{sessionStorage.getItem('Rollno')}</p>
                    </span>
                    <span className='PPOC1_info'>
                        <h6>Email :</h6>
                        <p>{sessionStorage.getItem('Email')}</p>
                    </span>
                    

                    <p id="PC1_info">*Your informational details are displayed here Whereas your details are non editable.</p>
                </div>
                <div id="ProOpts2_card" style={{display:'none'}}>

                    <div className="PPOC2_card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQym-MEAF3R7FtSnVxfH6wSYRIsdHZrkqB4Xg&usqp=CAU" alt="" />
                        <h6>A kettle forr sale</h6>
                        <h4>₹10,000</h4>
                        <span>Sent <i className="fa-solid fa-check"></i></span>
                    </div>

                </div>
                <div id="ProOpts3_card" style={{display:'none'}}>
                    <center className="PPOC3_card" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBem9uHSMhuHqcF0AVKScMy7bpk5rk7jQ8c1nca8uSqYQwRbRiPMx26qDsb5rxLIrdPVE&usqp=CAU" alt="Image" />
                        <div className="PPOC3_card_info"> 
                            <h6>A Blezzer on on sell || Buy it now || to not lose it.</h6>
                            <p className="PPOC3_card_discount">On 10% Discount</p>
                            <h5 className="PPOC3_card_cost">₹400</h5>
                        </div><h5 id='Appron-1-satabdiGoswami' onClick={PPOC3_C_cover} className="PPOC3_C_cover"></h5>        
                    </center>
                </div>
                <div id="ProOpts4_card" style={{display:'none'}}>
                    <div className="PPOC4_card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBem9uHSMhuHqcF0AVKScMy7bpk5rk7jQ8c1nca8uSqYQwRbRiPMx26qDsb5rxLIrdPVE&usqp=CAU" alt="" />
                        <span>
                            <p>delivered on 1/12/2024</p>
                            <h5>A Blezzer on on sell || Buy it now || to not lose it.</h5>
                            <h6>XXL size , Navy blue colour</h6>
                            <h4>₹400</h4>
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        <Cart/>
    </div>
  )
}
