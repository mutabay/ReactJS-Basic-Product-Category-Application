import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


class CategoryList extends Component {

    state = {
        categories: []
    };

    componentDidMount()
    {
        this.GetCategories();
    }

    GetCategories = () => {
        fetch("http://localhost:3000/categories")
        .then(response=>response.json())
        .then(data=>this.setState({categories:data}))
    }
    
    render() {
        return (
            <div>
                <h2 className="my-5">{this.props.info.title}</h2>
                <ListGroup >
                    {
                        this.state.categories.map(category => (
                            < ListGroupItem className="list-group" onClick={() => this.props.changeCategory(category)}
                                active={category.categoryName === this.props.currentCategory?true:false}
                                key={category.id}>
                                {category.categoryName}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
                <h4>{this.props.currentCategory}</h4>
            </div >
        );
    }
}

export default CategoryList;