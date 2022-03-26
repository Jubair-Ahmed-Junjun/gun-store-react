import React from "react";
import "./QuesAns.css";
const QuesAns = () => {
  return (
    <div>
      <h1>Question and Answer Section</h1>
      <div className="card mb-3">
        <img
          src="https://miro.medium.com/max/652/1*iJKfCo2XlFtz-9ST0_HCtA.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h2 className="card-title">How React works?</h2>
          <p className="card-text">
            React does not commit state changes one after the other if there are
            multiple state changes. Instead, React goes through its virtual DOM
            ,creates a list of those changes that need to be made to the actual
            DOM and then does it all in one single process. In fancy words,
            React does batch updates. React uses a heuristic algorithm called
            the Diffing algorithm for reconciliation based on these assumptions:
            Elements of different types will produce different trees. We can set
            which elements are static and do not need to be checked.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <hr />
      <div className="card mb-3">
        <img
          src="https://miro.medium.com/max/1200/0*wGaUQvXc4HymloHn.jpg"
          className="card-img-top"
          alt="..."
          width={626}
          height={326}
        />

        <div className="card-body">
          <h2 className="card-title">
            What's the difference between State and Props?
          </h2>
          <p className="card-text">
            The key difference between props and state is that state is internal
            and controlled by the component itself while props are external and
            controlled by whatever renders the component.props (short for
            “properties”) and state are both plain JavaScript objects. While
            both hold information that influences the output of render, they are
            different in one important way: props get passed to the component
            (similar to function parameters) whereas state is managed within the
            component (similar to variables declared within a function).
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuesAns;
