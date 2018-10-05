var textarea = document.querySelector("#title");

textarea.addEventListener("keydown", autosize);

function autosize() {
    var el = this;
    setTimeout(function() {
        el.style.cssText = "height:auto; padding:0";
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = "height:" + el.scrollHeight + "px";
    }, 0);
}

var textarear = document.querySelector("#name");

textarear.addEventListener("keydown", autosizer);

function autosizer() {
    var el = this;
    setTimeout(function() {
        el.style.cssText = "height:auto; padding:0";
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = "height:" + el.scrollHeight + "px";
    }, 0);
}