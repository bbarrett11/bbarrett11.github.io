import React, { Component } from "react";
import  "./layoutManual.css"
import { Link } from "gatsby"
import Image from "../components/image"

class Project extends Component {
    constructor(props) {
        super(props)
        this.state={picture: props.picture}
    }
    render () {
        var pic=""+this.state.picture
        console.log(pic)
        return (
        <div style={{width:"100%",border:"1px solid black",height:"100px"}}>
            <div style={{height:"100%",width:"33%",display:"inline-block",verticalAlign:"top"}}>
                <div style={{border:"1px solid black",height:"50%",textAlign:"center"}}>
                    <h3>This Site!</h3>
                </div>
                <div style={{border:"1px solid black",height:"50%",textAlign:"center"}}>
                    HTML, JS (React), CSS, Gatsby, Github 
                </div>
            </div>
            <div style={{height:"100%",width:"33%",border:"1px solid black",display:"inline-block",verticalAlign:"top",position:"relative"}}>
            <Image filename={pic} alt="test image" />
            </div>
            <div style={{height:"100%",width:"33%",display:"inline-block",verticalAlign:"top"}}>
                <div style={{border:"1px solid black",height:"50%",textAlign:"center"}}>
                    <h3><a >Github</a></h3>
                </div>
                <div style={{border:"1px solid black",height:"50%",textAlign:"center"}}>
                </div>
            </div>
        </div>
            )
    }
}
export default Project