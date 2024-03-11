

export default function Home() {
  return (
    <div>
    <div>
      <form action="/cars" method="get">
        <input type="text" name="model" placeholder="Model" />
        <input type="text" name="make" placeholder="Make" />
        <button type="submit">Search</button>
      </form>
    </div>
    </div>
  );
}
