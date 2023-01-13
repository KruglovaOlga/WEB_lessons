function stars(n) {
    let strOut = ""

    while(n) {
        strOut += '*'
        n--
    }

    console.log(strOut)
}