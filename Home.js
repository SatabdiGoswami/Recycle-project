import React,{ useEffect } from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import SellBox from './SellBox';
import Register from './Register';
import Cart from './Cart';

export default function Home() {

    const HomeSearch=(e)=>{
        if (e.keyCode === 13) {
            if(e.target.value.trim() !== ""){
                const searchValue = e.target.value.trim().split(' ').join('-');
                window.location.href = `/Search/${searchValue}`;
            }
        }
    }

    const Nav_right_profile=()=>{document.getElementById('Profile').style.display = 'flex';}
    const Nav_right_sellBtn=()=>{document.getElementById('Con_SellBox').style.display = 'flex';}
    const RegisterOpener=()=>{document.getElementById('Register').style.display = 'flex';}
    const HomeCartOpener=()=>{document.getElementById('Cart').style.display = 'flex';}

    useEffect(() => {
        
        if(sessionStorage.getItem('Register') === 'in'){
            document.getElementById('Nav_register').style.display = 'none';
            document.getElementById('Nav_right').style.display = 'flex';
        }else{
            document.getElementById('Nav_register').style.display = 'block';
            document.getElementById('Nav_right').style.display = 'none';
        }

    },[]);

      const HomeScrollUp=()=>{window.scrollTo({top:0,behavior:'smooth'});}

      const BrowseOptn=(e)=>{
        var BrowseValue = e.target.id;
        window.location.href = `/Search/${BrowseValue}`; 
      }

      const HC_cover=(e)=>{
        var BrowseValue = e.target.id;
        window.location.href = `/Item/${BrowseValue}`; 
      }

      

  return (
    <div id='Home'>
        <div id="Home_up">
            <div id="Nav">
                <div id="Nav_left">
                    <img src='/Images/Logo.png' alt='Logo' id='Nav_left_logo'/>
                </div>
                <button id="Nav_register" onClick={RegisterOpener}>Sign in</button>
                <div id="Nav_right" style={{display:'none'}}>
                    <button id="Nav_right_sellBtn" onClick={Nav_right_sellBtn}><i className="fa-solid fa-cloud-arrow-up"></i>  Sell</button>
                    <button onClick={Nav_right_profile} id="Nav_right_profile"><i className="fa-regular fa-user"></i><span><h6>{sessionStorage.getItem('Name')}</h6><p>{sessionStorage.getItem('Contact')}</p></span></button>

                    <button onClick={HomeCartOpener} id='HomenavCartBtn'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg></button>
                </div>
            </div>
            <center id="NavDown">
                <p>Hey there! Welcome to our site. We have more than 1000 substances available for sale</p>
                <div id="NavDown_searchbar">
                    <input type='search' placeholder='Search Bucket, Approns, Graphics board, Scientific calculators ,Drafters ,Kettle ,Cycle etc' onKeyUp={HomeSearch}/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                </div>
                <span>
                    <Link to='https://www.instagram.com/ecellnita/'><i className="fa-brands fa-instagram"></i></Link>
                    <Link to='https://www.facebook.com/ecellnita?mibextid=ZbWKwL'><i className="fa-brands fa-facebook"></i></Link>
                    <Link to='https://twitter.com/ecell_nita'><i className="fa-brands fa-twitter"></i></Link>
                   <Link to='https://www.linkedin.com/company/ecellnita/mycompany/'> <i className="fa-brands fa-linkedin"></i></Link>
                </span>
            </center>
        </div>

        <div id="Home_catagory">
            
        </div>
        <center>
        <div id="Home_catagory_box">
                <h6>Browse options</h6>
                <div id="Home_catagory_box_slider">
                    <center onClick={BrowseOptn} className="Home_catagory_box_slider_card"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBem9uHSMhuHqcF0AVKScMy7bpk5rk7jQ8c1nca8uSqYQwRbRiPMx26qDsb5rxLIrdPVE&usqp=CAU" alt="Catagory" /><p>Approns</p><h6 id='Approns'></h6></center>
                    <center onClick={BrowseOptn} className="Home_catagory_box_slider_card"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_hZyzUhIteRGXvftSGbCvBjZ985-FZNImcgiYHKBsmVgXcuv8YKRt5eNlcTp12dXYZAI&usqp=CAU" alt="Catagory" /><p>Graphics board</p><h6 id='Graphics-boards'></h6></center>
                    <center onClick={BrowseOptn} className="Home_catagory_box_slider_card"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIfjQhGJEVsSmFeKWpyOptrjht-tyaRHh-TQ&usqp=CAU" alt="Catagory" /><p>Drafter</p><h6 id='Drafters'></h6></center>
                    <center onClick={BrowseOptn} className="Home_catagory_box_slider_card"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8PXNazCjpNMvdNpiPjXz1CuC5-QWc-rSLUQljSw-U6BM9pxthWYYHs42xxdj4gfcc6Mg&usqp=CAU" alt="Catagory" /><p>Scientific Calculators</p><h6 id='Scientific-Calculators'></h6></center>
                    <center onClick={BrowseOptn} className="Home_catagory_box_slider_card"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRui-XeT7lRf5SLatWL-WB993pLgsrXcoHUJA&usqp=CAU" alt="Catagory" /><p>Kettles</p><h6 id='Kettles'></h6></center>
                    <center onClick={BrowseOptn} className="Home_catagory_box_slider_card"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUN6x3xpHKyzotpzt1G38yQAm12gz18560fw&usqp=CAU" alt="Catagory" /><p>Cycle</p><h6 id='Cycles'></h6></center>
                    <center onClick={BrowseOptn} className="Home_catagory_box_slider_card"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTho1e9aVc5EdJ1g3v0_TkBM0olzdS0NDoEDg&usqp=CAU" alt="Catagory" /><p>Bucket</p><h6 id='Buckets'></h6></center>
                    <center onClick={BrowseOptn} className="Home_catagory_box_slider_card"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGrejbNpDR78wfAXwjAl2qS2FBRefGSOqaw&usqp=CAU" alt="Catagory" /><p>Extention chords</p><h6 id='Extention-Chords'></h6></center>
                    <center onClick={BrowseOptn} className="Home_catagory_box_slider_card"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFeglxsRSVHYEoqnrd9sHuqImBKcJc0_nrg&usqp=CAU" alt="Catagory" /><p>Books</p><h6 id='Books'></h6></center>
                    <center onClick={BrowseOptn} className="Home_catagory_box_slider_card"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6_HwFN5fR0vVQviXwHtWLyKuhNBQ_JtGGkw&usqp=CAU" alt="Catagory" /><p>Novels</p><h6 id='Novels'></h6></center>
                </div>
            </div>
        </center>

        <div id="Home_Explore">
            <h6 id="Home_Explore_title"><hr /> Explore <hr /></h6>
            <center className="Home_Explore_card" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBem9uHSMhuHqcF0AVKScMy7bpk5rk7jQ8c1nca8uSqYQwRbRiPMx26qDsb5rxLIrdPVE&usqp=CAU" alt="Image" />
                <div className="Home_Explore_card_info"> 
                    <h3 className="Home_Explore_card_discount">On 10% Discount</h3>
                    <h6>A Blezzer on on sell || Buy it now || to not lose it.</h6>
                    <h5 className="Home_Explore_card_cost">₹450</h5>
                </div><h5 id='Appron-1-satabdiGoswami' onClick={HC_cover} className="HC_cover"></h5>        
            </center>
            
            
        </div>
        <div id="footer">
            <span><h6>NITs - Oxtioner</h6><p>All &copy;Copyrights are been reserved</p></span>
            <span><i className="fa-brands fa-instagram"></i><i className="fa-brands fa-facebook"></i><i className="fa-brands fa-telegram"></i><i className="fa-brands fa-linkedin"></i></span>
            <button onClick={HomeScrollUp} className='fa-solid fa-angle-up'></button>
        </div>

        <Profile/><SellBox/><Register/><Cart/>
    </div>
  )
}
