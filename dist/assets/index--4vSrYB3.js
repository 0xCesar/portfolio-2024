(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();var r=document.querySelectorAll("#hero-section .container img"),g=gsap.timeline({repeat:-1}),s=0;gsap.set(r,{opacity:0});gsap.to(r[0],{duration:.5,opacity:1});g.to({},{duration:1.5,repeatDelay:1/0,onComplete:h});function h(){gsap.to(r[s],{duration:.5,opacity:0}),s==2?s=0:s++,gsap.to(r[s],{duration:.5,opacity:1})}var o=document.querySelector("#about ul");console.log(o.children[0]);const m=10;(o.children.length-1)*50;let l=0;for(let i=0;i<6;i++)l=l+o.children[i].getBoundingClientRect().width+50;const d=-l;gsap.to(o,{x:d,duration:m,ease:"linear",repeat:-1,modifiers:{x:i=>i<=d?0:i}});let f=["Crafting visually stunning and user-centric digital experiences. With expertise in graphic design principles, typography, and color theory, I specialize in creating websites that not only attract attention but also engage users on an emotional level.","With a solid grasp of web development principles, including HTML, CSS, and JavaScript, I specialize in building websites that not only catch the eye but also seamlessly engage users. From sleek designs to smooth functionalities, I ensure that every aspect of the website contributes to an exceptional user experience.","I specialize in designing website interactions that strike the perfect balance between ease of use and visual appeal. From smooth animations to intuitive user interfaces, I ensure that every interaction on the website feels natural and enhances the overall user experience.","Effective teamwork is essential in web development projects. With strong communication and collaboration skills, I work closely with designers, developers, and stakeholders to achieve project goals. By actively participating, sharing ideas, and embracing feedback, I ensure that our team delivers high-quality web solutions that meet client needs and exceed expectations.","With a deep understanding of UX principles and methodologies, I collaborate closely with designers, developers, and stakeholders to create websites that resonate with users. By prioritizing user research, usability testing, and iterative design, I ensure that every aspect of the website enhances usability and satisfaction."],y=["assets/exploration.png","assets/img-project.png","assets/planetarium.png","assets/img-project.png","assets/planetarium.png"],p=document.querySelectorAll("#work ul li a"),b=document.querySelector("#content p"),v=document.querySelector("#content img");p.forEach((i,n)=>{i.addEventListener("click",()=>{p.forEach(a=>{a.classList.remove("selected")}),i.classList.add("selected"),b.textContent=f[n],v.src=y[n]})});
