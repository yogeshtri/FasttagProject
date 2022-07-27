import { useEffect, useState } from "react";
import fasttagService from "../services/fasttag.service";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const TollsList = () => {

    var total=0;
    const [tolls, setTolls] = useState([]);
    // use to call services
    useEffect(() => {
        init();
    }, [])

    const init = () => {
        fasttagService.getAll()
            .then(response => {
                console.log('printing the toll', response.data);
                setTolls(response.data);
                total+= response.data.charges;
        
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }


    const handleDelete = id => {
        fasttagService.remove(id)
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
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li> */}
                    </ul>
                </div>
            </nav>
            <h3>List of paid tolls</h3>
            <hr />
            <div>
                <Link to="/add" className="btn btn-primary mb-2">Add Toll</Link>
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Sr. No.</th>
                            <th>Charges</th>
                            <th>Vehicle Number</th>
                            <th>Vehicle Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tolls.map(toll => (
                                <tr key={toll.id}>
                                    <td>{toll.id}</td>
                                    <td>{toll.charges}</td>
                                    <td>{toll.vehicleNum}</td>
                                    <td>{toll.vehicleType}</td>
                                    <td>
                                        <Link className="btn btn-info" to={`/tolls/edit/${toll.id}`}>Update</Link>
                                        <button className="btn btn-danger ml-2" onClick={(e) => {
                                            handleDelete(toll.id)
                                        }}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="card card-body mt-3">
                        <h4>Total:
                            <span className="float-end">{total}</span>
                        </h4>
            </div>
        </div>
    );
}

export default TollsList;