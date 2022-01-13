window.onload = function(){
    var otterRight = document.getElementById("otter-right");
    var otterLeft = document.getElementById("otter-left");
    otterRight.animate([
        // keyframes
        { transform: 'translateX(0px)' },
        { transform: 'translateX(54vw)' },
        { transform: 'translateX(0px)' }
      ], {
        // timing options
        duration: 6400,
        iterations: Infinity
      });
    setInterval(()=>{
        if(otterRight.style.visibility=="hidden"){
            otterRight.style.visibility = "visible";
            otterLeft.style.visibility = "hidden";
        }
        else{
            otterLeft.style.visibility = "visible";
            otterRight.style.visibility = "hidden";
        }
        console.log("visbility changed right")
    }, 3200);
    otterLeft.animate([
        // keyframes
        { transform: 'translateX(0px)' },
        { transform: 'translateX(54vw)' },
        { transform: 'translateX(0px)' }
      ], {
        // timing options
        duration: 6400,
        iterations: Infinity
      });
}

var state = true;
function changeDetails(){
    var datetime = document.getElementById("datetime-input").value;
    document.getElementById("datetime").innerHTML = datetime;
    var location = document.getElementById("location-input").value;
    location = location.replaceAll('\n', '<br>')
    document.getElementById("location").innerHTML = location;
    if(state){
        document.getElementById("form").style.display = "none";
        document.getElementById("submit").style.opacity = 0;
    }
    else{
        document.getElementById("form").style.display = "flex";
        document.getElementById("submit").style.opacity = 1;
    }
    state = !(state);
}