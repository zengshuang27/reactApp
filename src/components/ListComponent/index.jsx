import React from "react"
import Item from "./Item"
import "./style.less"

export default class SearchListComponent extends React.Component {

    render() {
        const listData = this.props.listData;
        return (
            <div className="list-container">
                {
                    listData.map((element, index) => {
                        return <Item key={index} data={element}></Item>
                    })
                }
            </div>
        )
    }
}