import React from "react";

export default function Sources() {
  return (
    <div className="container" style={{ marginTop: "30px", marginBottom: "30px" }}>
      <h4 className="center-align">Sources</h4>

      {/* Technical Sources */}
      <div className="card">
        <div className="card-content">
          <span className="card-title">Technical References</span>
          <ul className="collection">
            <li className="collection-item">
              React Documentation -{" "}
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                https://react.dev/
              </a>
            </li>

            <li className="collection-item">
              React Router Documentation -{" "}
              <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
                https://reactrouter.com/
              </a>
            </li>

            <li className="collection-item">
              Materialize CSS -{" "}
              <a
                href="https://materializecss.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://materializecss.com/
              </a>
            </li>

            <li className="collection-item">
              Recharts (Data Visualization) -{" "}
              <a href="https://recharts.org/" target="_blank" rel="noreferrer">
                https://recharts.org/
              </a>
            </li>

            <li className="collection-item">
              Express.js Documentation -{" "}
              <a
                href="https://expressjs.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://expressjs.com/
              </a>
            </li>

            <li className="collection-item">
              MongoDB Atlas / Mongoose Documentation -{" "}
              <a
                href="https://www.mongodb.com/docs/atlas/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.mongodb.com/docs/atlas/
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Project Inspiration */}
      <div className="card">
        <div className="card-content">
          <span className="card-title">Project Inspiration</span>
          <ul className="browser-default">
            <li>
              Lecture slides, in-class demos, and labs from CPSC 2600 (React, Express,
              REST APIs, MongoDB, deployment).
            </li>
            <li>
              General ideas about mood-tracking and journaling from online mental
              health resources  
              <em>(only used for inspiration; no direct copying).</em>
            </li>
          </ul>
        </div>
      </div>

      {/* Course Requirements Mention */}
      <p className="grey-text" style={{ marginTop: "15px", fontSize: "14px" }}>
        All features were implemented using tools taught in this course, including:
        React components, state, client-side routing, Express REST API, MongoDB Atlas
        persistence, and deployment.
      </p>
    </div>
  );
}
