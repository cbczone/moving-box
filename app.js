//const anweisung = "GRRGGLGGG"

/*
    G = Ein Schritt nach vorne
    R = Eine Rotation nach Rechts (im Uhrzeigersinn)
    L = Eine Rotation nach Links (gegen den Uhrzeigersinn)
*/
//let direction = document.getElementById("direction").value;

let box = document.getElementById("ikon");
let area = document.getElementById("area");
let input = document.getElementById("komut");
area.style.backgroundColor = "#fff";

let rechte = 1;
let oben = 1;

const alert = (warning) => {
  area.style.backgroundColor = "red";
  setTimeout(function () {
    alert(`Uuuppsss!! ${warning} !!!`);
  }, 100);
};

const reset = () => {
  input.value = "";
  box.style.top = 0 + "rem";
  box.style.left = 0 + "rem";
  area.style.backgroundColor = "#fff";
  rechte = 1;
  oben = 1;
};

const right = () => {
  if (rechte <= 38) {
    box.style.left = rechte + "rem";

    rechte++;
  } else {
    area.style.backgroundColor = "red";
    setTimeout(function () {
      alert("Uuuppsss!! Borderline!!");
    }, 100);
  }
};

const left = () => {
  if (rechte < 40 && rechte > 1) {
    box.style.left = rechte - 2 + "rem";
    rechte--;
  } else {
    area.style.backgroundColor = "red";
    setTimeout(function () {
      alert("Uuuppsss!! Borderline!!");
    }, 100);
  }
};

const down = () => {
  if (oben <= 38) {
    box.style.top = oben + "rem";
    oben++;
  } else {
    area.style.backgroundColor = "redd";
    setTimeout(function () {
      alert("Uuuppsss!! Borderline!!");
    }, 100);
  }
};

const up = () => {
  if (oben > 1) {
    box.style.top = oben - 2 + "rem";
    oben--;
  } else {
    area.style.backgroundColor = "red";
    setTimeout(function () {
      alert("Uuuppsss!! Borderline!!");
    }, 100);
  }
};

const turn = (angle) => {
  ikon.style.transform = `rotate(${angle})`;
};

const enter = () => {
  let arr = [];
  let value = input.value;
  arr.push(...value);

  for (let i = 1; i < arr.length + 1; i++) {
    if (arr[i] === "R") setTimeout(() => right(), 1000 * i);

    if (arr[i] === "L") setTimeout(() => left(), 1000 * i);

    if (arr[i] === "U") setTimeout(() => up(), 1000 * i);

    if (arr[i] === "D") setTimeout(() => down(), 1000 * i);
  }
};

// document.addEventListener("keydown", function (aaa) {
//   console.log(aaa);
// });

// setTimeout(() => console.log("Here is your pizza"), 3000);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowRight") right();

//   if (e.key === "ArrowLeft") left();

//   if (e.key === "ArrowUp") up();

//   if (e.key === "ArrowDown") down();

//   if (e.key === "Escape") reset();
// });

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "ArrowRight") setTimeout(() => right(), 1000);

  if (e.key === "ArrowLeft") setTimeout(() => left(), 1000);

  if (e.key === "ArrowUp") setTimeout(() => up(), 1000);

  if (e.key === "ArrowDown") setTimeout(() => down(), 1000);

  if (e.key === "a") setTimeout(() => turn(`-90deg`), 1000);

  if (e.key === "d") setTimeout(() => turn(`90deg`), 1000);

  if (e.key === "Escape") reset();
});
