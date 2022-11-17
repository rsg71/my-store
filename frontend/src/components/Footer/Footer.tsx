import { Row, Col, Container } from 'react-bootstrap';

export default function Footer() {

    const myClass = "text-center fs-6";


    const lightStyle = { fontWeight: "100" };



    const icons = [
        "bi bi-instagram",
        "bi bi-facebook",
        "bi bi-twitter",
        "bi bi-youtube"
    ]

    const linkStyle = "hover-grey pointer";


    return (
        <div className="bg-dark text-light p-4 footer">
            <Container>

                <Row className="mb-5">
                    <Col>
                        <div className={myClass}>
                            <h6>Gift Cards</h6>
                            <div style={lightStyle} className={linkStyle}>Promotions</div>
                            <div style={lightStyle} className={linkStyle}>Find a Store</div>
                            <div style={lightStyle} className={linkStyle}>Sign up for Email</div>
                            <div style={lightStyle} className={linkStyle}>Send us Feedback</div>
                        </div>
                    </Col>
                    <Col>
                        <div className={myClass}>
                            <h6>About</h6>
                            <div style={lightStyle} className={linkStyle}>News</div>
                            <div style={lightStyle} className={linkStyle}>Investors</div>
                            <div style={lightStyle} className={linkStyle}>Sustainability</div>
                        </div>
                    </Col>
                    <Col>
                        <div className={myClass}>
                            <h6>Company</h6>
                            <div style={lightStyle} className={linkStyle}>Terms</div>
                            <div style={lightStyle} className={linkStyle}>Privacy</div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="float-end font-large">
                            {icons.map((icon: string) => (
                                <i key={icon} className={`bi bi-${icon} me-3 ${linkStyle}`} />
                            ))}
                        </div>
                    </Col>
                </Row>


                <Row className="mt-5 text-center text-muted">
                    <Col>
                        <small>&copy; Copyright 2022</small>
                    </Col>
                </Row>

            </Container >

        </div >
    )
}