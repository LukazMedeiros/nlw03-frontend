import React from 'react';
import '../styles/home.css';
import logoImg from '../images/Logo.svg';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <div id="home">
            <div className="content-wrapper">
                <img src={logoImg} alt="Happy"/>
                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia
                    de muitas crianças.</p>
                </main>
                <div className="location">
                    <strong>São Paulo</strong>
                    <span>São Paulo</span>
                </div>
                <Link to="/mapa" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
                </Link>
            </div>
        </div>
        )
    }