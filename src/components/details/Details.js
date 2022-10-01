import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container } from "react-bootstrap";
import { public_url } from '../../constants/Api';

function PageDetail() {
  const [ hotel, setHotel ] = useState({});
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState("");

  const { id } = useParams();

  const url = public_url + "/" + id;
  console.log(url);

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setHotel(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch(function (err) {
        setError(err);
      });
  }, [url]);

  if(loading) {
    return <div>Loading...</div>;
  }

  if(error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <div classname="page-detail">
        <h1>{hotel.attributes.name}</h1>
      </div>
    </Container>
  );
}

export default PageDetail;