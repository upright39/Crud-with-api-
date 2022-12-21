
import React, { useState } from 'react'

import axios from 'axios'
import { useEffect } from 'react'

function SearchPage() {
    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {


    }, [])

    const mySearch = () => {

        axios.get("http://127.0.0.1:8000/api/search/").then(() => {

        })
    }

    return (
        <div>
            <table className="table mt-3">

                <tbody>


                    {
                        loading ? (<h4>loading please.......</h4>) : (
                            userData.map((data) => {
                                return (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.description}</td>

                                        <td><img style={{ width: 100, height: 60 }} src={`http://localhost:8000/${data.file_name}`} alt="pic" /></td>

                                        <td>

                                        </td>
                                    </tr>
                                )
                            })
                        )




                    }








                </tbody>
            </table>
        </div>
    )
}

export default SearchPage
