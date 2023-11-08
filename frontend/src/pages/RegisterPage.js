import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { register } from '../actions/userActions'
import Message from '../components/Message'

function RegisterPage({ history, variant }) {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")

    const dispatch = useDispatch()

    // reducer
    const userRegisterReducer = useSelector(state => state.userRegisterReducer)
    const { error, userInfo } = userRegisterReducer

    useEffect(() => {
        if (userInfo) {
            history.push('/') // homepage
        }
    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Нууц үг таарахгүй байна!')
        } else {
            dispatch(register(username, email, password))
        }
    }

    return (
        <div>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    <h1>Бүртгүүлэх</h1>
                    {message && <Message variant='danger'>{message}</Message>}
                    {error && <Message variant='danger'>{error}</Message>}
                    <Form onSubmit={submitHandler}>

                        <Form.Group controlId='name'>
                            <Form.Label>
                            Хэрэглэгчийн нэр
                            </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="хэрэглэгчийн нэрээ оруулна уу"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='email'>
                            <Form.Label>
                            Имэйл хаяг
                            </Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="имэйлээ оруулна уу"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='password'>
                            <Form.Label>
                            Нууц үг
                            </Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="нууц үгээ оруулна уу"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='passwordConfirm'>
                            <Form.Label>
                            Нууц үгээ баталгаажуулна уу
                            </Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Нууц үгээ батлах"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Button type="submit" variant='primary'>Бүртгүүлэх</Button>
                    </Form>

                    <Row className="py-3">
                        <Col>
                        Бүртгэлтэй юу?
                    <Link
                                to={`/login`}
                            > Нэвтрэх</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>

    )
}

export default RegisterPage