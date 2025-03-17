let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click", function()
{
    let item=document.createElement("li");
    
    item.innerText=inp.value;
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);

    ul.appendChild(item);
    inp.value="";
});
let delbtns =document.querySelectorAll(".delete");
for(delbtn of delbtns)
{
    delbtn.addEventListener("click",function()
{
    this.parentElement.remove();
});
}
