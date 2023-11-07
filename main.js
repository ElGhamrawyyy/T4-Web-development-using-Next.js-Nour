const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");
let a = 1;
plus.addEventListener("click", ()=>{
  a++;
  a=(a < 10) ? "0" + a : a;
  num.innerText = a;
});

minus.addEventListener("click", ()=>{
  if(a > 1){
    a--;
    a=(a < 10) ? "0" + a : a;
  num.innerText = a;
  }
});
const plu = document.querySelector(".plu"),
minu = document.querySelector(".minu"),
nums = document.querySelector(".nums");
let s = 1;
plu.addEventListener("click", ()=>{
  s++;
  s=(s< 10) ? "0" + s : s;
  nums.innerText = s;
});

minu.addEventListener("click", ()=>{
  if(s > 1){
    s--;
    s=(s < 10) ? "0" + s : s;
  nums.innerText = s;
  }
});
const pluss = document.querySelector(".pluss"),
minuss = document.querySelector(".minuss"),
numss = document.querySelector(".numss");
let c = 1;
pluss.addEventListener("click", ()=>{
  c++;
  c=(c < 10) ? "0" + c : c;
  numss.innerText = c;
});

minuss.addEventListener("click", ()=>{
  if(c > 1){
    c--;
    c=(c < 10) ? "0" + c : c;
  numss.innerText = c;
  }
});