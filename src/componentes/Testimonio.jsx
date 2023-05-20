import React from "react";
import '../hojasDeEstilo/Testimonio.css';

export function Testimonio(props) {
    return (
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio"
            src={require(`../imagenes/${props.imagen}.png`)}
            alt="mago de artes oscuras" />
        <div className="contenedor-texto-testimonio"> 
            <p className="nombre-testimonio"><strong>{props.nombre}</strong> - {props.pais}</p>
            <p className="cargo-testimonio">{props.cargo}, <strong>{props.empresa}</strong></p>
            <p className="texto-testimonio">{props.testimonio}</p>
        </div>
        </div>
    );
}
