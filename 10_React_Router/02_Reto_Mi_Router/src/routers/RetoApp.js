import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Contact from '../components/Contact.js'
import Header from '../components/Header.js'
import Home from '../components/Home.js'
import Portafolio from '../components/Portafolio.js'
import PortafolioId from '../components/PortafolioId.js'
import NotFoundPage from '../components/NotFoundPage.js'



const RetoApp = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/contact" component={Contact} exact={true}/>
                <Route path="/portafolio" component={Portafolio} exact={true}/>
                <Route path="/portafolio/:id" component={PortafolioId} exact={true}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default RetoApp