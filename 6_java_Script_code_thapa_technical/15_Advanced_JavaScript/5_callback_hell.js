// CallBack Hell

setTimeout(()=>{
    console.log(`1 works is done`);
    setTimeout(()=>{
        console.log(`2 works is done`);
        setTimeout(()=>{
            console.log(`3 works is done`);
            setTimeout(()=>{
                console.log(`4 works is done`);
                setTimeout(()=>{
                    console.log(`5 works is done`);
                    setTimeout(()=>{
                        console.log(`6 works is done`);
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)