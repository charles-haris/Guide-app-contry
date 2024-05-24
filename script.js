let search_btn=document.querySelector("#search_btn");
let search_input=document.getElementById("search_input");
let result=document.getElementById('result');


search_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    treatment(search_input.value);

});

function treatment(search_inp){
    // let contryName= search_inp;
    if(search_inp===''){
        result.innerHTML = `<div> <span>You must write the country!</span> </div>`;

    }else{

    finalURL =`https://restcountries.com/v3.1/name/${search_inp}?fullText=true`;

fetch(finalURL)
.then((response)=>{
    if(response.ok){
        return response.json();
    }else{
        console.log('no response, no fetching, check the url');
        result.innerHTML = `<div> <span>Write an existing country!</span> </div>`;

    }
})
.then((data)=>{
    //console.log(data);
    if(data.length===0){
        console.log(data);
        result.innerHTML = `<div> <span>Write an existing country!</span> </div>`;
    }else{


        result.innerHTML=`
        <div><img src="${data[0]['flags']["svg"]}" alt=""></div>
        <div>Capital : <span>${data[0]['capital'][0]}</span></div>
        <div>Pays : <span>${data[0].name.common}</span></div>
        <div>Population : <span>${data[0]['population']}</span></div>
        <div>Continent : <span>${data[0]['continents']}</span></div>
        <div>Currency : <span>${Object.keys(data[0].currencies)[0]}</span></div>
        `;
    
        console.log(data[0]);
        console.log(`Capital : ${data[0]['capital'][0]}`);
        console.log(`Pays : ${data[0].name.common}`);
        console.log(`Population : ${data[0]['population']}`);
        console.log(`Continent : ${data[0]['continents']}`);
        console.log(`Currency : ${Object.keys(data[0].currencies)[0]}`);
        console.log(`Flag : ${data[0]['flags']["svg"]}`);
        console.log();
    }
   





})
    }
}