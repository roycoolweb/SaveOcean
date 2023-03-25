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
                <div className='col-4'>
                    <div className='card'>
                        <div className='row g-0'>
                            {o.map(i => {
                                return <div className='card-body' key={i.data.id}>
                                    <h5 className='card-title'>{i.data.name}</h5>
                                    <p className='card-text'>{i.data.location}</p>
                                    <div className='d-grid gap-2'>
                                        <Link to='/gallery' className='btn btn-primary btn-block'>View</Link>
                                    </div>
                                </div>
                            })}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}