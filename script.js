document.getElementById("one").addEventListener("click", ()=>activeState(0))
document.getElementById("two").addEventListener("click", ()=>activeState(1))
document.getElementById("three").addEventListener("click", ()=>activeState(2))
document.getElementById("four").addEventListener("click", ()=>activeState(3))
document.getElementById("five").addEventListener("click", ()=>activeState(4))


const ratingCollection = document.getElementsByClassName("rate")
let rate = 0;

function activeState(index){
    for(let i=0; i<ratingCollection.length; i++){
        ratingCollection[i].classList.remove("active")
    }
    ratingCollection[index].classList.add("active")
    rate = index + 1
    console.log(rate)
}



function thanksHtml(){
    if(rate != 0){
    document.querySelector(".container").innerHTML = `
    <aside>
        <img src="images/illustration-thank-you.svg" class="thanks-img"alt="little orange star">
        <p class="card-selection">You selected ${rate} out 5</p>
        <h1 class="card-title">Thank You!</h1>
        <p class="card-body">
        We appreciate you taking the time to give a rating.
        If you ever need more support, don't hesitate to get in touch!
        </p>
  </aside>`
    }else{
        console.log("ciao")
    }
}


document.getElementById("btn").addEventListener("click",thanksHtml)


