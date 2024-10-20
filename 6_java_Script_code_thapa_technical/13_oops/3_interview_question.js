let bioData = {
    myName : {
        realName : "vinod thapa",
        channelName : 'thapa technical'
    },
    myAge : 26,
    getData(){
        console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge}`);
    }
}

bioData.getData(); // output: My name is thapa technical and my age is 26