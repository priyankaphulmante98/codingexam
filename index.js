// write js code here corresponding to index.html
// You should add submit event on the form

    document.queryselector("#masaiform").addEventListner("submit",matcheSubmit)

    var arr=JSON.parse(localstorage.getItem("match list")) || [];

    function matchSubmit(){
        event.preventDefault()

       matchObj={


            matchNum:masaiForm.matchNum.value,
            teamA:masaiForm.teamA.value,
            teamB:masaiForm.teamB.value,
            date:masaiForm.date.value,
            venue:masaiForm.venue.value,

        }

        matchArr.push(matchobj)
        console.log(matchArr)
        localstorage.setItem("schedule",JSon.stringify(matchArr))
       

    //     window.location.href="matches.html"
      }

