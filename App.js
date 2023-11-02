import { Provider } from "react-redux";
import { store } from "./src/store";

import TabNavigator from "./src/navigation/TabNavigator";
import { Login } from "./src/views";

export default function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}
