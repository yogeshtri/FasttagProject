
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddCharges from "./components/AddCharges";
import AddToll from "./components/AddToll";
import NotFound from "./components/NotFound";
import TollChargesList from "./components/TollChargesList";

import TollsList from "./components/TollsList";

function App() {
  return (
    <BrowserRouter>
      <div>
       
          <Routes>
          <Route exact path="/" element={ <TollsList/> } />
          <Route path="/add" element={ <AddToll/> } />
          <Route path="/tolls/edit/:id" element={ <AddToll/> } />

          <Route path="/tollcharge" element={ <TollChargesList/> } />
          <Route path="/addtollcharge" element={ <AddCharges/> } />
          <Route path="/charges/edit/:id" element={ <AddCharges/> } />


          <Route path="*" element={ <NotFound/> } />
          </Routes>
       
      </div>

    </BrowserRouter>
  )
}

export default App;