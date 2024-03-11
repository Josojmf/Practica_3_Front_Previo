

export default function Home() {
  return (
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
  );
}
