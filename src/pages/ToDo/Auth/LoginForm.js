import React from "react";
import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {useDispatch} from "react-redux";
import {logIn} from '../../../store/auth/actions'

function LoginForm() {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log(values);
            dispatch(logIn(values.email, values.password));
        },
        validationScheme: yup.object().shape({
            email: yup.string().required().email(),
            password: yup.string().required().min(4),
        }),
    });

    return (
        <Container fluid="sm">
            <Row className="justify-content-md-center">
                <Col md="auto">
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3" controlId="email" value={formik.values.email} >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={formik.handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password" value={formik.values.password} onChange={formik.handleChange} >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginForm