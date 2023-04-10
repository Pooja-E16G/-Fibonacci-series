const fibonacci= (till)=>{
    let start = 0;
    let next = 1;

    console.log(start)
    
    while(next < till){
        console.log(next)
        let temp = start
        start = next;
        next = temp + next;
    }
}
fibonacci(120)