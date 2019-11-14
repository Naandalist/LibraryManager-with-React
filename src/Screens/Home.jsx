import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {getBooks, insertBook, getSelectedGenre, getSelectedTitle} from '../Public/Redux/Actions/books' 

import 'materialize-css/dist/css/materialize.min.css';
import book from '../Asset/Icons/book.svg'
import M from "materialize-css";

import TheCard from '../Components/TheCard'
import MyCarousel from '../Components/MyCarousel'
import AddBook from '../Components/AddBook'
import Drawer from '../Components/Drawer';
//import Axios from 'axios';
import './styles/Home.css'
//import BookData from '../Asset/dataDumy/BookData';

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            //books: BookData,
            data:[[]],
            Carsl:[{}],
            tempData:[{
                title:'',
                author:'',
                year:'',
                genre:'',
                descript:'',
                status:'',
                url_image:'',
            }],
            marginTopCard:'0rem',
            page:0,
        };
    // this.onClick = this.onClick.bind(this);
    };
    
    async componentDidMount() {
        console.log('now did mount')
        await this.props.dispatch (getBooks());
        // console.log('DISINI this.props.getData.bookData WOOOOOOOOOOOOOOOOOZ: ',this.props.getData.bookData)
        // this.setState({
        //     // data: this.props.getData.bookData,
        // })
        this.paginate(this.props.getData.bookData)

        
        this.setState({
            Carsl: this.props.getData.bookData
        })
        
       
         M.AutoInit()
    };

    paginate= (data) => {
        const paginatedData= []
        let index=0;
        for (const book of data){
            if (index===0){
                paginatedData.push([])
            }
            paginatedData[paginatedData.length-1].push(book);
            index = index === 5 ? 0 : index + 1;
        }
        this.setState({
            data:paginatedData
        })
    }
    changePage= (page)=> {
        this.setState({
            page
        })
    }
    onSelectedGenre=(event) => {
        const idgenre = event.target.value
        //console.log()
        this.props.dispatch (getSelectedGenre(idgenre))
         .then(()=>{
            this.paginate(this.props.getSelectedGenre.bookData)
            this.setState({
                // data:this.props.getSelectedGenre.bookData,
                Carsl:[],
                marginTopCard:'-20rem',
            })
         })        
    }
    onSelectedTitle=(event) => {
        const title= event.target.value
        //console.log('TITLE NYAAAAA: ', title)

        this.props.dispatch(getSelectedTitle(title))
            .then(()=>{
               
                if (this.props.getSelectedTitle.bookData !== undefined ){
                    this.paginate(this.props.getSelectedTitle.bookData)
                    this.setState({
                        // data:this.props.getSelectedTitle.bookData,

                        Carsl:[],
                        marginTopCard:'-20rem',
                    })
                }
                else{
                    this.paginate([[]])
                    this.setState({
                        // data:[],
                        Carsl:[],
                        marginTopCard:'-20rem',
                    })  
                }
            })
    }

    onChangeHandle= (event) => {
        this.setState({
            tempData: {
                ...this.state.tempData,
                [event.target.name]: event.target.value
            }
        });
        // console.log('ini isi temp data title :',this.state.tempData.title)
    };

    onSubmitHandle = (event) => {
        event.preventDefault();
        const newBook = {
          title: this.state.tempData.title,
          author:  this.state.tempData.author,
          year:  this.state.tempData.year,
          genre:  this.state.tempData.genre,
        //   description:  this.state.tempData.descript,
          status: this.state.tempData.status,
          url_image: this.state.tempData.url_image,
        }
        

        const addData = async (newData) => {
           await this.props.dispatch(insertBook(newData))
           .then(() => {
                window.location.href='/'
            })
        }
        addData(newBook)
        //console.log('newbook: ',newBook) //check isi newBook data dari add modal
    }

// start render *************************************************************************************************    
    render() {
        //console.log ('check this.state.data after render', this.state.data);
        let marginTopPagination='0rem';
        if(this.state.Carsl.length < 1) marginTopPagination= '12rem'; 
 

       
 // return here ************************************************************************************************      
        return (
            <div className="allbody">

{/* start navbar-------------------------------------------------------------------------------------------- */}
            <nav style={{
                backgroundColor:'white',
                position:'fixed',
                zIndex:9,
            }}> 
            <a href="#!"  className="">
            <i data-target="slide-out" 
            className="material-icons sidenav-trigger black-text">menu</i></a>
       
            <div className="nav-wrapper container">
                <ul className="left">
                    <li>
                        <div class="input-field col s12">
                            <select onChange={this.onSelectedGenre}>
                            <option value="" disabled selected>All Categories</option>
                            <option value="1">Fantasy</option>
                            <option value="2">Biography</option>
                            <option value="3">History</option>
                            <option value="4">Medicine</option>
                            <option value="5">Religious</option>
                            </select>
                        </div>
                    </li>
                    <li>
                    {/* <div class="input-field col s5" style={{marginLeft:'1rem'}}>
                            <select>
                            <option value="" disabled selected>All Times</option>
                            <option value="1">2016</option>
                            <option value="2">2017</option>
                            <option value="3">2018</option>
                            <option value="4">2019</option>
                            <option value="5">2020</option>
                            </select>
                        </div> */}
                    </li>
                    <li>
                        
 {/* Start Search *********************************************************************************************** */}
                    {/* <li><i className="material-icons prefix grey-text" style={{marginLeft:'1rem'}}>search</i></li> */}
                    <li>
                    <div className="row">
                        <form className="col s12">
                        <div className="row">
                            <div className="input-field col" style={{marginLeft:'2rem'}}>
                            <input placeholder="Search here..." id="search-bar" className="materialize-textarea" style={{
                                backgroundColor:'white',
                                borderRadius:'15px',
                                padding:'0.2rem',
                                paddingRight:'2rem',
                                border:'solid rgba(44, 62, 80,0.2) 2px'
                                
                            }} onChange={this.onSelectedTitle}></input>
                            
                            </div>
                        </div>
                        </form>
                    </div>
                    </li>
                </li> 
                </ul>
                
{/* End Search *********************************************************************************************** */}
                {/* <ul id="nav-mobile" className="right">
                    <li> <a href="/"> <img  src={book} style={{
                        width: '30px',
                        marginTop: '-20rem',
                        marginRight: '1rem',
                        }} alt="my book icon"/></a></li>
                    <li><span style={{
                        fontWeight:'bold',
                        color:'#2c3e50',
                        fontSize:'30px'
                    }}>Library Manager</span></li>

                </ul> */}
                </div>
            
                <ul id="nav-mobile" className="right" style={{
                    marginRight:'4rem',
                    marginTop:'-4rem'
                }}>
                    <li> <a href="/"> <img  src={book} style={{
                        width: '30px',
                        marginRight: '5px',
                        marginTop:'1rem'
                        }} alt="my book icon"/></a></li>
                    <li><span style={{
                        fontWeight:'bold',
                        color:'#2c3e50',
                        fontSize:'30px'
                    }}>Library Manager</span></li>

                </ul>
            
            </nav>

{/* end navbar-------------------------------------------------------------------------------------------- */}
            
            <Drawer/>
            <AddBook
                title={this.state.tempData.title}
                author={this.state.tempData.author}
                year={this.state.tempData.year}
                genre={this.state.tempData.genre}
                descript={this.state.tempData.descript}
                status={this.state.tempData.status}
                url_image={this.state.tempData.url_image}

                onChange={this.onChangeHandle}
                onSubmit={this.onSubmitHandle.bind(this)}
            />

           <div className="carousel">
            {
                this.state.Carsl.map((book, index)=>{
                    return(
                        <MyCarousel
                        // alt={book.title.trim()}
                            key={index}
                            author={book.author}
                            cardTitle={book.title}
                            imageUrl={book.url_image}
                        />
                    );
                })
            }

           </div>

            <div className="container">
                <div className="row" style={{marginTop:`${this.state.marginTopCard}`}}>
                {
                    this.state.data[this.state.page].map((book, index)=>{
                        return(
                            <TheCard
                            to={{
                            pathname: `book/${this.state.data[this.state.page][index].id}`,
                            state: {
                                books: this.state.data[this.state.page],
                            }
                            }}
                            // alt={book.title.trim()}
                            key={index}
                            bookTitle={book.title}
                            image={book.url_image}
                            descript={book.descript}
                            />
                        );
                    })
                    }
                </div>
{/* Start Paginate **********************************************************************************************************************/}
              
                <ul className="pagination center-align" style={{marginTop:`${marginTopPagination}`}}>
                    <li className=""><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                    {
                        this.state.data.map((d, index) => (
                            <li key={index} className={this.state.page === index?'active':'waves-effect'}>
                                <Link onClick={() => { this.changePage(index) }}>
                                    { +index + 1 }
                                </Link>
                            </li>
                        ))
                    }                 
                    <li className="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                </ul>
            </div>

            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        getData: state.getBooks,
        addBook: state.insertBook,
        getSelectedGenre: state.getSelectedGenre,
        getSelectedTitle: state.getSelectedTitle,
    }
};
export default connect (mapStateToProps) (Home);