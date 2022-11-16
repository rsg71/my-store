import { Container, Row, Col } from 'react-bootstrap';
import { JsxElement } from 'typescript'

interface Props {
    children: JSX.Element | JSX.Element[] | any
}

export default function PageWrapper({ children }: Props) {
    return (
        <Container>
            <div className="my-4">
                {children}
            </div>
        </Container>
    )
}