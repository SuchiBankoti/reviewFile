let information = [
  {
    name: "Bill Oakley",
    position: "Senior web developer",
    image: "susan.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    name: "Ana Armis",
    position: "web developer",
    image: "ana.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    name: "Peter Skarsgard",
    position: "Junior web developer",
    image: "peter.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    name: "Susan Sarandon",
    position: "web designer",
    image: "bill.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
];
let surpriseBtn = document.getElementById("surprise");
let info = document.getElementById("info");
let frontBtn = document.getElementById("frontbtn");
let backBtn = document.getElementById("backbtn");

const newArr = information.map((obj) => {
  return `
    <div id="content">
        <img src=${obj.image}>
        <div id="name">${obj.name}</div>
        <div id="position">${obj.position}</div>
        <p id="text">"${obj.text}"</p>
    </div>`;
});

let i = 0;
let str = newArr[i];
info.innerHTML = str;

surpriseBtn.addEventListener("click", function () {
  i = Math.floor(Math.random() * newArr.length);
  str = newArr[i];
  info.innerHTML = str;
});

frontBtn.addEventListener("click", () => {
  i = i + 1;
  i = (i + 4) % 4;
  str = newArr[i];
  info.innerHTML = str;
});
backBtn.addEventListener("click", () => {
  i = i - 1;
  i = (i + 4) % 4;
  str = newArr[i];
  info.innerHTML = str;
});
