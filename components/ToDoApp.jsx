import { useState } from "react";

const initialTasks = [
  { id: 1, text: "Build portfolio landing page", tag: "design", done: true },
  { id: 2, text: "Add responsive navigation menu", tag: "code", done: true },
  { id: 3, text: "Write project case studies", tag: "work", done: false },
  { id: 4, text: "Upload latest design work", tag: "design", done: false },
  { id: 5, text: "Connect contact form backend", tag: "code", done: false },
  { id: 6, text: "Optimize images for performance", tag: "work", done: false },
];

const tagColors = {
  work:     { text: "#1D4ED8", border: "#BFDBFE" },
  personal: { text: "#7E22CE", border: "#E9D5FF" },
  design:   { text: "#6D28D9", border: "#DDD6FE" },
  code:     { text: "#065F46", border: "#A7F3D0" },
  other:    { text: "#374151", border: "#D1D5DB" },
};

const filters = ["all", "active", "done", "work", "personal", "design", "code"];

export default function ToDoApp() {
  const [tasks, setTasks] = useState(initialTasks);
  const [input, setInput] = useState("");
  const [tag, setTag] = useState("work");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([{ id: Date.now(), text: input.trim(), tag, done: false }, ...tasks]);
    setInput("");
  };

  const toggle = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const remove = (id) => setTasks(tasks.filter(t => t.id !== id));
  const clearDone = () => setTasks(tasks.filter(t => !t.done));

  const visible = filter === "active" ? tasks.filter(t => !t.done)
    : filter === "done" ? tasks.filter(t => t.done)
    : ["work", "personal", "design", "code", "other"].includes(filter) ? tasks.filter(t => t.tag === filter)
    : tasks;

  return (
    <div style={{ background: "#0D0D0D", minHeight: "100vh", padding: "40px 24px 60px", fontFamily: "'DM Mono', 'Courier New', monospace" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 36, fontWeight: 900, color: "#F0EDE6", fontFamily: "Georgia, serif", letterSpacing: -1 }}>
            Task<span style={{ color: "#C8F060" }}>Board</span>
          </div>
          <div style={{ fontSize: 11, color: "#666", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 8 }}>Portfolio Project · Interactive To-Do App</div>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 32 }}>
          {[["Total", tasks.length], ["Active", tasks.filter(t => !t.done).length], ["Done", tasks.filter(t => t.done).length]].map(([label, val]) => (
            <div key={label} style={{ background: "#161616", border: "1px solid #2A2A2A", borderRadius: 6, padding: "14px 28px", textAlign: "center", minWidth: 90 }}>
              <div style={{ fontSize: 30, color: "#C8F060", fontWeight: 500, lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: 10, color: "#666", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <input
            value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && addTask()}
            placeholder="Add a new task…"
            style={{ flex: 1, background: "#161616", border: "1px solid #2A2A2A", borderRadius: 6, color: "#F0EDE6", fontFamily: "inherit", fontSize: 14, padding: "13px 16px", outline: "none" }}
          />
          <select value={tag} onChange={e => setTag(e.target.value)}
            style={{ background: "#161616", border: "1px solid #2A2A2A", borderRadius: 6, color: "#888", fontFamily: "inherit", fontSize: 13, padding: "10px 14px", outline: "none" }}>
            {["work", "personal", "design", "code", "other"].map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <button onClick={addTask}
            style={{ background: "#C8F060", color: "#0D0D0D", border: "none", borderRadius: 6, padding: "10px 20px", fontFamily: "inherit", fontSize: 14, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>
            + Add
          </button>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 6, marginBottom: 24, flexWrap: "wrap" }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              style={{ background: "none", border: `1px solid ${filter === f ? "#C8F060" : "#2A2A2A"}`, borderRadius: 4, color: filter === f ? "#C8F060" : "#666", fontFamily: "inherit", fontSize: 10, padding: "6px 14px", cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {f}
            </button>
          ))}
        </div>

        {/* Tasks */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {visible.length === 0 ? (
            <div style={{ textAlign: "center", padding: "48px 0", color: "#555", fontSize: 14 }}>Nothing here yet.</div>
          ) : visible.map(t => (
            <div key={t.id} style={{ background: "#161616", border: "1px solid #2A2A2A", borderRadius: 6, display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", opacity: t.done ? 0.5 : 1 }}>
              <div onClick={() => toggle(t.id)}
                style={{ width: 22, height: 22, border: `1.5px solid ${t.done ? "#C8F060" : "#2A2A2A"}`, borderRadius: 4, background: t.done ? "#C8F060" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                {t.done && <svg width="11" height="9" viewBox="0 0 11 9" fill="none"><path d="M1 4L4 7.5L10 1" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" /></svg>}
              </div>
              <span style={{ flex: 1, fontSize: 14, color: t.done ? "#555" : "#F0EDE6", textDecoration: t.done ? "line-through" : "none" }}>{t.text}</span>
              <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", padding: "3px 8px", borderRadius: 3, border: `1px solid ${tagColors[t.tag]?.border || "#444"}`, color: tagColors[t.tag]?.text || "#888" }}>{t.tag}</span>
              <button onClick={() => remove(t.id)} style={{ background: "none", border: "none", color: "#555", cursor: "pointer", fontSize: 16, padding: "2px 4px" }}>✕</button>
            </div>
          ))}
        </div>

        {tasks.some(t => t.done) && (
          <button onClick={clearDone} style={{ display: "block", margin: "20px auto 0", background: "none", border: "1px solid #2A2A2A", color: "#666", fontFamily: "inherit", fontSize: 10, padding: "8px 18px", borderRadius: 4, cursor: "pointer", letterSpacing: "0.08em" }}>
            Clear completed
          </button>
        )}
      </div>
    </div>
  );
}
