import React, { useState } from "react";
import { Header } from "./components/Header";
import { ButtonsContainer, segments } from "./components/ButtonsContainer";
import { useDaysRequest } from "./api";
import { BackToTopButton } from "./components/Card.styled";

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
      <BackToTopButton
        type="button"
        aria-label="Back to top"
        title="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Top
      </BackToTopButton>
    </div>
  );
};
export default App;
