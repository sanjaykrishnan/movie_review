import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component{

	componentDidMount() {
    	document.title = 'Movie Review | Contact';
	}
    
    render(){
        return (
			
				<div className="container">
					<div className="page">
						<div className="breadcrumbs">
							<Link to="/">Home</Link>
							<span>Contact</span>
						</div>

						<div className="content">
							<div className="row">
								<div className="col-md-4">
									<h2>Contact</h2>
									<ul className="contact-detail">
										<li>
											<img src={require('../images/icon-contact-map.png')} alt="#" />
											<address><span>Company name. INC</span> <br/>550 Avenue Street, New york</address>
										</li>
										<li>
											<img src={require('../images/icon-contact-phone.png')} alt="" />
											<a href="tel:1590912831">+1 590 912 831</a>
										</li>
										<li>
											<img src={require('../images/icon-contact-message.png')} alt="" />
											<a href="mailto:contact@companyname.com">contact@companyname.com</a>
										</li>
									</ul>
									<div className="contact-form">
										<input type="text" className="name" placeholder="name..." />
										<input type="text" className="email" placeholder="email..." />
										<input type="text" className="website" placeholder="website..." />
										<textarea className="message" placeholder="message..."></textarea>
										<input type="submit" value="Send Message " />

									</div>
								</div>
								<div className="col-md-7 col-md-offset-1">
									<div className="map"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			
		);
	}
    
}

export default Contact;
