async function printy3() {
    insertionsort(arr, arr.length);

    // An optimized version of Bubble Sort
    async function insertionsort(arr, n) {
        var i, j, key;
        for (i = 1; i < n; i++) {
            key = arr[i];
            j = i - 1;
            let el1 = document.querySelector(`.div${i}`);
            el1.style.background = "white";
            let el2 = document.querySelector(`.div${j}`);
            el2.style.background = "white";
            await waitforme(sp);
            let el3;
            while (j >= 0 && arr[j] > key) {
                el2 = document.querySelector(`.div${j}`);
                el3 = document.querySelector(`.div${j + 1}`);
                if (j + 1 == i) {
                    swap(arr, j, j + 1);
                    el2.style.background = "blue";

                } else {
                    el1.style.background = "white";
                    el2.style.background = "red";
                    el3.style.background = "red";
                    swap(arr, j, j + 1);
                    await waitforme(sp);
                }
                el3.style.background = "blue";
                el2.style.background = "blue";
                j = j - 1;
            }

            el1.style.background = "blue";
            el2.style.background = "blue";
        }
        for (let p = arr.length - 1; p >= 0; p--) {
            let el1 = document.querySelector(`.div${p}`);
            el1.style.background = "green";
            await waitforme(sp);

        }
    }

}
let insertion = document.querySelector('#Insertion');
insertion.addEventListener('click', function (e) {
    // console.log("heloo")
    e.defaultPrevented;
    printy3();
})
