import DetailedDonorCard from "./DetailedDonorCard";
import "./DonorInfo.css"

const DonorInfo = () => {
  const dummy = {
    firstName: "a",
    lastName: "b",
    age: 34,
    gender: "female",
    bloodGroup: "ab",
  };

  return (
    <>
      <div className="pageInfoContainer">
        <h1>detailed donor info</h1>
        <DetailedDonorCard donor={dummy} />
      </div>
    </>
  );
};

export default DonorInfo;
