const stars = document.querySelectorAll('.star');
const output = document.querySelector('.output');
// console.log(stars);


for(x=0;x<stars.length;x++){
    stars[x].starValue = (x+1);
    // stars[x].addEventListener('click',function(){
    //     console.log("I am clicked");
    // })

    ["click","mouseover","mouseout"].forEach(function(e){
        stars[x].addEventListener(e,showRating);

    }) // jab kabhi bhi ak sath kisi chij per multiple event lagna ho to es prakar se lagte hai

    function showRating(e){
        let type = e.type;
        // console.log(type);
        let starValue = this.starValue;
        // console.log(starValue);

        if(type === 'click'){
            if(starValue > 1){
                output.innerHTML = "You rated this " + starValue + "stars."
            }
        }

        stars.forEach(function(elem,ind){
            if(type === 'click'){
                if(ind < starValue){
                    elem.classList.add('orange');
                }else{
                    elem.classList.remove("orange")
                }
            }

            if(type === 'mouseover'){
                if(ind < starValue){
                    elem.classList.add('yellow');
                }else{
                    elem.classList.remove("yellow")
                }
            }

            if(type === 'mouseout'){
                
                elem.classList.remove('yellow');
                
              
            }


        })
    }
}

function nextPage(){
    window.location.reload();
}
