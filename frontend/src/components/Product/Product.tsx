import { Row, Col } from 'react-bootstrap';
import { IProduct } from '../../utils/interfaces';

interface Props {
    product: IProduct;
}

export default function Product({ product }: Props) {
    return (
        <div className="card shadow-sm p-3">
            <h6>{product.name}</h6>
            <h6>${product.price}</h6>
        </div>
    )
}