const menu=document.getElementById("menuToggle");
const links=document.getElementById("navLinks");
if(menu&&links){
  menu.setAttribute("aria-expanded","false");
  menu.addEventListener("click",()=>{
    const open=links.classList.toggle("open");
    menu.setAttribute("aria-expanded",String(open));
  });
  links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    links.classList.remove("open");
    menu.setAttribute("aria-expanded","false");
  }));
}
const theme=document.getElementById("themeToggle");
if(theme){
  const saved=localStorage.getItem("tania-theme");
  if(saved==="dark") document.body.classList.add("dark");
  const update=()=>{theme.textContent=document.body.classList.contains("dark")?"☾":"☼";theme.setAttribute("aria-label",document.body.classList.contains("dark")?"Switch to light mode":"Switch to dark mode");};
  update();
  theme.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    localStorage.setItem("tania-theme",document.body.classList.contains("dark")?"dark":"light");
    update();
  });
}
const year=document.getElementById("year");
if(year)year.textContent=new Date().getFullYear();
