import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AboutPorsche from '../../Pages/AboutPorsche';
import Models from '../../Pages/Models';
import MotorsportEvent from '../../Pages/Motorsport&Event';
import PorscheFinder from '../../Pages/PorscheFinder';
import ServiceAccessories from '../../Pages/Service&Accessories';
import NotFoundPage from '../../Pages/NotFoundPage';
import Header from '../subcomponents/Header';
import Footer from '../subcomponents/footer';
import '../../styles/styles.scss';






const AppRouter = ( ) => (
    <BrowserRouter>
      <div>
         <Header/>
         
         <Switch>
            <Route path="/" component={Models} exact= {true}/>
            <Route path="/Porsche-Finder" component={PorscheFinder}/>
            <Route path="/Motorsport-&-Event" component={MotorsportEvent}/>
            <Route path="/Service-&-Accessories" component={ServiceAccessories} exact= {true}/>
            <Route path="/About-Porsche" component={AboutPorsche}/>
            <Route component = {NotFoundPage}/>
         </Switch>
         <Footer/>
      </div>
    </BrowserRouter>
);

export default AppRouter;