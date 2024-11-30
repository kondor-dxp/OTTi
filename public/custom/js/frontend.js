$(document).ready(function() {
    $("a.app-link").on("click", function() {
        let href = $(this).attr("href")
        if(href == "#"){
            alert("Questa funzionalità non è abilitata nella demo")
        }
    })

    $("a.app-link").each(function(){
        let href = $(this).attr("href")
        if(href == "#"){
            $(this).children(".app-button").addClass("disabled")
        }
    })
})