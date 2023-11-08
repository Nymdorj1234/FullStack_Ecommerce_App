import React from 'react'
import { Button } from 'react-bootstrap'
import { deleteSavedCard } from '../actions/cardActions'
import { useDispatch } from 'react-redux'
import { Modal } from 'react-bootstrap'


function DeleteCardComponent({ userId, deleteCardNumber, runCardDeleteHandler, toggleRunCardDeleteHandler }) {

    const dispatch = useDispatch()

    // card delete confirmation
    const confirmDelete = (c_number) => {
        dispatch(deleteSavedCard(c_number))
        toggleRunCardDeleteHandler()
    }

    return (
        <div>
            {/* Modal Start*/}
            <div>
                <Modal show={runCardDeleteHandler} onHide={toggleRunCardDeleteHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <i style={{ color: "#e6e600" }} className="fas fa-exclamation-triangle"></i>
                            {" "}
                            Баталгаажуулалтыг устгах
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            <b>
                            Анхааруулга!
                            </b>
                            {" "}Картаа устгаснаар таны зурвас болон түүний бүх өгөгдөл устах болно.
                        </p>
                        Та картыг устгахдаа итгэлтэй байна уу "{deleteCardNumber}"?
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={() => confirmDelete(deleteCardNumber)}>
                        Устгахаа баталгаажуулна уу
                        </Button>
                        <Button variant="primary" onClick={toggleRunCardDeleteHandler}>
                        Цуцлах
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

            {/* Modal End */}
        </div>
    )
}

export default DeleteCardComponent
