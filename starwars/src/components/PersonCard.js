import React from "react";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardBody,
  CardText
} from "reactstrap";
import styles from "./StarWars.css";

export default function PersonCard(props) {
  return (
    <Card className="card" key={props.url}>
      <CardTitle className="title">{props.name}</CardTitle>
      <CardBody>
        <CardSubtitle className="subtitle">
          Birth Year: {props.birth_year}
        </CardSubtitle>
        <CardText>Mass: {props.mass}</CardText>
        <CardText>Height: {props.height}</CardText>
        <CardText>Gender: {props.gender}</CardText>
        <CardText>Hair Color: {props.hair_color}</CardText>
        <CardText>Eye Color: {props.eye_color}</CardText>
        <CardText>Skin Color: {props.skin_color}</CardText>
        <CardText>Number of Films: {props.films.length}</CardText>
        <CardText>Number of Vehicles: {props.vehicles.length}</CardText>
        <CardText>Number of Starships: {props.starships.length}</CardText>
      </CardBody>
    </Card>
  );
}
