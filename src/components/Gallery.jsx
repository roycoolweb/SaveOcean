import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Polybase } from "@polybase/client"

const db = new Polybase({
    defaultNamespace: "tests8mf3",
});

export default function Gallery() {
    useEffect(() => {
        db.collection("Ocean")
            .get()
            .then((data) => {
                console.log(data.data)
                seto(data.data)
            })
    }, [])

    const [o, seto] = useState([])

    return (
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <h1>Explore</h1>
                <Link to='/create' className='btn btn-success'>Register</Link>
            </div>

            <div className='row'>
                {o.map(i => {
                    return <div className='col-4'>
                            <div className='card'>
                                <div className='row g-0'>
                                    <div className='card-body' key={i.data.id}>
                                            <h5 className='card-title'>{i.data.name}</h5>
                                            <p className='card-text'>{i.data.detail}</p>
                                            <p className='card-text'>{i.data.location}</p>
                                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                Donate
                                            </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                })}
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Donate to Ocean</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Amount" aria-describedby="basic-addon2" />
                        <span className="input-group-text" id="basic-addon2">ETH</span>
                    </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Donate</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}