import React from "react"
import LoginComponent from "../../components/LoginComponent"

//当点击登录时需要把用户信息放到redux里
import { connect} from "react-redux"
import { withRouter } from "react-router-dom"
import { bindActionCreators } from "redux"
import * as userinfoActions from "../../actions/userinfo"

class Login extends React.Component{

    loginHandler(userName){
        //设置redux的值
        this.props.userinfoActions.login({
            userName:userName
        })
        //从哪来登录完再返回到哪里去
        const router = this.props.match.params.router;
        this.props.history.push('/'+decodeURIComponent(router))

    }
    
    render(){
        return(
            <div>
                <LoginComponent loginHandler={ this.loginHandler.bind(this) }/>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        userinfo: state.userinfo
    }
}
function mapDispatchToProps(dispatch){
    return{
        userinfoActions : bindActionCreators(userinfoActions,dispatch)
    }
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login))