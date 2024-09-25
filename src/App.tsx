import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = [
    "Apple",
    "Banana",
    "Cherry",
    "Dragonfruit",
    "Elderberry", // Added an extra item to test the error handling in the component
  ];
  const handleSelectItem = (item: string) => {
    console.log(`Selected item: ${item}`);
  };
  return (
    <>
      <div>
        <Message />
        <p>Welcome to my React App!</p>
      </div>
      <ListGroup
        items={items}
        heading="Fruits"
        onSelectItem={handleSelectItem}
      />

      <Alert>
        <b>Hello World</b>
      </Alert>

      <Button color = 'danger' onClick={() => {console.log('Clicked')}}>Button</Button>
    </>
  );
}

export default App;
