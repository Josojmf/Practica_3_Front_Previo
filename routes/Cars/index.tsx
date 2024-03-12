import axios from "npm:axios";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { FreshContext, Handlers, type PageProps } from "$fresh/server.ts";
import { Cartype } from "../../types.tsx";
import CarComp from "../../islands/Car.tsx";
import { Form } from "../../islands/Form.tsx";
export const handler: Handlers = {

  GET: async (req: Request, ctx: FreshContext) => {
    try {
    const url = new URL(req.url);

    const Model = url.searchParams.get("model");
    const Make = url.searchParams.get("make");
    if (!Model && !Make) {
      return ctx.render([]);
    }
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
  } catch (error) {
    return ctx.render([]);
  }
  },
}

const Page = (props: PageProps) => {
  return (
    
    <div className="CarPage">
      <Form />
        {props.data.map((car: Cartype) => <CarComp car={car} />)}
    </div>
  );
};
export default Page;
