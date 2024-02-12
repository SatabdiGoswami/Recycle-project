import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; 

export default function Search() {
  const { For } = useParams(); 

  useEffect(() => {
    const products = document.querySelectorAll(".Search_Explore_card");
    const SC_info = document.querySelectorAll('.SC_cover');

      for(let a = 0;a < SC_info.length;a++) {
        const match = products[a].querySelector("h2");
        const textValue = match ? match.textContent || match.innerHTML : ""; 
        products[a].style.display = textValue.toUpperCase().includes(For.split('-').join('').toUpperCase()) ? "" : "none";
       }
 
    document.title = 'SearchResult : NITs Oxtionar';
    
  },[For]);
    const SearchBack=()=>{window.location.href = '/';}

    const SC_cover=(e)=>{
      var BrowseValue = e.target.id;
      window.location.href = `/Item/${BrowseValue}`; 
    }
    
  return (
    <div id='Search'>
      <div id="Search_nav">
          <button onClick={SearchBack} className="fa-solid fa-angle-left"></button>
          <input type="search" placeholder='Search Bucket, Approns, Graphics board, Scientific calculators ,Drafters ,Kettle ,Cycle etc' />
      </div>
        <p id='SearchResult'>Search for "{For.split('-').join(' ')}"</p>
      

        <div id="Search_Explore">
            <center className="Search_Explore_card" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBem9uHSMhuHqcF0AVKScMy7bpk5rk7jQ8c1nca8uSqYQwRbRiPMx26qDsb5rxLIrdPVE&usqp=CAU" alt="Image" />
                <div className="Search_Explore_card_info"> 
                    <h3 className="Search_Explore_card_discount">On 10% Discount</h3>
                    <h6>A approns on on sell || Buy it now || to not lose it</h6>
                    <h5 className="Search_Explore_card_cost">₹10,000</h5>
                </div><h2 id='Appron-1-satabdiGoswami' onClick={SC_cover} className="SC_cover">approns Souvik 10% 10,000</h2>        
            </center>
        </div>

    </div>
  )
}

