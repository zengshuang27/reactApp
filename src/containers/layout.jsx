import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { withRouter } from "react-router-dom"
import * as cityActions from "../actions/city"
import * as utils from "../utils"

class Layout extends React.Component{

    componentDidMount(){

        //获取本地存储的值
        const cityName = utils.getCityDefaultName()
        if(cityName){
            this.props.cityActions.updateCity({
                cityName: cityName
            })
        }else{
            this.props.cityActions.updateCity({
                cityName: "北京"
            })
        }
    }

    render(){
        return(
            <div>
                { this.props.children }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        city: state.city
    }
}

function mapDispatchToProps(dispatch){
    return{
        cityActions: bindActionCreators(cityActions,dispatch)
    }
}
export default  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout))