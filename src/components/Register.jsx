import React from 'react'

export default function Register() {
    return (
        <div className='container'>
            <h1>Register</h1>
            <form className='form-width'>
                <div className="mb-3 row">
                    <label for="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="detail" className="col-sm-2 col-form-label">Detail</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="detail" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="address" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="address" />
                    </div>
                </div>
                <button className='btn btn-primary btn-lg mt-1'>
                    Register
                </button>
            </form>

        </div>
    )
}