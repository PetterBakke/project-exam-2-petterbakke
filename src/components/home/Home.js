import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { public_url } from '../../constants/Api.js';
import BookingCalendar from "../calendar/Calendar.js";
import Layout from "../../layout/Layout.js";

function CallApi() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchApi() {
      try {
        const response = await fetch(public_url);

        if (response.ok) {
          const json = await response.json();
          console.log(json.data);
          setHotels(json.data);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString())
      } finally {
        setLoading(false);
      }
    }
    fetchApi();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: An error occured</div>;
  }

  return (
    <>
    <div className="home-container">
    <Container>
      <Layout />
      <BookingCalendar />
      {hotels.map(function (hotel) {
        return (
          <div className="hotel-container" key={hotel.attributes.id}>
            {/* <img src={hotel.attributes.Images.data[0].attributes.formats.thumbnail.url} alt="" /> */}
            <h4 key={hotel.attributes.name}>{hotel.attributes.name}</h4>
            <p key={hotel.attributes.createdAt}>{hotel.attributes.description}</p>
            <Link to={`hotel/${hotel.id}`} className="link-page">Link to {hotel.attributes.name}</Link>
          </div>
        );
      })}
     
      </Container>
      </div>
    </>
  );
}

export default CallApi;