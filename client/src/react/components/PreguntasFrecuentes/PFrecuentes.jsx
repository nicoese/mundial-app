import React from 'react';
import s from './PFrecuentes.module.css'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Footer from '../Footer/Footer'



export default function PFrecuentes(){

   
    return (
        <div className={s.divMain}>
            <div className={s.divPF}>
                <h1>Preguntas Frecuentes</h1>
            </div>
            <Accordion className={s.accordion}>
                <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<ExpandMoreIcon />}>
                    <Typography> <b>Realizar un pedido</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Solo tenés que seleccionar todos los productos que deseas adquirir. Seguidamente, en el carrito de compras visualizarás tu orden con los mismos. Será requisito estar registrado para avanzar con el proceso de compra.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={s.accordion}>
                <AccordionSummary id='panel2-header' aria-controls='panel2-content' expandIcon={<ExpandMoreIcon />}>
                    <Typography> <b>Precio</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                     Todos los precios en la web incluyen el IVA, y se encuentran expresados en pesos argentinos.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={s.accordion}>
                <AccordionSummary id='panel3-header' aria-controls='panel3-content' expandIcon={<ExpandMoreIcon />}>
                    <Typography> <b>Formas de pago</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>La forma de pago que se maneja actualmente el sitio es Mercado Pago, iniciando sesión con tu cuenta
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={s.accordion}>
                <AccordionSummary id='panel4-header' aria-controls='panel4-content' expandIcon={<ExpandMoreIcon />}>
                    <Typography> <b>Envios</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>En primer lugar recopilamos toda tu información de contacto que llenaste en el formulario anteriormente, para despachar el producto. Actualmente realizamos envíos a todo Sudamerica, el lapso del mismo es máximo 3 días.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={s.accordion}>
                <AccordionSummary id='panel5-header' aria-controls='panel5-content' expandIcon={<ExpandMoreIcon />}>
                    <Typography> <b>Facturación</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>En todas las compras efectuadas en la web, brindamos sin excepción alguna, la factura de compra. Una vez que realiza y abona el pedido, enviamos a tu dirección de correo electrónico la factura correspondiente.</Typography>
                </AccordionDetails>
            </Accordion>

            <div className={s.footer}>
             <Footer />
            </div>
        </div>
    )
}