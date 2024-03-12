import PreactRenderToString631 from "https://esm.sh/*preact-render-to-string@6.3.1";
import React, { FunctionComponent } from "https://esm.sh/react@17.0.2";
import { useState } from "preact/hooks";
type Error = {
  error: boolean;
  status: number;
  message: string;
};

export const AddForm: FunctionComponent = () => {
  const [error, setError] = useState<Error>({
    error: false,
    status: 200,
    message: "",
  });
  const checkString = (str: string) => {
    if (str.length < 1) {
      setError({
        error: true,
        status: 400,
        message: "El nombre debe tener al menos 1 caracter",
      });
    } else if (str.length > 20) {
      setError({
        error: true,
        status: 400,
        message: "El nombre debe tener menos de 20 caracteres",
      });
    } else {
      setError({ error: false, status: 200, message: "" });
      return true;
    }
  };

  return (
    <div className="Add">
      <form
        action="/AddCar"
        method="get"
        className="SearchCar"
        onBlur={(e) => checkString(e.currentTarget.value)}
      >
        <input
          type="text"
          name="model"
          placeholder="Model"
          className="SearchBar"
          onBlur={(e) => checkString(e.currentTarget.value)}
        />
        <input
          type="text"
          name="make"
          placeholder="Make"
          className="SearchBar"
          onBlur={(e) => checkString(e.currentTarget.value)}
        />
        <button disabled={error.error} type="submit" className="SearchButton">
          Add
        </button>
      </form>
      <div className="Error">
        {error.error && <p>{error.message}</p>}
        {error.status === 400 && (
          <p>El nombre debe tener al menos 3 caracteres</p>
        )}
        {error.status === 400 && (
          <p>El nombre debe tener menos de 20 caracteres</p>
        )}
        {error.status === 400 && (
          <p>El nombre no puede tener caracteres especiales</p>
        )}
        {error.status === 200 && <p></p>}
      </div>
    </div>
  );
};
