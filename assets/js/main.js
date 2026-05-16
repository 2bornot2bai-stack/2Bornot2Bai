// 2B OR NOT 2B AI Systems · Premium V2
(function(){
  const navToggle=document.querySelector(".nav-toggle");
  const nav=document.querySelector("#nav");
  const navLinks=[...document.querySelectorAll("#nav a")];

  if(navToggle&&nav){
    navToggle.addEventListener("click",()=>{
      const open=nav.classList.toggle("is-open");
      document.body.classList.toggle("is-menu-open",open);
      navToggle.setAttribute("aria-expanded",String(open));
    });
    navLinks.forEach(link=>link.addEventListener("click",()=>{
      nav.classList.remove("is-open");
      document.body.classList.remove("is-menu-open");
      navToggle.setAttribute("aria-expanded","false");
    }));
  }

  const year=document.querySelector("#year");
  if(year) year.textContent=new Date().getFullYear();

  const header=document.querySelector(".site-header");
  const updateHeader=()=>{ if(header) header.style.boxShadow=window.scrollY>18?"0 16px 45px rgba(0,0,0,.32)":"none"; };
  updateHeader();
  window.addEventListener("scroll",updateHeader,{passive:true});

  const revealEls=document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window){
    const observer=new IntersectionObserver((entries,obs)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },{threshold:.14});
    revealEls.forEach(el=>observer.observe(el));
  } else {
    revealEls.forEach(el=>el.classList.add("is-visible"));
  }

  const sections=[...document.querySelectorAll("main section[id]")];
  if("IntersectionObserver" in window && sections.length){
    const activeObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        const id=entry.target.getAttribute("id");
        navLinks.forEach(link=>link.classList.toggle("is-active",link.getAttribute("href")===`#${id}`));
      });
    },{rootMargin:"-42% 0px -50% 0px",threshold:.01});
    sections.forEach(section=>activeObserver.observe(section));
  }

  const canvas=document.getElementById("heroCanvas");
  const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(canvas && !reduceMotion){
    const ctx=canvas.getContext("2d");
    let w=0,h=0,dpr=Math.min(window.devicePixelRatio||1,2),particles=[],raf;

    function resize(){
      w=canvas.offsetWidth;
      h=canvas.offsetHeight;
      canvas.width=Math.floor(w*dpr);
      canvas.height=Math.floor(h*dpr);
      ctx.setTransform(dpr,0,0,dpr,0,0);
      const count=Math.min(64,Math.max(34,Math.floor(w/28)));
      particles=Array.from({length:count},()=>({
        x:Math.random()*w,
        y:Math.random()*h,
        vx:(Math.random()-.5)*.28,
        vy:(Math.random()-.5)*.24,
        r:Math.random()*1.5+.5,
        hot:Math.random()>.82
      }));
    }

    function draw(){
      ctx.clearRect(0,0,w,h);
      particles.forEach(p=>{
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<-20)p.x=w+20; if(p.x>w+20)p.x=-20;
        if(p.y<-20)p.y=h+20; if(p.y>h+20)p.y=-20;
      });

      for(let i=0;i<particles.length;i++){
        for(let j=i+1;j<particles.length;j++){
          const a=particles[i],b=particles[j],dx=a.x-b.x,dy=a.y-b.y,dist=Math.sqrt(dx*dx+dy*dy);
          if(dist<120){
            const alpha=(1-dist/120)*.20;
            ctx.strokeStyle=`rgba(53,163,229,${alpha})`;
            ctx.lineWidth=1;
            ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
          }
        }
      }

      particles.forEach(p=>{
        ctx.beginPath();
        ctx.fillStyle=p.hot?"rgba(233,202,132,.70)":"rgba(53,163,229,.58)";
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();
      });

      raf=requestAnimationFrame(draw);
    }

    resize(); draw();
    window.addEventListener("resize",resize,{passive:true});
    window.addEventListener("beforeunload",()=>cancelAnimationFrame(raf));
  }
})();
