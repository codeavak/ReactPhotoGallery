import React,{Component} from 'react'
import ImageCard from './imagecard'
import './imagelist.css'

const ImageList=(props)=>{
return (<div>
    <h1>I'm imagelist</h1>
<div className='image-list'>
{props.imageList.map((image)=>{return (

<ImageCard key={image.id} image={image}/>)})}

</div>
</div>
)
}

export default ImageList