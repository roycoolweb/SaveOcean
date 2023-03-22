import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div className='main'>
            <h1 className='mb-5'>Save Ocean</h1>
            <div className='card bg-dark card-width'>
                <div className='card-body'>
                    <h5 className='card-title text-white'>Welcome</h5>
                    <p className='card-text text-white'>Connect Wallet to Donate and Save Ocean</p>
                    <div className='d-grid gap-2'>
                        <Link to='/gallery' className='btn btn-primary btn-block'>Connect</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}