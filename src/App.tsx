import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ButtonsContainer, segments } from "./components/ButtonsContainer";
import { useDaysRequest } from "./api";
import { BackToTopButton } from "./components/Card.styled";

const App = () => {
  let { error, isLoading } = useDaysRequest();
  let [value, setValue] = useState("england-and-wales");
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const check = () =>
      setAtBottom(
        window.scrollY > 0 &&
          window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 50,
      );
    check();
    window.addEventListener("scroll", check);
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [isLoading]);

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
      {atBottom && (
        <BackToTopButton
          type="button"
          aria-label="Back to top"
          title="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Top
        </BackToTopButton>
      )}
    </div>
  );
};
export default App;
