import HomeStackNavigator from "./src/navigation/HomeStackNavigator";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <HomeStackNavigator />
    </Provider>
  );
}
