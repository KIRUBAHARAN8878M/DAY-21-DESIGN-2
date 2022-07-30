
document.getElementById("dropdownMenuButton2").addEventListener("click",()=>{
async function foo(){
    let a = await fetch(`https://api.openbrewerydb.org/breweries`)
    let b = await a.json()
    console.log(b)
    document.getElementById("dropdown").innerHTML ="";
    for(var i=0 ; i<b.length;i++){
        
        document.getElementById(
            "dropdown"
        ).innerHTML +=`<li style="width:20rem;">&nbsp;&nbsp;&nbsp;&nbsp;${b[i].name}</li><hr>`;
    } 
    
}
foo();

 });


    document.getElementById("click").addEventListener("click",()=>{
        async function getshopdetail(){
            var shop = document.getElementById("shope").value;
            var find = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${shop}`)
            var getting = await find.json()
            
            try {
                let name = getting[0].name
                let type = getting[0].brewery_type
                let street = getting[0].street
                let city = getting[0].city
                let country = getting[0].country
                let state = getting[0].state
                let pc = getting[0].postal_code
                let web = getting[0].website_url
                let contact = getting[0].phone

                document.getElementById("card").innerHTML ="";
                document.getElementById("card").innerHTML = `
                <div class="card-header bg-warning text-dark"><h3>Brewery Details</h3></div>
                <div class="card-body text-dark">
                <h3 class="card-title text-center" id="head">Name : ${name}</h3>
                <h6 class="card-text" id="num1">Brewery_Type: ${type}</h6>
                <h6 class="card-text" id="num2">Address: ${street}</h6>
                <h6 class="card-text" id="num3">City &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;${city}</h6>
                <h6 class="card-text" id="num4">Country&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;${country}</h6>
                <h6 class="card-text" id="num5">State&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;${state}</h6>
                <h6 class="card-text" id="num6">postal_code :&nbsp;${pc}</h6></address>
                <h6 class="card-text id="num8"> Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;${contact}</h6>
                <a id="num7" href="${web}">${web}</a>
                </div>`;

            } catch (error) {
                document.getElementById("card").innerHTML =`<div class="card-body text-dark">
                <h1 class="card-title text-center text-warning">'Sorry!!!'</h1><br>
                <div class="card-text"><h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I can't find your Information & Please Enter the valid Name in search box<div>
               </h4> </div>`
                
            }
        }
        getshopdetail()
    })