function listNumber(M) { 
    var lstNmbr = '' 
    for (let i = 1; i <= M; i++) { 
        var temp = i
        lstNmbr = lstNmbr+temp 
    } 
    return lstNmbr 
} 

function hasilOperasi(jenis, N, arr) {
    Nmbr = listNumber(N)
    var hasil = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        hasil.push(Number(Nmbr[element-1]))
    }
    out = hasil[0]
    if (jenis === 'SUM') {
       for (let i = 1; i < hasil.length; i++) {
           const element = hasil[i];
           out += element
       }   
    }
    if (jenis === 'MUL') {
        for (let i = 1; i < hasil.length; i++) {
            const element = hasil[i];
            out *= element
        }  
    }
    if (jenis === 'SUB') {
        for (let i = 1; i < hasil.length; i++) {
            const element = hasil[i];
            out -= element
        }  
    }
    if (jenis === 'DIV') {
        for (let i = 1; i < hasil.length; i++) {
            const element = hasil[i];
            out /= element
        }   
    }

    return out
}
console.log(hasilOperasi('SUM',20,[11,13,15]))
console.log(hasilOperasi('MUL',20,[12,15,17]))