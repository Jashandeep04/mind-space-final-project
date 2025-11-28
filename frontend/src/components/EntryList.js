import React from "react";
import EntryCard from "./EntryCard";

function EntryList({ entries, onDelete }) {
  if (!entries || entries.length === 0) {
    return <p>No entries yet. Add your first reflection on the left.</p>;
  }

  return (
    <div className="row">
      {entries.map((entry) => (
        <div className="col s12" key={entry._id}>
          <EntryCard entry={entry} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
}

export default EntryList;
