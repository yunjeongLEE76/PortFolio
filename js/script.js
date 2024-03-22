let x = 0;
// let y = 0;

let targetX = 0;
// let targetY = 0;
const speed = 0.07;

const contentAll = document.querySelectorAll(".contWrap img");
//querySelectorAll은 css에 div객체가 list로 잡히기 때문에 사용할때 forEach를 사용하는편이다.

const shadow = contentAll[0];
const date = contentAll[1];
const human = contentAll[2];
const textImg = contentAll[3];

window.addEventListener("mousemove", () => {
  x = event.pageX - window.innerWidth / 2; //innerWidth? 브라우저 화면의 너비를 뜻함.
  // y = event.pageY - window.innerHeight / 2;
});

let scrollNum = 0;
let documentHeight = 0;
const contWrap = document.querySelector(".contWrap");
const coverHeight = window.innerHeight;
const container = document.querySelector(".container");

// coverWrap.style.height = `${coverHeight}px`;
// contWrap.style.marginTop = `${coverHeight}px`;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight =
    document.body.scrollHeight + coverHeight - window.innerHeight;

  if (scrollNum >= documentHeight) {
    container.style.backgroundColor = `rgba(0, 0, 0, 0)`;
  } else {
    container.style.backgroundColor = `rgba(0, 0, 0, ${
      0.2 + scrollNum / 1000
    })`;
  }
});

const loop = () => {
  targetX += (x - targetX) * speed;

  shadow.style.transform = `translateX(${targetX / 35}px)`;
  date.style.transform = `translateX(${targetX / 20}px)`;
  human.style.transform = `translateX(${-targetX / 30}px)`; //-를 붙히면 내가 움직이는 반대방향으로 움직임.
  textImg.style.transform = `translateX(${-targetX / 15}px)`;

  window.requestAnimationFrame(loop);
};
loop();

// const progressBar = document.querySelector(".bar");
// const header = document.querySelector("header");
// const coverTitle = document.querySelector(".coverTitle");
// const coverWrap = document.querySelector(".coverWrap");
// const dimd = document.querySelector(".dimd");
// const contWrap = document.querySelector(".contWrap");

// let scrollNum = 0;
// let documentHeight = 0;
// let per = 0;
// const coverHeight = window.innerHeight;

// coverWrap.style.height = `${coverHeight}px`;
// contWrap.style.marginTop = `${coverHeight}px`;

// window.addEventListener("scroll", () => {
//   scrollNum = window.scrollY;
//   documentHeight =
//     document.body.scrollHeight + coverHeight - window.innerHeight;

//   per = percent(scrollNum, documentHeight);
//   progressBar.style.width = `${per}%`;

//   if (scrollNum >= coverHeight) {
//     header.classList.add("fixed");
//   } else {
//     header.classList.remove("fixed");
//     coverTitle.style.top = `${-scrollNum / 10}px`;
//     coverWrap.style.backgroundPosition = `center ${-scrollNum / 4}px`;
//     dimd.style.backgroundColor = `rgba(0, 0, 0, ${0.4 + scrollNum / 1000})`;
//   }
// });

// const percent = (num, totalNum) => {
//   return ((num / totalNum) * 100).toFixed(0);
// };
