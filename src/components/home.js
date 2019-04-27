import React, {Component} from 'react';
import Slider from './slider';


class Home extends Component{

	componentDidMount() {
    	document.title = 'Movie Review';
	}
    
    render(){
        return (
            
				<div className="container">
					<div className="page">
						<div className="row">
							<div className="col-md-9">
								<Slider/>
							</div>
							<div className="col-md-3">
								<div className="row">
									<div className="col-sm-6 col-md-12">
										<div className="latest-movie">
											<a href="#"><img src={require('../dummy/thumb-1.jpg')} alt="Movie 1"/></a>										</div>
									</div>
									<div className="col-sm-6 col-md-12">
										<div className="latest-movie">
											<a href="#"><img src={require('../dummy/thumb-2.jpg')} alt="Movie 2"/></a>										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6 col-md-3">
								<div className="latest-movie">
									<a href="#"><img src={require('../dummy/thumb-3.jpg')} alt="Movie 3"/></a>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="latest-movie">
									<a href="#"><img src={require('../dummy/thumb-4.jpg')} alt="Movie 4"/></a>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="latest-movie">
									<a href="#"><img src={require('../dummy/thumb-5.jpg')} alt="Movie 5"/></a>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="latest-movie">
									<a href="#"><img src={require('../dummy/thumb-6.jpg')} alt="Movie 6"/></a>
								</div>
							</div>
						</div>
						
						<div className="row">
							<div className="col-md-4">
								<h2 className="section-title">December premiere</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
								<ul className="movie-schedule">
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
								</ul>
							</div>
							<div className="col-md-4">
								<h2 className="section-title">November premiere</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
								<ul className="movie-schedule">
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
								</ul>
							</div>
							<div className="col-md-4">
								<h2 className="section-title">October premiere</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
								<ul className="movie-schedule">
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

                        
        );
        
    }
}

export default Home;
			
			