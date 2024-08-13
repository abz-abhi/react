const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "hello from h1 tag"),
    React.createElement("h2", {}, "hello from h2 tag"),
    React.createElement("h3", {}, "hello from h3 tag"),
    React.createElement("h4", {}, "hello from h4 tag"),
    React.createElement("h5", {}, "hello from h5 tag"),
    React.createElement("h6", {}, "hello from h6 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hello from h1 tag"),
    React.createElement("h2", {}, "hello from h2 tag"),
    React.createElement("h3", {}, "hello from h3 tag"),
    React.createElement("h4", {}, "hello from h4 tag"),
    React.createElement("h5", {}, "hello from h5 tag"),
    React.createElement("h6", {}, "hello from h6 tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
