(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const b=$('.burger'),u=$('.nav ul');
if(b){b.onclick=()=>{const o=u.classList.toggle('on');b.setAttribute('aria-expanded',o)};$$('a',u).forEach(a=>a.onclick=e=>{u.classList.remove('on');b.setAttribute('aria-expanded','false');if(document.body.classList.contains('project-view-open')){const target=document.querySelector(a.getAttribute('href'));if(target){e.preventDefault();document.body.classList.remove('project-view-open');const view=document.querySelector('#project-view');if(view){view.hidden=true;document.querySelector('#project-content')?.replaceChildren()}history.replaceState(null,'',a.getAttribute('href'));target.scrollIntoView({behavior:'smooth',block:'start'})}}})}
// ===== Data (edit here, not in HTML) =====
const P=[['PRJ-01','Villa Electrical Design','Complete electrical design for a three-story residential villa in Saudi Arabia, covering power, lighting, distribution, cable routing, earthing, and low-current systems.',['Residential','Saudi Arabia','AutoCAD'],'projects/electrical-distribution.html','assets/img/PJ-1/Screenshot 2026-10-08 180629.png'],
['PRJ-02','School Electrical BIM Design','Revit-based electrical design for a two-story school, including lighting, power, Low Current, HVAC power supply, cable routing, and electrical documentation.',['Educational','Revit','Electrical BIM'],'projects/school-electrical-bim.html','assets/img/prj-2/cover.png'],
['PRJ-03','Bank Electrical Shop Drawings','Electrical Shop Drawing Package for a Bank Building.',['Lighting','Power','HVAC','Low Current','AutoCAD','Electrical Technical Office'],'projects/bank-electrical-shop-drawings.html','assets/img/prj-3/cover.png']];

const C=[['Electrical Distribution Diploma','Top 20 candidate; calculations and drafting standards.'],['Low Current Systems Course','Fire alarm, IP CCTV, structured cabling, PA/BGM, access control.'],['BMS Training','Architecture, DDC controllers, and I/O point lists.'],['AXIOM Integrated Construction','Site execution, MEP clash avoidance, shop drawing workflows.'],['KNX Basic Workshop','Smart lighting automation, scenes, energy efficiency.'],['Internet of Things (IoT)','Sensors, microcontrollers, energy monitoring.'],['Classic Control Course','Motor control circuits, DOL starters, protection relays.'],['EETC Training','Substation equipment, transformer testing, transmission safety.']];
const W=['Architectural Coordination|Electrical layouts developed based on the villa\'s architectural plans.','Lighting & Power Layouts|Detailed floor-by-floor layouts covering electrical points and distribution.','Panel Documentation|Panel schedules organized to document circuits and connected loads.','Single-Line Diagram|Electrical distribution represented through clear single-line documentation.','Cable Routing|Electrical routes documented to support a clear and organized installation process.','Earthing System|Earthing design and related documentation included as part of the electrical package.','Low-Current Systems|Low-current systems included as part of the overall electrical design package.'];
const T=[['Total Connected Power','2,450.0 kVA','IEC 60364-1','Direct load aggregation from DB circuits','VERIFIED'],['Estimated Maximum Demand','1,820.0 kVA (PF 0.88)','SBC 401 Section 3','Diversity factor 0.74 by functional zoning','BALANCED'],['Main Step-Down Transformers','2 x 1,500 kVA (11kV / 0.4kV)','IEC 60076 Cast Resin','N+1 redundancy with bus-tie interlocking','OPTIMIZED'],['Standby Emergency Genset','1 x 800 kVA Prime Rated','NFPA 110 / ISO 8528','Covers 100% life safety + 45% central HVAC','COMPLIANT'],['Main Switchgear Assembly','MDB 2500A 4P Form 4b','IEC 61439-2','Motorized draw-out ACB with digital telemetry','APPROVED'],['Busbar Short Circuit','50.0 kA for 1.0 sec (Icw)','IEC 60909','Prospective fault calculated at 42.4 kA','+18% MARGIN'],['Max Feeder Voltage Drop','ΔV = 2.18% (critical run 140m)','BS 7671 / IEC 60364-5','Submain feeder from MDB to SMDB','< 2.5%'],['Earthing Loop Resistance','0.78 Ω (target < 1.0 Ω)','IEEE Std 80 / SBC','Soil resistivity 45 Ω·m, 12 earth wells','PASSED']];
const D=[['E-101','Overall Single Line Diagram','Normal and emergency switchboards with interlocking logic.'],['E-104','MDB Schedule & Breaker Settings','Phase balance L1 33.4%, L2 33.1%, L3 33.5%.'],['E-202','Basement & Typical Floor Power','Sockets, industrial disconnects, earth conduits.'],['E-305','Cable Tray Routing & Coordination','Multi-tier ladder layout with sections and risers.'],['R-ECO-02','Ecodial Tripping Curves','Selectivity across main and feeder breakers.'],['E-401','Earthing System & Inspection Wells','Earth electrodes, test pits, column bonding.']];
// ===== Render =====
const set=(id,h)=>{const e=document.getElementById(id);if(e)e.innerHTML=h};
set('projects',P.map(p=>`<article class="card proj"><div class="th ${p[0]==='PRJ-03'?'contain':''}"><img src="${p[5]||`assets/img/${p[0].toLowerCase()}.jpg`}" alt="${p[1]} project cover" loading="lazy" onerror="this.remove()"><span>${p[0]}</span></div><div class="bd"><h3>${p[1]}</h3><p>${p[2]}</p><div class="chips">${p[3].map(t=>`<span class="tag">${t}</span>`).join('')}</div><a class="go" href="${p[4]||'#'}" data-project-view>View Project</a></div></article>`).join(''));
set('cert-grid',C.map(x=>`<div class="card cert"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join(''));
set('wbs',W.map(x=>{x=x.split('|');return`<div class="card"><h3>${x[0]}</h3><p>${x[1]}</p></div>`}).join(''));
set('params',T.map(r=>`<tr><td>${r[0]}</td><td><b>${r[1]}</b></td><td>${r[2]}</td><td>${r[3]}</td><td><span class="ok">${r[4]}</span></td></tr>`).join(''));
const villaDrawings=[
['Screenshot 2026-10-08 180748.png','Ground-Floor Electrical Layout','Electrical lighting and power layout for the ground floor.'],
['Screenshot 2026-10-08 180813.png','Ground-Floor Plan — Detailed View','Detailed view of the ground-floor electrical layout and distribution.'],
['Screenshot 2026-10-08 180832.png','Upper-Floor Electrical Layout','Electrical lighting and power layout for the upper floor.'],
['Screenshot 2026-10-08 180845.png','Upper-Floor Plan — Detailed View','Detailed view of the upper-floor electrical layout and distribution.'],
['Screenshot 2026-10-08 184912.png','Panel Schedule & Circuit Data','Panel schedule showing circuit information and electrical load documentation.'],
['Screenshot 2026-10-08 184934.png','Electrical Layout & Coordination Notes','Electrical layout showing routing information and technical notes.'],
['Screenshot 2026-10-08 184955.png','Cable Routing & Connection Details','Detailed electrical routing and connection information.']
];
if(!document.body.classList.contains('school-project')&&!document.body.classList.contains('bank-project'))set('drawings',villaDrawings.map(x=>{const src=`../assets/img/PJ-1/${x[0]}`;return`<article class="card dr" data-img="${src}"><div class="im"><img src="${src}" alt="${x[1]}" loading="lazy"></div><div class="dr-copy"><h3>${x[1]}</h3><p>${x[2]}</p></div></article>`}).join(''));
// ===== Interactions =====
const projectView=$('#project-view'),projectContent=$('#project-content');
const closeProjectView=()=>{if(!projectView)return;projectView.hidden=true;projectContent.replaceChildren();document.body.classList.remove('project-view-open')};
if(projectView){
  $('.project-view-close',projectView).onclick=closeProjectView;
  const showProject=async url=>{
    try{
      const response=await fetch(url);if(!response.ok)throw new Error('Project page unavailable');
      const page=new DOMParser().parseFromString(await response.text(),'text/html');
      const main=page.querySelector('main');if(!main)throw new Error('Project details unavailable');
      const base=new URL(url,location.href);main.querySelectorAll('[src]').forEach(el=>el.src=new URL(el.getAttribute('src'),base));
      main.querySelectorAll('[srcset]').forEach(el=>el.srcset=el.getAttribute('srcset').split(',').map(item=>{const [url,...descriptor]=item.trim().split(/\s+/);return `${new URL(url,base)} ${descriptor.join(' ')}`.trim()}).join(', '));
      main.querySelectorAll('a[href]').forEach(el=>{
        const href=el.getAttribute('href');if(!href||href.startsWith('#')||/^(https?:|mailto:|tel:|data:)/i.test(href))return;
        el.href=new URL(href,base);
      });
      const modal=page.querySelector('.modal');
      projectContent.replaceChildren(main);
      if(modal){
        projectContent.append(modal);
        modal.addEventListener('click',event=>{if(event.target===modal||event.target.closest('button'))modal.classList.remove('on')});
        main.addEventListener('click',event=>{const drawing=event.target.closest('.dr');if(drawing){const image=modal.querySelector('img');image.src=drawing.dataset.img;modal.classList.add('on')}});
      }
      projectView.hidden=false;document.body.classList.add('project-view-open');
      projectView.dataset.currentUrl=base.href;
      projectView.scrollIntoView({behavior:'smooth',block:'start'});
    }catch(error){location.href=url}
  };
  $('#projects').addEventListener('click',e=>{
    const link=e.target.closest('[data-project-view]');if(!link)return;
    e.preventDefault();showProject(link.href);
  });
  projectContent.addEventListener('click',e=>{
    const link=e.target.closest('.project-switch a');if(!link)return;
    const url=new URL(link.href,projectView.dataset.currentUrl||location.href);
    if(url.origin!==location.origin||!url.pathname.endsWith('.html'))return;
    e.preventDefault();showProject(url.href);
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!projectView.hidden)closeProjectView()});
}
const m=$('.modal');
if(m){document.addEventListener('click',e=>{const d=e.target.closest('.dr');if(d){$('img',m).src=d.dataset.img;m.classList.add('on')}else if(e.target!==$('img',m)&&m.classList.contains('on'))m.classList.remove('on')});addEventListener('keydown',e=>e.key==='Escape'&&m.classList.remove('on'))}
let z=1;const si=$('#sld');
$$('[data-zoom]').forEach(x=>x.onclick=()=>{z=x.dataset.zoom==='r'?1:Math.min(3,Math.max(.5,z+(x.dataset.zoom==='+'?.25:-.25)));if(si)si.style.transform=`scale(${z})`});
})();
