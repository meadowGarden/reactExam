import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./DonorListCard.css";

const DonorListCard = ({ donor }) => {
  const { firstName, lastName, age, gender, bloodGroup } = donor;

  return (
    <Card className="donorListCard">
      <Card.Body>
        <Card.Text>
          <strong>
            {firstName} {lastName}
          </strong>
          , age: {age}, {gender}, blood group <strong> {bloodGroup}</strong>
        </Card.Text>
        <Button className="donorListCardButton">įdėti trynimą</Button>
        <Button className="donorListCardButton">peržiūtėi išsamiau</Button>
      </Card.Body>
    </Card>
  );
};

export default DonorListCard;
