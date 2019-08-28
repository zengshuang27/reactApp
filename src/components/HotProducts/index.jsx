import React from "react"
import "./style.less"

export default class HotProduct extends React.Component {
    render() {
        const hotProduct = this.props.hotProduct
        return (
            <div className="hot-product">
                <h3>{this.props.title}</h3>
                <div className="hot-container">
                    <ul className="clearfix">
                        {
                            hotProduct.map((elem, index) => {
                                return (
                                    <li key={index}>
                                        <a href={elem.link}>
                                            <img src={elem.img} alt="" />
                                            <span>{elem.title}</span>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}