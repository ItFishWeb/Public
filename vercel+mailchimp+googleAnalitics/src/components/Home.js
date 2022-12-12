import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap"
import '../css/style.css'
import car from "../images/lambo.jpg"
import mustang from "../images/mustang.jpg"
import bmw from "../images/bmw.jpg"
import { Footer } from './Footer';
export const Home = () => {
        return(
            <div bg="dark">
                 <Container fluid id="homeBaner">
                 <div className="row" id="homeRow">
                 <div className="col-10">
      <h1 className="Header">  WsBCars z nami dojedziesz bezpieczniej !</h1>
      <div className="col-2" id="borderH1Home"></div>
        <p className="col-12" id="paragrafBaner">Jest nam niezmiernie miło że, odwiedzasz naszą stronę. Posiadamy w ofercie bogatą flotę pojazdów które na pewno Cię zainteresują !</p>
        <div className="row text-center">
        <div className="col-4">
                        <div className="img-thumbnail" id="thumbnailHome">
                        <img src={car} alt="Lamborghini" className="img-fluid" id="carThumbnail" />
                        <p className="carThumbnailParagraf">Lamborghini Gallardo</p>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="img-thumbnail" id="thumbnailHome">
                    <img src={mustang} alt="Mustang" className="img-fluid" id="carThumbnail" />
                        <p className="carThumbnailParagraf">Ford Mustang Shelby</p>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="img-thumbnail" id="thumbnailHome">
                    <img src={bmw} alt="Bmw" className="img-fluid" id="carThumbnail" />
                        <p className="carThumbnailParagrafBMW">BMW M5</p>
                        </div>
                    </div>
        </div>
        <p className="col-12" id="paragrafDwaBaner">W myśli tworzenia naszej oferty położyliśmy nacisk na maksymalne dopasowanie względem Was klientów !</p>
        <div className="text-center" id="buttonDwaHome">
       <a href="/about"> <button className="btn-primary" id="buttonHome">Sprawdź ofertę !</button></a></div>
      </div>
              
      </div>
      <Footer/>
    </Container>
 
  
  
   
</div>
           
        )
    }
