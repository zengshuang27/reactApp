import React from "react"
import SwiperView from "../SwiperView"
import Tabs from "../Tabs"
import Comments from "../../containers/Details/subpage/Comments"
import BuyAndStore from "../../containers/Details/subpage/BuyAndStore"
import "./style.less"

export default class DetailsInfo extends React.Component{

    render(){
        let data = this.props.data;
        return(
            <div>
                {
                    this.props.data.imgs
                    ? <SwiperView swiperBanners={ this.props.data.imgs}/>
                    : <div>数据正在加载...</div>
                }
                
                <Tabs>
                    <div title="房源信息">
                        <div className="detail-info">
                            <h3>{ data.title }</h3>
                            <div className="box">
                                <ul>
                                    <li>
                                        <span>{ data.price }/月</span>
                                        <p>租金</p>
                                    </li>
                                    <li>
                                        <span>{ data.info.type }/月</span>
                                        <p>房型</p>
                                    </li>
                                    <li>
                                        <span>{ data.houseType }</span>
                                        <p>面积</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="info">
                                <div className="info-list">
                                    <p>楼层：{ data.info.level }</p>
                                    <p>装修：{ data.info.style }</p>
                                </div>
                                <div className="info-list">
                                    <p>类型：{ data.info.type }</p>
                                    <p>朝向：{ data.info.orientation }</p>
                                </div>
                                <div className="info-list">
                                    <p>年代：{ data.info.years }</p>
                                </div>
                            </div>
                        </div>
                        <BuyAndStore id={ this.props.id }/>
                    </div>
                    <div title="房源评价">
                        <Comments id={ this.props.id }/>
                    </div>
                </Tabs>
            </div>
        )
    }
}