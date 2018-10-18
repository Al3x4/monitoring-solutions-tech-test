import	React from 'react'

const Movie = ({movie}) => {

	// Extract the release year and runtime from the description with a regular expression.
	let yearAndDuration = movie.description.match(/\(([^)]+)\)/g);
	yearAndDuration.forEach(match => match.substring(1, match.length - 1));


	return (
		<div className="movie">
	        <div className="movie-assetImage"><img src={movie.assetImage} alt={movie.name}/></div>
	        <h2 className="movie-name">{movie.name}</h2>
	        <div className="movie-release">{yearAndDuration[0]}</div>
	        <div className="movie-duration">{yearAndDuration[1]}</div>
	        <div className="movie-description">{movie.description}</div>
	        <div className="movie-footer">              
	        	<div className="movie-totalViews">{movie.skygoTotalViews}</div>
	        	<div className="movie-provider">{movie.provider}</div>
	        </div>
	    </div>
	)
}


export default Movie;