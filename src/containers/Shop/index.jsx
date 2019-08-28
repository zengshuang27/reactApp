import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import HomeHeader from "../../components/HomeHeader"
import SwiperView from "../../components/SwiperView"
import FooterNav from "../../components/FooterNav"
import Banner1 from "../../static/images/banner4.png"
import Banner2 from "../../static/images/banner5.png"
import Banner3 from "../../static/images/banner6.png"
import ShopList from "./subpage/ShopList"
import Buttons from "../../components/Buttons"

class Shop extends React.Component{
    render(){
        return(
            <div>
                <HomeHeader cityName={ this.props.city.cityName } history={ this.props.history }/>
                <SwiperView swiperBanners={ [Banner1,Banner2,Banner3] }/>
                <div style={{ display:"flex",margin:"10px" }}>
                    <Buttons title="找室友" />
                    <Buttons title="找房子" />
                </div>
                <ShopList cityName={ this.props.city.cityName }/>
                <FooterNav />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        city: state.city
    }
}

export default withRouter(connect(
    mapStateToProps
)(Shop))