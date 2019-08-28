import React from "react"
import { HashRouter,Route } from "react-router-dom"
import Layout from "../containers/layout"
import SubRouter from "./subRouter"

export default class AppRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <Layout>
                   <Route path="/" component={SubRouter}></Route>
                </Layout>
            </HashRouter>
        )
    }
}