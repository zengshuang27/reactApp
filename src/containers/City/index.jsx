import React from "react"
import Header from "../../components/Header"
import CurrentCity from "../../components/CurrentCity"
import CityList from "../../components/CityList"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { withRouter } from "react-router-dom"
import * as cityActions from "../../actions/city"
import * as utils from "../../utils"

class City extends React.Component{

    selectCityFn(cityName){
        //设置redux
        this.props.cityActions.updateCity({
            cityName: cityName
        })
        //设置本地存储
        utils.setCityDefaultName(cityName)
        //关闭当前页面
        window.history.back()
    }

    render(){
        return(
            <div>
                <Header title="城市选择"/>
                <CurrentCity  cityName={ this.props.city.cityName }/>
                <CityList selectCityFn={this.selectCityFn.bind(this)}/>
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
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(City))