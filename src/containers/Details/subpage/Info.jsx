import React from "react"
import { getDetails } from "../../../fetch/details"
import DetailsInfo from "../../../components/DetailsInfo"


export default class Info extends React.Component{

    constructor(){
        super()
        this.state = {
            data:{
                imgs:[],
                title:"",
                price:"",
                rentType:"",
                houseType:"",
                info:{
                    years:"",
                    type:"",
                    level:"",
                    style:"",
                    orientation:""
                }
            }
        }
        
    }
    
    componentDidMount(){
        let id = this.props.id;
        const result = getDetails(id)
        result.then( res => {
            return res.json()
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
                    this.state.data
                    ?<div>
                        <DetailsInfo data={ this.state.data } id={ this.props.id }/>
                    </div>
                    :<div>数据正在加载</div>
                }
            </div>
        )
    }
}