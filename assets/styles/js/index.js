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
      
    });
  });
  
}

tab();
