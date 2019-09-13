import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonCard from "./PersonCard";
import "./StarWars.css";

export default function Cards() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setPeople(response.data.results);
        console.log(response.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="cards-container">
      {people.map(person => PersonCard(person))}
    </div>
  );
}
