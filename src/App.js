/* eslint-disable jsx-a11y/heading-has-content */
import { createContext, useCallback, useContext, useState } from "react";
import "./styles.css";

const AppContext = createContext({});

const Coins = (props) => {
  const { coins, toto } = useContext(AppContext);

  return (
    <h1 {...props}>
      ${coins} - {toto}
    </h1>
  );
};

const Work = (props) => {
  const { work } = useContext(AppContext);

  return (
    <button {...props} onClick={work}>
      WORK
    </button>
  );
};

const App = () => {
  const [coins, setCoins] = useState(0);
  const work = useCallback(() => setCoins((c) => c + 1), []);

  return (
    <AppContext.Provider value={{ coins, work, toto: 123 }}>
      <Coins />
      <Work />
    </AppContext.Provider>
  );
};

export default App;
