import React, { Component } from 'react'

import Header from '../global/header'

import './index.css'


export default class Home extends Component {
    render(){
        return(
            <div>
                <Header/>
                <div className="image"></div>
                <div className="infos">
                    <h1>Pablo Neres</h1>
                    <p className='cargo'>Web Developer</p>
                    <p className='descri' >Programador full-stack, JavaScript, NodeJS
                    ReactJS, React-Native, Html, Css</p>
                </div>
                <div id='redes-footer' className="redes">
                    <h1><a href="https://github.com/pabloneres" target="_blank" rel="noopener noreferrer">Github</a></h1>
                    <h1><a href="https://www.linkedin.com/in/pablo-neres-68b370150/" target="_blank" rel="noopener noreferrer">Linkedin</a></h1>
                    <h1><a href={"https://api.whatsapp.com/send?phone=5511958528808"} target="_blank" rel="noopener noreferrer">WhatsApp</a></h1>
                </div>
            </div>
        )
    }
}