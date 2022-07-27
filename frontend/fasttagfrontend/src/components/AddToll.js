import { createBrowserHistory } from "history";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import fasttagService from "../services/fasttag.service";

const AddToll = () => {

    const [vehicleNum, setVehicleNum] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [charges, setCharges] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();


    const saveToll = (e) => {
        e.preventDefault();
        const toll = { vehicleNum, vehicleType, charges, id };
        if (id) {
            //update
            fasttagService.update(toll)
                .then(responce => {
                    console.log('Fasttag data update successfully', responce.data);
                    return navigate("/");
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                });
        } else {
            //create record
            fasttagService.create(toll)
                .then(responce => {
                    console.log('Toll data added successfully', responce.data);
                    // history.push("/");
                    return navigate("/");
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                });
        }
    }

    useEffect(() => {
        if (id) {
            fasttagService.get(id)
                .then(toll => {
                    setVehicleNum(toll.data.vehicleNum);
                    setVehicleType(toll.data.vehicleType);
                    setCharges(toll.data.charges);
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
                        {/* <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li> */}
                    </ul>
                </div>
            </nav>
            <h1>Add new toll</h1>
            <hr />
            <form>
                <div className="form-group" >
                    <input
                        type="text"
                        className="form-control col-4"
                        id="vnum"
                        value={vehicleNum}
                        onChange={(e) => setVehicleNum(e.target.value)}
                        placeholder="Enter vehicle Number"
                    />
                </div>
                <div className="form-group" >
                    {/* <input
                        type="text"
                        className="form-control col-4"
                        id="vtype"
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        placeholder="Enter vehicle Type"
                    /> */}
                    <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} >
                    <option>Select vehicle Type</option>
                    <option>CAR/VAN</option>
                    <option>LCV</option>
                    <option>BUS/TRUCK</option>
                    <option>UPTO 3 AXLE</option>
                    <option>GOVT</option>
                    </select>
                </div>
                <div className="form-group" >
                    {/* <input
                        type="number"
                        className="form-control col-4"
                        id="charge"
                        value={charges}
                        onChange={(e) => setCharges(e.target.value)}
                        placeholder="Enter Charges"
                    /> */}
                    <select value={charges} onChange={(e) => setCharges(e.target.value)}>
                    <option>Select Charges</option>
                    <option value={110}>car -110</option>
                    <option value={175}>LCV - 175</option>
                    <option value={370}>BUS/TRUCK - 370</option>
                    <option value={585}>UPTO 3 AXLE - 585</option>
                    <option value={0}>GOVT - 00</option>
                    </select>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={(e) => saveToll(e)}>Save</button>
                </div>
            </form>
            <hr />
            <Link to="/">Back to the List</Link>
        </div>
    );
}

export default AddToll;