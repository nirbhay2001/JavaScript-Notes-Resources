const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    // console.log(counter);
    counter.innerHTML = 0;

    const updateCounter = () => {
        const targetCount = +counter.getAttribute('data-target');
        // console.log(typeof targetCount);

        const startingCount = Number(counter.innerHTML);
        const incr = targetCount / 100;

        if(startingCount < targetCount){
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
            setTimeout(updateCounter,10);
        }else{
            counter.innerHtML = targetCount;
        }
    }
    updateCounter();
})


/*
 Number of ways convert string to number
 There are several ways to achieve it:
    1. Using the unary plus operator:
            var n = +str

    2. The Number Constructor:
            var n = Number(str);

    3. The parseFloat function:
            var n = parseFloat(str);



*/