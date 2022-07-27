
import { useEffect, useState } from "react";
import fasttagService from "../services/fasttag.service";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import tollchargeService from "../services/tollcharge.service";


const TollChargesList = () => {

    const [charges, setCharges] = useState([]);
    // use to call services
    useEffect(() => {
        init();
    }, [])

    const init = () => {
        tollchargeService.getAll()
            .then(response => {
                console.log('printing the toll', response.data);
                setCharges(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }


    const handleDelete = id => {
        tollchargeService.remove(id)
            .then(response => {
                console.log('Toll record delete successfully', response.data);
                init();
            }).catch(error => {
                console.log('Something went wrong', error);
            })
    }

    return (
        <div className="container">
            {/* Navbar */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/tollcharge">Toll Charges</a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li> */}
                        {/* <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li> */}
                    </ul>
                </div>
            </nav>
            <h3>List of Toll Charges</h3>
            <hr />
            <div>
                <Link to="/addtollcharge" className="btn btn-primary mb-2">Add New Toll Charge</Link>
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Sr. No.</th>
                            <th>Type of Vehicle</th>
                            <th>Single Journey</th>
                            <th>Return Journey</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            charges.map(charge => (
                                <tr key={charge.id}>
                                    <td>{charge.id}</td>
                                    <td>{charge.typeOfVehicle}</td>
                                    <td>{charge.singleJ}</td>
                                    <td>{charge.returnJ}</td>
                                    <td>
                                        <Link className="btn btn-info" to={`/charges/edit/${charge.id}`}>Update</Link>
                                        <button className="btn btn-danger ml-2" onClick={(e) => {
                                            handleDelete(charge.id)
                                        }}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TollChargesList;