let btn=document.getElementById("generateBtn");
let copy_btn=document.getElementById("copyBtn");
let color_code=document.getElementById("colourCode");


btn.addEventListener("click",function(){
  let color_code=document.getElementById("colourCode");
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colourBox.style.backgroundColor=randomColor;
    color_code.innerText=randomColor;
});

copy_btn.addEventListener("click",function(){
    navigator.clipboard.writeText(color_code.innerText);
});