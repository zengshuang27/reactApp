import React from "react"
import "./style.less"

export default class SearchInput extends React.Component {

    constructor(){
        super();
        this.state = {
            value: ""
        }
    }

    changeHandler(event){
        this.setState({
            value:event.target.value
        })
    }

    //按enter键向父组件传递输入框的值
    keyUpHandler(event){
        if(event.keyCode !== 13){
            return;
        }
        this.props.getInputData(event.target.value);
    }

    render() {
        return (
            // 受控组件的值被state管理，需添加onChange事件，OnKeyUp为键盘事件为了向父组件传递输入框的值
            <input className="search-input"
                onChange={ this.changeHandler.bind(this) }
                onKeyUp={ this.keyUpHandler.bind(this) }
                placeholder="请输入搜索条件"
                value={ this.state.value }
            />
        )
    }
}