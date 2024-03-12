// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $AddCar from "./routes/AddCar.tsx";
import * as $Cars_index from "./routes/Cars/index.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $AddForm from "./islands/AddForm.tsx";
import * as $Car from "./islands/Car.tsx";
import * as $Form from "./islands/Form.tsx";
import * as $NavMenu from "./islands/NavMenu.tsx";
import * as $_layout_1 from "./islands/_layout.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/AddCar.tsx": $AddCar,
    "./routes/Cars/index.tsx": $Cars_index,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/AddForm.tsx": $AddForm,
    "./islands/Car.tsx": $Car,
    "./islands/Form.tsx": $Form,
    "./islands/NavMenu.tsx": $NavMenu,
    "./islands/_layout.tsx": $_layout_1,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
