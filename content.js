'use strict';

var el = document.querySelector('a[href^="/user"]'),
elChild = document.createElement('span');
elChild.innerHTML = '<strong style="font-weight: 600 !important; color: black !important;">Bad Guy: </strong>';
// Prepend it
el.insertBefore(elChild, el.firstChild);
