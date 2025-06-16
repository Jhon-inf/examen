import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Acordeon1(props) {
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1"><strong>Diablada</strong></AccordionHeader>
          <AccordionBody accordionId="1">
            <p>Originaria de Oruro, representa la lucha entre el bien y el mal. Es famosa por sus máscaras demoníacas y trajes brillantes.</p> 
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2"><strong>Morenada</strong></AccordionHeader>
          <AccordionBody accordionId="2">
            <p>Muy popular en La Paz y Oruro, con trajes pesados y pasos lentos que simbolizan a los esclavos africanos traídos a las minas.</p> 
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3"><strong>Caporales</strong></AccordionHeader>
          <AccordionBody accordionId="3">
            <p>Inspirada en los capataces de las haciendas coloniales, es una danza vigorosa y juvenil, con botas y cascabeles.</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4"><strong>Tinku</strong></AccordionHeader>
          <AccordionBody accordionId="4">
            <p>Danza ritual del altiplano que simula un combate ceremonial entre comunidades.</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5"><strong>Taquirari</strong></AccordionHeader>
          <AccordionBody accordionId="5">
            <p>Propias del oriente boliviano, especialmente en Beni y Santa Cruz, con ritmos tropicales y vestimenta ligera.</p>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Acordeon1;