a=1
b=2

function evenSum(N) {
    i=a;
    j=b;
    sum=0;
    while (i<=N) {
        if (i%2===0) {
            sum+=i;
        } 
        tmp = i+j;
        i = j;
        j = tmp;
    }
    return sum
}

function oddSum(N) {
    i=a;
    j=b;
    sum=0;
    while (i<=N) {
        if (i%2!==0) {
            sum+=i;
        } 
        tmp = i+j;
        i = j;
        j = tmp;
    }
    return sum
}

console.log(evenSum(1000))
console.log(oddSum(100))
console.log(oddSum(1000))