import React from "react"
import { getOrderList } from "../../../fetch/order"
import OrderListComponent from "../../../components/OrderListComponent"

export default class Order extends React.Component{

    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        const userName = this.props.userName;
        const result = getOrderList(userName);
        result.then( res => {
            return res.json();
        })
        .then( data => {
            this.setState({
                data:data
            })
        })
        .catch( error => {
            console.log(error);
        })
    }


    render(){
        return(
            <div>
                {
                    this.state.data.length > 0
                    ? <OrderListComponent data={this.state.data}/>
                    : <div>数据正在加载...</div>
                }
            </div>
        )
    }
}