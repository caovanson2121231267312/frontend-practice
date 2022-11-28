var show_menu = document.getElementById("show_menu");
show_menu.addEventListener("click", function (i,v) {
	var a = document.getElementById("dropdown-menu-right");
	a.classList.add("active");
})

var close_menu = document.getElementById("close_menu");
close_menu.addEventListener("click", function(){
	var a = document.getElementById("dropdown-menu-right");
	a.classList.remove("active");
})