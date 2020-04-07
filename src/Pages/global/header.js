import React from 'react'
import { Link } from 'react-router-dom'
 
import './index.css'

export default function Index() {
    return(
        <div className="content-header">
            <header>
            <nav>
                <ul>
                    <li><Link to='/' >SOBRE</Link></li>
                    <li><Link to='/portifolio' >PORTIFÓLIO</Link></li>
                </ul>
            </nav>
            </header>
        </div>
    )
}