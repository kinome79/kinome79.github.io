

document.addEventListener('DOMContentLoaded', () => {
    $('#requestForm').submit( (e) => {
      e.preventDefault();
      sendAJAX();
    });
  });
  
  
  const sendAJAX  = () => {
      const url = $('#url').val();
      const type = $("input[name=type]:checked").val();
      let data;
      try {
        data = JSON.parse($('#data').val());
      } catch(e) {
        return alert ("ERROR: Data to send is not formatted properly. Request not sent.");
      }
      document.getElementById("results").innerHTML = "";
    /*$.ajax({
          type: type,
          url: url,
          data: data, 
          success: (returnData) => {
              document.getElementById("results").textContent = JSON.stringify(returnData);
          }
      });*/
      fetch(url, 
        {method: type, headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)})
    .then( response => response.text())
    .then( mydata => {
        document.getElementById("results").textContent = JSON.stringify(mydata)
    })   
  }

