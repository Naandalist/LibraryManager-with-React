import React from 'react'

const Drawer = () => {

       return(
        <div>
        <ul id="slide-out" className="sidenav">
          <li><div className="user-view"> 
                <img src="https://res.cloudinary.com/naandalistcloud/image/upload/v1573126729/icon-male_ep884n.png" style={{
                  width:'200px'
                }}
                alt="terletak gambar user di pinggir" />
                <p style={{
                  fontSize:'30px',
                  textAlign:'left',
                  marginTop:'-20px',
                  marginLeft:'30px'

                }} >Naandalist</p>
            </div></li>
          <li><div className="divider" /></li>
          <li><a href="#!"><i className="material-icons">near_me</i>Explore</a></li>
          <li><a href="#!"><i className="material-icons">history</i>History</a></li>
          <li><a href="#modal1" className="waves-effect waves-light modal-trigger"
          ><i className="material-icons">add_circle</i>Add Book*</a></li>  
          
        </ul>
        
       
      </div>
    );
   
}

export default Drawer;