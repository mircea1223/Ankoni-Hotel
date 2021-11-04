import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const PageTitle = (props) => {
    return(
        <section className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                    <h2>{props.pageTitle}</h2>
                        <ol className="breadcrumb">
                            <li><Link to="/home">Home</Link></li>
                            <li><span>{props.pagesub}</span></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;