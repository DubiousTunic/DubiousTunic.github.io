$(document).ready(function(){
$(".partial").hide();

//routes the path on load

$("._anch_link").click(function(e){
	e.preventDefault();
	_ANCHORED_route("#" + anchorPath($(this)) + anchorParams($(this)))
})



function hidePartial(){
	$(".partial").hide();
}

function getLink(origin){
	var params = origin.split("?")
	var path = params[0].split("#");
	return {
		path : path[1],
		params : params
	}
}

function _ANCHORED_load(){	
	_ANCHORED_route(window.location.hash + window.location.search)
}

function _ANCHORED_page(){
	return getLink(window.location.hash).path
}

function _ANCHORED_route(origin){
	console.log("INITIALIZE ORIGIN " + origin);
	hidePartial();
	var link = getLink(window.location.pathname + origin);			
	history.pushState(origin, '', origin)
	showDiv(link.path);
}

window.addEventListener('popstate', function(event){
	var origin = event.state;

	//route(path);
	if(origin !== null){	
		var link = getLink(origin);
		hidePartial();
		//router(link.path, link.params);	
		showDiv(link.path);
	}									
})

function showDiv(path){
	$("div." + path).show();
}

function anchorPath(href){
	return href.attr("class").split(/\s+/)[1];
}

function anchorParams(href){
	return href.attr("rel");
}
})
