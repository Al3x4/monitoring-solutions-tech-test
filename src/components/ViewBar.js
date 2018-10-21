import React from 'react'
import { BarChart, Bar, ResponsiveContainer} from 'recharts'

const ViewBar = ({data}) => {
	return (
		<BarChart width={200} height={200} data={data}>
	       <Bar dataKey="skygoTotalViews" stackId="a" fill="#8884d8" />
	       <Bar dataKey="nowtvTotalViews" stackId="a" fill="#82ca9d" />
	    </BarChart>
	    
	
	)
}

export default ViewBar