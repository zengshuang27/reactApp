import React from "react"
import "./style.less"

export default class Tabs extends React.Component{

    constructor(){
        super()
        this.state = {
            currentIndex:0
        }
    }

    //头部高亮切换
    check_title_index(index){
        return this.state.currentIndex === index ? "Tab-title active " : "Tab-title"
    }

    //内容切换
    check_content_index(index){
        return this.state.currentIndex === index ? "Tab-item show " : "Tab-item"
    }

    clickHandler(index){
        this.setState({ 
            currentIndex:index 
        })
    }

    render(){
        return(
            <div>
                {/* title区域 */}
                <div className="Tab-title-wrapper">
                    {
                        React.Children.map(this.props.children,(element,index) => {
                            return (
                                <div onClick={ this.clickHandler.bind(this,index) } className={ this.check_title_index(index) }>{ element.props.title}</div>
                            )
                        })
                    }
                </div>
                {/* 内容区域 */}
                <div className="Tab-item-wrapper">
                    {
                        React.Children.map(this.props.children,(element,index) => {
                            return (
                                <div className={ this.check_content_index(index) }>{ element }</div>
                            )
                        })
                    }
                </div>
            </div>
               
        )
    }
}