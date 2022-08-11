// // for head start
// let icon = document.getElementsByTagName("i");
// let mainLinks = document.getElementsByClassName("mainLinks");
// let clicked1 = false;
// console.log(window.innerWidth);

// window.onresize = function () {
//   if (window.innerWidth < 500) {
//     mainLinks[0].style.display = "none";
//     icon[0].onclick = function () {
//       if (clicked1) {
//         mainLinks[0].style.display = "none";
//         clicked1 = false;
//       } else {
//         console.log("click");
//         mainLinks[0].style.display = "flex";
//         clicked1 = true;
//       }
//     };
//   } else mainLinks[0].style.display = "flex";
// };
// head end
// card flip
let card = document.querySelectorAll(".prot");
console.log(card);
let btn1 = document.getElementsByClassName("btn");
console.log(btn1);
let btn2 = document.getElementsByClassName("btn0");
console.log(btn2);
document.addEventListener("click", function (e) {
  card.forEach(function (ele) {
    console.log(ele);
    ele.removeAttribute("id");
    ele.removeAttribute("style");
  });
  if (e.target.className === "btn") {
    let arr = Array.prototype.slice.call(btn1);
    card[arr.indexOf(e.target)].setAttribute("id", "flip");
    let flipping = document.getElementById("flip");
    flipping.style.cssText =
      "transform:rotateY(-180deg);transition:var(--main-transition);";
  } else if (e.target.className === "btn0") {
    let arr = Array.prototype.slice.call(btn2);
    card[arr.indexOf(e.target)].setAttribute("id", "flip1");
    let flipping = document.getElementById("flip1");
    flipping.style.cssText =
      "transform:rotateY(0deg);transition:var(--main-transition);";
  }
});
