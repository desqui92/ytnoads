if (window.location.href.indexOf("watch") > -1) {
var style = (function() {
    // Create the <style> tag
    var style = document.createElement("style");

    // WebKit hack
    style.appendChild(document.createTextNode(""));

    // Add the <style> element to the page
    document.head.appendChild(style);
    return style;
})();

var axelin = setInterval(function () {
if(document.body.getElementsByClassName("ytp-ad-skip-button-modern")[0] !== undefined){
if(document.body.getElementsByClassName("ytp-ad-skip-button-modern")[0] !== null){
    document.body.getElementsByClassName("ytp-ad-skip-button-modern")[0].click();
 }
}
}, 100);
}

