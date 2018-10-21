import React from 'react'
import { BarChart, Bar, ResponsiveContainer, XAxis, Legend} from 'recharts'

const ViewsStackedBarChart = ({data}) => {
	return (
		<ResponsiveContainer
			width="100%"
			height={500}
		>
			<BarChart width={200} height={200} data={data}>		
				<XAxis dataKey="name"/>
		     	<Bar dataKey="skygoTotalViews" stackId="a" fill="#8884d8" />
		     	<Bar dataKey="nowtvTotalViews" stackId="a" fill="#82ca9d" />
		     	<Legend />
		    </BarChart>
		</ResponsiveContainer>
	    
	
	)
}

export default ViewsStackedBarChart