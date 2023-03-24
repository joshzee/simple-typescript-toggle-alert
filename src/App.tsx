import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Hi <b>World</b>
        </Alert>
      )}
      <div className="ms-2 mt-2">
        <Button color="primary" onClick={() => setAlertVisible(true)}>
          Open Alert
        </Button>
      </div>
    </div>
  );
}

export default App;
