import React from 'react'
import { Polybase } from "@polybase/client"

const db = new Polybase({
    defaultNamespace: "tests8mf3",
});

export default function Register() {
    const collection = async() => {
        await db.applySchema(`
            @public
            collection Ocean {
                id: string;
                name: string;
                detail: string;
                location: string;

                constructor (id: string, name: string, detail: string, location: string) {
                    this.id = id;
                    this.name = name;
                    this.detail = detail;
                    this.location = location;
                }
            }
            `,
            "tests8mf3"
        )
    }

    const create = async () => {
        await db.collection("Ocean").create(["0", "Blue Ocean", "OOOOOOOOO", "Nowhere"])
    }

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
            </form>
            <button className='btn btn-primary btn-lg mt-1' onClick={create}>
                Register
            </button>
        </div>
    )
}