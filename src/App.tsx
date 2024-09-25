import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

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
  const [AlertVisibility, setAlertVisibility] = useState(false)
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

      {AlertVisibility && <Alert onClick={() => setAlertVisibility(false)}><b>You have clicked the Button</b></Alert>}

      <Button color = 'danger' onClick={() => setAlertVisibility(true)}>Button</Button>
    </>
  );
}

export default App;
