import React from "react"
import { getComments } from "../../../fetch/details"
import CommentsList from "../../../components/CommentsList"
import LoadingMore from "../../../components/LoadingMore"

export default class Comments extends React.Component{

    constructor(){
        super()
        this.state = {
            hasMore:false,
            data:[],
            isLoadingMore:false
        }
    }

    componentDidMount(){
        this.http()
    }

    //网络请求
    http(){
        const id = this.props.id;
        const result  = getComments(id);
        result.then( res => {
            return res.json();
        })
        .then( data => {
            this.setState({
                hasMore: data.hasMore,
                data: this.state.data.concat(data.data)
            })
            
        })
        .catch( error => {
            console.log(error);
        })
    }

    //加载更多
    loadingMoreFn(){
        this.setState({
            isLoadingMore:true
        })
        this.http();
        this.setState({
            isLoadingMore:false
        })
    }   

    render(){
        let { data,hasMore,isLoadingMore } = this.state;
        return(
            <div>
                {
                    data.length > 0
                    ? <CommentsList listData = { data }/>
                    :<div>数据正在请求中</div>
                }
                {
                    hasMore
                    ? <LoadingMore loadingMoreFn={ this.loadingMoreFn.bind(this) } isLoadingMore={ isLoadingMore } />
                    : <div>评论到底咯！！！</div>
                }
            </div>
        )
    }
}