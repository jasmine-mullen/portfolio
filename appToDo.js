let tasks = JSON.parse(localStorage.getItem('portfolio-tasks') || '[]');
let filter = 'all';

if (tasks.length === 0) {
  tasks = [
    { id: 1, text: 'Build portfolio landing page', tag: 'design', done: true },
    { id: 2, text: 'Add responsive navigation menu', tag: 'code', done: true },
    { id: 3, text: 'Write project case studies', tag: 'work', done: false },
    { id: 4, text: 'Upload latest design work', tag: 'design', done: false },
    { id: 5, text: 'Connect contact form backend', tag: 'code', done: false },
    { id: 6, text: 'Optimize images for performance', tag: 'work', done: false },
  ];
  save();
}

function save() {
  localStorage.setItem('portfolio-tasks', JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById('task-input');
  const tag = document.getElementById('tag-select').value;
  const text = input.value.trim();
  if (!text) return;
  tasks.unshift({ id: Date.now(), text, tag, done: false });
  input.value = '';
  save();
  render();
}

function toggle(id) {
  const t = tasks.find(t => t.id === id);
  if (t) t.done = !t.done;
  save(); render();
}

function remove(id) {
  tasks = tasks.filter(t => t.id !== id);
  save(); render();
}

function clearDone() {
  tasks = tasks.filter(t => !t.done);
  save(); render();
}

function setFilter(f, btn) {
  filter = f;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render();
}

function render() {
  const list = document.getElementById('task-list');
  let visible = tasks;

  if (filter === 'active') visible = tasks.filter(t => !t.done);
  else if (filter === 'done') visible = tasks.filter(t => t.done);
  else if (['work','personal','design','code','other'].includes(filter))
    visible = tasks.filter(t => t.tag === filter);

  document.getElementById('stat-total').textContent = tasks.length;
  document.getElementById('stat-active').textContent = tasks.filter(t => !t.done).length;
  document.getElementById('stat-done').textContent = tasks.filter(t => t.done).length;

  if (visible.length === 0) {
    list.innerHTML = `<div class="empty"><div class="empty-icon">✓</div>Nothing here yet.</div>`;
    return;
  }

  list.innerHTML = visible.map(t => `
    <div class="task-item ${t.done ? 'done' : ''}" id="task-${t.id}">
      <div class="task-check" onclick="toggle(${t.id})">
        <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
          <path d="M1 4L4 7.5L10 1" stroke="#0d0d0d" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <span class="task-text">${escHtml(t.text)}</span>
      <span class="task-tag tag-${t.tag}">${t.tag}</span>
      <button class="task-delete" onclick="remove(${t.id})">✕</button>
    </div>
  `).join('');
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

document.getElementById('task-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') addTask();
});

render();
