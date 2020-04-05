function add(ar) {
    var x = [...arguments];
    console.log(x.reduce((a,c) => a+c))
}

add(22,22,22)
