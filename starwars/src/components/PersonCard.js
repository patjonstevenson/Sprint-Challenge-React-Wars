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
    <Card className="personCard" key={props.url}>
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>Birth Year: {props.birth_year}</CardSubtitle>
        <CardSubtitle>Mass: {props.mass}</CardSubtitle>
        <CardText>Number of Films: {props.films.length}</CardText>
      </CardBody>
    </Card>
  );
}
