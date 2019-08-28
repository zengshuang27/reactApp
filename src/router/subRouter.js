import React from "react"
import { Route,Switch } from "react-router-dom"
import Layout from "../containers/layout"
import Home from "../containers/Home"
import Shop from "../containers/Shop"
import LifeService from "../containers/LifeService"
import Mine from "../containers/Mine"
import NotFound from "../containers/NotFound"
import City from "../containers/City"
import Search from "../containers/Search"
import Details from "../containers/Details"
import Login from "../containers/Login"
import Cart from "../containers/Cart"

export default class SubRouter extends React.Component{
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/shop" component={Shop}></Route>
                    <Route path="/life" component={LifeService}></Route>
                    <Route path="/mine" component={Mine}></Route>
                    <Route path="/city" component={City}></Route>
                    <Route path="/search/:keyword" component={Search}></Route>
                    <Route path="/details/:id" component={Details}></Route>
                    <Route path="/login/:router?" component={Login}></Route>
                    <Route path="/cart" component={Cart}></Route>
                    <Route path="/*" component={NotFound}></Route>
                </Switch>
            </Layout>
        )
    }
}