import React from "react"
import "./style.less"

export default class Header extends React.Component{

    clickHandler(){
        //当父级调用Header组件是，如果有传递返回上一级是的路径则点击后退时回到指定路径的页面，否则就回退到单纯的上一页面
        const router = this.props.router;
        if(router){
            this.props.history.push(router);
        }else{
            window.history.back();
        }
    }

    render(){
        return(
            <div id="common-header">
                <span className="back-icon" onClick={this.clickHandler.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{ this.props.title }</h1>
            </div>
        )
    }
}