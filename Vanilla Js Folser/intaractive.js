document.addEventListener("readystatechange", (event)=>{
  if(document.readyState === "complete"){
    initWeb();
  }
});

const initWeb=()=>{
  const header=document.querySelector("header");
  const nav=header.querySelector("nav");
  const ul=nav.querySelector("ul");
  const firstLi=ul.querySelector("li");
  const aboutLi=firstLi.querySelector("#about");
  const main=document.querySelector("main");
  const cont=main.querySelector(".cont");
  const mySkills=cont.querySelector(".my-skills");
  const myPara=mySkills.querySelector(".paragraphs");
  const buttons=myPara.querySelectorAll(".containers button");
  const blur=document.querySelector(".blur");
  const contactHow= document.querySelector(".contact-how")




  // Start Working With It

  buttons.forEach((button)=>{
    button.addEventListener("click", (event)=>{
      event.stopPropagation();
      blur.style.display="block";
      contactHow.style.display="block";
    })
  });

  document.addEventListener("click", (event)=>{
    // event.preventDefault()
    blur.style.display="none";
    contactHow.style.display="none";
  });
}
