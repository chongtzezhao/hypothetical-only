window.onload = function(){
    var otterRight = document.getElementById("otter-right");
    otterRight.animate([
        // keyframes
        { transform: 'translateX(0px)' },
        { transform: 'translateX(52vw)' },
        { transform: 'translateX(0px)' }
      ], {
        // timing options
        duration: 6400,
        iterations: Infinity
      });
    setInterval(()=>{
        if(otterRight.style.visibility=="hidden"){
            otterRight.style.visibility = "visible";
        }
        else{
            otterRight.style.visibility = "hidden";
        }
        console.log("visbility changed right")
    }, 3200);
    var otterLeft = document.getElementById("otter-left");
    otterLeft.animate([
        // keyframes
        { transform: 'translateX(0px)' },
        { transform: 'translateX(52vw)' },
        { transform: 'translateX(0px)' }
      ], {
        // timing options
        duration: 6400,
        iterations: Infinity
      });
    setInterval(()=>{
        if(otterLeft.style.visibility=="hidden"){
            otterLeft.style.visibility = "visible";
        }
        else{
            otterLeft.style.visibility = "hidden";
        }
        console.log("visbility changed left")
    }, 3200);
}

var state = true;
function changeDetails(){
    var datetime = document.getElementById("datetime-input").value;
    document.getElementById("datetime").innerHTML = datetime;
    var location = document.getElementById("location-input").value;
    document.getElementById("location").innerHTML = location;
    if(state){
        document.getElementById("form").style.opacity = 0;
    }
    else{
        document.getElementById("form").style.opacity = 1;
    }
    state = !(state);
}