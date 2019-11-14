import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { connect } from 'react-redux';
import {updateBook} from '../Public/Redux/Actions/books' 

import M from "materialize-css";
import Axios from 'axios'
import EditBook from '../Components/EditBook'
import DelBook from '../Components/DelBook'
import pointingToLeft from '../Asset/Icons/pointing-to-left.svg'
import editIcon from '../Asset/Icons/edit-icon.svg';
import delIcon from '../Asset/Icons/delete-icon.svg';

import './styles/BookDetail.css'
//import BookData from '../Asset/dataDumy/BookData';

class BookDetail extends Component{

    constructor(props){
      
      super(props);
      this.state={
        books: [],
        id:0,
        detail:{
          id:'',
          title:'',
          author:'',
          year:'',
          genre:'',
          descript:'',
          status:'',
          url_image:'',
          updated_at:'',
          book_descript:'',
        }
      }
    }
   
   async componentDidMount() {
  M.AutoInit();
  
  console.log('telah did mount')
  console.log('DISINI this props match params',this.props.match.params.idbook)
 this.setState({

 })
  
// get slected data from complreted object **********************************************************************************
    if (this.props.location.state){
      const {idbook} = this.props.match.params;
      const {books} = this.props.location.state;

      this.setState({
          id: idbook,
          detail: books.filter(book => idbook === String(book.id))[0],
        });
      }
    }

    deleteButtonHandler = () => {
      const {idbook} = this.props.match.params;
      let url = `http://localhost:7777/api/v1/books/book?id=${idbook}`
      Axios.delete(url)
        .then(response => {
          // console.log('response :', response)
          // console.log('RESPONSE STATUS: ', response)
          window.location.href = '/'
        })
        .catch(error => {
          console.log('error: ', error)
        })
    }

    OnChangeHandler = event => {
      console.log('event target value: ', event.target.value)
      console.log('event target name: ', [event.target.name])

      this.setState({
        detail: {
            ...this.state.detail,
            [event.target.name]: event.target.value
        }
    });
      console.log('state detail title: ', this.state.detail.title)
    };

    editButtonHandler = (event) => {
      console.log('button edit is working')
      event.preventDefault();

      //console.log('apakah title sudah berubah: ', this.state.detail.title)
      const editedBook = {
        title: this.state.detail.title,
        url_image: this.state.detail.url_image,
        book_descript: this.state.detail.book_descript,
        
      }
      const {idbook} = this.props.match.params;
      const updateData= async (a, b) => {
        await this.props.dispatch(updateBook(a, b))
          .then (() =>{})
      }
      updateData(idbook, editedBook)
    }
    
    

    render(){

      //console.log('temporBook: ', this.state.temporBook)
      // console.log('DISINI nilai state detail URL BROO: ', this.state.detail.url_image)
      console.log('DISINI nilai state detail DOANG: ', this.state.detail)
      console.log('DISINI nilai state books: ',this.props.location.state.books)
     
      let btnStatus=''
      if (this.state.detail.status.toLowerCase() !== 'available') btnStatus ='disabled';
  
      //handle date
      let arrDate = this.state.detail.updated_at.slice(0, 10).split('-').reverse()
        switch (Number(arrDate[1])){
          case 1:
            arrDate[1] = 'January'; break;
          case 2:
            arrDate[1] = 'February'; break;
          case 3:
            arrDate[1] = 'March'; break;
          case 4:
            arrDate[1] = 'April'; break;
          case 5:
            arrDate[1] = 'May'; break;
          case 6:
            arrDate[1] = 'June'; break;
          case 7:
            arrDate[1] = 'July'; break;
          case 8:
            arrDate[1] = 'August'; break;
          case 9:
            arrDate[1] = 'September'; break;
          case 10:
            arrDate[1] = 'Oktober'; break;
          case 11:
          arrDate[1] = 'November'; break;
          case 12:
            arrDate[1] = 'Desember'; break;
          default:
            arrDate[1]= 'Month undefined'; break;
        }

  return(
            <>
        <div>
            <div style={{
                zIndex:9,
                position:'fixed',
                margin:'0 auto',
            }} >
            <div className="row">
          
          <a href="http://localhost:3000/" className="waves-effect waves-light" style={{
            marginLeft:'3rem',
            marginTop:'30px'
          }} >
             <img  src={pointingToLeft} style={{width: '40px'}} alt="arrow pointing left icon"/></a>
         
  <EditBook 
     url_image={this.state.detail.url_image}
     title={this.state.detail.title}
     book_descript={this.state.detail.book_descript}

    onChange={this.OnChangeHandler}
    onSubmit={this.editButtonHandler.bind(this)}    
  />

         
          <a href="#modal2" className="waves-effect waves-light modal-trigger" style={{
            marginLeft:'65rem',
            marginTop:'30px'
          }} >
             <img   src={editIcon} style={{
               width: '90px',
               }} alt="this use to edit system"/></a>
          
  <DelBook
  onClick={this.deleteButtonHandler}
  />
          <a href="#modal3" className="waves-effect waves-light modal-trigger" style={{
            marginLeft:'1rem',
            marginTop:'30px',
          }} >
             <img  src={delIcon} style={{width: '90px'}} alt="this use to delete system"/></a>
          

        </div>
            </div>

        <div className="parallax-container">
          <div className="parallax"><img src={this.state.detail.url_image} alt="gambar dari paralax satu"/></div>
        </div>
        <div className="section white allbody">
          <div className="row container">
                      
              <div className="col s8">
              
              <div className="row">
              <div className="col s8">
                  <span className="new badge" data-badge-caption="" style={{
                    color:'black',
                    fontWeight:'bold',
                    backgroundColor:'#f1c40f',
                    marginRight:'85%'
              }} >{this.state.detail.genre}</span>

                <h2 className="header">{this.state.detail.title}</h2>
                {
                  
                }
                <p>{arrDate.join(' ')}</p>
              </div>
              <div className="col s4">
              <h5 className="right-align" style={{
                color:'#f39c12',
                fontWeight:'bold',
                marginTop:'3rem',
              }} >{this.state.detail.status} </h5>
              </div>
              </div>
              
           

              <p className="grey-text text-darken-3 lighten-3 "style={{
                textAlign:'justify'
              }} >{this.state.detail.descript} </p>
              <p className="grey-text text-darken-3 lighten-3 "style={{
                textAlign:'justify'
              }}>{this.state.detail.book_descript} </p>
             
              
              </div>
              <div className="col s4">
              
              <img className="z-depth-3" src={this.state.detail.url_image} style={{
                width: '200px',
                borderRadius:'7px',
                marginLeft:'78%',
                marginTop:'-30%',
              }} alt="badge book icon"/>

              <button className={`btn ${btnStatus} waves-effect waves-light z-depth-2`}
              type="submit" style={{
              marginLeft:'100%',
              backgroundColor:'#f1c40f',
              color:'#2c3e50',
              marginTop:'130%'
              }} >Borrow
              </button>
              </div>           
          </div>
        </div>
      </div>
          
            </>
        );
    }
}
const mapStateToProps=(state) => {
  return {
    updateBook: state.updateBook,
  }
}

export default connect (mapStateToProps) (BookDetail);