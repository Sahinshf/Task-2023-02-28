let imageContent = document.querySelector(".cities_content_image");
let titleContent = document.querySelector(".cities_content_title");
let textContent = document.querySelector(".cities_content_text");
let cityContent = document.querySelector(".cities_content");

let rightButton = document.querySelector(".right_button");
let leftButton = document.querySelector(".left_button");
let transition = document.querySelector(".transitionProp");

let customerArr = [
  {
    image:
      "https://js-beginners.github.io/testimonial-project/img/customer-0.jpg",
    title: "CUSTOMER NAME",
    text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit voluptatum illo? Quae fugiat aspernatur harum aperiam, quis eos officia.",
  },
  {
    image:
      "https://js-beginners.github.io/testimonial-project/img/customer-1.jpg",
    title: "SANDY",
    text: "   Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
  },
  {
    image:
      "https://js-beginners.github.io/testimonial-project/img/customer-2.jpg",
    title: "AMY",
    text: "    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    image:
      "https://js-beginners.github.io/testimonial-project/img/customer-3.jpg",
    title: "TYRELL",
    text: "    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    image:
      "https://js-beginners.github.io/testimonial-project/img/customer-4.jpg",
    title: "WANDA",
    text: "    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
];
let index = 0;
imageContent.style.backgroundImage = `url('${customerArr[index].image}')`;
titleContent.innerHTML = `${customerArr[index].title}`;
textContent.innerHTML = `${customerArr[index].text}`;

let slideFunc = function () {
  imageContent.style.backgroundImage = `url('${customerArr[index].image}')`;
  titleContent.innerHTML = `${customerArr[index].title}`;
  textContent.innerHTML = `${customerArr[index].text}`;
};

let slideRightFunc = function () {
  index < customerArr.length - 1 ? index++ : (index = 0);
  slideFunc();
};

let slideLeftFunc = function () {
  index > 0 ? index-- : (index = customerArr.length - 1);
  slideFunc();
};

rightButton.addEventListener("click", slideRightFunc);
leftButton.addEventListener("click", slideLeftFunc);

document.onkeydown = (event) => {
  switch (event.key) {
    case "ArrowRight":
      slideRightFunc();
      break;
    case "ArrowLeft":
      slideLeftFunc();
      break;
    default:
      break;
  }
};
