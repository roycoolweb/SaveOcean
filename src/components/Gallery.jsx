import React from 'react'
import { Link } from 'react-router-dom'

export default function Gallery() {
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
                            <div className='card-body'>
                                <h5 className='card-title'>Green Ocean</h5>
                                <p className='card-text'>0.1 ETH Donated</p>
                                <div className='d-grid gap-2'>
                                    <Link to='/gallery' className='btn btn-primary btn-block'>View</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}