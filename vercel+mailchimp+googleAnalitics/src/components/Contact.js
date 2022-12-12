import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css'
import { Button,Container} from 'react-bootstrap'
import { Footer } from './Footer'
export const Contact = () => {
    
        return(
            <div id="contactRootDiv">
                <Container fluid id="containerContact">
                <h1 className="contactH1Contact">Kontakt</h1>
                <div className="col-1" id="borderH1Contact"></div>
                <div className="col-12" id="col10Contact">
                    <h3 className="contactH3">ZAMÓW REZERWACJE JUŻ DZISIAJ</h3>
                    <p className="paragrafContact">Skorzystaj z naszego formularza kontaktowego celem rezerwacji samochodu. Oddzwonimy !</p>
                    <a href="https://us10.list-manage.com/contact-form?u=f2ddef379726cc56b4d6a3e8b&form_id=ee7f916f75dbd93ab85ee129a6a54930">
                <Button type="button" className="buttonmail">Kliknij tu aby przejść do formularza </Button>
                </a>
                </div>
                <Footer/>
              </Container>
            </div>
        )
    };
