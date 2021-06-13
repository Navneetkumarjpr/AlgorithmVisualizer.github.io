
async function printy2() {
    selectionsort(arr, arr.length);

    // An optimized version of Bubble Sort
    async function selectionsort(arr, n) {
        var i, j;
        let bool = 0;
        for (i = 0; i < n - 1; i++) {
            let min_idx = i;
            let el = document.querySelector(`.div${i}`);
            el.style.background = "red";
            let el2;
            let el1;
            for (j = i + 1; j < n; j++) {
                el2 = document.querySelector(`.div${min_idx}`);
                el2.style.background = "red";
                el1 = document.querySelector(`.div${j}`);
                el1.style.background = "red";

                await waitforme(sp);
                if (arr[j] < arr[min_idx]) {
                    if (i !== min_idx) {
                        el2.style.background = "blue";
                    }
                    min_idx = j;
                    bool = 1;
                } else {
                    el1.style.background = "blue";
                }


            }
            swap(arr, min_idx, i);
            el.style.background = "green";

            el1.style.background = "blue";
            if (bool === 0) {
                el2.style.background = "blue";
            }
        }
        let el1 = document.querySelector(`.div${arr.length - 1}`);
        el1.style.background = "green";
    }

}
let selection = document.querySelector('#Selection');
selection.addEventListener('click', function (e) {
    e.defaultPrevented;
    printy2();
})
