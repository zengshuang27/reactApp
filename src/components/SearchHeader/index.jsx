import React from "react"
import SearchInput from "../SearchInput"
import "./style.less"

export default class SearchHeader extends React.Component {
    //返回上一页
    clickHandler(){
        window.history.back();
    }

    /*
    子传父数据：接收输入框的值，并跳入搜索页面，输入框的值通过路由传递 
    push必须用于路由所管理的页面，但SearchHeader并没有被路由管理，
    SearchHeader被Search调用，Search被路由管理
    此时的this.props.history为接收父组件传递的history属性
    */
    getInputData(value){
        this.props.history.push(`/search/${value}`)
    }
    
    render() {
        return (
            <div id="search-header" className="clearfix">
                <span className="back-icon fl" onClick={this.clickHandler.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    <SearchInput getInputData={ this.getInputData.bind(this) }/>
                </div>
            </div>
        )
    }
}