import React from "react"
import Header from "../../components/Header"
import Info from "./subpage/Info"

export default class Details extends React.Component{

    render(){
        let id = this.props.match.params.id;
        return(
            <div>
                <Header title="商品详情" history={ this.props.history } router="/shop"/>
                <Info id={id}/>
            </div>
        )
    }
}