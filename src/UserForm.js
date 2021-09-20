import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap'
import alertify from 'alertifyjs';

class UserForm extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        description: "",
        city: ""
    }

    onChangeHandler = (event) => 
    {
        let eventName = event.target.name
        let eventValue = event.target.value
        this.setState({[eventName] : eventValue})
    }

    onSubmitHandler = (event) => 
    {
        event.preventDefault()
        alertify.success(this.state.email + " is submitted successfully.", 2)
    }
    render() {
        return (
            <div>
                <h2 className="my-5">User Form</h2>
                <Form>
                    <FormGroup>
                        <Label for="username">Please Enter User Name : </Label>
                        <Input name="username" onChange={this.onChangeHandler} type="text" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">Please Enter E-Mail : </Label>
                        <Input name="email" onChange={this.onChangeHandler} type="email " />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Please Enter password : </Label>
                        <Input name="password" onChange={this.onChangeHandler} type="password" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="description">Please Enter User Description : </Label>
                        <Input name="description" onChange={this.onChangeHandler} type="textarea" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="city">Please Enter city : </Label>
                        <Input name="city" onChange={this.onChangeHandler} type="select">
                            <option>Istanbul</option>
                            <option>Ankara</option>
                            <option>Izmir</option>
                            <option>Trabzon</option>
                            <option>Erzincan</option>
                        </Input>
                    </FormGroup>

                    <Label className="my-3" >City : {this.state.city}</Label>

                    <br></br>
                    <input type="submit" className="btn btn-dark" onClick={this.onSubmitHandler} value="Submit"></input>
                </Form>
            </div>
        );
    }
}

export default UserForm;