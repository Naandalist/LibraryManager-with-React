import React from 'react'

const EditBook = (props) =>{

    return(
        <div id="modal2" className="modal" style={{
          borderRadius:'10px'
        }} >

        <div className="row" style={{
          marginTop:'1rem',
          marginBottom: '-4rem'
        }} >
          <div className="col s6">
          <h4><span style={{
            fontWeight:'bold',
            marginLeft:'40px'
          }} >Edit Data</span></h4>
          </div>
          <div className="col s6 right-align">
         <i className="modal-close material-icons prefix red-text">close</i>
          </div>
        </div>
        <div className="row">
        <form onSubmit={props.onSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">link</i>
              <input name="url_image" id="url_image" className="materialize-textarea" 
               value={props.url_image}  onChange={props.onChange}  />
              
            </div>

      
            <div className="input-field col s12">
              <i className="material-icons prefix">short_text</i>
              <input name="title"  id="title" className="materialize-textarea" 
              value={props.title}  onChange={props.onChange} />
             
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">list</i>
              <textarea name="book_descript" id="book_descript" className="materialize-textarea"
              value={props.book_descript} onChange={props.onChange} />
              
            </div>
          </div>

          <button className="modal-close btn waves-effect waves-light" type="submit" name="" style={{
              marginLeft:'90%',
              backgroundColor:'#f1c40f',
              color:'#2c3e50',
              marginTop:'-2rem'
          }} >Save
          </button>
        </form>
      </div>
      </div>
    );
}
export default EditBook;