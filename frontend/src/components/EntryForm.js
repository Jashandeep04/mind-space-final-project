import React, { useState } from "react";

const TITLE_MAX_CHARS = 80;
const NOTE_MAX_WORDS = 120;


function EntryForm({ onAdd }) {
  const [formData, setFormData] = useState({
    title: "",
    note: "",
    mood: "happy",
    date: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    // Limit title characters
    if (name === "title" && value.length > TITLE_MAX_CHARS) {
      return;
    }

    // Limit note by word count
    if (name === "note") {
      const trimmed = value.trim();
      if (trimmed) {
        const words = trimmed.split(/\s+/);
        if (words.length > NOTE_MAX_WORDS) {
          return;
        }
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }


  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.title || !formData.mood) {
      alert("Please fill in a title and mood.");
      return;
    }

    const dataToSend = { ...formData };
    if (!dataToSend.date) delete dataToSend.date;

    onAdd(dataToSend);

    setFormData({
      title: "",
      note: "",
      mood: "happy",
      date: "",
    });
  }

  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Add New Entry</span>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="input-field">
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
            />
            <label className={formData.title ? "active" : ""} htmlFor="title">
              Title
            </label>
            <span className="helper-text">
              Max {TITLE_MAX_CHARS} characters
            </span>
          </div>


          {/* Note */}
          <div className="input-field">
            <textarea
              id="note"
              name="note"
              className="materialize-textarea"
              value={formData.note}
              onChange={handleChange}
            />
            <label className={formData.note ? "active" : ""} htmlFor="note">
              Note / Reflection
            </label>
            <span className="helper-text">
              Max {NOTE_MAX_WORDS} words
            </span>
          </div>



          {/* Mood */}
          <div className="input-field">
            <span
              style={{
                fontSize: "0.9rem",
                display: "block",
                marginBottom: "4px",
                color: "#757575",
              }}
            >
              Mood
            </span>
            <select
              name="mood"
              value={formData.mood}
              onChange={handleChange}
              className="browser-default"
            >
              <option value="happy">😊 Happy</option>
              <option value="neutral">😐 Neutral</option>
              <option value="sad">😢 Sad</option>
              <option value="angry">😡 Angry</option>
              <option value="anxious">😟 Anxious</option>
            </select>
          </div>


          {/* Date */}
          <div className="input-field">
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
            />
            <label className={formData.date ? "active" : ""} htmlFor="date">
              Date (optional)
            </label>
          </div>

          <button type="submit" className="btn waves-effect waves-light">
            Save Entry
          </button>
        </form>
      </div>
    </div>
  );
}

export default EntryForm;
