
// console.log(Document.prototype); show all document properties and method
/*
& Purple Comment
! Red Comment
^ Yellow Comment
? Blue Comment
* Green Comment
~ Violet Comment
TODO Orange Comment
*/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hypeCreateElement({ type = 'div', id = '', class: classInput = '', innerHTML = '', style = '', disabled = false, } = {}) {
    let element = document.createElement(`${type}`);
    element.id = id;
    element.className = Array.isArray(classInput) ? classInput.join(' ') : classInput;
    element.innerHTML = innerHTML;
    element.style = style;
    element.disabled = disabled;
    return element
}


function hypeJsonFormat(newListGuest) {
    let formattedString = '<pre>' + JSON.stringify(newListGuest) + '</pre>';
    return formattedString
};

export default { getRndInteger, hypeCreateElement, hypeJsonFormat }