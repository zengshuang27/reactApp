import React from "react"
import Item from "./Item"

export default class CommentsList extends React.Component{

    render(){
        const data = this.props.listData;
        return(
            <div className="commments-list" style={{padding:"10px"}}>
                {
                    data.map((element,index)=>{
                        return (
                            <Item key={index} data={element}/>
                        )
                    })
                }
            </div>
        )
    }
}