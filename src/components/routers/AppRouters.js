import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Products from '../../Pages/Products';
import Contact from '../../Pages/Contact';
import Groupcompanies from '../../Pages/Groupcompanies';
import NotFoundPage from '../../Pages/NotFoundPage';
import Header from '../subcomponents/Header';
import Footer from '../subcomponents/footer';
import '../../styles/styles.scss';

const AppRouter = ( ) => (
    <BrowserRouter>
         <Header/>
         <Switch>
            <Route path="/" component={Home} exact= {true}/>
            <Route path="/ContactUs" component={Contact} exact= {true}/>
            <Route path="/Products" component={Products} exact= {true}/>
            <Route path="/GroupCompanies" component={Groupcompanies} exact= {true}/>
            <Route path="/About" component={About} exact= {true}/>
            <Route component = {NotFoundPage}/>
         </Switch>
         <Footer/>
    </BrowserRouter>
);

export default AppRouter;