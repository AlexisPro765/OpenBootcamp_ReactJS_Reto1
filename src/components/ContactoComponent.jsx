import Contacto from "../clases/Contacto";
import PropTypes from 'prop-types';
import {useState} from "react";

const ContactoComponent = (props) => {

    const [conectado, setConectado] = useState(props.contacto.conectado);

    const cambiarEstado = () => {
        setConectado(!conectado);
    };

    return (
        <div>
            <h2>Nombre: {props.contacto.nombre + ' ' + props.contacto.apellido}</h2>
            <h4>Email: {props.contacto.email}</h4>

            <button onClick={cambiarEstado} style={{ width: '200px' }}>
                <span style={{ color: conectado ? 'green' : 'red' }}>
                    <h5>{conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h5>
                </span>
            </button>
        </div>
    );
};

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ContactoComponent;