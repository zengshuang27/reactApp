import React from "react"
import "./style.less"

export default class BuyAndStoreComponent extends React.Component{

    buyClickHandler(){
        //接收父组件的属性从而实现调用父组件的方法
        this.props.buyHandler();
    }

    storeClickHandler(){
        this.props.storeHandler();
    }

    render(){
        console.log(this.props.isStore)
        return(
            <div className="buy-store-container clearfix">
                <div className="item-container fl">
                    {
                        this.props.isStore
                        ? <button onClick={ this.storeClickHandler.bind(this) } className="stored">已收藏</button>
                        : <button onClick={ this.storeClickHandler.bind(this) } className="store">收藏</button>
                    }
                    
                </div>
                <div className="item-container fr">
                    <button onClick={ this.buyClickHandler.bind(this) }>预定</button>
                </div>
            </div>
        )
    }
}
