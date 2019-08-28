import React from "react"
import "./style.less"
import { submitCommentData } from "../../../fetch/order/comment"

export default class Item extends React.Component{

    constructor(){
        super()
        this.state = {
            commentState:0 //0:未评价 1:评价中 2:已评价
        }
    }

    componentDidMount(){
        this.setState({
            commentState:this.props.data.commentState
        })
    }

    //评价
    commentShow(){
        this.setState({
            commentState:1
        })
    }

    //提交评价
    submitHandler(){
        this.setState({
            commentState:2
        })
        
        // 提交给后台
        var textareaContent = this.refs.commentText.value;
        var id = this.props.data.id;
        const result = submitCommentData({
            id:id,
            comment:textareaContent
        })
        result.then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data);
        })
        .catch( error => {
            console.log(error);
        })

        
    }

    //取消评价
    cancleHandler(){
        this.setState({
            commentState:0
        })
    }

    render(){
        const data = this.props.data
        return(
            <div className="order-item-container clearfix">
                <div className="order-item-img fl">
                    <img src={data.img}/>
                </div>
                
                <div className="order-item-comment fr">
                    {
                        this.state.commentState === 0 
                        ? <button onClick={ this.commentShow.bind(this) } className="btn">评价</button>
                        : this.state.commentState === 1
                        ? ""
                        : <button className="btn unseleted-btn">已评价</button>
                    }
                    
                </div>

                <div className="order-item-content">
                    <span>商户：{data.title}</span>
                    <span>类型：{data.houseType}</span>
                    <span>价格：￥{data.price}</span>
                </div>
                {
                    this.state.commentState === 1 ?
                    <div className="comment-text-container">
                        <textarea style={{width: '100%', height: '80px',padding: '5px'}} className="comment-text" ref="commentText"></textarea>
                        <button className="btn" onClick={ this.submitHandler.bind(this) }>提交</button>
                        &nbsp;
                        <button className="btn unseleted-btn" onClick={ this.cancleHandler.bind(this) }>取消</button>
                    </div>
                    : ""
                }
            </div>
        )
    }
}