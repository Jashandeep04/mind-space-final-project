import React, { useEffect, useState } from "react";
import { getEntries } from "../api/entries";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const MOOD_COLORS = {
  happy: "#4caf50",
  neutral: "#9e9e9e",
  sad: "#42a5f5",
  angry: "#ef5350",
  anxious: "#ffb300",
};

export default function Dashboard() {
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

  //  PIE CHART DATA (mood distribution)
  const moodCounts = entries.reduce((acc, e) => {
    if (!e.mood) return acc;
    acc[e.mood] = (acc[e.mood] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.keys(moodCounts).map((mood) => ({
    name: mood,
    value: moodCounts[mood],
  }));

  //  LINE CHART DATA (recent mood trend) 
  // Helper to map mood -> number
  const moodToNumber = (mood) => {
    switch (mood) {
      case "sad":
        return 1;
      case "anxious":
        return 2;
      case "neutral":
        return 3;
      case "happy":
        return 4;
      case "angry":
        return 5;
      default:
        return 3; 
    }
  };

  // Sort by date if present; if no date, leave order as is
  const sortedByDate = [...entries].sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(a.date) - new Date(b.date);
  });

  // Last 10 entries, with safe labels even if date is missing
  const lineData = sortedByDate.slice(-10).map((e, index) => ({
    date: e.date
      ? new Date(e.date).toLocaleDateString()
      : `Entry ${index + 1}`,
    moodScore: moodToNumber(e.mood),
  }));

  return (
    <div
      className="container"
      style={{ marginTop: "30px", marginBottom: "30px", minHeight: "80vh" }}
    >
      <h4 className="center-align">Dashboard</h4>

      {loading ? (
        <p className="center-align">Loading dashboard...</p>
      ) : entries.length === 0 ? (
        <p className="center-align">
          No entries yet. Add some in the Journal page to see stats.
        </p>
      ) : (
        <>
          {/* PIE CHART CARD */}
          <div className="card">
            <div className="card-content">
              <span className="card-title">Mood Distribution</span>
              <p className="grey-text">
                How often each mood appears in your journal entries.
              </p>

              <div className="center-align" style={{ marginTop: 20 }}>
                <PieChart width={400} height={300}>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                    {pieData.map((entry) => (
                      <Cell
                        key={entry.name}
                        fill={MOOD_COLORS[entry.name] || "#8884d8"}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>
            </div>
          </div>

          {/* LINE CHART CARD */}
          <div className="card">
            <div className="card-content">
              <span className="card-title">
                Recent Mood Trend (Last 10 entries)
              </span>
              <p className="grey-text">
                Higher values here mean more positive moods over time.
              </p>

              <div className="center-align" style={{ marginTop: 20 }}>
                <LineChart width={500} height={300} data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis
                    tickFormatter={(val) => {
                      const mapBack = {
                        1: "sad",
                        2: "anxious",
                        3: "neutral",
                        4: "happy",
                        5: "angry",
                      };
                      return mapBack[val] || val;
                    }}
                  />
                  <Tooltip
                    formatter={(val) => {
                      const mapBack = {
                        1: "sad",
                        2: "anxious",
                        3: "neutral",
                        4: "happy",
                        5: "angry",
                      };
                      return mapBack[val] || val;
                    }}
                  />
                  <Line type="monotone" dataKey="moodScore" stroke="#26a69a" />
                </LineChart>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
