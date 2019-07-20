dict = ['pro', 'gram', 'merit', 'program', 'it', 'programmer'];

text = 'programmerit';
string = []

for (let i = 0; i < dict.length; i++) {
    var split = text;
    a = []
    j = i
    for (let j = i; j < dict.length; j++) {
        if (split.search(dict[j])===0) {
            while (j < dict.length) {
                if (split.search(dict[j])===0) {
                    a.push(dict[j])
                    split = split.slice(dict[j].length)
                    j=-1
                }
                j++
            }
        } else {
            break
        }
    }
    if (a.length > 0) {
        string.push(a)
    }
    
}

console.log(string)