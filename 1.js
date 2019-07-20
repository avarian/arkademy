name = 'Arie Varian Akbari';
age = 23;
address = 'Jl. Sikunang 103 Rt. 27/08, Pasuruhan, Binangun, Cilacap, Jawa Tengah';
hobbies = ['football', 'music', 'book'];
is_maried = false;
list_school = [
    {
        name: 'SD N Pasuruhan 02',
        year_in: 2002,
        year_out: 2008,
        major: null
    },
    {
        name: 'SMP N 1 Kroya',
        year_in: 2008,
        year_out: 2011,
        major: null
    },
    {
        name: 'SMA N 2 Purwokerto',
        year_in: 2011,
        year_out: 2014,
        major: 'IPA'
    },
    {
        name: 'Universitas Gadjah Mada',
        year_in: 2014,
        year_out: 2019,
        major: 'Ilmu Komputer'
    }
];
skills = [
    {
        skill_name: 'Python',
        level: 'advanced'
    },
    {
        skill_name: 'HTML',
        level: 'beginner'
    },
    {
        skill_name: 'CSS',
        level: 'beginner'
    },
    {
        skill_name: 'Javascript',
        level: 'beginner'
    },
];
interest_in_coding = true;


dict = {name, age, address, hobbies, is_maried, list_school, skills, interest_in_coding}

function dictToJSON (dic){
    var json = JSON.stringify(dic); 
    return json;
}


disp = dictToJSON(dict);

console.log(disp);