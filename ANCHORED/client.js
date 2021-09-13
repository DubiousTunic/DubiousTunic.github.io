//open source lightweight jquery clientside router

$(document).ready(function(){
	$(".partial").hide();

	//routes the path on load
	//_ANCHOR_route(window.location.hash + window.location.search)

	$("._anch_link").click(function(e){
		e.preventDefault();
		_ANCHOR_route("#" + anchorPath($(this)) + anchorParams($(this)))
	})

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

function _ANCHOR_load(){
	_ANCHOR_route(window.location.hash + window.location.search);
}


function _ANCHOR_route(origin){
	console.log("INITIALIZE ORIGIN " + origin);
	hidePartial();
	var link = getLink(window.location.pathname + origin);			
	history.pushState(origin, '', origin)
	//router(link.path, link.params)
	showDiv(link.path);
}

function _ANCHOR_page(){	
	return getLink(window.location.hash).page;
}

//back/forward
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

