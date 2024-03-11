import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { type PageProps } from "$fresh/server.ts";
import { Cartype } from "../types.tsx";
const CarComp: FunctionComponent<{ car: Cartype }> = (props) => {
  return (
    <div className="CarComp">
      <h1 className="CarName">{props.car.make.toUpperCase()}</h1>
      <div className="CarData">
        <ul>
        <li> <h2> Model: {props.car.model}</h2></li>
        <li> <h3>Fuel Type: {props.car.fuel_type}</h3></li>
        <li><h3>Drive Type: {props.car.drive}</h3></li>
        <li> <h3>Cylinders: {props.car.cylinders}</h3></li>
        </ul>
        </div>
    </div>
  );
};
export default CarComp;
