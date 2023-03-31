let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let afterone = document.getElementById("afterone")
let aftertwo = document.getElementById("aftertwo")
let afterthree = document.getElementById("afterthree")

let beforeone = document.getElementById("beforeone")
let beforetwo = document.getElementById("beforetwo")
let beforethree = document.getElementById("beforethree")

// let after = window.getComputedStyle(one,'::after')

let nums = [one, two, three, four]
let steps = [afterone, aftertwo, afterthree]
let stepsbefore = [beforeone, beforetwo, beforethree]
let cntr = 0;

next.addEventListener('click', function () {
    cntr++

    prev.style.backgroundColor = 'rgb(0, 139, 253) '
    prev.style.cursor = 'pointer'
    prev.disabled = false

    nums[cntr].style.transition = '0.5s ease'
    nums[cntr].style.border = '3px rgb(0, 139, 253) solid '

    // stepsbefore[cntr - 1].classList.toggle("revanimate")
    // steps[cntr - 1].classList.toggle("colorchange")

    stepsbefore[cntr - 1].style.animation='none'
    steps[cntr - 1].style.animation='colorchange 0.5s ease 0s normal forwards'



    if (cntr == 3) {
        next.disabled = true
        next.style.backgroundColor = 'rgb(188, 188, 188) '
        next.style.cursor = 'not-allowed'
    }
    console.log(cntr);
})


prev.addEventListener('click', function () {

    nums[cntr].style.transition = '0s ease'
    nums[cntr].style.border = '3px rgb(188, 188, 188) solid '

    // steps[cntr - 1].classList.toggle("colorchange")
    steps[cntr - 1].style.animation='none'
    stepsbefore[cntr - 1].style.animation=' revanimate 0.5s ease 0s reverse forwards'
    // stepsbefore[cntr - 1].classList.toggle("revanimate")


    cntr--
    next.disabled = false
    next.style.backgroundColor = 'rgb(0, 139, 253) '
    next.style.cursor = 'pointer'
    if (cntr == 0) {
        prev.disabled = true
        prev.style.backgroundColor = 'rgb(188, 188, 188) '
        prev.style.cursor = 'not-allowed'

    }


    console.log(cntr);
})




