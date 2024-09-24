import { MouseEvent } from "react";

function ListGroup() {
  let items = [
    "Apple",
    "Banana",
    "Cherry",
    "Dragonfruit",
    "Elderberry", // Added an extra item to test the error handling in the component
  ];
//   items = [];

  const Message = items.length === 0 && <p>No items found.</p>;

  const Message1 = () => {
    return Message;
  };

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>The List</h1>
      {Message1()}
      <ul className="list-group-item" onClick={handleClick}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
