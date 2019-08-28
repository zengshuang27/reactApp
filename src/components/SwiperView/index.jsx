import React from "react"
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from "./Pagination"
import "./style.less"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
export default class SwiperView extends React.Component {

    constructor(){
        super()
        this.state = {
            index:"0"
        }
    }

    handleChangeIndex(index){
        this.setState({
            index:index
        })
    }

    render() {
        const swiperBanners = this.props.swiperBanners;
        return (
            <div className="swiper">
                <AutoPlaySwipeableViews onChangeIndex={this.handleChangeIndex.bind(this)}>
                    {
                        swiperBanners.map((elem, index) => {
                            return (
                                <div className="swiper-view" key={index}>
                                    <img src={elem} alt={index} />
                                </div>
                            )
                        })
                    }
                </AutoPlaySwipeableViews>
                <Pagination  dots={ swiperBanners } index={ this.state.index }/>
            </div>
        )
    }
}