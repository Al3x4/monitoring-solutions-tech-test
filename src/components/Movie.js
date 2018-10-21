import	React from 'react'
import ViewsPieChart from './ViewsPieChart'

const Movie = ({movie}) => {

	// Extract the release year and runtime from the description with a regular expression and save them separately
	let yearAndDurationWithPara = movie.description.match(/\(([^)]+)\)/g);
	let yearAndDuration = [];

	yearAndDuration.push(yearAndDurationWithPara[0].slice(1, yearAndDurationWithPara[0].length-1))
	yearAndDuration.push(yearAndDurationWithPara[1].slice(1, yearAndDurationWithPara[1].length-6)) // Cut the para on both, and the  @mins@ text from the second

	let description = movie.description.replace(/\((.*)\)/g, '').trimEnd();
	
	// Create a separate array to hold the views from SkyGo and NowTV
	let views = [
		{
			name: "skygoTotalViews",
			value: movie.skygoTotalViews
		}, 
		{
			name: "nowtvTotalViews",
			value: movie.nowtvTotalViews
		}
	]
	
	return (
		<div className="movie">
			<div>
				<div className="movie-assetImage">
					<img src={movie.assetImage} alt={movie.name}/>
				</div>
				<div className="movie-info">
					<h2 className="movie-name">{movie.name}</h2>
					<p className="movie-description">{description}</p>	         	  
				</div>
			</div>
			<div className="movie-info">
				<div className="movie-figures">
					<span className="figure movie-year">{yearAndDuration[0]}<span className="figure-legend">Release year</span></span>
					<span className="figure movie-runtime">{yearAndDuration[1]}<span className="figure-legend">Minutes</span> </span>
					<span className="figure movie-views">{movie.skygoTotalViews + movie.nowtvTotalViews}<span className="figure-legend">Total views</span></span>
				</div>
				<hr className="separator"/>
				<div className="movie-figures">
					<span className="figure movie-views sky">{movie.skygoTotalViews}<span className="figure-legend">Sky Go views</span></span>
					<span className="figure movie-views now">{movie.nowtvTotalViews}<span className="figure-legend">Now TV views</span></span>
					<ViewsPieChart data={views} />
				</div>		         	  
			</div>             	
		</div>
	)
}

export default Movie;