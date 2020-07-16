console.log('start')
const URL = "http://localhost:8000/v0/board?id=1";

async function f() {
    let response = await fetch(URL);
    let data = await response.json()
    return data
 }

function addHexNode(hex_id, player_id, tokens) {
    var hexDiv = document.createElement("div");
    hexDiv.setAttribute('class', 'hex');
    var hexContent = document.createTextNode("Hex ID: " + hex_id + " Owner: " + player_id + " Tokens: " + tokens);
    hexDiv.appendChild(hexContent)
    var currentDiv = document.getElementById("board");
    currentDiv.parentNode.insertBefore(hexDiv, currentDiv.nextSibling);
}

 f()
    .then(
        function(response){
            console.log(response)
            var x = response.hexagons.length;
            for(i = 0; i < x; i++){
                addHexNode(
                    response.hexagons[i].hex_id,
                    response.hexagons[i].player_id,
                    response.hexagons[i].tokens
                )
            }
        }
    )

console.log('end')
