var typed = new Typed(".typing",{
  strings:[ "Web Designer", "Web Developer", "Graphic Designer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true
})

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;
      for(let i=0; i<totalNavList; i++)
      {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
          for(let j = 0; j < totalNavList.length; j++)
          {
            navList[j].querySelector("a").classList.remove("active"); 
          }
          this.classList.add("active");
          showSection(this)
        })
      }
      function showSection(element)
      {
        const href=element.getAttribute("href").split("#")
        target = href[1];
        console.log('funcionou')
      }