import React from "react";

export default function Docs() {
  return (
    <div className="container" style={{ maxWidth: "900px", marginTop: "40px" }}>
      <h4 className="center-align">Documentation</h4>

      {/* Overview Card */}
      <div className="card">
        <div className="card-content">
          <span className="card-title">Project Overview</span>
          <p>
            <strong>Mind Space</strong> is a MERN stack web application built for
            the CPSC 2600 final project. It allows users to record daily journal
            entries, choose a mood, and analyze mood trends using charts on the
            dashboard.
          </p>
        </div>
      </div>

      {/* Architecture */}
      <div className="card">
        <div className="card-content">
          <span className="card-title">Overall Architecture</span>
          <p>
            The app uses a standard MERN architecture: React for the frontend,
            Express.js for the backend API, MongoDB Atlas for database storage,
            and Mongoose for schema modeling. The project is organized into two
            folders: <code>frontend</code> and <code>backend</code>.
          </p>
        </div>
      </div>

      {/* Frontend */}
      <div className="card">
        <div className="card-content">
          <span className="card-title">Frontend (React)</span>
          <ul className="browser-default">
            <li>
              Built using <strong>React Router</strong> for navigation between pages:
              <ul className="browser-default" style={{ marginTop: "6px" }}>
                <li><strong>Home:</strong> Introduction + quick navigation.</li>
                <li><strong>Journal:</strong> Form to add entries + list of saved entries.</li>
                <li><strong>Dashboard:</strong> Recharts graphs using stored data.</li>
                <li><strong>Docs:</strong> This documentation page.</li>
                <li><strong>Sources:</strong> Technical references list.</li>
              </ul>
            </li>
            <li>
              UI styled using <strong>Materialize CSS</strong> (cards, buttons,
              input fields, layout).
            </li>
            <li>
              Managed state using <code>useState</code> and <code>useEffect</code>.
            </li>
          </ul>
        </div>
      </div>

      {/* Backend */}
      <div className="card">
        <div className="card-content">
          <span className="card-title">Backend (Express REST API)</span>
          <p>
            The backend exposes several REST API routes under
            <code> /api </code>. These handle CRUD operations for journal entries
            and also return filtered data and statistics.
          </p>

          <ul className="browser-default">
            <li><code>GET /api/entries</code> - fetch all entries.</li>
            <li><code>GET /api/entries/:id</code> - fetch a single entry.</li>
            <li>
              <code>GET /api/entries/mood/:mood</code> - fetch entries by mood.
            </li>
            <li>
              <code>GET /api/entries/stats/moods</code> - return mood counts.
            </li>
            <li><code>POST /api/entries</code> - create a new entry (validated).</li>
            <li><code>DELETE /api/entries/:id</code> - delete an entry.</li>
            <li>
              <code>GET /api/resources</code> - return links from the second MongoDB
              collection.
            </li>
          </ul>
        </div>
      </div>

      {/* Database */}
      <div className="card">
        <div className="card-content">
          <span className="card-title">Database (MongoDB Atlas)</span>
          <p>
            The backend connects to a MongoDB Atlas cluster using a secret
            <code> MONGO_URI </code> stored in the <code>.env</code> file.
            Two collections are used:
          </p>

          <ul className="browser-default">
            <li>
              <strong>entries</strong> - journal entries (title, note, mood, date)
            </li>
            <li>
              <strong>resources</strong> - external links (title, url, description,
              category)
            </li>
          </ul>
        </div>
      </div>

      {/* User Flow */}
      <div className="card">
        <div className="card-content">
          <span className="card-title">User Flow</span>
          <ol className="browser-default">
            <li>User opens the Home page.</li>
            <li>Goes to Journal page and submits an entry (POST request).</li>
            <li>Entries display on the same page using GET /api/entries.</li>
            <li>
              Dashboard fetches the same data and generates charts via Recharts.
            </li>
            <li>
              User can delete entries, which updates the database in real time.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
