import React from 'react'
import { Card } from 'react-bootstrap'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import Message from "./Message"

const PaymentStatus = () => {
    const location = useLocation()

    const renderData = () => {

        try {
            const boughtData = location.state.detail

            return (
                <div>
                    <h3 className="text-success">Төлбөр амжилттай болсон</h3>
                    <Card className="p-3">
                    Амжилттай худалдаж авлаа
                        <br />
                        <span className="mb-2" style={{ display: "flex" }}>
                            {boughtData.name},
                            ₹{boughtData.price} <i className="text-primary ml-1 mt-1 fas fa-check-circle"></i>
                        </span>
                        <Link to="/all-orders/">Захиалгын хуудас руу очно уу</Link>
                    </Card>
                </div>
            )
        } catch (error) {
            return <Message variant='info'>Төлбөрийн төлөв байхгүй байна.</Message>
        }
    }

    return renderData()
}

export default PaymentStatus
