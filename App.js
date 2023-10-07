import { Provider } from "react-redux";
import { store } from "./src/store";

import TabNavigator from "./src/navigation/TabNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}
