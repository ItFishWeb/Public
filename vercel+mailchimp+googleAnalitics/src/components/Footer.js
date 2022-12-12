import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Table} from "react-bootstrap"
import { BsTelephone, BsMailbox, BsHouseDoor, BsFacebook, BsInstagram } from "react-icons/bs"

export const Footer = () => {
    
        return(
            <Container fluid className="container-fluid" id="footerContainer">
                <Container id="footerContainerC">
                    <Row id="footerRow" className="justify-content-center">
                    
                        <div className="col-12 col-md-4">
                        <div className="text-center">
                        <h2 className="h2Footer">Kontakt</h2>
                        <Table size="sm">
  <tbody className="tbodyFooter">
    <tr className="trFooter">
      <td className="tdFooter"><a href="tel:+48777777777" id="footerTdLinks"><BsTelephone/> +48 777 777 777</a></td>
    </tr>
    <tr className="trFooter">
      <td className="tdFooter"><a href="mailto:wsbcars@gmail.com" id="footerTdLinks"><BsMailbox/> wsbcars@gmail.com</a></td>
    </tr>
    <tr className="trFooter">
      <td className="tdFooter"><a href="https://www.google.pl/maps/place/Jana+Długosza+2-6,+51-162+Wrocław/@51.1316955,17.0578762,17z/data=!3m1!4b1!4m5!3m4!1s0x470fe9b79a6971fb:0x39e375003f4463c4!8m2!3d51.1316955!4d17.0578762" id="footerTdLinks"><BsHouseDoor/> Ul. Jana Jakiegoś 42a Wrocław 53-239</a></td>
    </tr>
  </tbody>
</Table>
                        </div>
                        </div>
                        <div className="col-12 col-md-4">
                        <div className="text-center">
                            <h2 className="h2Footer">Odwiedź nas</h2>
                            <Table size="sm">
  <tbody>
    <tr className="trFooter">
      <td className="tdFooter"><a href="www.facebook.com" id="linkTdFooter"><BsFacebook/></a></td>
      <td className="tdFooter"><a href="www.instagram.com" id="linkTdFooter"><BsInstagram/></a></td>
    </tr>
  </tbody>
</Table>
                        </div>
                        </div>
                        <div className="col-12 col-md-4">
                        <div className="text-center">
                            <h2 className="h2Footer">Menu</h2>
                            <Table size="sm">
  <tbody>
    <tr className="trFooter">
      <td className="tdFooter"><a href="/about" id="linkTdFooter">Oferta</a></td>
      <td className="tdFooter"><a href="/contact" id="linkTdFooter">Kontakt</a></td>
    </tr>
  </tbody>
</Table>
                        </div>
                        </div>
                    </Row>
                </Container>
            </Container>
        )
    }
