import React from "react"
import { getShopList } from "../../../fetch/shop"
import ListComponent from "../../../components/ListComponent"
import LoadingMore from "../../../components/LoadingMore"

export default class ShopList extends React.Component{

    constructor(){
        super();
        this.state = {
            hasMore: false,
            data: [],
            page: 0,
            isLoadingMore: false
        }
    }

    componentDidMount(){
        const cityName = this.props.cityName;
        const result = getShopList(cityName,0);
        this.resultHttp(result);
    }

    loadingMoreFn(){
        this.setState({
            isLoadingMore: true
        })
        const cityName = this.props.cityName;
        let page = this.state.page;
        const result = getShopList(cityName,page);
        this.resultHttp(result);
        this.setState({
            isLoadingMore: false
        })
    }
    

    resultHttp(result){
        result.then( res => {
            return res.json();
        })
        .then( data => {
            this.setState({
                hasMore: data.hasMore,
                data: this.state.data.concat(data.data),
                page: this.state.page + 1
            })
        })
        .catch( error => {
            console.log(error);
        })
    }

    render(){
        let { hasMore,data,isLoadingMore } = this.state;
        return(
            <div>
                {
                    data.length > 0
                    ?<ListComponent listData={ data }/>
                    :<div>正在请求数据</div>
                }
                {
                    hasMore
                    ?<LoadingMore  loadingMoreFn={ this.loadingMoreFn.bind(this) } isLoadingMore={ isLoadingMore }/>
                    :<div>数据已经到底了</div>
                }
            </div>
        )
    }
}