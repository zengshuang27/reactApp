import React from "react"
import { getSearchList } from "../../../fetch/search"
import ListComponent from "../../../components/ListComponent"
import LoadingMore from "../../../components/LoadingMore"


export default class SearchList extends React.Component{

    constructor(){
        super();
        this.state = {
            searchList:[],
            hasMore: false,
            page:0,
            isLoadingMore: false //true时为加载中，false为加载完毕
        }
    }
    //组件渲染之后
    componentDidMount(){
        this.loadingFirstData();
    }
    //组件更改状态之后
    componentDidUpdate(prevProps, prevState){
        const keyword = this.props.keyword;
        //当搜索的关键字相同时，不重复网络请求
        if(keyword === prevProps.keyword){
            return;
        }
        this.loadingFirstData();
    }

    //加载更多
    loadingMoreFn(){
        this.setState({
            isLoadingMore: true
        })
        const cityName = this.props.cityName;
        const keyword = this.props.keyword;
        let page = this.state.page;
        const result = getSearchList(cityName,page,keyword);
        this.resulthttp(result);
        this.setState({
            isLoadingMore: false
        })
    }
    
    //首次加载数据 page=0
    loadingFirstData(){
        const cityName = this.props.cityName;
        const keyword = this.props.keyword;
        const result = getSearchList(cityName,0,keyword);
        this.resulthttp(result);
    }

    //网络请求
    resulthttp(result){
        console.log(this.state.page)
        result.then( res => {
            return res.json();
        })
        .then( data => {
            console.log(data);
            this.setState({
                hasMore: data.hasMore,
                searchList:this.state.searchList.concat(data.data), //数据累加
                page: this.state.page + 1
            })
        })
        .catch( error => {
            console.log(error);
        })
    }

    render(){
        let { searchList,hasMore,isLoadingMore } = this.state;
        return(
            <div>
                {
                    searchList.length > 0 
                    ? <ListComponent listData={ this.state.searchList }/>
                    : <div>数据请求中</div>
                }
                {
                    hasMore 
                    ? <LoadingMore loadingMoreFn={ this.loadingMoreFn.bind(this) } isLoadingMore={ isLoadingMore }/>
                    : <div>数据已经到底了</div>
                }

            </div>
        )
    }
}
