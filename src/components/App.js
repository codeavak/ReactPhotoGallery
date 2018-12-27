import React, { Component } from 'react';
import Unsplash from '../api/unsplash'
import SearchBar from './searchbar'
import ImageList from './imagelist'


class App extends Component {
  
  componentDidUpdate(){
    console.log(`App component received this new search term from the SearchBar component:${this.state.keyword}`)
  }

  changeKeyword=(word)=>{
    this.setState({keyword:word});

    Unsplash.get('search/photos',{
      params:{query:word}}
      
      ).then((response)=>{console.log(response.data.results);
     
        this.setState({images:response.data.results})
      })
  }
  constructor(props){
    super(props);
    this.state={keyword:'',images:[]};
  }
  
  render() {
    
    return (
     <div>
        <SearchBar changeKeyword={this.changeKeyword}/>
       <ImageList imageList={this.state.images}/>
     </div> 
    )
  }
}

export default App;
