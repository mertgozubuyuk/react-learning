import { useState } from "react";
import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className={isDarkTheme ? "app dark-theme" : "app light-theme"}>
      <PageContainer>
        <Header
          isDarkTheme={isDarkTheme}
          onThemeChange={() => setIsDarkTheme((current) => !current)}
        />
        <RouterConfig />
      </PageContainer>
    </div>
  );
}

export default App;
