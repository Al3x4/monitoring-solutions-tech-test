import React from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F'];     

const ViewsPieChart = ({data}) => {
	
  	return (
		    <PieChart className="figure views-pie" height={90} width={90}>
		        <Pie
		          data={data} 
		          fill="#8884d8"
		          margin={{left:0, right:0}}
		        >
		        {
		          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
		          }
		        </Pie>
		     </PieChart>

    );
  
}


export default ViewsPieChart