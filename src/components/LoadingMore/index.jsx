import React from "react"

export default class LoadingMore extends React.Component{

    componentDidMount(){
        //读取父级传递的加载更多事件
        const loadingMoreFn = this.props.loadingMoreFn;
        //获取dom元素
        const dom = this.refs.dom;
        //获取当前浏览器视口高度
        const windowH = window.screen.height;
        //增加定时器，监听滚动事件的值
        var timer;

        function callback(){
            //获取dom元素距离顶部的值，getBoundingClientRect:获取当前元素距离四个方向的值
            let top = dom.getBoundingClientRect().top;
            //如果top的值小于浏览器视口高度，则加载更多
            if(top && top < windowH){
                loadingMoreFn();
            }
        }

        //监听滚动事件
        window.addEventListener("scroll",function(){
            //如果数据正在加载中，则不再进行网络请求，否则加载数据
            if(this.props.isLoadingMore){
                return;
            }
            if(timer){
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                callback();
            }, 100)
        }.bind(this))
    }

    render(){
        return(
            <div className="loading-more" ref="dom">
                {
                    this.props.isLoadingMore
                    ? <div>数据正在加载中</div>
                    : <div>加载更多...</div>
                }
            </div>
        )
    }
}