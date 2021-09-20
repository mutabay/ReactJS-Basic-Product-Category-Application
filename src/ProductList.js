import React, { Component } from 'react';
import { Container, Table, Button } from 'reactstrap';


class ProductList extends Component {


    render() {
        return (
            <Container>
                <h3 className="my-5">{this.props.info.title}</h3>
                <h4>{this.props.currentCategory}</h4>

                <Table>
                    <thead>
                        <tr>
                            <th>Category Id</th>
                            <th>ProductName</th>
                            <th>Quantity Per Unit</th>
                            <th>Unit Price</th>
                            <th>Units In Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product => (
                                <tr key={product.id}>
                                    <td >{product.categoryId}</td>
                                    <td >{product.productName}</td>
                                    <td >{product.quantityPerUnit}</td>
                                    <td >{product.unitPrice}</td>
                                    <td >{product.unitsInStock}</td>
                                    <td ><Button color="primary" onClick={() => this.props.addToCart(product)}>Add To Cart</Button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        );
    }
}

export default ProductList;