const CATS = [
  {label:'🍔 Food',key:'food'},
  {label:'🛍️ Shopping',key:'shopping'},
  {label:'🚗 Transport',key:'transport'},
  {label:'🎬 Fun',key:'fun'},
  {label:'💊 Health',key:'health'},
  {label:'🏠 Home',key:'home'},
  {label:'📦 Other',key:'other'},
];

let expenses = JSON.parse(localStorage.getItem('spcute-expenses')||'[]');
let budget   = parseFloat(localStorage.getItem('spcute-budget')||'1000');
let selCat   = 'food';

// demo data
if(!expenses.length){
  const today = new Date().toISOString();
  expenses = [
    {id:1,name:'Iced latte ☕',amount:6.50,cat:'food',date:today},
    {id:2,name:'New top 👕',amount:32.00,cat:'shopping',date:today},
    {id:3,name:'Uber ride',amount:14.75,cat:'transport',date:today},
    {id:4,name:'Movie ticket 🎬',amount:18.00,cat:'fun',date:today},
  ];
  save();
}

function save(){
  localStorage.setItem('spcute-expenses', JSON.stringify(expenses));
  localStorage.setItem('spcute-budget', budget);
}

function fmt(n){ return '$'+n.toFixed(2); }

function renderChips(){
  const wrap = document.getElementById('cat-chips');
  wrap.innerHTML = CATS.map(c=>`
    <div class="chip${c.key===selCat?' active':''}" onclick="selCat='${c.key}';renderChips()">${c.label}</div>
  `).join('');
}

function addExpense(){
  const name = document.getElementById('exp-name').value.trim();
  const amt  = parseFloat(document.getElementById('exp-amt').value);
  if(!name || isNaN(amt) || amt<=0) return;
  expenses.unshift({id:Date.now(),name,amount:amt,cat:selCat,date:new Date().toISOString()});
  document.getElementById('exp-name').value='';
  document.getElementById('exp-amt').value='';
  save(); render();
}

function deleteExp(id){
  expenses = expenses.filter(e=>e.id!==id);
  save(); render();
}

function clearAll(){
  if(!expenses.length) return;
  expenses=[];save();render();
}

function openModal(){
  document.getElementById('budget-input').value=budget;
  document.getElementById('modal').style.display='flex';
}

function closeModal(){ document.getElementById('modal').style.display='none'; }

function saveBudget(){
  const v=parseFloat(document.getElementById('budget-input').value);
  if(!isNaN(v)&&v>0){budget=v;save();render();}
  closeModal();
}

function topCat(){
  const totals={};
  expenses.forEach(e=>{ totals[e.cat]=(totals[e.cat]||0)+e.amount; });
  const top=Object.entries(totals).sort((a,b)=>b[1]-a[1])[0];
  if(!top) return '—';
  const cat=CATS.find(c=>c.key===top[0]);
  return cat ? cat.label.split(' ')[0] : '—';
}

function todayTotal(){
  const today=new Date().toDateString();
  return expenses.filter(e=>new Date(e.date).toDateString()===today).reduce((s,e)=>s+e.amount,0);
}

function render(){
  const spent=expenses.reduce((s,e)=>s+e.amount,0);
  const left=Math.max(0,budget-spent);
  const pct=Math.min(100,(spent/budget)*100)||0;

  document.getElementById('spent-val').textContent=fmt(spent);
  document.getElementById('left-val').textContent=fmt(left);
  document.getElementById('budget-val').textContent=fmt(budget);

  const bar=document.getElementById('bar-fill');
  bar.style.width=pct+'%';
  bar.className='bar-fill'+(pct>85?' danger':'');

  document.getElementById('s-count').textContent=expenses.length;
  document.getElementById('s-today').textContent=fmt(todayTotal());
  document.getElementById('s-top').textContent=topCat();

  const list=document.getElementById('expense-list');
  if(!expenses.length){
    list.innerHTML=`<div class="empty"><div class="empty-icon">🌸</div>No expenses yet! Go treat yourself~</div>`;
    return;
  }
  const catMap=Object.fromEntries(CATS.map(c=>[c.key,c.label.split(' ')[0]]));
  list.innerHTML=expenses.map(e=>{
    const d=new Date(e.date);
    const ds=d.toLocaleDateString('en-US',{month:'short',day:'numeric'});
    return `<div class="expense-item">
      <div class="exp-emoji">${catMap[e.cat]||'📦'}</div>
      <div class="exp-info">
        <div class="exp-name">${e.name}</div>
        <div class="exp-meta">${CATS.find(c=>c.key===e.cat)?.label.replace(/^.+ /,'')|| e.cat} · ${ds}</div>
      </div>
      <div class="exp-amt">${fmt(e.amount)}</div>
      <button class="exp-del" onclick="deleteExp(${e.id})">✕</button>
    </div>`;
  }).join('');
}

document.getElementById('exp-amt').addEventListener('keydown',e=>{ if(e.key==='Enter') addExpense(); });
document.getElementById('exp-name').addEventListener('keydown',e=>{ if(e.key==='Enter') document.getElementById('exp-amt').focus(); });
document.getElementById('modal').addEventListener('click',e=>{ if(e.target===document.getElementById('modal')) closeModal(); });

renderChips(); render();
