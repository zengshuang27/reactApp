import React from "react"
import "./style.less"

export default class Tabs extends React.Component{

    render(){
        return(
            <button className="buttons">{ this.props.title }</button>
        )
    }
}