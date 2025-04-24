
document.addEventListener("DOMContentLoaded", function () {
  // Code to be executed when the DOM is ready
  console.log("DOM is ready");

  fetch("./header.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("header").innerHTML = data;
      console.log("Header Loaded");
    }).then(function () {
      const sidebar = document.getElementById("sidebar");
      const showSidebar = document.getElementById("showSidebar").addEventListener("click", function () {
        sidebar.style.display = "block";
      });
    }).then(function () {
      const sidebar = document.getElementById("sidebar");
      const hideSidebar = document.getElementById("hideSidebar").addEventListener("click", function () {
        sidebar.style.display = "none";
      });
    }).then(function () {
      const search = document.getElementById("search");
      const searchBtn = document.getElementById("searchBtn");
      searchBtn.addEventListener("click", function () {
        searchBtn.style.display = "none";
        search.style.display = "block";

      })
    });

  fetch("./footer.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("footer").innerHTML = data;
      console.log("Footer Loaded");
    });




});