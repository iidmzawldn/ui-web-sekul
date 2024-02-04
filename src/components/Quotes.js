import { Card } from "react-bootstrap";

const Quotes = () => {
  return (
    <>
      <Card style={{ width: "h-100" }}>
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p className="">
              {" "}
              “Bila kaum muda yang telah belajar di sekolah dan menganggap
              dirinya terlalu tinggi dan pintar untuk melebur dengan masyarakat
              yang bekerja dengan cangkul dan hanya memiliki cita-cita yang
              sederhana, maka lebih baik pendidikan itu tidak diberikan sama
              sekali"{" "}
            </p>
            <footer className="blockquote-footer">
              Tan Malaka
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
};

export default Quotes;
