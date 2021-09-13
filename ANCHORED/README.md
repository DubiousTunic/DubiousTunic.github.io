# ANCHORED-Router
Lightweight jquery clientside router

With this you can make an entire SPA using a single HTML file plus an optional [nodejs] server file

Include Jquery (tested as low as 1.12.4)

1) Set the class of a to _anch_link
2) Add another class to a, name it the same as your div partial
3) Create a div partial with that same second class name as the a (see sample)
4) Add class "partial" to div partial(s)<br>
Now clicking the links changes the "page" (hides/shows the partials)! 

manually route<br>
_ANCHOR_route("#tree_frog" + "?param1=x")

check page<br>
if(_ANCHOR_page() === "tree_frog"){
}

to change the params change the "rel" tag of the a element<br>
$(".poison_dart_frog").attr("rel", "?param1=a&param2=b&param3=c")

route can come from the server<br>
$.post("/update", function(res){
  _ANCHOR_route("#tree_frog" + "?param1=x")
})

params can come from the server<br>
$.post("/serverRoute", function(res){
  $(".poison_dart_frog").attr("rel", res.params)	
})

See it here:
<a href="https://dubioustunic.github.io/ANCHORED/sample.html">Sample</a>

