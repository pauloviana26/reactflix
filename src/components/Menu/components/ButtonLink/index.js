import React from 'react';

function ButtonLink(props) { // props é um objeto para trazer informações para o componente
    // props => { className: "o que alguém passar", href:"/" }
    console.log(props);
    return (
        <a href={props.href} className={props.className}>
            {props.children}          
        </a>
    );
}

export default ButtonLink;