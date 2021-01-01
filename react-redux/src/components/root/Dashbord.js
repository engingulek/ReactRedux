import React, { Component } from 'react'
import {Row,Col,Container} from "reactstrap"
import Category from '../categories/Category'
import Product from '../products/Product'
export default class Dashbord extends Component {
    render() {
        return (
            <div>
            <Container>
                <Row>
                    <Col xs="3">
                     <Category/>
                    </Col>
                    <Col xs="9">
                        <Product/>
                    </Col>
                </Row>
            </Container>
                
            </div>
        )
    }
}
