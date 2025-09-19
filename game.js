let box = document.querySelectorAll(".mybox");
let res = document.querySelector("#Reset");
let n = document.querySelector("#newgame");
let msgs = document.querySelector("#msg");
let fstmove = true;

const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

box.forEach((box) => {
  box.addEventListener("click", () => {
    if (fstmove) {
      box.innerText = "O";
      fstmove = false;
    } else {
      box.innerText = "X";
      fstmove = true;
    }
    box.disabled = true;
    checkwinners();
  });
});

const reset = () => {
  fstmove = true;
  msgs.classList.add("hidden");
  for (let boxes of box) {
    boxes.disabled = false;
    boxes.innerText = "";
  }
};

const win = (winner) => {
  msgs.innerText = `Congs !!! the winner is ${winner}`;
  msgs.classList.remove("hidden");
  for (let boxes of box) {
    boxes.disabled = true;
  }
};

const checkwinners = () => {
  for (let pettern of winpatterns) {
    let pos0 = box[pettern[0]].innerText;
    let pos1 = box[pettern[1]].innerText;
    let pos2 = box[pettern[2]].innerText;

    if (pos0 != "" && pos1 != "" && pos2 != "") {
      if (pos0 == pos1 && pos1 == pos2) {
        win(pos0);
      }
    }
  }
};

res.addEventListener("click", reset);

n.addEventListener("click", reset);
