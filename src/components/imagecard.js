import React,{Component} from 'react'

class ImageCard extends Component {
    constructor(props){
        super(props);
        this.state={spans:0}
        this.imageRef=React.createRef();
                }

                printHeight=()=>{
                    console.log(this.imageRef.current.clientHeight)
                    const height=this.imageRef.current.clientHeight
                    const spans=Math.ceil((height/10)+1)
                    this.setState({spans})
                }
    render(){
    const {urls,description}=this.props.image;
    return (

    <img style={{gridRowEnd:`span ${this.state.spans}`}} onLoad={this.printHeight} ref={this.imageRef} src={urls.regular} alt={description}/>
)}
}
export default ImageCard