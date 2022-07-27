import { createBrowserHistory } from "history";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import tollchargeService from "../services/tollcharge.service";

const AddCharges = () => {

    const [typeOfVehicle, setTypeOfVehicle] = useState('');
    const [singleJ, setSingleJ] = useState('');
    const [returnJ, setReturnJ] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();


    const saveCharge = (e) => {
        e.preventDefault();
        const charge = { typeOfVehicle, singleJ, returnJ, id };
        if (id) {
            //update
            tollchargeService.update(charge)
                .then(responce => {
                    console.log('Toll charge data update successfully', responce.data);
                    return navigate("/tollcharge");
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                });
        } else {
            //create record
            tollchargeService.create(charge)
                .then(responce => {
                    console.log('Toll charge data added successfully', responce.data);
                    // history.push("/");
                    return navigate("/tollcharge");
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                });
        }
    }

    useEffect(() => {
        if (id) {
            tollchargeService.get(id)
                .then(charge => {
                    setTypeOfVehicle(charge.data.typeOfVehicle);
                    setSingleJ(charge.data.singleJ);
                    setReturnJ(charge.data.returnJ);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])

    return (
        <div className="container">
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
                            <a class="nav-link" href="tollcharge">Toll Charges</a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li> */}
                    </ul>
                </div>
            </nav>
            <h1>Add new toll charge</h1>
            <hr />
            <form>
                <div className="form-group" >
                    <input
                        type="text"
                        className="form-control col-4"
                        id="typev"
                        value={typeOfVehicle}
                        onChange={(e) => setTypeOfVehicle(e.target.value)}
                        placeholder="Enter vehicle Type"
                    />
                </div>
                <div className="form-group" >
                    <input
                        type="text"
                        className="form-control col-4"
                        id="sjourney"
                        value={singleJ}
                        onChange={(e) => setSingleJ(e.target.value)}
                        placeholder="Enter charges"
                    />
                </div>
                <div className="form-group" >
                    <input
                        type="number"
                        className="form-control col-4"
                        id="rjourney"
                        value={returnJ}
                        onChange={(e) => setReturnJ(e.target.value)}
                        placeholder="Enter Charges"
                    />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={(e) => saveCharge(e)}>Save</button>
                </div>
            </form>
            <hr />
            <Link to="/tollcharge">Back to the List</Link>
        </div>
    );
}

export default AddCharges;