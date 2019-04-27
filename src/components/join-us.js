import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';

class JoinUs extends Component{

	componentDidMount() {
    	document.title = 'Movie Review | Join Us';
	}
    
    render(){
        return (
			
				<div className="container">
					<div className="page">
						<div className="breadcrumbs">
							<Link to="/">Home</Link>
							<span>Join Us</span>
						</div>

						<div className="content">
							<h2 className="section-title">Consectetur adipiscing elit sed eiusmod tempor</h2>
							<p>Aenean vehicula eget risus sit amet posuere. Maecenas id risus maximus, malesuada leo eget, pellentesque arcu. Phasellus vitae leo rhoncus, consectetur mauris vitae, lacinia quam. Nunc turpis erat, accumsan eget justo quis, auctor ultricies magna. Mauris sodales, risus sit amet hendrerit tincidunt, erat ante facilisis sapien, sit amet maximus neque massa a felis. Nullam consectetur justo massa, vel commodo metus gravida in. Aliquam erat volutpat. Nullam a lorem sed lorem euismod gravida a eu velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis ac ligula vel pharetra. Aenean vitae nulla sed dui volutpat euismod.</p>

							<h2 className="section-title">Nemo enim ipsam voluptatem quia voluptas</h2>
							<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga et harum quidem rerum facilis est et expedita.</p>

							<p>Distinctio nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>

							<div className="row">
								<div className="col-md-4">
									<div className="feature">
										<h3 className="feature-title">Exceptur cupidat</h3>
										<small className="feature-subtitle">Incididunt labore dolore</small>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aut ad optio praesentium amet, ullam vel impedit dignissimos voluptas, consequatur recusandae quo autem consectetur tempore rem quam corrupti a. Accusamus.</p>
										<a href="" className="button">Send a request</a>
									</div>
								</div>
								<div className="col-md-4">
									<div className="feature">
										<h3 className="feature-title">Neque quisquam</h3>
										<small className="feature-subtitle">Duis aute reprehenderit</small>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam quidem nobis rem exercitationem aut assumenda iure molestias eius accusantium, temporibus quis esse tempora. Laboriosam libero odio nobis, eligendi minus.</p>
										<a href="" className="button">Send a request</a>
									</div>
								</div>
								<div className="col-md-4">
									<div className="feature">
										<h3 className="feature-title">Tempor Labore</h3>
										<small className="feature-subtitle">Ratione sequi nesciunt</small>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo commodi impedit ea beatae, in ipsa doloribus consequuntur ut, quod dolor dolore unde, esse eligendi autem nobis rem tempora recusandae laborum.</p>
										<a href="" className="button">Send a request</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			
		);
	}
    
}

export default JoinUs;

