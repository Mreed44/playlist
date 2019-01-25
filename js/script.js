/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Satisfied", "I'm the Greatest Star", "She Used to be Mine", "You Are Not Alone", "Beautiful"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var artists = ["Renee Elise Goldsberry", "Barbra Streisand", "Jessie Mueller", "Kim Crosby and Others", "Jessie Mueller" ];
var musicals = ["Hamilton", "Funny Girl", "Waitress", "Into the Woods", "Beautiful: The Carole King Musical"];
var images = ["http://static1.squarespace.com/static/551eb398e4b0b101cf722ed8/5a90165d71c10bed71669495/5abcdeb8f950b7364c08b9bb/1522339916142/416418724_4876113808001_renee-elise-goldsbury-hamilton-1280.jpg?format=1500w", "https://tamswitmark.com/wp-content/uploads/2013/08/FUN-Film-Streisand-Crop-541x346.jpg", "https://www.irishexaminer.com/remote/content.assets.pressassociation.io/2018/08/21142203/282c676e-dcd0-40c2-b238-1adf25728f8b.jpg?crop=0,0,2245,1263&ext=.jpg&width=600", "https://static1.squarespace.com/static/53cdd8f4e4b0c984e433fab1/t/55eee9e8e4b02e95293f2b9e/1441720808329/", "https://cbssanfran.files.wordpress.com/2014/06/jessie_mueller.jpg?w=625"];
var links = ["https://www.youtube.com/watch?v=InupuylYdcY", "https://www.youtube.com/watch?v=fHPE_BrctCo", "https://www.youtube.com/watch?v=A2-aUNmYNLM", "https://www.youtube.com/watch?v=5xaxP_kErTU", "https://www.youtube.com/watch?v=cegqbAB4xXY&index=24&list=PLeBYHmefNPqqgcxlIHYOrfKXHCP3T_8I1"];



    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
function displaySongInfo(){
    images.forEach(function(image) {
        $("#images").append("<img src='" + image + "'>");
    });
    
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song +"</p>");
    });
    
    artists.forEach(function(artist) {
        $("#artists").append("<p>" + artist +"</p>");
    });
    
    musicals.forEach(function(musical) {
        $("#musicals").append("<p>" + musical +"</p>");
    });
    
    links.forEach(function(link) {
        $("#links").append("<a href='" + link +"'>" + "Listen" + "</a>");
    });
}
function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#musicals").empty();
    $("#links").empty();


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    var songAdd = $("#song").val();
    var artistAdd = $("#artist").val();
    var musicalAdd = $("#musical").val();
    var imageAdd = $("#image").val();
    var linkAdd = $("#link").val();
    
    songs.push(songAdd);
    artists.push(artistAdd);
    musicals.push(musicalAdd);
    images.push(imageAdd);
    links.push(linkAdd);


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
    $("input").val("")
});

displaySongInfo();
