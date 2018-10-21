import	React from 'react'
import ViewBar from './ViewBar'

const Movie = ({movie}) => {

	// Extract the release year and runtime from the description with a regular expression and save them in yearAndDuration array
	let yearAndDurationWithPara = movie.description.match(/\(([^)]+)\)/g);
	let yearAndDuration = [];
	yearAndDurationWithPara.map(data => {yearAndDuration.push(data.slice(1, data.length-1))})
	let description = movie.description.replace(/\((.*)\)/g, '').trimEnd();
	let views = [];
	views.push(
	{
		skygoTotalViews: movie.skygoTotalViews,
		nowtvTotalViews: movie.nowtvTotalViews
	})

	return (
		<div className="movie">
	        <div className="movie-assetImage"><img src={movie.assetImage} alt={movie.name}/></div>
	        <h2 className="movie-name">{movie.name}</h2>
	        <div className="movie-release">{yearAndDuration[0]}</div>
	        <div className="movie-duration">{yearAndDuration[1]}</div>
	        <div className="movie-description">{description}</div>
	        <ViewBar data={views} />
	        <div className="movie-footer">              
	        	<div className="movie-totalViews">{movie.skygoTotalViews}</div>
	        	<div className="movie-provider">{movie.provider}</div>
	        </div>
	    </div>
	)
}


export default Movie;