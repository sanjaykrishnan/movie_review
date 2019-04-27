import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

class MovieReview extends Component{

	state = {
		movies: []
	}

	componentDidMount() {
    	document.title = 'Movie Review | Review';
    	axios.get('http://192.168.0.16:8000/api/movies/')
    	.then(res =>{
    		console.log("hellooooooo", res.json())
    		this.setState({ movies: res.json()});
    	});
	}

	renderMoviesList() {
		return (this.state.movies.length ? (
    			this.state.movies.map(movie =>{
    				return (
    						<div className="movie" key={movie.id}>
								<figure className="movie-poster"><img src={movie.image} alt={movie.title} /></figure>
								<div className="movie-title"><Link to={'/movie/' + movie.id} >{movie.title}</Link></div>
								<p>Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
							</div>
    					);
    			})
    		) : (
    		<div className="loading">Loading&#8230;</div>
    		))
	}
    
    render(){
        return (
			
				<div className="container">
					<div className="page">
						<div className="breadcrumbs">
							<a href="index.html">Home</a>
							<span>Movie Review</span>
						</div>

						<div className="filters">
							<select name="#" id="#" placeholder="Choose Category">
								<option value="#">Action</option>
								<option value="#">Drama</option>
								<option value="#">Fantasy</option>
								<option value="#">Horror</option>
								<option value="#">Adventure</option>
							</select>
							<select name="#" id="#">
								<option value="#">2012</option>
								<option value="#">2013</option>
								<option value="#">2014</option>
							</select>
						</div>
						<div className="movie-list">
							{this.renderMoviesList()}
						</div>

						<div className="pagination">
							<a href="#" className="page-number prev"><i className="fa fa-angle-left"></i></a>
							<span className="page-number current">1</span>
							<a href="#" className="page-number">2</a>
							<a href="#" className="page-number">3</a>
							<a href="#" className="page-number">4</a>
							<a href="#" className="page-number">5</a>
							<a href="#" className="page-number next"><i className="fa fa-angle-right"></i></a>
						</div>
					</div>
				</div>
			
		);
	}
    
}

export default MovieReview;




