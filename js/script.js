const tabSwitch = document.querySelectorAll(".tab-switch");
const tabContent = document.querySelectorAll(".tab-content");

// WAY 1:
// tabSwitch.forEach((tab, index) =>
//   tab.addEventListener("click", function () {
//     tabSwitch.forEach((item) => item.classList.remove("active"));
//     tab.classList.add("active");

//     tabContent.forEach((content) => content.classList.remove("show"));
//     tabContent[index].classList.add("show");
//   })
// );

// WAY 2:
tabSwitch.forEach((tab) =>
  tab.addEventListener("click", function (e) {
    tabSwitch.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    const tabIndex = tab.dataset.tab;

    tabContent.forEach((item) => {
      item.classList.remove("show");
      if (tabIndex === item.dataset.content) {
        item.classList.add("show");
      }
    });
  })
);
