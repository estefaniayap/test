var MYAPP = {}
MYAPP.stooge = {
    "first-name": "Joe",
    "last-name": "Howard"
};

MYAPP.flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};

// document.writeln('Hello, world!');
for (var name in MYAPP.flight) {
        document.writeln(name)
    }

for (var i = 0; i < 5; i += 2) {
    document.writeln(i)
}

var add = function(a,b) {
    return alert(a + b);
}

function showmap() {
    if (typeof map === 'undefined'){
    map = new OpenLayers.Map("demoMap");
    map.addLayer(new OpenLayers.Layer.OSM());
    map.zoomToMaxExtent();
    }
    else {
        alert('The map is already showing below!')
    }
}

// function hidemap(){
//     document.getElementById(demoMap).hide();
// }