function ListGroup() {
  var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  //   cities = [];

  return (
    <div>
      <h1>ListGroup</h1>
      {cities.length === 0 ? "No cities" : "Cities"}
      <ul className="list-group">
        {cities.map((city) => (
          <li
            key={city}
            className="list-group-item"
            onClick={() => console.log(city)}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
