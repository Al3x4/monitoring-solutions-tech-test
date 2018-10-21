import React from 'react'
import { BarChart, Bar, YAxis} from 'recharts'

const ViewBar = ({data}) => {
	return (
			<BarChart data={data} width={30} height={200}>
				<YAxis 
					hide
					type="number"
					domain={[0, 'dataMax']} 
				/>
			    <Bar dataKey="skygoTotalViews" stackId="a" fill="#8884d8" />
			    <Bar dataKey="nowtvTotalViews" stackId="a" fill="#82ca9d" />
		    </BarChart>    
	)
}

export default ViewBar