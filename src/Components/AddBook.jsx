import React from 'react'

const AddBook = (props) =>{

    
    return(
        <div id="modal1" className="modal">

        <div className="row" style={{
          marginTop:'1rem',
          marginBottom: '4rem'
        }} >
          <div className="col s6">
          <h4><span style={{
            fontWeight:'bold',
            marginLeft:'40px'
          }} >Add Data</span></h4>
          </div>
          <div className="col s6 right-align">
         <a href="#!"><i className="modal-close material-icons prefix red-text">close</i></a>
          </div>
        </div>
        <div className="row">
        <form onSubmit={props.onSubmit} className="col s12">
          <div className="row">
            <div  className="input-field col s12">
              {/* <i className="material-icons prefix">link</i> */}
              <input placeholder="url image" name='url_image' type='text' value={props.url_image} onChange={props.onChange} 
               id="url_image" className="materialize-textarea validate" defaultValue={""} />
               
            </div>

            <div className="input-field col s12">
              {/* <i className="material-icons prefix">short_text</i> */}
              <input placeholder="title" name='title' type='text' value={props.title} onChange={props.onChange} 
              id="title" className="materialize-textarea" defaultValue={""} />
             
            </div>

            <div className="input-field col s12">
              {/* <i className="material-icons prefix">list</i> */}
              <input placeholder="author" name='author' type='text' value={props.author} onChange={props.onChange} 
              id="author" className="materialize-textarea" defaultValue={""} />
             
            </div>

            <div className="input-field col s12">
              {/* <i className="material-icons prefix">list</i> */}
              <input placeholder="year" name='year' type='text' value={props.year} onChange={props.onChange} 
              id="year" className="materialize-textarea" defaultValue={""} />
             
            </div>


            <div className="input-field col s12">
            <select name="genre" id="genre" onChange={props.onChange}>
              <option value="" disabled selected>Genre</option>
              <option value="1">fantasi</option>
              <option value="2">biographies</option>
              <option value="3">history</option>
              <option value="4">medicine</option>
              <option value="5">religious</option>
              <option value="6">arts</option>
            </select>
                        
            </div>

            <div className="input-field col s12">
            <select name="status" id="status" onChange={props.onChange}>
              <option value="" disabled selected>Status</option>
              <option value="Available">available</option>
              <option value="Not available">not available</option>
            </select>
                        
            </div>
          </div>

          <  button className="modal-close btn waves-effect waves-light" type="submit" name="" style={{
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
export default AddBook;