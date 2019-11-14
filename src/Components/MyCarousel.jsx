import React from 'react'

const MyCarousel =(props) =>{

        return(
            <div className="carousel-item" style={{
                paddingTop:'5%',
                width: '30%',
                height:'100%'
            }} >
                <div className="col s3 m3">
        <div className="card z-depth-2" style={{
            borderRadius: '20px',
            marginTop: '2rem',
            display: 'inline-block',
            width: '100%',
           
            
        }}>
            <div className="card-image">
                <img src={props.imageUrl} 
                alt="terletak gambar untuk cover"
                style={{
                    borderRadius: '20px  20px 20px 20px',
                }} />
                <div className="card-title" style={{
                    backgroundColor:'rgba(116, 185, 255, 0.2)',
                    borderRadius:'0 0 20px 20px',
                    width: '100%'
                }} >

                     <span style={{
                         color:'white',
                         fontWeight:'bold',
                         fontSize:'30px',
                         
                     }}  >{props.cardTitle}</span><br/>
                     <span  style={{
                         color:'white',
                         fontSize:'13px',
                         fontWeight:'bold',
                     }} >{props.author}</span>
                    {/* <span>{props.imageUrl}</span> */}

                </div>
               

            </div>
        </div>
    </div> 
            </div>
        );
    
}

export default MyCarousel;