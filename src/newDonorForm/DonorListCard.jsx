import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./DonorListCard.css";

const DonorListCard = ({ donor, clickRemove, clickMore }) => {
  const { firstName, lastName, age, gender, bloodGroup } = donor;

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
          <Button
            onClick={() => clickMore(donor)}
            className="donorListCardButton"
          >
            detailed info
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default DonorListCard;
