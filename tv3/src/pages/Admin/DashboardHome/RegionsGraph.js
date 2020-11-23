import React, { useEffect, useState } from 'react'

import { Heatmap } from '@ant-design/charts';
const RegionsGraph: React.FC = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        asyncFetch();
    }, []);
    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/basement_prod/a719cd4e-bd40-4878-a4b4-df8a6b531dfe.json')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setData(json)
            })
            .catch((error) => {
                console.log('Data failed FETCH', error);
            });
    };
    var config = {
        width: 650,
        height: 500,
        autoFit: false,
        data: data,
        xField: 'Month of Year',
        yField: 'District',
        colorField: 'AQHI',
        Color: ['# 174c83', '# 7eb6d4', '#efefeb', '# efa759', '# 9b4d16'],
        meta: { 'Month of Year': { type: 'cat' } },
    };
    return < Heatmap {...config} />;
};
export default RegionsGraph;  