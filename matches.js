var cat= JSON.parse(localStorage.getItem("favourites"))

displayData(cat)

function displayData(data){
    data.forEach(function(ele,index){
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

        var col6=document.createElement("td");
        col6.setAttribute("class","deleterText")
        col6.innerText="Delete"
        col6.style.color="red"
        col6.style.cursor="pointer"
        col6.addEventListener("click",function(){
            deleteItem(ele,index)

        })
    


    tr.append(col1, col2, col3, col4, col5, col6);
    document.querySelector("tbody").append(tr)
    })
}

function deleteItem(ele,index){
    matchArr.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(matches))
    window.location.reload()
}
