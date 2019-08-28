import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import * as cityActions from "../../actions/city"

import SearchHeader from "../../components/SearchHeader"
import SearchList from "./subpage/SearchList"

class Search extends React.Component{

    

    render(){
        return(
            <div>
                <SearchHeader history={ this.props.history } />
                <SearchList cityName={ this.props.city.cityName } keyword={ this.props.match.params.keyword }/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        city: state.city
    }
}
export default withRouter(connect(
    mapStateToProps
)(Search))