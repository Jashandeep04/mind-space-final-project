import React from "react";

function formatDate(dateString) {
  if (!dateString) return "";
  const d = new Date(dateString);
  return d.toLocaleDateString();
}

function moodEmoji(mood) {
  switch (mood) {
    case "happy":
      return "😊";
    case "neutral":
      return "😐";
    case "sad":
      return "😢";
    case "angry":
      return "😡";
    case "anxious":
      return "😟";
    default:
      return "🙂";
  }
}

function EntryCard({ entry, onDelete }) {
  return (
    <div className="card blue-grey lighten-5">
      <div className="card-content">
        <span
          className="card-title"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {entry.title}
          <span style={{ fontSize: "24px" }}>{moodEmoji(entry.mood)}</span>
        </span>

        <p
          style={{
            wordWrap: "break-word",
            overflowWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          {entry.note}
        </p>


        <p className="grey-text" style={{ marginTop: "10px" }}>
          <strong>Date:</strong> {formatDate(entry.date)}
        </p>
      </div>

      <div className="card-action">
        <button
          className="btn red waves-effect waves-light"
          onClick={() => onDelete(entry._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default EntryCard;
