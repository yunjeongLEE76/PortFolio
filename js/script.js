let scrollNum = 0;
// let documentHeight = 0;
// let windowHeight = 0;

const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imageAll.length;
const subPageImage = document.querySelector(".subPage .parallaxImage");
let x = 0;
let targetX = 0;
const speed = 0.1;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;

  imageAll.forEach((item, index) => {
    if (index < 5) {
      item.style.transform = `translateY(${
        scrollNum / (2 * (totalNum - index))
      }px)`;
    }
  });
});
//   //   하단의 내용과 동일

//   //   imageAll[0].style.transform = `translateY(${
//   //     scrollNum / (2 * (totalNum - 0))
//   //   }px)`;
//   //   // -scrollNum/12

//   //   imageAll[1].style.transform = `translateY(${
//   //     scrollNum / (2 * (totalNum - 1))
//   //   }px)`;
//   //   //   -scrollNum/10

//   //   imageAll[2].style.transform = `translateY(${
//   //     scrollNum / (2 * (totalNum - 2))
//   //   }px)`;

//   //   imageAll[3].style.transform = `translateY(${
//   //     scrollNum / (2 * (totalNum - 3))
//   //   }px)`;

//   //   imageAll[4].style.transform = `translateY(${
//   //     scrollNum / (2 * (totalNum - 4))
//   //   }px)`;

//   //   imageAll[5].style.transform = `translateY(${
//   //     scrollNum / (2 * (totalNum - 5))
//   //   }px)`;
// });

window.addEventListener("mousemove", (e) => {
  x = e.pageX - innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;

  imageAll[4].style.transform = `scale(1.1) translateX(${-targetX / 150}px,${
    scrollNum / (2 * (totalNum - 4))
  }px)`;
  imageAll[5].style.transform = `scale(1.1) translate(${-targetX / 70}px,${
    scrollNum / (2 * (totalNum - 5))
  }px)`;
  subPageImage.style.transform = `scale(1.1) translateX(${-targetX / 20}px)`;
  // scale은 그림의 크기를 1.1배키운다

  window.requestAnimationFrame(loop);
};
loop();

// let scrollNum = 0;

// const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
// const totalNum = imageAll.length;
// const subPageImage = document.querySelector(".subPage .parallaxImage");

// window.addEventListener("scroll", () => {
//   scrollNum = window.scrollY;

//   imageAll.forEach((item, index) => {
//     item.style.transform = `perspective(400px) translate3d(0,0,${
//       scrollNum / (2 * (totalNum - index))
//     }px)`;
//     // translate3d는 (x값,y값,z(깊이)값)이며, perspective는
//   });
// });
