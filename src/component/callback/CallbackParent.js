import { useState } from "react";
import CallbackChild from "./CallbackChild";
import Header from "../Header";
const CallbackParent = () => {
  const [childMessage, setChildMessage] = useState({
    name: "bhuwan",
    age: "25",
  });
  console.log("parent", childMessage);
  return (
    <div>
      <div>
        <Header />
      </div>
      This is Callback Parent
      <div>Name={childMessage.name}</div>
      <div>Name={childMessage.age}</div>
      <div>
        {/* <div>{childMessage}</div> */}
        <CallbackChild
          childMessage={childMessage}
          setChildMessage={(e) => setChildMessage(e)}
        />
      </div>
    </div>
  );
};

export default CallbackParent;
