(function() {
    var currentAnimation;
    var interval;
    var speed = 250;

    window.onload = pageLoad;

    function pageLoad() {
        document.getElementById("stop").disabled = true;
        document.getElementById("start").onclick = play;
        document.getElementById("stop").onclick = stop;
        document.getElementById("animation").onchange = changeAnimation;
        document.getElementById("size").onchange = changeSize;
        document.getElementById("speed").onchange = changeSpeed;
    }

    function changeSpeed() {
        var checkedspeed = document.getElementById("speed");
        if (checkedspeed.checked == true) {
            speed = 100;
        } else {
            speed = 250;
        }
        if (interval) {
            clearInterval(interval);
        }
        if (document.getElementById("start").disabled) {
            interval = setInterval(function () {
                displayNextFrame(currentAnimation);
            }, speed);
        }
    }

    function changeAnimation() {
        var newAnimation = document.getElementById("animation").value;
        var textarea = document.getElementById("mytext");
        textarea.value = ANIMATIONS[newAnimation];
    }

    function play() {
        document.getElementById("stop").disabled = false;
        document.getElementById("start").disabled = true;
        document.getElementById("animation").disabled = true;
        var textarea = document.getElementById("mytext");
        var allFrames = textarea.value.split("=====\n");
        currentAnimation = allFrames;
        interval = setInterval(function () {
            displayNextFrame(currentAnimation);
        }, speed);
    }

    function stop() {
        document.getElementById("start").disabled = false;
        document.getElementById("animation").disabled = false;
        changeAnimation();
        clearInterval(interval);
        document.getElementById("stop").disabled = true;
    }

    function displayNextFrame(animation) {
        var textarea = document.getElementById("mytext");
        var currentFrame = animation.shift();
        textarea.value = currentFrame;
        animation.push(currentFrame);
        currentAnimation = animation;
    }

    function changeSize() {
        var size = document.getElementById("size").value;
        document.getElementById("mytext").style.fontSize = size;
    }
})();