import HeaderComponent from "./components/header";
import LoginActionComponent from "./components/login-action";
import ResetAccountComponent from "./components/reset-account";

import "./css/styles.css";

function App() {
  return (
    <div>
      <h1>Welocome to React JS</h1>
      <HeaderComponent></HeaderComponent>
      <LoginActionComponent></LoginActionComponent>
      <ResetAccountComponent></ResetAccountComponent>
    </div>
  );
}

export default App;
