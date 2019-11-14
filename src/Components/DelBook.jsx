import React from 'react';

import checkedIcon from '../Asset/Icons/checked.svg'

const DelBook = (props) =>{
  //console.log('nilai props id: ', props.idbook)
 
    return(
        <div id="modal3" className="modal" style={{
          borderRadius:'10px'
        }} >

        <div className="row" style={{
          marginTop:'1rem',
          marginBottom: '-4rem'
        }} >
          <div className="col s6"></div>
          <div className="col s6 right-align">
         <i onClick={props.onClick} className="modal-close material-icons prefix red-text">close</i>
          </div>
        </div>
        <div className="row">
            <div className="col s12 center-align">
                <p>
                    <img  src={checkedIcon} style={{width: '200px'}} alt="this use to edit system"/>
                </p>
                <p style={{
                    fontSize:'20px'
                }} >Data will be removed!</p>
            </div>
      </div>
      </div>
    );
}
export default DelBook;