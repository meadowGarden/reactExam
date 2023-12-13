import DetailedDonorCard from "./DetailedDonorCard";
import "./DonorInfo.css"
import { DonorContext } from "../newDonorForm/DonorListCard";

const DonorInfo = () => {
  
  const {donorC, setDonorC} = DonorContext;
  console.log("DonorContext", DonorContext);

  

  return (
    <>
      <div className="pageInfoContainer">
        <h1>detailed donor info</h1>
        <DetailedDonorCard donor={donorC} />
      </div>
    </>
  );
};

export default DonorInfo;
