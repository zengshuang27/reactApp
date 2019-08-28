import React from "react"
import Item from "./Item"
import "./style.less"

export default class OrderListComponent extends React.Component{

    render(){
        const data = this.props.data
        return(
            <div className="order-container">
                <h3>订单信息</h3>
                {
                    data.map((item,index) => {
                        return <Item key={index} data={item}/>
                    })
                }
            </div>
        )
    }
}