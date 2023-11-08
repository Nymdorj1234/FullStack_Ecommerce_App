import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { login } from '../actions/userActions'
import Message from '../components/Message';


function LoginPage({ history }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    // reducer
    const userLoginReducer = useSelector(state => state.userLoginReducer)
    const { error, userInfo } = userLoginReducer

    useEffect(() => {
        if (userInfo) {
            history.push('/') // homepage
        }
    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(username, password))
    }

    return (
        <div>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>                    
                    <h1>Нэвтрэх</h1>                    
                    {error && <Message variant='danger'>{error}</Message>}
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='username'>
                            <Form.Label>
                            Хэрэглэгчийн нэр
                    </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="хэрэглэгчийн нэрийг оруулна уу"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='password'>
                            <Form.Label>
                            Нууц үг
                    </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="нууц үгээ оруулна уу"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Button type="submit" variant='primary'>Нэвтрэх</Button>
                    </Form>

                    <Row className="py-3">
                        <Col>
                        Данс байхгүй юм уу?
                    <Link
                                to={`/register`}
                            > Бүртгүүлэх</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>

    )
}

export default LoginPage