import { useEffect, useState } from "react";
import axios from "axios";
import "./NewDonorForm.css";
import DonorListCard from "./DonorListCard";

const NewDonorForm = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    // console.log("event", event);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));

    // if (formData.name.length < 5) {
    //   setInputError("enter more than 10 symbols");
    // } else {
    //   setInputError(false);
    // }
  };


  const donorsToDisplay = donorsArr.map((donor) => {
    return (
        <DonorListCard key={donor.id} donor={donor}/>
    );
  });

  return (
    <>
      <div className="pageContainer">
        <h1 className="titleFormPage">donor registration form</h1>
        <form className="donorRegistrationForm">
          <label>first name</label>
          <input
            required
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleForm}
          />
          <label>last name</label>
          <input
            required
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleForm}
          />
          <label>age</label>
          <input
            required
            type="number"
            name="age"
            value={formData.age}
            onChange={handleForm}
          />

          <label>
            select gender
            <select name="gender" value={formData.gender} onChange={handleForm}>
              <option value="n/a">n/a</option>
              <option value="male">man</option>
              <option value="female">woman</option>
            </select>
          </label>

          <label>
            select blood group
            <select
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
          <button>submit</button>

          <p>{formData.firstName}</p>
          <p>{formData.lastName}</p>
          <p>{formData.age}</p>
          <p>{formData.gender}</p>
          <p>{formData.bloodGroup}</p>
        </form>
        <div className="donorList">
            {donorsToDisplay}
        </div>
      </div>
    </>
  );
};
export default NewDonorForm;
