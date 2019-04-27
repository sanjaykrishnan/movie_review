import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component{

	getNavLinkClass = (path) => {
    	return this.props.location.pathname === path ? 'current-menu-item menu-item' : 'menu-item';
	}
    
    render(){
        return (
			
				<div className="container">
					<Link to="/" id="branding">
						<img src={require('../images/logo.png')} alt="" className="logo"/>
						<div className="logo-copy">
							<h1 className="site-title">Company Name</h1>
							<small className="site-description">Tagline goes here</small>
						</div>
					</Link>
					<div className="main-navigation">
						<button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
						<ul className="menu">
							<li className={this.getNavLinkClass('/')}><Link to="/">Home</Link></li>
							<li className={this.getNavLinkClass('/about-us')}><Link to="/about-us">About</Link></li>
							<li className={this.getNavLinkClass('/movie-review')}><Link to="/movie-review">Movie reviews</Link></li>
							<li className={this.getNavLinkClass('/join-us')}><Link to="/join-us">Join us</Link></li>
							<li className={this.getNavLinkClass('/contact')}><Link to="/contact">Contact</Link></li>
						</ul>
						<form action="#" className="search-form">
							<input type="text" placeholder="Search..."/>
							<button><i className="fa fa-search"></i></button>
						</form>
					</div>

					<div className="mobile-navigation"></div>
				</div>
			
		);
	}
    
}

export default withRouter(Header);