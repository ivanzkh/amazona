import Spinner from 'react-bootstrap/Spinner';

export default function LoadingBox() {
  return (
    <Spinner animation="border" rol="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
