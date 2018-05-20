import Hide from '../config.json';

var hide = Hide.enablePageTwoLink;

window.onload = function main() {

	if (hide) {

		document.getElementById('buttonToHide').style.visibility = 'hidden';

	}

}
