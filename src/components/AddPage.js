import React, { useState } from 'react';
import MainLayout from './layout/MainLayout';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
function AddPage() {

    const [file, setFile] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")
    const url = "http://127.0.0.1:8000/api/add/user"
    let navigate = useNavigate()


    const handleSumbit = (e) => {
        e.preventDefault()
        const formData = new FormData()

        formData.append("name", name)
        formData.append("email", email)
        formData.append("description", description)
        formData.append("file_name", file)

        axios.post(url, formData).then((res) => {

        }).catch((err) => console.log(err))

        navigate('/')
    }


    return (
        <MainLayout>
            <div className='container'>
                <form onSubmit={handleSumbit}>
                    <div className="form-group">
                        <label htmlFor="">Add Name</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Name" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <input type="text" onChange={(e) => setDescription(e.target.value)} className="form-control" id="" placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <label>Add image</label>
                        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="form-control" id="file_name" />
                    </div>

                    <button type="submit" className="btn btn-primary">Add User</button>
                </form>
            </div>
        </MainLayout>
    )
}

export default AddPage
