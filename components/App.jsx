import { useState } from "react";
import ExpenseTracker from "./ExpenseTracker";
import HomeScreen from "./HomeScreen";
import Icon from "./Icon";
import ToDoApp from "./ToDoApp";

const screens = (navigate) => ({
  home: { label: "Portfolio", comp: <HomeScreen navigate={navigate} /> },
  todo: { label: "Task Board", comp: <ToDoApp /> },
  expense: { label: "Spend Cute", comp: <ExpenseTracker /> },
});

export default function App() {
  const [screen, setScreen] = useState("home");

  const navigate = (s) => setScreen(s);
  const goHome = () => setScreen("home");

  const screenMap = screens(navigate);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden", background: screen === "todo" ? "#0D0D0D" : screen === "expense" ? "#FFF5FB" : "#667EEA" }}>

      {/* Top Nav Bar */}
      <div style={{
        background: screen === "todo" ? "#161616" : screen === "expense" ? "#fff" : "rgba(255,255,255,0.15)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${screen === "todo" ? "#2A2A2A" : screen === "expense" ? "#F0E6F6" : "rgba(255,255,255,0.2)"}`,
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}>
        {/* Left: back button or brand */}
        {screen !== "home" ? (
          <button onClick={goHome} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
            <Icon name="back" size={20} color={screen === "todo" ? "#C8F060" : "#FF6EB4"} />
            <span style={{ fontSize: 14, fontWeight: 600, color: screen === "todo" ? "#C8F060" : "#FF6EB4", fontFamily: screen === "todo" ? "'DM Mono', monospace" : "'Nunito', sans-serif" }}>
              Back
            </span>
          </button>
        ) : (
          <div style={{ fontSize: 16, fontWeight: 700, color: "white", letterSpacing: 2, fontFamily: "Georgia, serif" }}>
            JASMINE MULLEN
          </div>
        )}

        {/* Right: page title or nav links */}
        {screen !== "home" ? (
          <span style={{ fontSize: 15, fontWeight: 700, color: screen === "todo" ? "#F0EDE6" : "#3A3A5C", fontFamily: screen === "todo" ? "'DM Mono', monospace" : "'Nunito', sans-serif" }}>
            {screenMap[screen]?.label}
          </span>
        ) : (
          <div style={{ display: "flex", gap: 8 }}>
            {[["todo", "list", "Task Board"], ["expense", "dollar", "Spend Cute"]].map(([s, icon, label]) => (
              <button key={s} onClick={() => navigate(s)}
                style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, padding: "6px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
                <Icon name={icon} size={15} color="white" />
                <span style={{ fontSize: 13, color: "white", fontWeight: 600 }}>{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Page Content */}
      <div style={{ flex: 1, overflowY:"auto"}}>
        {screenMap[screen]?.comp}
      </div>

      {/* Footer Nav */}
      <div style={{
        background: screen === "todo" ? "#161616" : screen === "expense" ? "#fff" : "rgba(0,0,0,0.2)",
        borderTop: `1px solid ${screen === "todo" ? "#2A2A2A" : screen === "expense" ? "#F0E6F6" : "rgba(255,255,255,0.15)"}`,
        padding: "16px 24px",
        display: "flex",
        justifyContent: "center",
        gap: 32,
      }}>
        {[["home", "home", "Portfolio"], ["todo", "list", "Task Board"], ["expense", "dollar", "Spend Cute"]].map(([s, icon, label]) => (
          <button key={s} onClick={() => navigate(s)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, opacity: screen === s ? 1 : 0.5 }}>
            <Icon name={icon} size={16} color={screen === "todo" ? (screen === s ? "#C8F060" : "#888") : screen === "expense" ? (screen === s ? "#FF6EB4" : "#9999BB") : "white"} />
            <span style={{ fontSize: 13, fontWeight: 600, color: screen === "todo" ? (screen === s ? "#C8F060" : "#888") : screen === "expense" ? (screen === s ? "#FF6EB4" : "#9999BB") : "white" }}>{label}</span>
          </button>
        ))}
      </div>

    </div>
  );
}
