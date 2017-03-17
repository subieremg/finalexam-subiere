$('#app').html(`

	<center>
  <svg version="1.1" id="preloader" x="0px" y="0px" width="240px" height="120px" viewBox="0 0 240 120">

<style type="text/css" >
	<![CDATA[

		#plug,
		#socket { fill:#FDB515 }

		#loop-normal { fill: none; stroke: #FDB515; stroke-width: 12 }
		#loop-offset { display: none }

	]]>
</style>

<path id="loop-normal" class="st1" d="M120.5,60.5L146.48,87.02c14.64,14.64,38.39,14.65,53.03,0s14.64-38.39,0-53.03s-38.39-14.65-53.03,0L120.5,60.5
L94.52,87.02c-14.64,14.64-38.39,14.64-53.03,0c-14.64-14.64-14.64-38.39,0-53.03c14.65-14.64,38.39-14.65,53.03,0z">
	<animate attributeName="stroke-dasharray" attributeType="XML"
    	from="500, 50"  to="450 50"
    	begin="0s" dur="2s"
    	repeatCount="indefinite"/>
	<animate attributeName="stroke-dashoffset" attributeType="XML"
    	from="-40"  to="-540"
    	begin="0s" dur="2s"
    	repeatCount="indefinite"/>  
</path>
  
<path id="loop-offset" d="M146.48,87.02c14.64,14.64,38.39,14.65,53.03,0s14.64-38.39,0-53.03s-38.39-14.65-53.03,0L120.5,60.5
L94.52,87.02c-14.64,14.64-38.39,14.64-53.03,0c-14.64-14.64-14.64-38.39,0-53.03c14.65-14.64,38.39-14.65,53.03,0L120.5,60.5
L146.48,87.02z"/>
  
<path id="socket" d="M7.5,0c0,8.28-6.72,15-15,15l0-30C0.78-15,7.5-8.28,7.5,0z"/>  
  
<path id="plug" d="M0,9l15,0l0-5H0v-8.5l15,0l0-5H0V-15c-8.29,0-15,6.71-15,15c0,8.28,6.71,15,15,15V9z"/>
  
<animateMotion
	xlink:href="#plug"
  	dur="2s"
	rotate="auto"
	repeatCount="indefinite"
	calcMode="linear"
	keyTimes="0;1"    
	keySplines="0.42, 0, 0.58, 1">
	<mpath xlink:href="#loop-normal"/>
</animateMotion>
  
<animateMotion             
	xlink:href="#socket"
  	dur="2s"
	rotate="auto"
	repeatCount="indefinite"
	calcMode="linear"
	keyTimes="0;1"
	keySplines="0.42, 0, 0.58, 1">
	<mpath xlink:href="#loop-offset"/>
</animateMotion>  
</svg>
<div class="credit">
  <a href="https://thenounproject.com/search/?q=energy&i=2064" target="_blank">Original Sustainable Energy Icon by Iconathon</a>
</div>
	`);

setTimeout(function(){
	x();
},1000);

function x(){
$.ajax({
	url: "http://www.omdbapi.com/?i=tt1325004"
}).done(function(res){
	console.log(res);
	let html =`

<center>
		<h3>Movie Trailer</h3>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/31IligHzvDg" frameborder="0" allowfullscreen></iframe>
		<h1>Title: ${res.Title}</h1>
		<img src="${res.Poster}"/>
		<h3>Year: ${res.Year}</h3>
		<h3>Rated: ${res.Rated}</h3>
		<h3>Released: ${res.Released}</h3>
		<h3>Runtime: ${res.Runtime}</h3>
		<h3>Genre: ${res.Genre}</h3>
		<h3>Director: ${res.Director}</h3>
		<h3>Writer: ${res.Writer}</h3>
		<h3>Actors: ${res.Actors}</h3>
		<h3>Plot: ${res.Plot}</h3>
		<h3>Language: ${res.Language}</h3>
		<h3>Country: ${res.Country}</h3>
		<h3>Awards: ${res.Awards}</h3>
		<h3>Metascore: ${res.Metascore}</h3>
		<h3>imbdRating: ${res.imbdRating}</h3>
		<h3>imdbVotes: ${res.imdbVotes}</h3>
		<h3>imdID: ${res.imdID}</h3>
		<h3>Type: ${res.Type}</h3>
		<h3>Response: ${res.Response}</h3>
		</center>

`
$('#app').html(html);


});

}