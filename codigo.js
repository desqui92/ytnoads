var axelin = setInterval(function () {
if(document.getElementsByClassName("ytp-ad-skip-button-modern")[0] !== null){
if(document.getElementsByClassName("ytp-ad-skip-button-modern")[0] !== undefined){
    document.getElementsByClassName("ytp-ad-skip-button-modern")[0].click();
 }
}
if(document.getElementsByClassName("ytp-ad-preview-container-detached")[0] !== undefined){
let div = document.createElement('div');
div.classList.add('test');
let text = document.createTextNode('Test');
div.appendChild(text);
document.getElementsByClassName("ytp-ad-preview-container-detached")[0].appendChild(div);
document.getElementsByClassName("test")[0].innerHTML = `<span class="ytp-ad-skip-button-container ytp-ad-skip-button-container-detached" style="opacity: 0.5;"><button class="ytp-ad-skip-button-modern ytp-button"><div class="ytp-ad-text ytp-ad-skip-button-text-centered ytp-ad-skip-button-text" id="ad-text:6" style="">Omitir</div><span class="ytp-ad-skip-button-icon-modern"><svg height="100%" viewBox="-6 -6 36 36" width="100%"><path d="M5,18l10-6L5,6V18L5,18z M19,6h-2v12h2V6z" fill="#fff"></path></svg></span></button></span>`;
}
}, 100);
