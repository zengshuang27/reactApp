react开发移动端商城项目流程

1.react环境搭建 cnpm install
2.less配置
      1.拉去配置 npm run eject
      2.安装 cnpm install --save-dev less less-loader
      3.config目录的webpack.config.js下仿照sass复制一份
3.配置路由
      cnpm install --save react-router react-router-dom
4.资源目录创建
      1.src——资源文件目录，一般创建的资源文件都在src根目录下
      2.router——路由文件夹
            1.appRouter.js——主路由接口
            2.subRouter.js——底部导航路由接口
      3.static——静态资源文件夹，存放css、images、font等
      4.contains——页面容器文件夹
      5.components——组件文件夹
            组件一般可以供多处使用，一般作为木偶组件只呈现视图，显示的数据为调用者提供
            1.HomeHeader——顶部搜索组件
            2.FooterNav——底部导航组件
      6.server——服务器文件夹
5.三方插件使用——react-swipeable-views轮播
      1.GitHub资源搜索
      2.安装 npm install --save react-swipeable-views
6.配置模拟服务器
      1.koa——基于nodejs的下一代前端框架(express原班人马打造)
      2.搭建服务器数据
            1.安装express cnpm install --save express
            2.与src同级创建hock文件夹(模拟数据库)
                  data文件夹——存放本地数据
                  index.js——服务器主入口文件（需定义变量，通过require方式引入）
                  router.js——后端路由接口，通过module.exprots导出(与nodejs相同)
      3.通过fetch进行网络请求
            1.处理本地跨域请求
                  1.在src根目录下创建setupProxy.js
                  2.安装中间件http-proxy-middleware 
                  cnpm install --save-dev http-proxy-middleware
            2.在containers目录下创建fetch文件夹，
                  fetch => http => get.js/post.js
                  1.get.js 
                        fetch(url,{
                              methods:请求方式,
                              headers：{}
                        })
                  2.post.js
                        fetch(url,{
                              methods:请求方式,
                              headers:{},
                              body:传递的参数 //需要把json对象格式转化成form-data形式进行传递,
                              ?name=linda&age=20
                        })
                        解析方法：
                        1.自定义函数
                              function stringify(obj) {
                                    var result = ""; // 接受最后的结果  {name:iwen,age:20}
                                    var item;
                                    for (item in obj) { // &user_id=iwen&age=20&sex=nan
                                          result += "&" + item + "=" + encodeURIComponent(obj[item]);
                                    }
                                    if (result) {
                                          result = result.slice(1) // user_id=iwen&age=20&sex=nan
                                    }
                                    return result;
                              }
                        2.通过安装mysql cnpm install --save-dev mysql
                              require("qs"),通过queryString.stringify()可以把对象解析成字符串

      4.运行服务器 node index.js
7.首页推荐列表
      1.在containers目录下创建智能组件，用于接收数据，一般网络请求放在页面渲染结束后的componentDidMount()中加载
      2.在components目录下创建相应的木偶组件，只用于视图呈现，可被重复调用，只需调用者传入不同数据即可
8.城市选择
      1.创建组件
            1.创建智能组件：containers->City文件夹(调用木偶组件)
            2.创建木偶组件：components目录下
                  Header——公共头
                  CurrentCity——选择的城市
                  CityList——城市列表
      3.数据传递
            1.父传子 this.props.property
            2.子传父 在父组件中把自定义事件传递给子组件，自组件点击事调取父组件的自定义事件
      4.事件传参
            { this.eventFn.bind(this,param) }     
      5.回到上一页
            widow.history.back()
      6.需要redux数据共享
            1.安装 cnpm install --save redux react-redux redux-devtools
            2.constants-》actions-》reducers-》store
            3.主入口文件(index.js)关联redux(引入Provider对象来源于react-redux)
            4.在需要设置redux数据或者读取redux数据的组件内通过引入connect对象来源于react-redux
                  import { connect } from "react-redux"  //文件关联
                  import { bindActionCreators } from "redux" //设置actions
                  import * as cityActions from "../actions/city //引入action文件
                  import withRouter from "react-router-dom" //防止路由跳转内容无更新
                  //读取redux数据
                  function mapStateToProps(state){
                        return {
                              city: state.city
                        }
                  }
                  //设置redux数据
                  function mapDispatchToProps(dispatch){
                        return {
                              cityActions: bindActionCreators(cityActions,dispatch)
                        }
                  }
                  exprot default withRouter(connect(
                        mapStateToProps，
                        mapDispatchToProps
                  )(组件名))
      7.本地存储——localStorage
            1.设置本地存储：localStorage("key","value")
            2.获取本地存储：localStorage("key")
            3.清楚本地存储：localStorage.clear()
      8.数据加密处理
            1.encodeURIComponent——转码
            2.decodeURIComponent——解码
      9.后端接收参数
            1.需要在模拟数据库路由文件中定义url
                  const url = require("url")

                  router.get(url,(req,res) => {
                        const urlPath = url.parse(req.url,true);
                        const query = urlPath.query; //参数主要通过query获取
                        res.send({
                              key: query.property
                        })
                  })
9.搜索页面
      0.页面结构 Search->SearchList->ListComponent->Item
      1.搜索页面携带参数跳转
            1.Search页面被路由管理
            2.文本框——受控组件
                  1.受控组件的值在state中管理
                  2.必须有一个onChange事件，否则文本框的值无法改变
                        changeHandler(event){
                              value:event.target.value
                        }
                  3.文本框监听键盘事件(onKeyUp)
                        按enter键时跳到Search页面,并把文本框输入的值传回父组件
                        keyUpHandler(event){
                              if(event.keyCode !== 13){
                                    return;
                              }
                              this.props.getInputData(event.target.value);
                        }
            3.页面跳转
                  1.SearchInput组件被SearchHeader和HomeHeader调用当按enter后需要跳转到Search页面，需通过路由的push属性进行跳转，但push只能用于跳转被路由管理的页面，SearchHeader和HomeHeader都没有被路由管理，但SearchHeader被Search调用，HomeHeader被Home调用，这两个页面被路由所管理，所以在SearchHeader和HomeHeader的方法中可以接收父组件的history属性进行跳转
                  getInputData(value){
                        this.props.history.push("/search")
                  }
                  此时在Search和Home页面需给子组件传递的history属性为调用路由本身的history对象
                  history={ this.props.history }
            4.参数传递
                  1.在SearchInput输入框中的值需要在Seach页面进行应用，那么值只能通过路由地址的方式进行传递(SearchHeader)
                        getInputData(value){
                              this.props.history.push(`/search/${value}`)
                        }
                  2.路由里也需要动态配置参数(subRouter.js)
                        <Route path="/search/:keyword" component={Search}></Route>
                  3.Seach页面向SearchList页面传递输入框的值
                       keyword={ this.props.match.params.keyword } 
                  4.SearchList页面就可以通过{this.props.keyword}获取到输入框中的值进行使用
      2.搜索页面服务器配置
            1.搜索页面数据data->searchList.js
            2.路由接口访问 router.js->get请求
            3.fetch->getSearchList(cityName,page,keyword)接口
      3.上拉触底加载更多数据
            1.业务逻辑
                  1.state初始状态
                        1.searchList:[] //用于存放网络请求得到的数据
                        2.hasMore //用于判断是否还有数据
                        3.isLoadingMore //true:数据加载中，false:数据加载完成
                        4.page //请求页数
                  2.组件加载完成后，首次进行网络请求，此时page=0
                  3.当进行连续多次相同关键词的搜索时只进行一次网络请求
                  4.当dom元素距离顶部的距离小于浏览器视口时，上拉加载数据
                  5.当数据正在加载中时，不管怎么上拉，不再多次进行网络请求，否则加载更多数据
            2.涉及重点
                  1.组件生命周期函数
                        componentDidMount——组件渲染结束
                        componentDidUpdate(prevProps, prevState)——组件状态改变后，接收两个参数为上一次的props和state
                  2.子传父数据
                  3.操作dom元素(refs) ref="dom" 获取dom this.refs.dom
                  4.getBoundingClientRect():获取当前元素距离四个方向的值
                  5.监听滚动事件 widow.addEventListener("scroll",function(){}.bind(this))
                  6.利用定时器监听事件的值
            3.代码实现
                  1.SearchList页面
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
                              return(
                                    <div>
                                    {
                                          this.state.searchList.length > 0 
                                          ? <SearchListComponent listData={ this.state.searchList }/>
                                          : <div>数据请求中</div>
                                    }
                                    {
                                          this.state.hasMore 
                                          ? <LoadingMore loadingMoreFn={ this.loadingMoreFn.bind(this) } isLoadingMore={ this.state.isLoadingMore }/>
                                          : <div>数据已经到底了</div>
                                    }
                                    </div>
                              )
                        }
                  
                  2.LoadingMore组件
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
10.商城列表页
      1.页面结构 Details->Info->DetailsInfo->BuyAndStore(BuyAndStoreComponent)->
                                          ->Comments(CommentList->Item->Star)
      2.上拉加载更多
      3.商品详情
            1.当从列表进入某个详情页时，需通过路由传递商品id
            2.通过路由传递参数
                  1.去路由有配置 :param
                  2获取路由参数  this.props.match.param.参数
            3.tab切换组件——插槽
                  //标题
                  React.Children.map(this.props.children,(element,index) => {
                        return (
                              <div>{element.props.title}</>
                        )
                  })
                  //内容
                  React.Children.map(this.props.children,(element,index) => {
                        return (
                              <div>{element}</>
                        )
                  })

                  //页面应用
                  <Tabs>
                        <div title="商品信息">内容一</div>
                        <div title="商品评价">内容二</div>
                  </Tabs>
            4.商品评价——上拉加载
                  1.评星操作
                        1.大于五取余
                        2.[1,2,3,4,5].map((item,index) => {
                              const lightClass = star>item ? "高亮样式" :"";
                              return <i className="icon-star lightClass"></i>
                        })
            5.收藏与购买
                  1.购买
                        1.先判断是否登录，未登录先跳到登录页登录
                        2.点击登录后需回到之前的页面，此时从购买跳到登录是需传递路由地址作为参数
                          1. 路由配置 "/login/:router?"
                          2.BuyAndStore.jsx
                             this.props.history.push("/login/"+encodeURIComponent("details/"+id))
                          3.Login.jsx
                             const router = this.props.match.params.router;
                             this.props.history.push('/'+decodeURIComponent(router))
                          4.登录之后可以点击购买
                  2.收藏
                        1.先登录
                        2.如果未收藏，则点击收藏，否则为取消收藏
                              1.需设置redux
                                    1.actions——store.js
                                    2.reducers——store.js
                                      收藏: state.unshift(action.data)
                                      取消收藏: filer()过滤操作，当数据不是要找的数据时，则返回这条数据
                                          state.filter(item=>{
                                            if(item.id!==action.data.id){
                                                return item
                                            }
                                      })
11.购物车
      1.页面结构 Cart->Order->OrderListComponent->Item
      2.商品评价提交后台
            1.post提交 
              1.引入中间件 body-parser
                  app.use(bodyParser.urlencoded({
                        extended:true
                  }))
            2.router
              1.传递参数
                  var id = req.body.id

                   