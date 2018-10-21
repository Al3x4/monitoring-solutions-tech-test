import React from 'react'
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Legend} from 'recharts'

const ViewsStackedBarChart = ({data}) => {
	return (
		<ResponsiveContainer
			width="100%"
			height={500}
		>
			<BarChart width={200} height={200} data={data}>		
				<XAxis dataKey="name"/>
				<Tooltip isAnimationActive={false}/>
		     	<Bar dataKey="skygoTotalViews" stackId="a" fill="#8884d8" maxBarSize={50} />
		     	<Bar dataKey="nowtvTotalViews" stackId="a" fill="#82ca9d" maxBarSize={50} />

		     	<Legend />
		    </BarChart>
		</ResponsiveContainer>
	    
	
	)
}

export default ViewsStackedBarChart