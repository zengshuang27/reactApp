import React from "react"
import BuyAndStoreComponent from "../../../components/BuyAndStoreComponent"
//需要从redux获取用户是否登录的信息
import { connect} from "react-redux"
import { bindActionCreators } from "redux"
import { withRouter } from "react-router-dom"
import * as storeActions from "../../../actions/store"

class BuyAndStore extends React.Component{

    constructor(){
        super()
        this.state = {
            isStore:false
        }
    }

    //购买
    buyHandler(){
        var id = this.props.id;
        //如果登录了则可以购买，否则需要先去登录
        if(this.isLogined()){
            console.log("可以购买");
        }else{
            //注：当前页面没有被路由管理，此处之所以可以用push是因为withRouter的缘故
            //当跳转到登录页时给路由传递个路径作为参数
            this.props.history.push("/login/"+encodeURIComponent("details/"+id))
        }
    }

    //收藏
    storeHandler(){
        var id = this.props.id;
        //如果登录了则可以购买，否则需要先去登录
        if(this.isLogined()){
            this.isStored();
            //如果没收藏则可以收藏，否则为取消收藏
            if(this.state.isStore){
                this.props.storeActions.del({
                    id:id
                })
                this.setState({
                    isStore:false
                })
            }else{
                //添加收藏
                this.props.storeActions.add({
                    id:id
                })
                this.setState({
                    isStore:true
                })
            }
            
        }else{
            //注：当前页面没有被路由管理，此处之所以可以用push是因为withRouter的缘故
            //当跳转到登录页时给路由传递个路径作为参数
            this.props.history.push("/login/"+encodeURIComponent("details/"+id))
        }
    }

    //是否登录
    isLogined(){
        if(this.props.userinfo.userName){
            return true;
        }
        return false;
    }

    //是否收藏
    isStored(){
        var id = this.props.id;
        const store = this.props.store;
    
        store.some(item => { // 读到redux中每一条数据
            if(item.id === id){
              return true;
            }
        })
        
    }

    render(){
        return(
            <div>
                <BuyAndStoreComponent 
                    isStore={ this.state.isStore }
                    storeHandler={ this.storeHandler.bind(this) }
                    buyHandler={ this.buyHandler.bind(this) }
                />
            </div>
        )
    }
}

//react-redux 读取数据
function mapStateToProps(state){
    return{
        userinfo: state.userinfo,
        store:state.store
    }
}
function mapDispatchToProps(dispatch){
    return{
        storeActions: bindActionCreators(storeActions,dispatch)
    }
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(BuyAndStore))