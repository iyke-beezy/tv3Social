import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import DataCells from './DataCells'
import RegionsGraph from './RegionsGraph'

import './styles.scss'

//actions

const DashboardHome = (props) => {
    return (
        <div className="DashboardHome">

            <div className="dashboard-content">

                <div className="container">
                    {/* Usage logs */}
                    <div className="logs">
                        <h2>Analytics based on </h2>
                        <DataCells />
                    </div>

                    <div className="logs">
                        <h2>Heat map based on the various regions</h2>
                        <RegionsGraph />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default DashboardHome