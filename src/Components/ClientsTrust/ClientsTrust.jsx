import React from 'react';
import "./ClientsTrust.css";


const ClientsTrust = ({images}) => {
  return (
    <div>
        {/* <p className='home-why-head'>Why Clients Trust MKTXS</p>
        <div className="clients-trusts" style={{backgroundColor:"white"}}>
          {images?.map((image, index) => (
            <div>
              <div key={index} className="image-card" style={{backgroundColor:"white"}}>
                <img src={image.src } alt={image.alt} />
                <div className="image-overlays">
                  <p>{image.text}</p>
                </div>
              </div>
              <p className='alt-name' >{image?.alt}</p>
            </div>
          ))}
        </div> */}
    </div>
  )
}

export default ClientsTrust
