import { Row, Col, Container } from 'react-bootstrap';

export default function Footer() {

    const myClass = "d-flex justify-content-center";

    return (
        <div className="bg-light p-4 footer d-flex justify-content-center">
            <Container>

                <Row>
                    <Col className={myClass}>
                        <div>Col1</div>
                        <div>Link 1</div>
                        <div>Link 2</div>
                    </Col>
                    <Col className={myClass}>
                        <div>Col2</div>

                        <div>Link 1</div>
                        <div>Link 2</div>
                    </Col>
                    <Col className={myClass}>
                        <div>Col3</div>

                        <div>Link 1</div>
                        <div>Link 2</div>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}