import React from "react"
import "./style.less"
import { Link } from "react-router-dom"
import SearchInput from "../SearchInput"

export default class HomeHeader extends React.Component {

    /*
    子传父数据：接收输入框的值 
    push必须用于路由所管理的页面，但HomeHeader并没有被路由管理，
    HomeHeader被Home调用，Home页面被路由所管理
    此时的this.props.history为接收父组件传递的history属性
    */
    getInputData(value){
        this.props.history.push(`/search/${value}`)
    }

    render() {
        return (
            <div id="home-header" className="clearfix">
                <div className="home-header-left fl">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right fr">
                    <Link to="/cart">
                        <i className="iconfont icon-car"></i>
                    </Link>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput getInputData={ this.getInputData.bind(this) }/>
                    </div>
                </div>
            </div>
        )
    }
}