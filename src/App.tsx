import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "Apple",
    "Banana",
    "Cherry",
    "Dragonfruit",
    "Elderberry", // Added an extra item to test the error handling in the component
  ];
  return (
    <>
      <div>
        <Message />
        <p>Welcome to my React App!</p>
      </div>
      <ListGroup items={items} heading="Fruits" />
    </>
  );
}

export default App;
