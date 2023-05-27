import Link from "next/link";

export default function Bills() {
    return (


        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card">
                    <i className="bi bi-droplet"></i>
                    <div className="card-body">
                        <h5 className="card-type">Water Bill</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">bill amount : 1000 egp</li>
                        <li className="list-group-item">due date : 20/4/2024</li>
                    </ul>
                    <div className="card-body">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <Link className="btn btn-primary" role="button" href="/bills/pay" >Pay</Link>
                            <Link className="btn btn-primary" role="button" href="#" >set remainder</Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col">
                <div className="card">
                    <i className="bi bi-fuel-pump-diesel-fill"></i>
                    <div className="card-body">
                        <h5 className="card-type">gas Bill</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">bill amount : 1000 egp</li>
                        <li className="list-group-item">due date : 20/4/2024</li>
                    </ul>
                    <div className="card-body">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <Link className="btn btn-primary" role="button" href="/bills/pay" >Pay</Link>
                            <Link className="btn btn-primary" role="button" href="#" >set remainder</Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col">
                <div className="card">
                    <i className="bi bi-ev-station"></i>
                    <div className="card-body">
                        <h5 className="card-type">electricity Bill</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">bill amount : 1000 egp</li>
                        <li className="list-group-item">due date : 20/4/2024</li>
                    </ul>
                    <div className="card-body">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <Link className="btn btn-primary" role="button" href="/bills/pay" >Pay</Link>
                            <Link className="btn btn-primary" role="button" href="#" >set remainder</Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col">
                <div className="card">
                    <i className="bi bi-droplet"></i>
                    <div className="card-body">
                        <h5 className="card-type">Water Bill</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">bill amount : 1000 egp</li>
                        <li className="list-group-item">due date : 20/4/2024</li>
                    </ul>
                    <div className="card-body">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <Link className="btn btn-primary" role="button" href="/bills/pay" >Pay</Link>
                            <Link className="btn btn-primary" role="button" href="#" >set remainder</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>









    )
}