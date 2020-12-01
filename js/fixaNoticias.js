var nav = document.getElementsByTagName('nav')[1];
var topoNav = nav.offsetTop;
// pega PageYOffset da section
var sec = document.getElementsByTagName('section')[0];
function debug(e){	
	if(sec.scrollTop >= topoNav){
		nav.classList.add("fixaNovidades");
	} else{
		nav.classList.remove("fixaNovidades");
	}
}