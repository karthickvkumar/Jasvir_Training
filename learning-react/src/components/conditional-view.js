import React, {useState} from "react";

const ConditionalViewComponent = () => {

  const [conditionalIf, setConditionalIf] = useState(true);

  const [name, setName] = useState("mr.abc@gmail.com");
  let username = "mr.abc@gmail.com";
  let student = {
    name : "abc",
    age : 24
  };

  const changeTextMsg = () => {
    username = "mis.xyz@yahoo.in";
    setName("mis.xyz@yahoo.in");
  }

  const showHideConditionalIf = () => {
    setConditionalIf(false);
  }

  return(
    <div>
      <h1>Conditional View</h1>
      <h2>Welocome, {username} {name}</h2>
      <h2>{student.name} {student.age}</h2>
      <button onClick={() => changeTextMsg()}>Change Text</button>
      <div>
        <button onClick={() => showHideConditionalIf()}>Conditional If (Show/Hide) </button>
        { conditionalIf && <div>
          <h1>This is a conditional message</h1>
          <h1>Its a Inline If condition</h1>
        </div> }
      </div>

      <div>
        { 18 < 10 ? <div>
          <h1>The condtion is Success</h1>
        </div> : <div>
          <h1>The condition is Failure</h1>
        </div>  }
      </div>

    </div>
  )
}

export default ConditionalViewComponent;