import React,{Component} from 'react'

class SearchBar extends Component{
    onTxtChangeHandler=(e)=>{
        this.setState({textBoxValue:e.target.value});

    }

    onSubmitHandler=(e)=>{
        e.preventDefault();
        console.log(`submitting new search term value to APP component: ${this.state.textBoxValue}`);
        this.props.changeKeyword(this.state.textBoxValue)
    }

    constructor(props){
        super(props)
        this.state={textBoxValue:''}
    }

    render(){
return (<div className='ui segment container' style={{marginTop:'10px'}} >
<form className='ui form' onSubmit={this.onSubmitHandler}>
<div className='field'>
<label>Enter Keyword:
<input type='text' id='keyword' value={this.state.textBoxValue} onChange={this.onTxtChangeHandler}/></label>
</div>

</form>
</div>)}
}

export default SearchBar