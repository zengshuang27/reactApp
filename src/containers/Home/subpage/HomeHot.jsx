import React from "react"
import { getHomeHot,getHomeHot2 } from "../../../fetch/home"
import HotProduct from "../../../components/HotProducts"
import * as utils from "../../../utils"

export default class HomeHot extends React.Component{
    
    constructor(){
        super()
        this.state = {
            hotProduct:[],
            hotProduct2:[]
        }
    }

    componentDidMount(){
        let cityName;
        if(utils.getCityDefaultName()){
            cityName = utils.getCityDefaultName();
        }else{
            cityName= "北京"
        }
        const result = getHomeHot(cityName);
        result.then( res => {
            return res.json();
        })
        .then( data => {
            this.setState({
                hotProduct:data
            })
        })
        .catch( error => {
            console.log(error);
        })

        const result2 = getHomeHot2(cityName);
        result2.then( res => {
            return res.json();
        })
        .then( data => {
            this.setState({
                hotProduct2:data
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
                    this.state.hotProduct.length >0 ?
                    <div>
                        <HotProduct hotProduct={this.state.hotProduct} title="热销产品"/>
                    </div>
                    : <div>数据正在加载</div>
                }

                {
                    this.state.hotProduct2.length >0 ?
                    <div>
                        <HotProduct hotProduct={this.state.hotProduct2} title="热门推荐"/>
                    </div>
                    : <div>数据正在加载</div>
                }
            </div>
        )
    }
}