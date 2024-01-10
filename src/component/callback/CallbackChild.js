const CallbackChild = (props) => {
  console.log("child", props.childMessage);

  const handleMessage = () => {
    const message = "Hello Parent";
    props.setChildMessage({
      name: "Gyan Bahadur",
      age: "20",
    });
  };

  return (
    <div>
      <div>Call Back Child</div>
      <div>
        {/* <div>{props.childMessage}</div> */}
        <div>{props.childMessage.name}</div>
        <div>{props.childMessage.age}</div>
        <button onClick={handleMessage}>Button</button>
      </div>
    </div>
  );
};

export default CallbackChild;
