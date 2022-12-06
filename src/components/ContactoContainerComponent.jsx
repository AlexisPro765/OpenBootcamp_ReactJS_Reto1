import ContactoComponent from "./ContactoComponent";
import Contacto from "../clases/Contacto";

const ContactoContainerComponent = () => {
    const contacto = new Contacto();
    contacto.nombre = "Kevin";
    contacto.apellido = "Mejia";
    contacto.email = "kmejia@gmail.com";
    contacto.conectado = false;

    return (
        <ContactoComponent contacto={contacto}></ContactoComponent>
    );
};

export default ContactoContainerComponent;