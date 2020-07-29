import React from 'react'; // não esquecer
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="ReactFlix logo" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu; // para conseguir exportar em outros lugares