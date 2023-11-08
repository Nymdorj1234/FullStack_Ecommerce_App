import React, { useState } from 'react'
import { Form, Button, Card, InputGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createUserAddress, getAllAddress } from '../actions/userActions'
import { CREATE_USER_ADDRESS_RESET } from '../constants'
import Message from './Message'


const CreateAddressComponent = ({ toggleCreateAddress }) => {

    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [pinCode, setPinCode] = useState("")
    const [houseNumber, setHouseNumber] = useState("")
    const [landmark, setLandmark] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")

    // Create User Address Reducer
    const createUserAddressReducer = useSelector(state => state.createUserAddressReducer)
    const { success: addressCreationSuccess, error: errorCreatingAddress } = createUserAddressReducer

    const addressSubmitHandler = (e) => {
        e.preventDefault()
        const addressData = {
            "name": name,
            "phone_number": phoneNumber,
            "pin_code": pinCode,
            "house_no": houseNumber,
            "landmark": landmark,
            "city": city,
            "state": state,
        }
        dispatch(createUserAddress(addressData))
    }

    if (addressCreationSuccess) {
        alert("Address successfully created.")
        toggleCreateAddress()
        dispatch({
            type: CREATE_USER_ADDRESS_RESET
        })
        dispatch(getAllAddress())
    }

    return (
        <div>
            <p className="text-center text-info"><em>Шинэ хаяг</em></p>
            {errorCreatingAddress
                ? <Message variant='danger'>
                    {errorCreatingAddress}
                </Message>
                :
                ""}
            <Card
                className="mx-auto mb-4"
                style={{ width: "50%", border: "1px solid", borderColor: "#C6ACE7" }}
            >
                <Card.Body>
                    <Form onSubmit={addressSubmitHandler}>

                        <Form.Group controlId='name'>
                            <Form.Label>
                                Нэр
                            </Form.Label>
                            <Form.Control
                                autoFocus={true}
                                type="text"
                                placeholder="Нэрээ оруулна уу"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='phoneNumber'>
                            <Form.Label>
                            Утасны дугаар
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Text>+979</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Утасны дугаар"
                                    pattern="[0-9]+"
                                    maxLength="10"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                >
                                </Form.Control>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId='pinCode'>
                            <Form.Label>
                            PIN код
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="PIN код"
                                value={pinCode}
                                pattern="[0-9]+"
                                maxLength="6"
                                onChange={(e) => setPinCode(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='houseNumber'>
                            <Form.Label>
                            Байшингийн дугаар/хаяг
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="хаяг"
                                value={houseNumber}
                                onChange={(e) => setHouseNumber(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='landmark'>
                            <Form.Label>
                            Газрын тэмдэг
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Газрын тэмдэг"
                                value={landmark}
                                onChange={(e) => setLandmark(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='city'>
                            <Form.Label>
                                Хот
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Хот"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='state'>
                            <Form.Label>
                            муж
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="муж"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Button
                            style={{ width: "100%" }}
                            className="btn-sm"
                            type="submit"
                            variant="success"
                        >
                            Хаяг хадгалах
                        </Button>
                        <Button
                            style={{ width: "100%" }}
                            className="btn-sm mt-2"
                            variant="primary"
                            onClick={() => toggleCreateAddress()}>
                            Цуцлах
                        </Button>
                    </Form>

                </Card.Body>
            </Card>
        </div>
    )
}

export default CreateAddressComponent
