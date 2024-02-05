let navMenu = document.querySelector('.nav-menu');
let movieInput = document.getElementById("movieInput");
let nowPlayingURL =`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=5-9-2023&release_date.lte=10-2-2024&api_key=eba8b9a7199efdcb0ca1f96879b83c44`
let popularURL=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=eba8b9a7199efdcb0ca1f96879b83c44`
let topRatedURL=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=eba8b9a7199efdcb0ca1f96879b83c44`
let upCommingUrl=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=1-1-2023&release_date.lte=20-6-2023&api_key=eba8b9a7199efdcb0ca1f96879b83c44`

let n1N = document.getElementById("n1N");
let n2P =document.getElementById("n2P");
let n3r =document.getElementById("n3R");
let n4T =document.getElementById("n4T");
let n5U =document.getElementById("n5U");



async function getData(term){

    let response
    if(term ==  null || term == ""){

   
   response = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=221d5a92ead15f07559a0a82173e78ab")
    if (response.ok == true){

        let finalResponse = await response.json();
    
        let finalResponseResult = finalResponse.results;
        console.log(finalResponseResult);

        displayData(finalResponseResult);

    
        
    }}

    else{
        response = await fetch(`${term}`)
    if (response.ok == true){

        let finalResponse = await response.json();
        
        let finalResponseResult = finalResponse.results;
        console.log(finalResponseResult);

        displayData(finalResponseResult);

    
    }}
}
getData()




function displayData(data){
    let cols=``

    for (let i=0 ;i<data.length;i++)
    {
        cols +=`
        
        <div class="col-md-4 demo g-4 ">
        <div class="rr mx-auto">
        <div class="test  ">
            <img src="https://image.tmdb.org/t/p/w500${data[i].poster_path    }" class="w-100 " alt="">
         
        </div>
      
        <div class="layer text-white">

            <div class="i1"> <h2  >${data[i].original_title}</h2>  </div>
    
            <div class="i2">
                <p > ${data[i].overview}

                </p>

                <h5 >Relase date: ${data[i].release_date  } </h5>
            </div>     
            
            <div class="i3">
                <i>rate:</i>

                <h3 class="rateIcon">${data[i].vote_average.toFixed(1)}</h3>

            </div>


        </div>
    </div>
</div>

        `
    }
    document.getElementById("rowData").innerHTML=cols;

}

async function search(input){

    let response
    response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1&api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    if (response.ok == true){

        let finalResponse = await response.json();
        
        let finalResponseResult = finalResponse.results;
        console.log(finalResponseResult);

        displayData(finalResponseResult);

}}

n1N.addEventListener('click',function(){
    getData(nowPlayingURL)
});

n2P.addEventListener('click',function(){
    getData(popularURL)
});

n3r.addEventListener('click',function(){
    getData(topRatedURL)
});
n4T.addEventListener('click',function(){
    getData(nowPlayingURL)
});
n5U.addEventListener('click',function(){
    getData(upCommingUrl)
});


$(".nav-menu ").on('click',function(){
    $(".navContent").toggle(1000)
});


movieInput.addEventListener('keyup', function(){
    search((movieInput.value))
    console.log(movieInput.value);
});