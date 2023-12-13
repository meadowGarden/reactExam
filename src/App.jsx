import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import DonorInfo from "./donorInfo/DonorInfo";
import Homepage from "./homepage/Homepage";
import NewDonorForm from "./newDonorForm/NewDonorForm";
import NavBar from "./navbar/NavBar";
import { DonorContext } from "./newDonorForm/DonorListCard";
// import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/registration" element={<NewDonorForm />} />
        <Route path="/donorinfo" element={<DonorInfo />} />
      </Routes>
    </>
  );
}

export default App;
