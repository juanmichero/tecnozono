import classes from './WhatsAppButton.module.css'
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = "5491141919365"; // <-- poné tu número con código país (sin + ni 0)
const DEFAULT_MESSAGE = "Hola! Quisiera hacer una consulta.";

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <a href={url} target='_blank' className={classes.waButton}>
        <FaWhatsapp className={classes.waIcon} />
    </a>
  );
}
