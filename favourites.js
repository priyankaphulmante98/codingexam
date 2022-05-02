

// write js code here corresponding to favourites.html






var cat= JSON.parse(localStorage.getItem("schedule"))
displayData(cat)

function byfilter()
{
    var select=document.querySelector("#filterVenue").value
    var filterList=matchArr.filter(function(ele){

    })
    document.innerText
    displayData(filterList)
}

priya=JSON.parse(localStorage.getItem("favourites")) || []

function displayData(data){

    data.forEach(function(ele){

        var tr= document.createElement("tr");

        var col1=document.createElement("td");
        col1.innerText=ele.matchNum;

        var col2=document.createElement("td");
        col2.innerText=ele.teamA;

        var col3=document.createElement("td");
        col3.innerText=ele.teamB;

        var col4=document.createElement("td");
        col4.innerText=ele.date;

        var col5=document.createElement("td");
        col5.innerText=ele.venue;
        
        var col6=document.createElement("td")
        col6.innerText="favourites";
        col6.style.color="green";
        col6.style.cursor="pointer"
        col6.addEventListener("click",function(){
           favFun(ele)
        })
        
    tr.append(col1, col2, col3, col4, col5, col6)
    document.querySelector("tbody").append(tr)
    })

    function favFun(ele){
        favArr.push(ele)
        // console.log(priya)
      localstorage.setItem("favourites",JSON.stringify(favArr))
//       window.location.href="favourites.html".
 }

}