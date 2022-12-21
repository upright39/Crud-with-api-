import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import axios from 'axios';


function EdithPage() {
    const params = useParams()
    const navigate = useNavigate()

    const [editUser, setEdithUser] = useState([])
    const [file, setFile] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")


    useEffect(() => {

        axios.get(`http://127.0.0.1:8000/api/single_user/${params.id}`).then((res) => {
            setEdithUser(res.data)
            setDescription(res.data.description)
            setEmail(res.data.email)
            setName(res.data.name)
            setFile(res.data.file_name)
        })
    }, [])





    const sumbitUpdate = (e) => {
        e.preventDefault()
        const formData = new FormData()

        formData.append("name", name)
        formData.append("email", email)
        formData.append("description", description)
        formData.append("file_name", file)

        axios.post(`http://127.0.0.1:8000/api/update_user/${params.id}`, formData).then((res) => {

        }).catch((err) => console.log(err))

        navigate("/")
    }





    return (
        <div>
            <MainLayout>
                <div className='container'>
                    <div className='container'>
                        <form onSubmit={sumbitUpdate}>
                            <div className="form-group">
                                <label htmlFor="">Add Name</label>
                                <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Name"
                                    defaultValue={editUser.name}
                                />

                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"
                                    defaultValue={editUser.email} />

                            </div>
                            <div className="form-group">
                                <label htmlFor="">Description</label>
                                <input type="text" onChange={(e) => setDescription(e.target.value)} className="form-control" id="" placeholder="Description"
                                    defaultValue={editUser.description} />
                            </div>
                            <div className="form-group">
                                <label>Add image</label>
                                <input type="file" onChange={(e) => setFile(e.target.files[0])} className="form-control" id="file_name"
                                    defaultValue={editUser.file_name} />
                            </div>

                            <button type="submit" className="btn btn-primary">Add User</button>
                        </form>
                    </div>
                </div>
            </MainLayout>
        </div>
    )
}

export default EdithPage
