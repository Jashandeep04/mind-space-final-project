import React, { useEffect, useState } from "react";
import EntryForm from "../components/EntryForm";
import EntryList from "../components/EntryList";
import { getEntries, createEntry, deleteEntry } from "../api/entries";

export default function Journal() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadEntries() {
    try {
      setLoading(true);
      const res = await getEntries();
      setEntries(res.data);
    } catch (err) {
      console.error("Error loading entries:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEntries();
  }, []);

  async function handleAdd(entryData) {
    try {
      const res = await createEntry(entryData);
      setEntries((prev) => [res.data, ...prev]);
    } catch (err) {
      console.error("Error creating entry:", err);
      alert("Could not save entry. Please try again.");
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this entry?")) return;

    try {
      await deleteEntry(id);
      setEntries((prev) => prev.filter((e) => e._id !== id));
    } catch (err) {
      console.error("Error deleting entry:", err);
      alert("Could not delete entry. Please try again.");
    }
  }

  return (
  <div
    className="container"
    style={{ marginTop: "30px", marginBottom: "30px", minHeight: "80vh" }}
  >
    <h4 className="center-align">Journal</h4>

    <div
      className="row"
      style={{ display: "flex", alignItems: "stretch" }}
    >
      {/* LEFT: FORM */}
      <div className="col s12 m6">
        <EntryForm onAdd={handleAdd} />
      </div>

      {/* RIGHT: ENTRIES */}
      <div className="col s12 m6">
        <div
          style={{
            maxHeight: "65vh",
            overflowY: "auto",
            overflowX: "hidden",
            paddingRight: "8px",
          }}
        >
          {loading ? (
            <p>Loading entries...</p>
          ) : (
            <EntryList entries={entries} onDelete={handleDelete} />
          )}
        </div>
      </div>
    </div>
  </div>
);

}
