$(document).ready(function() {
    console.log("Ajax ready!")
})

function statusReset() {
    setTimeout(() => {
        $("#status").text("")
    }, 3000)
}

function ajax(url, div="", href="", formID) {
    const params = $(formID).serializeArray()
    let data = {}
    for(let param of params){
        data[param.name] = param.value
    }
    console.log(data)
    $("#status").text("loading...")
    $.ajax({
        method: "POST",
        url: "/ajax/" + url,
        data
    }).done(data => {
        $("#status").text("done")
        statusReset()
        if(href !== ""){
            location.href = href
        }else{
            $(div).html(data)
        }
    }).fail(error => {
        console.log(error)
        $("#status").text("Error: " + error.responseJSON.original.sqlMessage)
    });
}