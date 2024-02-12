import React, { useState } from 'react'; 

export default function SellBox() {

    const SellBox_Closer=()=>{document.getElementById('Con_SellBox').style.display = 'none';}

    const [imageSrc, setImageSrc] = useState('');

  const handleImageChange=(e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      document.getElementById('Seller_ImgBox').style.height = 'fit-content';
      if(window.innerWidth <= '300px'){
        document.getElementById('Seller_ImgBox').style.minWidth = '90%';
      }
    };
    if(file){reader.readAsDataURL(file);}
  };

  
    

  return (
    <div id='Con_SellBox'>
        <div id="SellBox">
            <div id="SellBox_nav"><button onClick={SellBox_Closer} className="fa-solid fa-angle-left"></button><h6>Application</h6> <button id="SellSubmitter"><i className='fa-solid fa-paper-plane'></i> send</button></div>
            <div id="SellBox_con">
                    <label style={{width:'fit-content'}} htmlFor="Seller_ImgSelector"><img id="Seller_ImgBox" src={imageSrc} alt="" /></label>
                    <input type="file" onChange={handleImageChange} id='Seller_ImgSelector' style={{display:'none'}} /> 
                <div id="SellBox_conRight">
                    <input type="text" placeholder='Title for yout Item' id="SellerTitle" />
                    <span id="SellerCost"><input type="number" placeholder='Cost'/></span>
                    <textarea id="SellerDesc" placeholder='Description' />
                </div>
            </div>
        </div>
    </div>
  )
}
