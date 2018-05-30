var map;
var mapBlock = document.getElementById('map');
var footerContact = document.querySelector('.footer_contact');
var iconUrl = mapBlock.getAttribute('data-icon');
if (footerContact !== null) {
    mapBlock.style.height = footerContact.clientHeight + "px";

}

function initMap() {
    map = new google.maps.Map(mapBlock, {
        zoom: 18,
        center: new google.maps.LatLng(50.450003, 30.518566),
        mapTypeId: 'roadmap',
        styles: [
            {
                featureType: "administrative",
                elementType: "all",
                stylers: [
                    {
                        saturation: "6"
                    },
                    {
                        lightness: "-10"
                    },
                    {
                        weight: "0.71"
                    },
                    {
                        hue: "#ааа"
                    }
                ]
            },
            {
                featureType: "administrative.province",
                elementType: "all",
                stylers: [
                    {
                        visibility: "off"
                    },
                    {
                        gamma: "3.01"
                    }
                ]
            },
            {
                featureType: "landscape",
                elementType: "all",
                stylers: [
                    {
                        saturation: -100
                    },
                    {
                        lightness: 65
                    },
                    {
                        visibility: "on"
                    }
                ]
            },
            {
                featureType: "poi",
                elementType: "all",
                stylers: [
                    {
                        saturation: "-100"
                    },
                    {
                        lightness: "-6"
                    },
                    {
                        visibility: "simplified"
                    }
                ]
            },
            {
                featureType: "road",
                elementType: "all",
                stylers: [
                    {
                        saturation: "-100"
                    }
                ]
            },
            {
                featureType: "road.highway",
                elementType: "all",
                stylers: [
                    {
                        visibility: "simplified"
                    },
                    {
                        saturation: "32"
                    }
                ]
            },
            {
                featureType: "road.arterial",
                elementType: "all",
                stylers: [
                    {
                        lightness: "-14"
                    }
                ]
            },
            {
                featureType: "road.local",
                elementType: "all",
                stylers: [
                    {
                        lightness: "-1"
                    }
                ]
            },
            {
                featureType: "transit",
                elementType: "all",
                stylers: [
                    {
                        saturation: -100
                    },
                    {
                        visibility: "simplified"
                    },
                    {
                        lightness: "18"
                    }
                ]
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                    {
                        hue: "#ffff00"
                    },
                    {
                        lightness: -25
                    },
                    {
                        saturation: -97
                    }
                ]
            },
            {
                featureType: "water",
                elementType: "labels",
                stylers: [
                    {
                        lightness: -25
                    },
                    {
                        saturation: -100
                    }
                ]
            }
        ]
    });

    var features = [
        {
            position: new google.maps.LatLng(50.450003, 30.518566)
        }
    ];

    features.forEach(function (feature) {
        let marker = new google.maps.Marker({
            position: feature.position,
            icon: iconUrl,
            map: map
        });
    });
}
