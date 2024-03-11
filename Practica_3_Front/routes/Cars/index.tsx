import axios from "npm:axios";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { FreshContext, Handlers, type PageProps } from "$fresh/server.ts";
import { Cartype } from "../../types.tsx";
import CarComp from "../../islands/Car.tsx";
export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);

    const Model = url.searchParams.get("model");
    const Make = url.searchParams.get("make");
    const headers = {
      "X-Api-Key": "UJhYVUxrSKqPZP7V8WD9PA==sYM7jOOqw36WSoOW",
    };
    const urlModel =
      `https://api.api-ninjas.com/v1/cars?limit=2&model=${Model}`;
    const urlMake = `https://api.api-ninjas.com/v1/cars?limit=2&make=${Make}`;
    let data;
    if (Model) {
      const response = await axios.get(urlModel, { headers });
      data = response.data;
    } else if (Make) {
      const response = await axios.get(urlMake, { headers });
      data = response.data;
    }
    return ctx.render(data);
  },
};
const Page = (props: PageProps) => {
  return (
    <div className="CarPage">
      <div className="Search">
        <form action="/Cars" method="get" className="SearchCar">
          <input
            type="text"
            name="model"
            placeholder="Model"
            className="SearchBar"
          />
          <input
            type="text"
            name="make"
            placeholder="Make"
            className="SearchBar"
          />
          <button type="submit" className="SearchButton">Search</button>
        </form>
        </div>
        {props.data.map((car: Cartype) => <CarComp car={car} />)}
    </div>
  );
};
export default Page;