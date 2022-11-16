// import { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
// import Product from '../../components/Product/Product'
import { IProduct } from '../../utils/interfaces'
import PageWrapper from '../../components/PageWrapper/PageWrapper';

interface Props {
    products: IProduct[];
}

export default function ProductPage({ products }: Props) {

    // const [loaded, setLoaded] = useState(false);

    const arrayChunk = (arr: any, n: number) => {
        const array = arr.slice();
        const chunks = [];
        while (array.length) chunks.push(array.splice(0, n));
        console.log('chunks are: ', chunks);
        return chunks;
    };

    let chun = arrayChunk(products, 3);


    console.log('chunks total: ', chun);


    let numProducts = 0;

    for (let i = 0; i < chun.length; i++) {
        let currRowOfProducts = chun[i];
        for (let j = 0; j < currRowOfProducts.length; j++) {
            numProducts++;
        }
    }
    return (
        <div>
            <PageWrapper>
                <h1>Product Page</h1>

                <div className="text-muted d-flex justify-content-end">{numProducts} Products</div>

                {chun.map((arrOfProducts: any, index: number) => (
                    <Row key={index} className="">
                        {arrOfProducts.map((product: IProduct) => (
                            <Col className="">
                                <div className="p-2">
                                    <div>
                                        <img src={product.image} alt="car" style={{ maxWidth: "100%" }} />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            {product.name}
                                        </div>
                                        <div>
                                            {product.price}
                                        </div>
                                    </div>
                                    <div className="mt-0">
                                        <small className="mt-0 text-muted">
                                            {product.colors.map(color => <span key={color}>{color} </span>)}
                                        </small>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                ))}

            </PageWrapper>


        </div>
    )
}