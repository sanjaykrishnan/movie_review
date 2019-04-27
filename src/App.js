import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Contact from './components/contact';
import AboutUs from './components/about-us';
import JoinUs from './components/join-us';
import MovieReview from './components/movie-reviews';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// function App() {
//   return (
//     <div classNameName="App">
//       <header classNameName="App-header">
        
//       </header>
//     </div>
//   );
// }
class App extends Component{
    
    render(){
        return (
            <BrowserRouter>
            <div id="site-content">
                <header className="site-header">
                    <Header/>
                </header>
                <main className="main-content">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/about-us' component={AboutUs} />
                        <Route path='/join-us' component={JoinUs} />
                        <Route path='/movie-review' component={MovieReview} />
                    </Switch>
                    
                </main>
                <footer className="site-footer">
                    <Footer/>
                </footer>
            </div>
            </BrowserRouter>
                        
        );
        
    }
}

export default App;
