// callback examples

var callback = () =>{

}
// setTimeout(callback, 2000);

var print = (name) => {
    console.log(name);
}

function printName(name, print){
    p('name');
}
printName("Deep", p);

var name = "John Doe";
printName("Deep", (name) => {
    console.log(name);
})

var countries = ['India' , 'USA' , 'UK', 'Canada']
countries.map((country) => {
    console.log(country);
});