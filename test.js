hexagons = []
const url = "http://localhost:8000/v0/get-board?id=1";
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', url, true)

request.onload = function () {
    document.write('test')
    var data = JSON.parse(this.response)
    data.forEach((hexagon) => {
        console.log(hexagon.tokens)
    }
}

// Send request
request.send()
