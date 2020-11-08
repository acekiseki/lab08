function lightItUp() {
    let r = document.querySelector("#r");
    let g = document.querySelector("#g");
    let b = document.querySelector("#b");
    let w = document.getElementById("w");

    let rr = document.querySelector("#rr")
    let gg = document.querySelector("#gg")
    let bb = document.querySelector("#bb")

    let p = document.getElementById("justBS")


    p.style.borderColor =  'rgb(' + r.value + ',' + g.value + ',' + b.value + ')'
    p.style.borderWidth = w.value;
    p.style.backgroundColor = 'rgb(' + rr.value + ',' + gg.value + ',' + bb.value + ')';

    return;
}