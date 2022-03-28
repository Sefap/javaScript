let value;
const programmer = {
    name : "Sefa Palabıyık",
    age : 23,
    email:"gmail@gmail.com",
    langs:["Python","Java","JavaScript"],
    
    //Obje içinde obje    
    adress:{
        city:"İstanbul",
        street:"Etiler"
    },

    work:function(){
        console.log("Programcı Çalışıyor...")
    }
}

value=programmer

value=programmer.email;//Genel olarak
value=programmer["email"]

value=programmer.langs;


value=programmer.adress.city



programmer.work()



const programmers=[
    {name:"Sefa ",age:23},
    {name:"SefaV1",age:24}
]

value=programmers[0].name


console.log(value)
