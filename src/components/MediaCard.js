import React from 'react'
// Write a new component called MediaCard that accepts 3 props: title, body, and imageUrl. Inside the component, 
//render the title in an <h2> tag, the body in a <p> tag, and pass the imageUrl into an img tag like <img src={imageUrl}/>. 
//Can you return all 3 of these things at once? Or do you need to wrap them in another element?


export default function MediaCard(props) {
    return (
        <div>
            <h2 className = "title">{props.title}</h2>
            <p className = "para">  {props.body}</p>
            <img className = "car" src={props.img} alt="" height = "500px" width = "600px" />
            <p className = "para"> { <b> Car In Black </b> }</p>
            
        </div>
    )
}
