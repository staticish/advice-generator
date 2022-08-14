import React from "react";
const generateAdvice = () => {
  return fetch("https://api.adviceslip.com/advice").then((resp) => resp.json());
};

export default function Generator() {
  const [genAdvice, setGenAdvice] = React.useState(true);
  const [state, setState] = React.useState("");
  function genButton() {
    setGenAdvice((prev) => !prev);
  }

  React.useEffect(() => {
    const load = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(
            generateAdvice().then((resp) => {
              const data = resp.slip;
              console.log(data);
              setState(
                <div className="state">
                  <br />
                  <h4> Advice #{data.id} </h4>

                  <h3>"{data.advice}" </h3>
                </div>
              );
            })
          );
        }, 400);
      });
    };

    load().then((success) => success);
  }, [genAdvice]);

  return (
    <div>
      <div className="generatorBody">
        {state}
        <br />
      </div>
      <div className="divider">
        <img
          src={require("./images/pattern-divider-mobile.svg").default}
          alt="divider"
        />
        <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </div>
      <div className="buttonContainer">
        {" "}
        <button onClick={genButton}>
          {" "}
          <img
            target={`${genAdvice}`}
            src={require("./images/icon-dice.svg").default}
            alt="dice"
          />
        </button>
      </div>
    </div>
  );
}
