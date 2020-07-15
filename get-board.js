console.log('start')
const URL = "http://localhost:8000/v0/board?id=2";

async function f() {
    let response = await fetch(URL);
    let data = await response.json()
    return data
 }
 f()
    .then(
        function(response){
            console.log(response)

            var x = response.hexagons.length;
            for(i = 0; i < x; i++){
                var newDiv = document.createElement("div");
                newDiv.setAttribute('class', 'hex');
                var newContent = document.createTextNode(response.hexagons[i].player_id);
                newDiv.appendChild(newContent)
                var currentDiv = document.getElementById("board");
                currentDiv.parentNode.insertBefore(newDiv, currentDiv.nextSibling);
                //document.write("playable: ", response.hexagons[i].playable)
                //document.write("</br>")
                //document.write("owner: ", response.hexagons[i].player_id)
                //document.write("</br>")
                //document.write("tokens: ", response.hexagons[i].tokens)
                //document.write("</br>")
                //document.write("hex-id: ", response.hexagons[i].hex_id)
                //document.write("</br>")
                //document.write("x: ", response.hexagons[i].x)
                //document.write("</br>")
                //document.write("y: ", response.hexagons[i].y)
                //document.write("</br>")
                //document.write("</br>")
            }
        }
    )

console.log('end')
