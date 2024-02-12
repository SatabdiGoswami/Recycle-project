import React,{ useState } from 'react';
import { useParams } from 'react-router-dom';
import Cart from './Cart';

export default function Item() {
    const { Of } = useParams();
    const [copied, setCopied] = useState(false);

    const ItemSearch=(e)=>{
        if (e.keyCode === 13) {
            if(e.target.value.trim() !== ""){
                const searchValue = e.target.value.trim().split(' ').join('-');
                window.location.href = `/Search/${searchValue}`;
            }
        }
    }

    const ItemBack=()=>{window.location.href = '/';}

    const IC_cover=(e)=>{
        var BrowseValue = e.target.id;
        window.location.href = `/Item/${BrowseValue}`; 
    }

      const ItemCopyBtn =()=>{ 
        const url = window.location.href;
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = url;
    document.body.appendChild(tempTextArea);
    
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);

    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    setCopied(true);
    setTimeout(() => {
        setCopied(false);
    }, 1500);
      }

      const HomeScrollUp=()=>{window.scrollTo({top:0,behavior:'smooth'});}

      const CartOpener=()=>{document.getElementById('Cart').style.display = 'flex';}

  return (
    <div id='Item'>
        <p id="Item_news" style={{ height: copied ? '40px' : '0' }}>{copied ? 'The Link has been Copied' : ''}</p>
        <div id="Item_nav"> 
                <button className="fa-solid fa-angle-left" onClick={ItemBack} id="Item_nav_backBtn"></button>
                <div id="Item_nav_searchbar">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="search" onKeyUp={ItemSearch} placeholder='Search Bucket, Approns, Graphics board, Scientific calculators ,Drafters ,Kettle ,Cycle etc' /> 
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={CartOpener} id='Item_nav_cart'  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
        </div>
        <div id="Item_con">
            <div id="Item_con_left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBem9uHSMhuHqcF0AVKScMy7bpk5rk7jQ8c1nca8uSqYQwRbRiPMx26qDsb5rxLIrdPVE&usqp=CAU" alt="" />
                <button className="fa-regular fa-bookmark" id="ItemSaver"></button>
                <button className="fa-solid fa-share" id="ItemSharer" onClick={ItemCopyBtn}></button>
            </div>
            <div id="Item_con_right">
                <h3 id="ItemInfo_title">Its a blue appron need during workshop activities || Only for 1000 rupees || Only in National Instituition of Technology Agartala</h3>
                <span id="ItemInfo_cost"><p>Price : </p><h6>₹350</h6></span>
                <p id="ItemInfo_discount">10% of ₹400</p>
                <span id="ItemInfo_color"><p>Colour :</p><h6>Navy blue</h6></span>
                <span id="ItemInfo_size"><p>Size :</p><h6>XL</h6></span>
                <span className="ItemFutherInfo" style={{marginTop:'2pc'}}><h6>Colour : </h6><p>Navy Blue</p></span>
                <span className="ItemFutherInfo"><h6>Material : </h6><p>Cotton</p></span>
                <span className="ItemFutherInfo"><h6>Brand : </h6><p>NITA Basics</p></span>
                <span className="ItemFutherInfo"><h6>Oldage : </h6><p>1yr</p></span>

                <div id="Item_feature">
                    <button id="AddtoCart" style={{backgroundColor:'gold'}}><i className="fa-solid fa-cart-plus"></i> Add to cart</button>
                    <button id="ItemBuynow" style={{backgroundColor:'orange'}}><i className="fa-solid fa-bag-shopping"></i> Buy now</button>
                </div>


                <span id="ItemAbout">
                    <h6>About the Item</h6>
                    <p>High-density foam roller in Black
Ideal for balance, strengthening, flexibility, and rehab exercises
Firm, durable polypropylene maintains shape; molded edges for added comfort
Lightweight and easy to carry to class and to reposition during workouts
Wipes clean easily
Product Dimensions: 12 x 6 x 6 inches (LxWxH)</p>
                </span>
            </div>
        </div>

        <div id="SimilarOptn">
            <h6 id='SimilarOptn_title'>Similar Options </h6>
            <div id="SimilarOptn_cards">
                <center className="ItemSimilar_card" >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBem9uHSMhuHqcF0AVKScMy7bpk5rk7jQ8c1nca8uSqYQwRbRiPMx26qDsb5rxLIrdPVE&usqp=CAU" alt="Image" />
                    <div className="ItemSimilar_card_info"> 
                        <h6>A Blezzer on on sell || Buy it now || to not lose it.</h6>
                        <p className="ItemSimilar_card_discount">On 10% Discount</p>
                        <h5 className="ItemSimilar_card_cost">₹1,000</h5>
                    </div><h5 id='Appron-1-satabdiGoswami' onClick={IC_cover} className="IC_cover"></h5>        
                </center>
            </div>
        </div>

        <div id="footer" style={{marginTop:'8pc'}}>
            <span><h6>NITs - Oxtioner</h6><p>All &copy;Copyrights are been reserved</p></span>
            <span><i className="fa-brands fa-instagram"></i><i className="fa-brands fa-facebook"></i><i className="fa-brands fa-telegram"></i><i className="fa-brands fa-linkedin"></i></span>
            <button onClick={HomeScrollUp} className='fa-solid fa-angle-up'></button>
        </div>

        <Cart/>
    </div>
  )
}
