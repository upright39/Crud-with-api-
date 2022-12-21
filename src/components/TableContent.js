import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'


function TableContent() {
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")



  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    setLoading(true)
    await axios.get("http://127.0.0.1:8000/api/show/user")
      .then((res) => {
        setUserData(res.data)
        setLoading(false)
      }
      ).catch(err => console.log(err))

  }

  const deleteUser = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`).then((res) => {
      getUser()
    })

  }

  return (
    <div className='container-fluid'>

      <button className='btn btn-success mr-10 mt-5'><Link to="/AddPage">AddPage</Link></button>
      <input type="text" className="form-control m-auto" onChange={(e) => setSearch(e.target.value)} placeholder="search......." style={{ width: 300 }} />

      <table className="table mt-3">
        <thead className="thead-dark">
          <tr >
            <th scope="col">SN</th>
            <th scope="col-4">NAME</th>
            <th scope="col-4">EMAIL</th>
            <th scope="col-10">DESCRIPTION</th>
            <th scope="col-10">IMAGE</th>
            <th scope="col">OPERATION</th>
          </tr>
        </thead>
        <tbody>


          {
            loading ? (<h2 style={{ width: 300 }} > loading please....   </h2>) : (
              userData.filter((value) => {

                if (search === "") {
                  return value
                } else if (
                  value.name.includes(search)
                ) {
                  return value
                }
              }).map((data) => {
                return (
                  <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.description}</td>

                    <td><img style={{ width: 100, height: 60 }} src={`http://localhost:8000/${data.file_name}`} alt="pic" /></td>

                    <td>

                      <button className='btn btn-danger btn-sm mr-3' onClick={() => deleteUser(data.id)}>Delete</button>

                      <button type="button" className="btn btn-secondary text-light btn-sm">
                        <Link to={`/edithPage/${data.id}`} >Edith</Link>
                      </button>

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

export default TableContent
