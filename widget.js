//create div
var wid = document.createElement("div");
wid.style.height="400px";
wid.style.width="400px";
wid.style.border="1px solid black";

document.getElementById("widget").appendChild(wid);

var element = document.createElement("input");
  //Assign different attributes to the element. 
  element.type = button;
  element.value = Open; // Really? You want the default value to be the type string?
  element.name = open; // And the name too?
  element.onclick = openPopup();
  //Append the element in page (in span).  
  document.getElementById("widget").appendChild(element);
//open popup
function openPopup() {
    document.getElementById('test').style.display = 'block';
}
//close popup
function closePopup() {
    document.getElementById('test').style.display = 'none';
}


//adding <style>






