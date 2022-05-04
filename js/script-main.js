

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
    
    $.ajax({
          type: type,
          url: url,
          data: data, 
          success: (returnData) => {
              document.getElementById("results").innerHTML = JSON.stringify(returnData);
          }
      });
  }
  
  