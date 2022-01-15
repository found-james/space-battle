const btnEl = document.querySelector("body > button");
const listEl = document.querySelector("body > ul");
const inputEl = document.querySelector("body > input");
const delBtnEl = document.querySelector("body > button:nth-of-type(2)");
const inputEl2 = document.querySelector("body > input:nth-of-type(2)");
const bodyEl = document.querySelector("body");


bodyEl.addEventListener("click", (evt) => {
    console.log("the body registered a click from", evt.target)
    });

// const handleClick = (evt) => {
// // use function expression if we want to re-use a function
// }

//
    
btnEl.addEventListener("click", (evt) => {
    evt.stopPropagation();
    const val = inputEl.value;
    if (val){
    const commentLi = document.createElement("li");
    //the following evt is actually a local variable 
    //block scope(?)
    commentLi.addEventListener ("click", (evt) => {
        if(evt.target.style.color !== "red"){
        evt.target.style.color = "red";
        } else{
            evt.target.style.color = "black";
        }
    });
    commentLi.textContent = val;
    listEl.appendChild(commentLi);
    inputEl.value = " ";
    }
});

class Person{
    constructor(name){
    this.name = name;
    this.hi = this.hi.bind(this);
    }
    hi(){
        console.log(this.name);
    }
}

const arthur = new Person("arthur");
delBtnEl.addEventListener("click", arthur.hi);


delBtnEl.addEventListener("click", () => {
    const val = inputEl2.value;
    const listItems = document.querySelectorAll("body > ul > li");
    listItems.forEach((item) => {
        if(val === item.textContent){
            listEl.removeChild(item);
        }

    })
    inputEl2.value = "";   

});

