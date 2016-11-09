//create div
var wid = document.createElement("div");
wid.style.height="400px";
wid.style.width="400px";
wid.style.background="black";

document.getElementById("widget").appendChild(wid);
//open popup
function openPopup() {
    document.getElementById('test').style.display = 'block';
}
//close popup
function closePopup() {
    document.getElementById('test').style.display = 'none';
}


//adding <style>
document.write("<style>
               .popup{
    position:absolute;
    top:0px;
    left:0px;
    margin:100px auto;
    width:200px;
    height:150px;
    font-family:verdana;
    font-size:13px;
    padding:10px;
    background-color:rgb(240,240,240);
    border:2px solid grey;
    z-index:100000000000000000;
    display:none
    }
    
.cancel{
    display:relative;
    cursor:pointer;
    margin:0;
    float:right;
    height:10px;
    width:14px;
    padding:0 0 5px 0;
    background-color:red;
    text-align:center;
    font-weight:bold;
    font-size:11px;
    color:white;
    border-radius:3px;
    z-index:100000000000000000;
    }

.cancel:hover{
    background:rgb(255,50,50);
    }
               </style>");






