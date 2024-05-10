let search_btn=document.querySelector("#search_btn");
let search_input=document.getElementById("search_input");
let result=document.getElementById('result');


search_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    treatment(search_input.value);

});

function treatment(search_inp){
    // let contryName= search_inp;
    let contryName= "ghana";
    finalURL =`https://restcountries.com/v3.1/name/${contryName}?fullText=true`;

fetch(finalURL)
.then((response)=>{
    if(response.ok){
        return response.json();
    }else{
        console.log('no response, no fetching, check the url');
    }
})
.then((data)=>{
    //console.log(data);
    console.log(data[0]);
    console.log(`Capital : ${data[0]['capital'][0]}`);
    console.log(`Pays : ${data[0].name.common}`);
    console.log(`Population : ${data[0]['population']}`);
    console.log(`Continent : ${data[0]['continents']}`);
    console.log(`Currency : ${data[0]['currencies']}`);
    console.log(`Flag : ${data[0]['flags']["svg"]}`);
    console.log(Object.keys(data[0].currencies)[0]);





})
}