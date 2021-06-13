
  var arr_size=document.querySelector("#arr_sz"); 
  var no_of_bar=arr_size.value;
  arr_size.addEventListener("input",()=>{
     no_of_bar=arr_size.value;
      create(no_of_bar);
  });

  var speed=document.querySelector("#speed"); 
  let sp=speed.value;
  speed.addEventListener("input",()=>{
    console.log("heloo")

    sp=speed.value;   
 });

let arr = [];
let arraybtn = document.querySelector('#Array');
arraybtn.addEventListener('click', (e)=>{
    e.preventDefault;
    create(no_of_bar);
});
// arraybtn.addEventListener('click', (e)=>{

function create(no){
    no.defaultPrevented;
    console.log("heloo")
    let bars = document.querySelector('#bars');
    bars.innerHTML = "";
    arr = [];
    while (arr.length <no ) {
        var r = Math.floor(Math.random() * 100) + 1;
        console.log(r);
        if (arr.indexOf(r) === -1) {
            arr.push(r);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        var bar = document.createElement("div");
        bar.style.height = `${arr[i] * 5}px`;
        if(no<30){
        bar.style.width = "15px";
        }else if(no<70){
        bar.style.width = "10px";
        }else{
            bar.style.width = "7px";
        }
        bar.style.background = "blue";
        bar.style.marginRight = "2px";
        bar.className = `div${i}`;
        document.querySelector(`#bars`).appendChild(bar);
    }
}

function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}
function swapDiv(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);


    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;
}

function shiftDiv(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const transform1 = style1.getPropertyValue("height");
    el2.style.height = transform1;
}

function swap(arr, xp, yp) {
    let el1 = document.querySelector(`.div${xp}`);
    let el2 = document.querySelector(`.div${yp}`);
    swapDiv(el1, el2);
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;

}

async function printy() {
    bubbleSort(arr, arr.length);

    // An optimized version of Bubble Sort
    async function bubbleSort(arr, n) {
        var i, j;
        var x = arr.length - 1;
        for (i = 0; i < n - 1; i++) {
            for (j = 0; j < n - i - 1; j++) {
                let el1 = document.querySelector(`.div${j}`);
                let el2 = document.querySelector(`.div${j + 1}`);
                el1.style.background = "red";
                el2.style.background = "red";
                await waitforme(sp);

                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                }
                await waitforme(sp);

                el1.style.background = "blue";
                el2.style.background = "blue";
            }
            let el1 = document.querySelector(`.div${x}`);
            el1.style.background = "green";
            x--;
        }
        let el1 = document.querySelector(`.div0`);
        el1.style.background = "green";
    }

}

let bubble = document.querySelector('#Bubble');
bubble.addEventListener('click', function (e) {
    e.defaultPrevented;
    printy();
})
