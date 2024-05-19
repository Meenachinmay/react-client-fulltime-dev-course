import { useState } from "react";

function LearnUseState() {
  // here we are setting a state as an array and we are initializing it with three values
  const [prices, setPrices] = useState(["12", "32", "45"]);

  // state of object
  const [user, setUser] = useState({
    name: "Chinmay",
    City: "kawasaki",
  });

  // state: array of object
  const [users, setUsers] = useState([{ name: "userA" }, { name: "userB" }]);
  console.log(...users);

  // we want to call this function on a click on button = Add price
  function addPrice() {
    // generate a random number
    let number = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    // let's add the random price to the array
    setPrices([...prices, number]);
  }

  // we want to add a new user to the current users state (array of objects)
  function addUser() {
    // let's first create the user object for new user
    let newUser = {name: "userC"}   

    // then add this new user to the users state which is array of objects
    // so we have to put a object in it.
    setUsers([...users, newUser])
  }

  return (
    <main>
      <div>Prices:</div>
      <br />
      <ul>
        {prices.map((price) => (
          <li key={price}>{price}</li>
        ))}
      </ul>

      <button onClick={addPrice}>Add price</button>

      {
        <div>
          <span>Rendering User Object:</span>
          <p>Name: {user.name}</p>
          <p>City: {user.City}</p>
        </div>
      }

      <div>Users List:</div>
      <ul>
        {users.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
      <button onClick={addUser}>Add user</button>

    </main>
  );
}

export default LearnUseState;
