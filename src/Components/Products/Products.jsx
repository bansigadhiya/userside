import React, { useEffect } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProductAsync } from '../../Services/Actions/Product.action';
import './Product.css';
import { json } from 'react-router-dom';

function Products() {

    const dispatch = useDispatch();
    const { product } = useSelector((state) => state.productReducer);

    useEffect(() => {
        dispatch(getProductAsync())
    }, [])

    const images = [
        "images/product-1.jpeg",
        "images/product-2.jpeg",
        "images/product-3.jpeg",
        "images/product-4.jpeg",
        "images/product-5.jpeg",
        "images/product-6.jpeg",
    ]

    return (
        <section className='py-100'>
            <dir>
                <Container>
                    <div className="heading text-center mb-3 w-50 mx-auto">
                        <h3 className='text-primary'>Our Products</h3>
                        <p className='text-gray m-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius tempora voluptatem voluptatibus inventore neque adipisci</p>
                    </div>
                    <Row>
                        {
                            product.map((pro) => {

                                return (
                                    <div className="col-3">
                                        <Card className='mt-4 bg-primary text-white border-0 shadow-sm p-1 rounded-0'>
                                            <Card.Img variant="top" src="images/product-5.jpeg" />
                                            <Card.Body className='bg-light'>
                                                <Card.Text className='mb-3 text-primary'>
                                                    {`Name : ${pro.name}`}
                                                </Card.Text>
                                                <Card.Text className='text-primary'>
                                                    {`Category : ${pro.category}`}
                                                </Card.Text>
                                                <Card.Text className='text-primary'>
                                                    {`Price : ${pro.price} Rs.`}
                                                </Card.Text>
                                                <Card.Text className='text-primary'>
                                                    {`Detail : ${pro.detail}`}
                                                </Card.Text>
                                                <Button className='bg-primary rounded-0 text-light border-0 px-3'>Add to cart</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </Row>
                </Container>
            </dir>
        </section>
    )
}

export default Products
