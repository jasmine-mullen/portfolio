import { useState } from "react";

const CATS = [
  { label: "🍔 Food",      key: "food" },
  { label: "🛍️ Shopping", key: "shopping" },
  { label: "🚗 Transport", key: "transport" },
  { label: "🎬 Fun",       key: "fun" },
  { label: "💊 Health",    key: "health" },
  { label: "🏠 Home",      key: "home" },
  { label: "📦 Other",     key: "other" },
];

const initialExpenses = [
  { id: 1, name: "Iced latte ☕",   amount: 6.50,  cat: "food",      date: new Date().toISOString() },
  { id: 2, name: "New top 👕",      amount: 32.00, cat: "shopping",  date: new Date().toISOString() },
  { id: 3, name: "Uber ride",       amount: 14.75, cat: "transport", date: new Date().toISOString() },
  { id: 4, name: "Movie ticket 🎬", amount: 18.00, cat: "fun",       date: new Date().toISOString() },
];

export default function ExpenseTracker() {
  const [expenses, setExpenses]       = useState(initialExpenses);
  const [budget, setBudget]           = useState(1000);
  const [selCat, setSelCat]           = useState("food");
  const [expName, setExpName]         = useState("");
  const [expAmt, setExpAmt]           = useState("");
  const [showModal, setShowModal]     = useState(false);
  const [budgetInput, setBudgetInput] = useState("1000");

  const spent = expenses.reduce((s, e) => s + e.amount, 0);
  const left  = Math.max(0, budget - spent);
  const pct   = Math.min(100, (spent / budget) * 100) || 0;

  const todayTotal = expenses
    .filter(e => new Date(e.date).toDateString() === new Date().toDateString())
    .reduce((s, e) => s + e.amount, 0);

  const topCat = () => {
    const totals = {};
    expenses.forEach(e => { totals[e.cat] = (totals[e.cat] || 0) + e.amount; });
    const top = Object.entries(totals).sort((a, b) => b[1] - a[1])[0];
    if (!top) return "—";
    return CATS.find(c => c.key === top[0])?.label.split(" ")[0] || "—";
  };

  const addExpense = () => {
    const amt = parseFloat(expAmt);
    if (!expName.trim() || isNaN(amt) || amt <= 0) return;
    setExpenses([{ id: Date.now(), name: expName.trim(), amount: amt, cat: selCat, date: new Date().toISOString() }, ...expenses]);
    setExpName("");
    setExpAmt("");
  };

  const fmt      = n => "$" + n.toFixed(2);
  const catEmoji = key => CATS.find(c => c.key === key)?.label.split(" ")[0] || "📦";

  return (
    <div style={{ background: "#FFF5FB", minHeight: "100vh", padding: "40px 24px 60px", fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 32, color: "#FF6EB4" }}>🌸 Spend Cute</div>
        </div>

        {/* Budget Card */}
        <div style={{ background: "#fff", borderRadius: 20, padding: "22px 28px", marginBottom: 16, border: "1.5px solid #F0E6F6", boxShadow: "0 4px 20px #FF6EB415" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <span style={{ fontFamily: "Georgia, serif", fontSize: 15, color: "#9999BB" }}>Monthly Budget</span>
            <button onClick={() => { setBudgetInput(String(budget)); setShowModal(true); }}
              style={{ background: "none", border: "1.5px solid #F0E6F6", borderRadius: 50, padding: "6px 16px", fontSize: 13, fontWeight: 800, color: "#FF6EB4", cursor: "pointer", fontFamily: "inherit" }}>
              ✏️ Set Budget
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", marginBottom: 16 }}>
            {[["Spent", fmt(spent), "#FF6B6B"], ["Left", fmt(left), "#6BCB77"], ["Budget", fmt(budget), "#A78BFA"]].map(([lbl, val, col]) => (
              <div key={lbl} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 26, color: col, lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#9999BB", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 4 }}>{lbl}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "#F5EEFF", borderRadius: 99, height: 10, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${pct}%`, borderRadius: 99, background: pct > 85 ? "linear-gradient(90deg,#FF6B6B,#FF9F43)" : "linear-gradient(90deg,#FF6EB4,#A78BFA)", transition: "width 0.5s" }} />
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 16 }}>
          {[["🛍️", expenses.length, "Purchases"], ["📅", fmt(todayTotal), "Today"], ["🏆", topCat(), "Top Cat"]].map(([icon, val, lbl]) => (
            <div key={lbl} style={{ background: "#fff", borderRadius: 16, padding: "18px 8px", textAlign: "center", border: "1.5px solid #F0E6F6" }}>
              <div style={{ fontSize: 24 }}>{icon}</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 20, color: "#3A3A5C", lineHeight: 1, marginTop: 4 }}>{val}</div>
              <div style={{ fontSize: 10, fontWeight: 800, color: "#9999BB", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 4 }}>{lbl}</div>
            </div>
          ))}
        </div>

        {/* Add Expense */}
        <div style={{ background: "#fff", borderRadius: 20, padding: "22px 28px", marginBottom: 16, border: "1.5px solid #F0E6F6" }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 18, color: "#3A3A5C", marginBottom: 14 }}>➕ Add Expense</div>
          <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
            <input value={expName} onChange={e => setExpName(e.target.value)}
              onKeyDown={e => e.key === "Enter" && document.getElementById("amt-field")?.focus()}
              placeholder="What did you buy?"
              style={{ flex: 1, border: "1.5px solid #F0E6F6", borderRadius: 12, padding: "12px 14px", fontFamily: "inherit", fontSize: 14, fontWeight: 700, color: "#3A3A5C", background: "#FAFAFA", outline: "none" }} />
            <input id="amt-field" value={expAmt} onChange={e => setExpAmt(e.target.value)}
              onKeyDown={e => e.key === "Enter" && addExpense()}
              type="number" placeholder="$0.00" min="0" step="0.01"
              style={{ width: 100, border: "1.5px solid #F0E6F6", borderRadius: 12, padding: "12px", fontFamily: "inherit", fontSize: 14, fontWeight: 700, color: "#3A3A5C", background: "#FAFAFA", outline: "none" }} />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
            {CATS.map(c => (
              <div key={c.key} onClick={() => setSelCat(c.key)}
                style={{ background: selCat === c.key ? "#FF6EB4" : "#F5EEFF", border: `1.5px solid ${selCat === c.key ? "#FF6EB4" : "transparent"}`, borderRadius: 50, padding: "6px 14px", fontSize: 13, fontWeight: 800, color: selCat === c.key ? "#fff" : "#9999BB", cursor: "pointer" }}>
                {c.label}
              </div>
            ))}
          </div>
          <button onClick={addExpense}
            style={{ width: "100%", background: "linear-gradient(135deg,#FF6EB4,#A78BFA)", border: "none", borderRadius: 12, padding: 14, color: "#fff", fontFamily: "Georgia, serif", fontSize: 17, cursor: "pointer" }}>
            Add to my spending 💸
          </button>
        </div>

        {/* Expense List */}
        <div style={{ background: "#fff", borderRadius: 20, padding: "22px 28px", border: "1.5px solid #F0E6F6" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <span style={{ fontFamily: "Georgia, serif", fontSize: 18, color: "#3A3A5C" }}>📋 My Expenses</span>
            <button onClick={() => setExpenses([])} style={{ background: "none", border: "none", fontSize: 13, fontWeight: 800, color: "#9999BB", cursor: "pointer", fontFamily: "inherit" }}>Clear all</button>
          </div>
          {expenses.length === 0 ? (
            <div style={{ textAlign: "center", padding: "28px 0", color: "#9999BB", fontSize: 14, fontWeight: 700 }}>🌸 No expenses yet! Go treat yourself~</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {expenses.map(e => {
                const d = new Date(e.date).toLocaleDateString("en-US", { month: "short", day: "numeric" });
                const catLabel = CATS.find(c => c.key === e.cat)?.label || e.cat;
                return (
                  <div key={e.id} style={{ display: "flex", alignItems: "center", gap: 12, background: "#FAFAFA", borderRadius: 14, padding: "12px 16px", border: "1.5px solid #F0E6F6" }}>
                    <span style={{ fontSize: 22, flexShrink: 0 }}>{catEmoji(e.cat)}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 800, color: "#3A3A5C", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{e.name}</div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#9999BB" }}>{catLabel.replace(/^.+ /, "")} · {d}</div>
                    </div>
                    <div style={{ fontFamily: "Georgia, serif", fontSize: 17, color: "#FF6B6B", flexShrink: 0 }}>{fmt(e.amount)}</div>
                    <button onClick={() => setExpenses(expenses.filter(x => x.id !== e.id))} style={{ background: "none", border: "none", color: "#DDD", fontSize: 16, cursor: "pointer", padding: "0 4px" }}>✕</button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>

      {/* Budget Modal */}
      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200 }}
          onClick={e => e.target === e.currentTarget && setShowModal(false)}>
          <div style={{ background: "#fff", borderRadius: 24, padding: 32, width: "90%", maxWidth: 340, textAlign: "center" }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 24, color: "#3A3A5C", marginBottom: 16 }}>💰 Set Your Budget</div>
            <input type="number" value={budgetInput} onChange={e => setBudgetInput(e.target.value)}
              style={{ width: "100%", border: "1.5px solid #F0E6F6", borderRadius: 12, padding: "14px", fontFamily: "inherit", fontSize: 17, fontWeight: 700, color: "#3A3A5C", outline: "none", textAlign: "center", marginBottom: 16, boxSizing: "border-box" }} />
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => setShowModal(false)}
                style={{ flex: 1, padding: 13, borderRadius: 12, border: "none", background: "#F5EEFF", color: "#9999BB", fontFamily: "Georgia, serif", fontSize: 16, cursor: "pointer" }}>Cancel</button>
              <button onClick={() => { const v = parseFloat(budgetInput); if (!isNaN(v) && v > 0) setBudget(v); setShowModal(false); }}
                style={{ flex: 1, padding: 13, borderRadius: 12, border: "none", background: "linear-gradient(135deg,#FF6EB4,#A78BFA)", color: "#fff", fontFamily: "Georgia, serif", fontSize: 16, cursor: "pointer" }}>Save ✨</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
