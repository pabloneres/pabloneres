import {BrowserRouter, Route} from 'react-router-dom'
import React from 'react'

import Main from '../Pages/index/index'
import Portifolio from '../Pages/portifolio/index'

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path='/' exact component={Main} />
            <Route path='/portifolio' component={Portifolio} />
        </BrowserRouter>
    )
}