import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'


function SearchBarForProducts() {
    document.title = 'Хайлт';

    let history = useHistory()
    const [searchTerm, setSearchTerm] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        if(searchTerm) {
            history.push(`/?searchTerm=${searchTerm}`)
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <span
                    style={{ display: "flex" }}
                    className=""
                >
                    <input
                        type="text"
                        value={searchTerm}
                        placeholder="Бүтээгдэхүүн хайх"
                        className="form-control"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary ml-2 button-focus-css"
                    ><i className="fas fa-search"></i>
                    </button>
                </span>
            </form>
        </div>
    )
}

export default SearchBarForProducts
