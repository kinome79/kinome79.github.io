

function parseObjectString (objString) {
    return {}
}

function sendAJAX () {
    const url = "";
    const type = "";
    const data = parseObjectString(myObj);

    $.ajax({
        type: type,
        url: url,
        data: data, 
        success: (data) => {
            document.getElementById("results").innerHTML = JSON.stringify(data);
        }
    });
}