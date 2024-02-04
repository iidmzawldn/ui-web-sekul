import { Card } from "react-bootstrap";

const Kegiatan = (props) => {
  return (
    <>
      <Card style={{ width : "h-100" }}>
        <Card.Img style={{ aspectRatio: "21/9", objectFit: "cover" }} variant="top" src={props.imgkeg} />
        <Card.Body>
          <Card.Text>
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Kegiatan;
