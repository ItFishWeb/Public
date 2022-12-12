import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row} from "react-bootstrap"
import car from "../images/lambo.jpg"
import mustang from "../images/mustang.jpg"
import bmw from "../images/bmw.jpg"
import { Footer } from './Footer'
export const About = () => {
        return(
            <div>
            <Container fluid id="containerAbout">
                <h1 className="HeaderAbout">Oferta</h1>
                <div className="col-1" id="borderH1About"></div>
                <p className="text-center" id="paragrafAbout">W naszej bogatej ofercie znajdziecie Państwo trzy samochody marki premium. Wypożyczanie jest możliwe w opcji długoterminowej, średnioterminowej oraz krótkoterminowym.</p>
                <Row className="justify-content-center" id="rowAbout">
                    <div className="col-12 col-md-3">
                        <div className="img-thumbnail" id="thumbnailAbout">
                        <img src={car} alt="Lamborghini" className="img-fluid" id="carAbout" />
                        <p className="thumbnailParagrafH">Lamborghini Gallardo</p>
                        <p className="thumbnailAboutParagraf">Segment D</p>
                        <p className="thumbnailAboutParagraf">Typ nadwozia: 2-drzwiowy coupe</p>
                        <p className="thumbnailAboutParagraf">Silnik: 5,0 l DOHC 40v – 500KM</p>
                        <p className="thumbnailAboutParagraf">Wynajem krótko-terminowy do 14 dni - 2500 PLN/dzień.</p>
                        <p className="thumbnailAboutParagraf">Wynajem średnio-terminowy od 14 dni do 30 dni - 2250 PLN/dzień.</p>
                        <p className="thumbnailAboutParagraf">Wynajem długo-terminowy od 30 dni do 12msc. 1850 PLN/dzień.</p>
                        <p className="thumbnailAboutParagraf">Od 0 do 100 km/h: 4,2s</p>
                       <a href="https://us10.list-manage.com/contact-form?u=f2ddef379726cc56b4d6a3e8b&form_id=ee7f916f75dbd93ab85ee129a6a54930"><button className="btn-primary" id="buttonThumbnailAbout">Zamów teraz !</button></a>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                    <div className="img-thumbnail" id="thumbnailAbout">
                    <img src={mustang} alt="Mustang" className="img-fluid" id="carAbout" />
                        <p className="thumbnailParagrafH">Ford Mustang Shelby</p>
                        <p className="thumbnailAboutParagraf">Segment D</p>
                        <p className="thumbnailAboutParagraf">Typ nadwozia: 2-drzwiowy coupe</p>
                        <p className="thumbnailAboutParagraf">Silnik:  	V8, OHV - 550KM</p>
                        <p className="thumbnailAboutParagraf">Wynajem krótko-terminowy do 14 dni - 2100 PLN/dzień.</p>
                        <p className="thumbnailAboutParagraf">Wynajem średnio-terminowy od 14 dni do 30 dni - 1950 PLN/dzień.</p>
                        <p className="thumbnailAboutParagraf">Wynajem długo-terminowy od 30 dni do 12msc. 1550 PLN/dzień.</p>
                        <p className="thumbnailAboutParagraf">Od 0 do 100 km/h: 6,7s</p>
                        <a href="https://us10.list-manage.com/contact-form?u=f2ddef379726cc56b4d6a3e8b&form_id=ee7f916f75dbd93ab85ee129a6a54930"><button className="btn-primary" id="buttonThumbnailAbout">Zamów teraz !</button></a>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                    <div className="img-thumbnail" id="thumbnailAbout">
                    <img src={bmw} alt="BMW" className="img-fluid" id="carAbout" />
                        <p className="thumbnailParagrafH">BMW M5</p>
                        <p className="thumbnailAboutParagraf">Segment E</p>
                        <p className="thumbnailAboutParagraf">Typ nadwozia: sedan</p>
                        <p className="thumbnailAboutParagraf">Silnik: 4.4 L S63 twin-turbo power V8 </p>
                        <p className="thumbnailAboutParagraf">Wynajem krótko-terminowy do 14 dni - 2800 PLN/dzień.</p>
                        <p className="thumbnailAboutParagraf">Wynajem średnio-terminowy od 14 dni do 30 dni - 2650 PLN/dzień.</p>
                        <p className="thumbnailAboutParagraf">Wynajem długo-terminowy od 30 dni do 12msc. 2450 PLN/dzień.</p>
                        <p className="thumbnailAboutParagraf">Od 0 do 100 km/h: 2,7s</p>
                        <a href="https://us10.list-manage.com/contact-form?u=f2ddef379726cc56b4d6a3e8b&form_id=ee7f916f75dbd93ab85ee129a6a54930"><button className="btn-primary" id="buttonThumbnailAbout">Zamów teraz !</button></a>
                        </div>
                    </div>
                </Row>
                </Container>
                <Footer/>
            </div>
        )
    }
