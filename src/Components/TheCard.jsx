import React from 'react'
import {Link} from 'react-router-dom'
import './styles/TheCard.css'

const MyCard = (props) => {
    return(
        <div className="col s12 m4">
        <div className="shadow card hoverable right-align" style={{
            
            borderRadius: '20px',
            marginTop: '2rem',
            width: '100%',
            // border:'solid white 5px'
            
        }}>
            <div className="card-image"> 
                <img src={typeof props.image === 'string' ? props.image: 'https://res.cloudinary.com/naandalistcloud/image/upload/c_scale,h_720/v1573749313/error404_jdp1wx.jpg' } 
                // <img src={props.image} 
                alt="ERROR NOT FOUND!"
                style={{
                    height:'100px',
                    borderRadius: '20px  20px 0 0',
                }} />
            </div>
            <div className="card-content" style={{
                backgroundColor:'#eee',
                borderRadius: '0 0 20px  20px',
                height:'50%'

            }}>
            <Link to={props.to}>
                <span className="card-title center-align" style={{
                    fontWeight:'bold',
                    color:'#eb4d4b'
                }}>{props.bookTitle}</span>
            </Link>

                <p style={{
                    fontSize:'13px',
                    textAlign:'center'
                }} >{typeof props.descript === 'string' ? props.descript: 'Data not found'}</p>
            </div>
        </div>
    </div> 
    );
}
export default MyCard;