import React from 'react'

import Header from '../global/header'
import './index.css'

import rastreamento from '../../assets/rastreamento.png'
import assinatura from '../../assets/assinatura.png'
import github from '../../assets/github.png'

export default function portifolio() {

    function modal(){
        document.querySelector('.modal-overlay').classList.remove('hidden')
    }
    function close_modal(){
        document.querySelector('.modal-overlay').classList.add('hidden')
    }

    return(
        <div>
            <Header/>
            <div className="content">
                <ul>
                    <li className='frontend' onClick={modal} ><div className='cover'><p>Front-end</p></div></li>
                    <li className='backend' onClick={modal} ><div className="cover"><p>Back-end</p></div></li>
                    <li className='mobile' onClick={modal} ><div className="cover"><p>Mobile</p></div></li>
                </ul>
            </div>
            <div className="modal-overlay hidden">
                <div className="modal">
                    <div className="button-close" onClick={close_modal} >X</div>
                    <h1>Principais Projetos</h1>
                    <ul>
                        <li>
                            <div className="image_project">
                            <img src={rastreamento} alt="" srcset=""/>
                            </div>
                            <h1>Sistema de Rastreamento</h1>
                            <p>Sistema criado com API do Google Maps</p>
                            <p style={{ fontWeight: 'bold' }}>Contem: Back-end, Mobile, Front-end.</p>
                            <footer>
                            <img src={github} alt="" srcset=""/>
                            <p><a href='https://github.com/pabloneres/web-app-movvi' target="_blank" rel="noopener noreferrer">Abrir no Github</a></p>
                            </footer>
                        </li>
                        <li>
                            <div className="image_project">
                            <img src={assinatura} alt="" srcset=""/>
                            </div>
                            <h1>Assinatura Automatica</h1>
                            <p>Criação de assinaturas automaticas</p>
                            <p style={{ fontWeight: 'bold' }}>Contem: Front-end.</p>
                            <footer>
                            <img src={github} alt="" srcset=""/>
                            <p><a href='https://github.com/pabloneres/Assinatura-automatica' target="_blank" rel="noopener noreferrer">Abrir no Github</a></p>
                            </footer>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}