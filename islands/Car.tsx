import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { type PageProps } from "$fresh/server.ts";
import { Cartype } from "../types.tsx";
const CarComp: FunctionComponent<{ car: Cartype }> = (props) => {
  return (
    <div className="CarComp">
        <ul>
        <li><h1>{props.car.make.toUpperCase()}</h1></li>
        <li> <h2>{props.car.model}</h2></li>
        <li><h3>{props.car.fuel_type}</h3></li>
        <li><h3>{props.car.drive}</h3></li>
        <li><h3>{props.car.cylinders}</h3></li>
        </ul>
    </div>
  );
};
export default CarComp;
