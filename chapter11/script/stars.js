
function stars(n) {
    let strOut = ""

    while(n) {
        strOut += '*'
        n--
    }

    console.log(strOut)
}


function starH10(){
    for (let i = 1; i <= 10; i++){
        document.write(' * ')
    }
}

function starV10(){
    for (let i = 1; i <= 10; i++){
        document.write('*<br>')
    }
}

function starHV10(){
    for (let i = 1; i <= 10; i++){
        for (let j = 1; j <= 10; j++) {
            document.write(' * ')
        }
        document.write('<br>')
    }
    
}

function star10Asc(){
    for (let i = 1; i <= 10; i++){
        for (let j = 1; j <= i; j++) {
            document.write(' * ')
        }
        document.write('<br>')
    }
    
}

function star10Desc(){
    for (let i = 1; i <= 10; i++){
        for (let j = 10; j <= i; j++) {
            document.write(' * ')
        }
        document.write('<br>')
    }
    
}
