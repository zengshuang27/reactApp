import React from "react"
import FooterNav from "../../components/FooterNav"
import HomeHeader from "../../components/HomeHeader"
import SwiperView from "../../components/SwiperView"
import Banner1 from "../../static/images/banner1.png"
import Banner2 from "../../static/images/banner2.png"
import Banner3 from "../../static/images/banner3.png"
import HomeHot from "./subpage/HomeHot"

import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

class Home extends React.Component{
    
    render(){
        return(
            <div>
                {/* this.props.history为路由的history对象 */}
                <HomeHeader cityName={ this.props.city.cityName } history={ this.props.history }/>
                <SwiperView  swiperBanners={ [Banner1,Banner2,Banner3] } />
                <HomeHot />
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
)(Home))