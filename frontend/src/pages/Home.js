import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="container"
      style={{ marginTop: "40px", marginBottom: "40px" }}
    >
      
      <div className="row">
        <div className="col s12 m7">
          <h3>Welcome to Mind Space</h3>
          <p className="grey-text text-darken-1">
            A simple mental wellness journal where you can track your mood,
            write short reflections, and see patterns over time.
          </p>

          <div style={{ marginTop: "20px" }}>
            <Link
              to="/journal"
              className="btn waves-effect waves-light teal"
              style={{ marginRight: "10px" }}
            >
              Start Journaling
            </Link>
            <Link
              to="/dashboard"
              className="btn-flat waves-effect"
            >
              View Dashboard
            </Link>
          </div>
        </div>

        <div className="col s12 m5">
          <div className="card-panel teal lighten-5">
            <h5 className="center-align">Today&apos;s Check-in</h5>
            <p className="grey-text text-darken-2">
              Take a minute to ask yourself:
            </p>
            <ul className="browser-default">
              <li>How am I feeling right now?</li>
              <li>What made my day better or harder?</li>
              <li>Is there one thing I&apos;m grateful for?</li>
            </ul>
            <p className="grey-text text-darken-1" style={{ marginTop: "10px" }}>
              Use the <strong>Journal</strong> page to write a quick entry and
              choose your mood.
            </p>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col s12 m4">
          <div className="card small">
            <div className="card-content">
              <span className="card-title">
                <i className="material-icons" style={{ fontSize: "2rem", verticalAlign: "middle", marginRight: "8px" }}>
                  edit
                </i>
                Journal
              </span>
              <p>
                Add short entries with a title, note, mood, and optional date.
                Simple and quick so it doesn&apos;t feel like extra work.
              </p>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card small">
            <div className="card-content">
              <span className="card-title">
                <i className="material-icons" style={{ fontSize: "2rem", verticalAlign: "middle", marginRight: "8px" }}>
                  timeline
                </i>
                Dashboard
              </span>
              <p>
                See a mood distribution chart and a recent mood trend based on
                your saved entries, powered by Recharts.
              </p>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card small">
            <div className="card-content">
              <span className="card-title">
                <i className="material-icons" style={{ fontSize: "2rem", verticalAlign: "middle", marginRight: "8px" }}>
                  lock_outline
                </i>
                Your Space
              </span>
              <p>
                Data is stored in your own MongoDB database for this project.
                The design keeps the interface focused and distraction-free.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS SECTION */}
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <span className="card-title">How it works</span>
              <ol className="browser-default">
                <li>Go to the <strong>Journal</strong> page and add an entry.</li>
                <li>Select the mood that best matches how you feel.</li>
                <li>Repeat over multiple days.</li>
                <li>
                  Visit the <strong>Dashboard</strong> to see your mood
                  statistics and trends.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
