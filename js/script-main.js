

document.addEventListener('DOMContentLoaded', () => {
    $('#requestForm').submit( (e) => {
      e.preventDefault();
      sendAJAX();
    });
  });
  
  
  const sendAJAX  = () => {
      const url = $('#url').val();
      const type = $("input[name=type]:checked").val();;
      const data = JSON.parse($('#data').val());
    
    $.ajax({
          type: type,
          url: url,
          data: data, 
          success: (returnData) => {
              document.getElementById("results").innerHTML = JSON.stringify(returnData);
          }
      });
  }
  
  