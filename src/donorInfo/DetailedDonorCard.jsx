import Card from "react-bootstrap/Card";

const DetailedDonorCard = ({ donor }) => {
  const {
    firstName,
    lastName,
    gender,
    email,
    phone,
    birthDate,
    image,
    bloodGroup,
    height,
    weight,
  } = donor;

  return (
    <>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Text>
            {firstName} {lastName}
          </Card.Text>
          <Card.Text>
            birth date: {birthDate}, gender: {gender}
          </Card.Text>
          <Card.Text>
            email: {email}, phone: {phone}
          </Card.Text>
          <Card.Text>
            blood group: {bloodGroup}, height: {height}, weight: {weight}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default DetailedDonorCard;
