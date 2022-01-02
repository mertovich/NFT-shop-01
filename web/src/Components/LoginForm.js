import React, { Component } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import Logo from '../images/Logo.svg'

export default class LoginForm extends Component {
    render() {
        return (
            <div className='LogiFormConteiner' >
                <img src={Logo} height='100px' width='100px' />
                <Form inline>
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
                    onClick={(event)=> this.props.loginSubmitHandler(event)}
                        className='LoginFormButton'
                    >
                        Login
                    </button>
                </Form>
            </div>
        )
    }
}
