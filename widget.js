//create div
var wid = document.createElement("div");
wid.style.height="400px";
wid.style.width="400px";
wid.style.background="black";

document.getElementById("widget").appendChild(wid);

var element = document.createElement("input");
  //Assign different attributes to the element. 
  element.type = button;
  element.value = Open; // Really? You want the default value to be the type string?
  element.name = open; // And the name too?
  element.onclick = openPopup();
  //Append the element in page (in span).  
  wid.appendChild(element);
//open popup
function openPopup() {
    document.getElementById('test').style.display = 'block';
}
//close popup
function closePopup() {
    document.getElementById('test').style.display = 'none';
}


//adding <style>
document.write("<style>.popup{position:absolute;top:0;left:0;margin:100px auto;width:200px;height:150px;font-family:verdana;font-size:13px;padding:10px;background-color:#f0f0f0;border:2px solid grey;z-index:1.0E+17;display:none}.cancel{display:relative;cursor:pointer;margin:0;float:right;height:10px;width:14px;padding:0 0 5px;background-color:red;text-align:center;font-weight:700;font-size:11px;color:#fff;border-radius:3px;z-index:1.0E+17}.cancel:hover{background:#ff3232}</style>");






