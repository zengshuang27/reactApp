import React from "react"
import Header from "../../components/Header"
import UserInfo from "../../components/UserInfo"
import Order from "./subpage/Order"
import { connect} from "react-redux"
import { withRouter } from "react-router-dom"

class Cart extends React.Component{

    componentDidMount(){
        if(this.isLogined()){
            console.log("已登录");
        }else{
            this.props.history.push("/login/"+encodeURIComponent("cart"))
        }
    }

    //是否登录
    isLogined(){
        if(this.props.userinfo.userName){
            return true
        }
        return false;
    }
    
    render(){
        return(
            <div>
                <Header title="购物车" history={ this.props.history } router="/home"/>
                <UserInfo userName={ this.props.userinfo.userName } cityName={ this.props.city.cityName }/>
                <Order userName={ this.props.userinfo.userName }/>
            </div>
        )
    }
}

//react-redux 读取数据
function mapStateToProps(state){
    return{
        userinfo: state.userinfo,
        city: state.city
    }
}

export default withRouter(connect(
    mapStateToProps
)(Cart))