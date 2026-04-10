import Icon from "./Icon";

const skillLogos = {
  HTML: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 452 520'%3E%3Cpath fill='%23E34F26' d='M41 460L0 0h451l-41 460-185 52'/%3E%3Cpath fill='%23EF652A' d='M226 472l149-41 35-394H226'/%3E%3Cpath fill='%23EBEBEB' d='M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z'/%3E%3Cpath fill='%23FFF' d='M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z'/%3E%3C/svg%3E",
  CSS: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 452 520'%3E%3Cpath fill='%231572B6' d='M41 460L0 0h451l-41 460-185 52'/%3E%3Cpath fill='%2333A9DC' d='M226 472l149-41 35-394H226'/%3E%3Cpath fill='%23EBEBEB' d='M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z'/%3E%3Cpath fill='%23FFF' d='M226 265l69 0-7 73-62 17v59l115-32 26-288H226v56h80l-5 58h-75z'/%3E%3C/svg%3E",
  JS: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 630 630'%3E%3Crect width='630' height='630' fill='%23f7df1e'/%3E%3Cpath d='m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z'/%3E%3C/svg%3E",
  Python: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 255'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='12.959%25' x2='79.639%25' y1='12.039%25' y2='78.201%25'%3E%3Cstop offset='0%25' stop-color='%23387EB8'/%3E%3Cstop offset='100%25' stop-color='%23366994'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='19.128%25' x2='90.742%25' y1='20.579%25' y2='88.429%25'%3E%3Cstop offset='0%25' stop-color='%23FFE052'/%3E%3Cstop offset='100%25' stop-color='%23FFC331'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23a)' d='M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z'/%3E%3Cpath fill='url(%23b)' d='M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z'/%3E%3C/svg%3E",
  React: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-11.5 -10.23174 23 20.46348'%3E%3Ccircle cx='0' cy='0' r='2.05' fill='%2361dafb'/%3E%3Cg stroke='%2361dafb' stroke-width='1' fill='none'%3E%3Cellipse rx='11' ry='4.2'/%3E%3Cellipse rx='11' ry='4.2' transform='rotate(60)'/%3E%3Cellipse rx='11' ry='4.2' transform='rotate(120)'/%3E%3C/g%3E%3C/svg%3E",
  "C++": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 306 344.35'%3E%3Cpath fill='%23044F88' d='M302.107 258.262c2.401-4.159 3.893-8.845 3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153 172.175l149.107 86.087z'/%3E%3Cpath fill='%23044F88' d='M166.25 341.193l126.5-73.034c3.644-2.104 6.956-5.737 9.357-9.897L153 172.175 3.893 258.263c2.401 4.159 5.714 7.793 9.357 9.896l126.5 73.034c7.287 4.208 19.213 4.208 26.5 0z'/%3E%3Cpath fill='%2300599C' d='M302.108 86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25 3.156c-7.287-4.208-19.213-4.208-26.5 0L13.25 76.19C5.962 80.397 0 90.725 0 99.14v146.069c0 4.208 1.491 8.894 3.893 13.053L153 172.175l149.108-86.088z'/%3E%3Cpath fill='%23fff' d='M153 274.175c-56.243 0-102-45.757-102-102s45.757-102 102-102c36.292 0 70.359 19.53 88.592 50.977l-44.296 25.586c-9.117-15.749-26.075-25.563-44.296-25.563-28.122 0-51 22.878-51 51s22.878 51 51 51c18.22 0 35.178-9.814 44.296-25.563l44.296 25.586C223.36 254.645 189.293 274.175 153 274.175z'/%3E%3Cpath fill='%23fff' d='M255 202.175h-8v-8h-12v8h-8v12h8v8h12v-8h8z'/%3E%3Cpath fill='%23fff' d='M297 202.175h-8v-8h-12v8h-8v12h8v8h12v-8h8z'/%3E%3C/svg%3E",
};

export default function HomeScreen({ navigate }) {
  return (
    <div style={{ paddingBottom: 60 }}>

      {/* Hero */}
      <div style={{ padding: "60px 24px 48px", textAlign: "center" }}>
        <h1 style={{ fontSize: 48, fontWeight: 700, color: "white", fontFamily: "Georgia, serif", margin: "0 0 16px", letterSpacing: -1 }}>
          Jasmine Mullen
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", maxWidth: 560, margin: "0 auto 32px", lineHeight: 1.7, fontFamily: "Georgia, serif" }}>
          Computer Science graduate with hands-on experience in programming and web development.
        </p>
        <a href="mailto:jasminemullen.jam@gmail.com"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.2)", border: "1.5px solid rgba(255,255,255,0.4)", borderRadius: 50, padding: "12px 28px", color: "white", textDecoration: "none", fontSize: 15, fontWeight: 600, backdropFilter: "blur(10px)", fontFamily: "Georgia, serif" }}>
          <Icon name="mail" size={16} color="white" />
          jasminemullen.jam@gmail.com
        </a>
      </div>

      {/* About */}
      <div style={{ maxWidth: 800, margin: "0 auto 48px", padding: "0 24px" }}>
        <div style={{ background: "white", borderRadius: 20, padding: "36px 40px", boxShadow: "0 10px 40px rgba(0,0,0,0.15)" }}>
          <h2 style={{ fontSize: 26, fontWeight: 600, color: "#444", textAlign: "center", marginBottom: 20, fontFamily: "Georgia, serif" }}>About Me</h2>
          <p style={{ color: "#555", lineHeight: 1.9, fontSize: 16, margin: 0 }}>
            Hello! I'm Jasmine Mullen, a recent college graduate specializing in computer science with hands-on experience in programming and web development. I am known for strong problem-solving skills, a solid technical foundation, and the ability to adapt quickly to new technologies. I am eager to contribute to a collaborative software or IT team while continuing to expand technical expertise.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div style={{ maxWidth: 800, margin: "0 auto 48px", padding: "0 24px" }}>
        <h2 style={{ fontSize: 26, fontWeight: 600, color: "white", textAlign: "center", marginBottom: 24, fontFamily: "Georgia, serif" }}>My Skills</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }}>
          {Object.entries(skillLogos).map(([name, src]) => (
            <div key={name} style={{ background: "white", borderRadius: 16, padding: "20px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}>
              <img src={src} alt={name} style={{ width: 44, height: 44, objectFit: "contain" }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "#555", fontFamily: "Georgia, serif" }}>{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
        <h2 style={{ fontSize: 26, fontWeight: 600, color: "white", textAlign: "center", marginBottom: 24, fontFamily: "Georgia, serif" }}>Recent Projects</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>

          {/* ToDo Card */}
          <div onClick={() => navigate("todo")}
            style={{ background: "white", borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", cursor: "pointer", transition: "transform 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
            <div style={{ height: 140, background: "linear-gradient(135deg,#4FACFE 0%,#00F2FE 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 40 }}>✅</div>
                <div style={{ color: "white", fontWeight: 600, fontSize: 18, fontFamily: "Georgia, serif", marginTop: 6 }}>Task Board</div>
              </div>
            </div>
            <div style={{ padding: "20px 22px" }}>
              <div style={{ fontSize: 16, fontWeight: 600, color: "#333", marginBottom: 8, fontFamily: "Georgia, serif" }}>To-Do List App</div>
              <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7, margin: "0 0 14px" }}>Add tasks, organize by category (Work, Design, Code, etc.), and check them off when done.</p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "linear-gradient(135deg,#4FACFE,#00F2FE)", borderRadius: 8, padding: "8px 16px" }}>
                <span style={{ color: "white", fontSize: 13, fontWeight: 700 }}>Open App →</span>
              </div>
            </div>
          </div>

          {/* Expense Card */}
          <div onClick={() => navigate("expense")}
            style={{ background: "white", borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", cursor: "pointer", transition: "transform 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
            <div style={{ height: 140, background: "linear-gradient(135deg,#43E97B 0%,#38F9D7 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 40 }}>🌸</div>
                <div style={{ color: "white", fontWeight: 600, fontSize: 18, fontFamily: "Georgia, serif", marginTop: 6 }}>Spend Cute</div>
              </div>
            </div>
            <div style={{ padding: "20px 22px" }}>
              <div style={{ fontSize: 16, fontWeight: 600, color: "#333", marginBottom: 8, fontFamily: "Georgia, serif" }}>Expense Tracker</div>
              <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7, margin: "0 0 14px" }}>Track monthly spending, log purchases, set a budget, and see where your money is going.</p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "linear-gradient(135deg,#43E97B,#38F9D7)", borderRadius: 8, padding: "8px 16px" }}>
                <span style={{ color: "white", fontSize: 13, fontWeight: 700 }}>Open App →</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
