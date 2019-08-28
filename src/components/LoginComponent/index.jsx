import React ,{Component}  from "react"
import './style.less'

export default class Login extends Component{
    
    constructor(){
        super()
        this.state ={
            username:""
        }
    }

    changeHandler(event){
        this.setState({
            username:event.target.value
        })
    }

    clickHandler(){
        //给后台传值
        let username = this.state.username;
        const loginHandler = this.props.loginHandler;
        loginHandler(username)
    }

    render(){
        return(
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input 
                        type="text"
                        value={ this.state.username }
                        onChange={ this.changeHandler.bind(this) }
                        placeholder="请输入用户名"
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码"/>
                </div>
                <button onClick={ this.clickHandler.bind(this) } className="btn-login">登录</button>
            </div>
        )
    }
}