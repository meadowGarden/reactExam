import { createContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./DonorListCard.css";

export const DonorContext = createContext();

const DonorListCard = ({ donor, clickRemove, clickMore }) => {
  const { firstName, lastName, age, gender, bloodGroup } = donor;

  const [donorC, setDonorC] = useState(donor);

  return (
    <>
      <Card className="donorListCard">
        <Card.Body>
          <Card.Text>
            <strong>
              {firstName} {lastName}
            </strong>
            , age: {age}, {gender}, blood group <strong> {bloodGroup}</strong>
          </Card.Text>
          <Button
            onClick={() => clickRemove(donor)}
            className="donorListCardButton"
          >
            remove donor
          </Button>

          <DonorContext.Provider value={{ donorC, donorInfo }}>
            <Button
              onClick={() => clickMore(donor)}
              className="donorListCardButton"
            >
              detailed info
            </Button>
          </DonorContext.Provider>
        </Card.Body>
      </Card>
    </>
  );
};

export default DonorListCard;
