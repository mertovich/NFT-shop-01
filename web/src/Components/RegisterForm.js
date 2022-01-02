import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import '../App.css'
import Logo from '../images/Logo.svg'

export default class RegisterForm extends Component {
    render() {
        return (
            <div className='RegisterFormConteiner'>
                <img src={Logo} height='100px' width='100px' />
                <Form inline>
                    <FormGroup floating>
                        <Input
                            onChange={(event) => this.props.onChangeHandler(event)}
                            id="name"
                            name="name"
                            placeholder="Name"
                            type="name"
                        />
                        <Label for="name">
                            Name
                        </Label>
                    </FormGroup>

                    <FormGroup floating>
                        <Input
                            onChange={(event) => this.props.onChangeHandler(event)}
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            type="lastName"
                        />
                        <Label for="lastName">
                            Last Name
                        </Label>
                    </FormGroup>

                    <FormGroup floating>
                        <Input
                            onChange={(event) => this.props.onChangeHandler(event)}
                            id="exampleEmail"
                            name="email"
                            placeholder="Email"
                            type="email"
                        />
                        <Label for="exampleEmail">
                            Email
                        </Label>
                    </FormGroup>

                    <FormGroup floating>
                        <Input
                            onChange={(event) => this.props.onChangeHandler(event)}
                            id="examplePassword"
                            name="password"
                            placeholder="Password"
                            type="password"
                        />
                        <Label for="examplePassword">
                            Password
                        </Label>
                    </FormGroup>

                    <button
                    onClick={(event)=> this.props.registerSubmitHandler(event)}
                        className='RegisterFormButton'
                    >
                        Register
                    </button>
                </Form>
            </div>
        )
    }
}
