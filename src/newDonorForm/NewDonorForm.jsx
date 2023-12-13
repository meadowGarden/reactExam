import { useEffect, useState } from "react";
import axios from "axios";
import "./NewDonorForm.css";
import DonorListCard from "./DonorListCard";

const NewDonorForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [newDonor, setNewDonor] = useState(); //
  const [donorsArr, setDonorsArr] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    bloodGroup: "",
  });

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setDonorsArr(response.data.users);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div>data is loading, please wait...</div>;
  }

  const handleForm = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newDonor = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
      gender: formData.gender,
      bloodGroup: formData.bloodGroup,
    };
    sendNewDonor(newDonor);
    setIsLoading(true);
    setDonorsArr([...donorsArr, newDonor]);
  };

  const sendNewDonor = ({ newDonor }) => {
    axios
      .post("https://dummyjson.com/users/add", newDonor)
      .then((response) => {
        setNewDonor(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const removeDonor = (donor) => {
    const updatedDonorArr = donorsArr.filter(
      (donorIn) => donor.id !== donorIn.id
    );
    // setIsLoading(true);
    sendRemoveDonor(donor);
    setDonorsArr([...updatedDonorArr]);
  };
  const sendRemoveDonor = (donor) => {
    axios
      .delete(`https://dummyjson.com/users/${donor?.id}`, { donor })
      .then((response) => {
        console.log(response);
        // setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const expandDonor = (donor) => {
    navigate("/donorinfo");
  };

  const donorsToDisplay = donorsArr.map((donor) => {
    return (
      <DonorListCard
        key={donor.id}
        donor={donor}
        clickRemove={removeDonor}
        clickMore={expandDonor}
      />
    );
  });

  return (
    <>
      <div className="pageFormContainer">
        <h1 className="titleFormPage">donor registration form</h1>
        <div className="formContainer">
          <form onSubmit={handleSubmit} className="donorRegistrationForm">
            <label>first name</label>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleForm}
              placeholder="enter first name"
              className="donorRegistrationFormInput"
            />
            <label>last name</label>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleForm}
              placeholder="enter last name"
              className="donorRegistrationFormInput"
            />
            <label>age</label>
            <input
              required
              type="number"
              name="age"
              value={formData.age}
              onChange={handleForm}
              placeholder="enter age"
              className="donorRegistrationFormInput"
            />
            <label>
              select gender
              <select
                className="donorRegistrationFormInput"
                name="gender"
                value={formData.gender}
                onChange={handleForm}
              >
                <option value="n/a">n/a</option>
                <option value="male">man</option>
                <option value="female">woman</option>
              </select>
            </label>
            <label>
              select blood group
              <select
                className="donorRegistrationFormInput"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleForm}
              >
                <option value="n/a">n/a</option>
                <option value="O(I)">O(I)</option>
                <option value="A(II)">O(II)</option>
                <option value="B(III)">O(III)</option>
                <option value="AB(IV)">O(IV)</option>
              </select>
            </label>
            <button className="donorRegistrationFormButton">submit</button>
          </form>
        </div>
        <div className="donorList">{donorsToDisplay}</div>
      </div>
    </>
  );
};
export default NewDonorForm;
