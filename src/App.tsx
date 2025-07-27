import React, { useState } from "react";
import { Header } from "./components/Header";
import { ButtonsContainer, segments } from "./components/ButtonsContainer";
import { useDaysRequest } from "./api";

const App = () => {
  let { error, isLoading } = useDaysRequest();
  let [value, setValue] = useState("england-and-wales");
  if (isLoading) return <p> Is Loading</p>;

  if (error) {
    return <p>An error has occurred!</p>;
  }

  return (
    <div className="body-container">
      <Header title="UK Bank Holidays" />
      <ButtonsContainer
        name=""
        segments={segments}
        onClick={() => setValue(value)}
      />
    </div>
  );
};
export default App;
