
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Cartype } from "../types.tsx";
import CarModel from "../db/Car.ts";

export const handler: Handlers = {
    POST: async (req: Request, ctx: FreshContext<unknown, Cartype>) => {
       const data = await req.formData();
       const model = data.get("model");
         const make = data.get("make");
         const car = {
                make: make,
                model: model,
            };
            const upload = await CarModel.create(car);
            return ctx.render();
}
};
const Page = (props: PageProps) => {
    return (
        <div className="AddCar">
            <form action="/AddCar" method="POST">
                <label htmlFor="make">Make</label>
                <input type="text" id="make" name="make" />
                <label htmlFor="model">Model</label>
                <input type="text" id="model" name="model" />
                <button type="submit">Add Car</button>
            </form>
        </div>
    );
};
export default Page;