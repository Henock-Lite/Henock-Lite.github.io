let content = document.querySelectorAll(".content");
let list = document.querySelectorAll("li");

function tab() {
  list.forEach((listItem, index) => {
    listItem.addEventListener("click", (e) => {
      e.preventDefault();
            
      list.forEach((L) => {
        L.classList.remove("activePage");
        L.classList.remove("active");
      });
      content.forEach((C) => {
        C.classList.remove("activePage");
      });
      
      listItem.classList.add("active");
      content[index].classList.add("activePage");
      
      // const newUrl = listItem.getAttribute('data-nav') || `#${index}`;
      // history.pushState({ tabIndex: index }, '', newUrl);
    });
  });
  
  // Gérer le bouton précédent/navigation arrière
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.tabIndex !== undefined) {
      const index = e.state.tabIndex;
      
      list.forEach((L) => {
        L.classList.remove("activePage");
        L.classList.remove("active");
      });
      content.forEach((C) => {
        C.classList.remove("activePage");
      });
      
      list[index].classList.add("active");
      content[index].classList.add("activePage");
    }
  });
}

// window.addEventListener("DOMContentLoaded", () => {
//   const loader = document.getElementById("loader");
//   const content = document.getElementById("main-content");
//   setTimeout(() => {
//     loader.style.opacity = "0";
//     setTimeout(() => {
//       loader.style.display = "none";
//       content.style.display = "block";
//     }, 500);
//   }, 3000);
// });
tab();
