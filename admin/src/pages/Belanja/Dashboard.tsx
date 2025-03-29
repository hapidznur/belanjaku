import BreadCrumb from 'Common/BreadCrumb';
import React from 'react';

import { BasicBarChart } from './Category';
import { DataLabels } from './monthly';
const ColumnCharts = () => {
    return (
        <>
            <BreadCrumb title='Overview' pageTitle='Overview' />
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Per Bulan</h6>
                        <DataLabels chartId="columnWithDatalabelChart" />
                    </div>
                </div>
				<div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Per Bulan</h6>
                        <BasicBarChart chartId="BasicBarChart" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ColumnCharts;