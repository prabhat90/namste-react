const heading = React.createElement("h1", {}, "1st Chaptar");

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "Test message")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
