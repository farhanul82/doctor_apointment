import { Provider } from "react-redux";
import Calendar from "./components/Calendar";
import Header from "./components/Header";
import MainRouter from "./components/MainRouter";


import store from "./redux/store";

const App =() => {
  return (
    <Provider store={store}>
      <div className="App">
        <MainRouter/>
      </div>
    </Provider>
  );
}

export default App;
