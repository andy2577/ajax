document.getElementById('btn-getdata').addEventListener('click', makeRequest);

function makeRequest(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var clientData = JSON.parse(xhr.responseText);
            document.getElementById('client-name').innerHTML= clientData.name;
            document.getElementById('client-address').innerHTML= clientData.address;
            
        }
    };
    xhr.open('get', 'client.json', true);
    xhr.send();
}