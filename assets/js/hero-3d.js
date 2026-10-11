// Hero background: 3D power-distribution network (three.js r128). Degrades silently if WebGL is missing.
(()=>{
const cv=document.getElementById('hero-3d');
if(!cv||!window.THREE)return;
const T=THREE,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
let R;try{R=new T.WebGLRenderer({canvas:cv,antialias:true,alpha:true})}catch(e){return}
const small=innerWidth<700;
R.setPixelRatio(Math.min(devicePixelRatio,small?1.5:1.75));
const S=new T.Scene();S.fog=new T.FogExp2(0x0a111f,.05);
const cam=new T.PerspectiveCamera(55,1,.1,100);
const G=new T.Group();S.add(G);
// seeded random so the layout is stable between loads
let s=7;const rnd=()=>(s=(s*16807)%2147483647)/2147483647;
// soft glow sprite
const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d');
const gr=x.createRadialGradient(32,32,0,32,32,32);gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(.25,'rgba(255,255,255,.55)');gr.addColorStop(1,'rgba(255,255,255,0)');
x.fillStyle=gr;x.fillRect(0,0,64,64);const sprite=new T.CanvasTexture(c);
// nodes
const N=small?36:68,P=[];
for(let i=0;i<N;i++)P.push(new T.Vector3((rnd()-.5)*20,(rnd()-.5)*8,(rnd()-.5)*12-2));
// edges: link each node to its 2 nearest neighbours
const E=[],seen=new Set();
P.forEach((p,i)=>{P.map((q,j)=>[j,p.distanceTo(q)]).filter(a=>a[0]!==i).sort((a,b)=>a[1]-b[1]).slice(0,2).forEach(a=>{const k=Math.min(i,a[0])+'-'+Math.max(i,a[0]);if(!seen.has(k)){seen.add(k);E.push([i,a[0]])}})});
const lp=[];E.forEach(e=>lp.push(P[e[0]].x,P[e[0]].y,P[e[0]].z,P[e[1]].x,P[e[1]].y,P[e[1]].z));
const lg=new T.BufferGeometry();lg.setAttribute('position',new T.Float32BufferAttribute(lp,3));
G.add(new T.LineSegments(lg,new T.LineBasicMaterial({color:0x3b82f6,transparent:true,opacity:.28})));
// glowing nodes
const ng=new T.BufferGeometry().setFromPoints(P);
G.add(new T.Points(ng,new T.PointsMaterial({map:sprite,color:0x60a5fa,size:.55,transparent:true,depthWrite:false,blending:T.AdditiveBlending})));
// energy pulses travelling along edges
const M=small?22:46,pulse=[];
for(let i=0;i<M;i++)pulse.push({e:Math.floor(rnd()*E.length),t:rnd(),v:.15+rnd()*.35});
const pa=new Float32Array(M*3),pg=new T.BufferGeometry();pg.setAttribute('position',new T.BufferAttribute(pa,3));
G.add(new T.Points(pg,new T.PointsMaterial({map:sprite,color:0x7dd3fc,size:.42,transparent:true,depthWrite:false,blending:T.AdditiveBlending})));
// perspective floor grid
const grid=new T.GridHelper(44,44,0x1d4ed8,0x15233d);grid.position.y=-5;grid.material.transparent=true;grid.material.opacity=.55;S.add(grid);
function step(dt){pulse.forEach((p,i)=>{p.t+=p.v*dt;if(p.t>1){p.t=0;p.e=Math.floor(rnd()*E.length)}const a=P[E[p.e][0]],b=P[E[p.e][1]];pa[i*3]=a.x+(b.x-a.x)*p.t;pa[i*3+1]=a.y+(b.y-a.y)*p.t;pa[i*3+2]=a.z+(b.z-a.z)*p.t});pg.attributes.position.needsUpdate=true}
function size(){const w=cv.parentElement.clientWidth,h=cv.parentElement.clientHeight;R.setSize(w,h,false);cam.aspect=w/h;cam.position.set(0,1.5,w/h<1?17:12);cam.updateProjectionMatrix()}
new ResizeObserver(size).observe(cv.parentElement);size();
let mx=0,my=0,tx=0,ty=0,run=true,last=performance.now(),t0=0;
addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5},{passive:true});
function draw(now){
 const dt=Math.min((now-last)/1000,.05);last=now;t0+=dt;
 tx+=(mx-tx)*.04;ty+=(my-ty)*.04;
 G.rotation.y=t0*.04+tx*.35;G.rotation.x=ty*.12;cam.position.y=1.5-ty*1.2;cam.lookAt(0,0,0);
 step(dt);R.render(S,cam);
 if(run&&!reduce)requestAnimationFrame(draw)}
if(reduce){step(0);R.render(S,cam)}else requestAnimationFrame(draw);
// pause when hero is off-screen or tab hidden
const go=v=>{if(v&&!run&&!reduce){run=true;last=performance.now();requestAnimationFrame(draw)}else if(!v)run=false};
new IntersectionObserver(e=>go(e[0].isIntersecting)).observe(cv.parentElement);
document.addEventListener('visibilitychange',()=>go(!document.hidden));
})();
