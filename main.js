window.onload = function(){
    var otterRight = document.getElementById("otter-right");
    var otterLeft = document.getElementById("otter-left");
    /*otterRight.animate([
        // keyframes
        { transform: 'translateX(0px)' },
        { transform: 'translateX(56vw)' },
        { transform: 'translateX(0px)' }
      ], {
        // timing options
        duration: 6400,
        iterations: Infinity
      });
    otterLeft.animate([
        // keyframes
        { transform: 'translateX(0px)' },
        { transform: 'translateX(56vw)' },
        { transform: 'translateX(0px)' }
      ], {
        // timing options
        duration: 6400,
        iterations: Infinity
      });*/
    otterRight.animate([
        // keyframes
        { transform: 'translateX(0px)' },
        { transform: 'translateX(55vw)' }
      ], {
        // timing options
        duration: 3200,
        iterations: 1
      });
    setInterval(()=>{
        console.log(otterLeft.style.display);
        if(otterRight.style.display=="none"){
            otterRight.style.removeProperty('display');
            otterLeft.style.display = "none";
            otterRight.animate([
                // keyframes
                { transform: 'translateX(0px)' },
                { transform: 'translateX(55vw)' }
              ], {
                // timing options
                duration: 3200,
                iterations: 1
              });
        }
        else{
            otterLeft.style.removeProperty('display');
            otterRight.style.display = "none";
            otterLeft.animate([
                // keyframes
                { transform: 'translateX(55vw)' },
                { transform: 'translateX(0px)' }
              ], {
                // timing options
                duration: 3200,
                iterations: 1
              });
        }
    }, 3200);
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
        document.getElementById("form").style.removeProperty('display');
        document.getElementById("submit").style.removeProperty('opacity');
    }
    state = !(state);
}