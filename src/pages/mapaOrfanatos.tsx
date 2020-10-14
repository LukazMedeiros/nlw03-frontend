import React from 'react';
import logo_menor from '../images/pic.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import '../styles/mapaorfanatos.css';
import 'leaflet/dist/leaflet.css';

export default function MapaOrfanatos() {

    const mapaEstilo = {
        width:"100%",
        height:"100%"
    }

    return(
        <div id="mapaorfanatos">
            <aside>
                <header>
                    <img src={logo_menor} alt="Logo"/>
                    <h2>escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão
                    esperando a sua visita :) </p>
                </header>
                <footer>
                    <strong>São Paulo</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map
            center={[-23.6821604,-46.8754915]}
            zoom={10}
            style={mapaEstilo}
            >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>

            <Link to="#" className="criar-orfanato">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </div>
        )
    }