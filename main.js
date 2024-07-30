var map = L.map('map').setView([-16.4090, -71.5375], 13);
var mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Leaflet &copy; ' + mapLink + ', contribution',
    maxZoom: 20
}).addTo(map);
//user gps wii
var yo = L.icon({
    iconUrl: 'red.png',
    iconSize: [70, 70]
});
var marker = L.marker([-16.40647366545151, -71.52472699553803], { icon: yo, draggable: true  }).addTo(map);
 // Función para recuperar y mostrar las coordenadas del marcador
 function onDragEnd(e) {
    var marker = e.target;
    var position = marker.getLatLng();
    console.log("Latitud: " + position.lat + ", Longitud: " + position.lng);

    // Actualizar los campos de latitud y longitud si es el marcador de destino
    if (marker === destinationMarker) {
        document.getElementById('latitude').value = position.lat;
        document.getElementById('longitude').value = position.lng;
    }
}

// Añadir evento de arrastre al marcador
marker.on('dragend', onDragEnd);

function toggleMenu(menuId) {
    var menuContainer = document.getElementById(menuId);
    menuContainer.classList.toggle('menu-hidden');
    menuContainer.classList.toggle('menu-visible');
}

function toggleSubmenu(submenu) {
    submenu.classList.toggle('active');
}

document.querySelectorAll('.submenu-button').forEach(function(button) {
    button.addEventListener('click', function() {
        toggleSubmenu(this.nextElementSibling);
    });
});
document.querySelectorAll('.submenu-button1').forEach(function(button) {
    button.addEventListener('click', function() {
        toggleSubmenu(this.nextElementSibling);
    });
});
document.querySelectorAll('.submenu-button2').forEach(function(button) {
    button.addEventListener('click', function() {
        toggleSubmenu(this.nextElementSibling);
    });
});

/* 
function crearMarcadores(coordinates) {
    var marcadores = [];
    coordinates.forEach(function(coord) {
        if (coord && coord.length === 2) {
            var marker = L.marker([coord[0], coord[1]]);
            marcadores.push(marker);
        }
    });
    return marcadores;
} */
function crearMarcadores(coordinates) {
    var marcadores = [];
    coordinates.forEach(function(coord) {
        if (coord && coord.length === 3) {
            var marker = L.marker([coord[0], coord[1]]);
            marker.bindTooltip(coord[2], { permanent: false, direction: 'top' });
            marcadores.push(marker);
        }
    });
    return marcadores;
}

//GRUPO 11-2
var marcadores_par_CotumA_r1_i = crearMarcadores(par_CotumA_r1_i, map);
var marcadores_par_CotumA_r1_v = crearMarcadores(par_CotumA_r1_v, map);
var marcadores_par_Dolores_r2_i = crearMarcadores(par_Dolores_r2_i, map);
var marcadores_par_Dolores_r2_v = crearMarcadores(par_Dolores_r2_v, map);
//GRUPO 2 3-4
var marcadores_par_A15Miraflores_r3_i = crearMarcadores(par_A15Miraflores_r3_i, map);
var marcadores_par_A15Miraflores_r3_v = crearMarcadores(par_A15Miraflores_r3_v, map);
var marcadores_par_altoselvaA_r4_i = crearMarcadores(par_altoselvaA_r4_i, map);
var marcadores_par_altoselvaA_r4_v = crearMarcadores(par_altoselvaA_r4_v, map);
//GRUPO 3 5-6
var marcadores_par_C24DConoNorte_r5_i_v = crearMarcadores(par_C24DConoNorte_r5_i_v, map);
var marcadores_par_BJUANXXIII_r6_i = crearMarcadores(par_BJUANXXIII_r6_i, map);
var marcadores_par_BJUANXXIII_r6_v = crearMarcadores(par_BJUANXXIII_r6_v, map);
//GRUPO 4 7-8
var marcadores_par_CotumB_i = crearMarcadores(par_CotumB_i, map);
var marcadores_par_CotumB_v = crearMarcadores(par_CotumB_v, map);
var marcadores_par_C7_5AQPMasivo_i = crearMarcadores(par_C7_5AQPMasivo_i, map);
var marcadores_par_C7_5AQPMasivo_v = crearMarcadores(par_C7_5AQPMasivo_v, map);
//GRUPO 5 9-10
var marcadores_par_3deOctubre_i = crearMarcadores(par_3deOctubre_i, map);
var marcadores_par_3deOctubre_v = crearMarcadores(par_3deOctubre_v, map);
var marcadores_par_C7_9AQPMasivo_i = crearMarcadores(par_C7_9AQPMasivo_i, map);
var marcadores_par_C7_9AQPMasivo_v = crearMarcadores(par_C7_9AQPMasivo_v, map);
//GRUPO 6 11-12
var marcadores_par_AMarianoMelgar_r11_i = crearMarcadores(par_AMarianoMelgar_r11_i, map);
var marcadores_par_AMarianoMelgar_r11_v = crearMarcadores(par_AMarianoMelgar_r11_v, map);
var marcadores_par_BPolanco_r12_i_v = crearMarcadores(par_BPolanco_r12_i_v, map);

//GRUPO 7

/*  var marcadores_par_B3octubre_r13_i = crearMarcadores(par_B3octubre_r13_i, map);
var marcadores_par_B3octubre_r13_v = crearMarcadores(par_B3octubre_r13_v, map);
var marcadores_par_CaymaEnace_r14_i = crearMarcadores(par_CaymaEnace_r14_i, map);*/
//GRUPO 8
var marcadores_par_LaPerla_r15_i = crearMarcadores(par_LaPerla_r15_i, map);
var marcadores_par_LaPerla_r15_v = crearMarcadores(par_LaPerla_r15_v, map);
var marcadores_par_15agosto_r16_i = crearMarcadores(par_15agosto_r16_i, map);
var marcadores_par_15agosto_r16_v = crearMarcadores(par_15agosto_r16_v, map);
//grupo 9
var marcadores_par_oriola_r17_i = crearMarcadores(par_oriola_r17_i, map);
var marcadores_par_oriola_r17_v = crearMarcadores(par_oriola_r17_v, map);
var marcadores_par_uchumayo_r18_i_v = crearMarcadores(par_Uchumayo_r18_i_v, map);
// Inicializar los checkboxes desmarcados
document.getElementById('route6_1-checkbox').checked = false;
 function toggleRoute(checked, instructionsId, routingControl, marcadores) {
    var instructions = document.getElementById(instructionsId);
    if (checked) {
        routingControl.addTo(map);
        instructions.style.display = 'block';
        marcadores.forEach(function(marker) {
            marker.addTo(map);
        });
    } else {
        map.removeControl(routingControl);
        instructions.style.display = 'none';
        marcadores.forEach(function(marker) {
            map.removeLayer(marker);
        });
    }
}  

function setupCheckboxListener(checkboxId, instructionsId, routingControl, marcadores) {
    document.getElementById(checkboxId).addEventListener('change', function() {
        toggleRoute(this.checked, instructionsId, routingControl, marcadores);
    });
}
// Función para configurar el listener de un checkbox de conexión
function setupConnectionCheckboxListener(checkboxId, firstRouteControl, secondRouteControl, connectionMarker) {
    var routingControl = null;
    document.getElementById(checkboxId).addEventListener('change', function() {
        var showConnection = this.checked; 
        if (showConnection) {
            firstRouteControl.addTo(map);
            secondRouteControl.addTo(map);
            // Agregar el marcador de conexión
            var connectionIcon = L.icon({
                iconUrl: 'intercambio.png',
                iconSize: [40, 40]
            });
            var connectionMarkerLayer = L.marker(connectionMarker.getLatLng(), { icon: connectionIcon })
                .bindTooltip("¡Bájese aquí!")
                .addTo(map); 

            // Guardar el marcador de conexión en el objeto connectionMarker para poder manipularlo posteriormente
            connectionMarker.connectionMarkerLayer = connectionMarkerLayer;
        } else {
            // Quitar la conexión del mapa si existe
                map.removeControl(firstRouteControl);
                 map.removeControl(secondRouteControl);

            // Quitar el marcador de conexión si existe
            if (connectionMarker.connectionMarkerLayer) {
                map.removeLayer(connectionMarker.connectionMarkerLayer);
                delete connectionMarker.connectionMarkerLayer;
            }
        }
    });
}
// Array con los datos de las rutas y sus marcadores
const routes = [
    { checkboxId: 'route1-checkbox', instructionsId: 'route1-instructions', control: routingControl1_1, markers: marcadores_par_CotumA_r1_i },
    { checkboxId: 'route2-checkbox', instructionsId: 'route2-instructions', control: routingControl1_2, markers: marcadores_par_CotumA_r1_v},
    { checkboxId: 'route2_1-checkbox', instructionsId: 'route2_1-instructions', control: routingControl2_1, markers:marcadores_par_Dolores_r2_i },
    { checkboxId: 'route2_2-checkbox', instructionsId: 'route2_2-instructions', control: routingControl2_2, markers:marcadores_par_Dolores_r2_v},
    { checkboxId: 'route3_1-checkbox', instructionsId: 'route3_1-instructions', control: routingControl3_1, markers:marcadores_par_A15Miraflores_r3_i  },
    { checkboxId: 'route3_2-checkbox', instructionsId: 'route3_2-instructions', control: routingControl3_2, markers:marcadores_par_A15Miraflores_r3_v },
    { checkboxId: 'route4_1-checkbox', instructionsId: 'route4_1-instructions', control: routingControl4_1, markers:marcadores_par_altoselvaA_r4_i },
    { checkboxId: 'route4_2-checkbox', instructionsId: 'route4_2-instructions', control: routingControl4_2, markers:marcadores_par_altoselvaA_r4_v },
    { checkboxId: 'route5_1-checkbox', instructionsId: 'route5_1-instructions', control: routingControl5_0 , markers:marcadores_par_C24DConoNorte_r5_i_v },
    { checkboxId: 'route6_1-checkbox', instructionsId: 'route6_1-instructions', control: routingControl6_1, markers: marcadores_par_BJUANXXIII_r6_i },
    { checkboxId: 'route6_2-checkbox', instructionsId: 'route6_2-instructions', control: routingControl6_2 , markers:marcadores_par_BJUANXXIII_r6_v },
    { checkboxId: 'route7_1-checkbox', instructionsId: 'route7_1-instructions', control: routingControl7_1, markers:marcadores_par_CotumB_i  },
    { checkboxId: 'route7_2-checkbox', instructionsId: 'route7_2-instructions', control: routingControl7_2, markers: marcadores_par_CotumB_v },
    { checkboxId: 'route8_1-checkbox', instructionsId: 'route8_1-instructions', control: routingControl8_1 , markers: marcadores_par_C7_5AQPMasivo_i},
    { checkboxId: 'route8_2-checkbox', instructionsId: 'route8_2-instructions', control: routingControl8_2, markers: marcadores_par_C7_5AQPMasivo_v },
    { checkboxId: 'route9_1-checkbox', instructionsId: 'route9_1-instructions', control: routingControl9_1, markers: marcadores_par_3deOctubre_i },
    { checkboxId: 'route9_2-checkbox', instructionsId: 'route9_2-instructions', control: routingControl9_2 , markers: marcadores_par_3deOctubre_v},
    { checkboxId: 'route10_1-checkbox', instructionsId: 'route10_1-instructions', control: routingControl10_1 , markers: marcadores_par_C7_9AQPMasivo_i},
    { checkboxId: 'route10_2-checkbox', instructionsId: 'route10_2-instructions', control: routingControl10_2, markers:marcadores_par_C7_9AQPMasivo_v  }, 
    { checkboxId: 'route11_1-checkbox', instructionsId: 'route11_1-instructions', control: routingControl11_1 , markers: marcadores_par_AMarianoMelgar_r11_i},
    { checkboxId: 'route11_2-checkbox', instructionsId: 'route11_2-instructions', control: routingControl11_2 , markers: marcadores_par_AMarianoMelgar_r11_v},
    { checkboxId: 'route12_1-checkbox', instructionsId: 'route12_1-instructions', control: routingControl12_0 , markers:marcadores_par_BPolanco_r12_i_v  },
    /* { checkboxId: 'route13_1-checkbox', instructionsId: 'route13_1-instructions', control: routingControl13_1 , markers:marcadores_par_B3octubre_r13_i },
    { checkboxId: 'route13_2-checkbox', instructionsId: 'route13_2-instructions', control: routingControl13_2 , markers:marcadores_par_B3octubre_r13_v },
    { checkboxId: 'route14_1-checkbox', instructionsId: 'route14_1-instructions', control: routingControl14_1, markers: marcadores_par_CaymaEnace_r14_i },
    { checkboxId: 'route14_2-checkbox', instructionsId: 'route14_2-instructions', control: routingControl14_2, markers:  },*/
    { checkboxId: 'route15_1-checkbox', instructionsId: 'route15_1-instructions', control: routingControl15_1, markers:marcadores_par_LaPerla_r15_i  },
    { checkboxId: 'route15_2-checkbox', instructionsId: 'route15_2-instructions', control: routingControl15_2 , markers:marcadores_par_LaPerla_r15_v },
    { checkboxId: 'route16_1-checkbox', instructionsId: 'route16_1-instructions', control: routingControl16_1, markers: marcadores_par_15agosto_r16_i },
    { checkboxId: 'route16_2-checkbox', instructionsId: 'route16_2-instructions', control: routingControl16_2, markers: marcadores_par_15agosto_r16_v },
    { checkboxId: 'route17_1-checkbox', instructionsId: 'route17_1-instructions', control: routingControl17_1, markers: marcadores_par_oriola_r17_i },
    { checkboxId: 'route17_2-checkbox', instructionsId: 'route17_2-instructions', control: routingControl17_2 , markers:marcadores_par_oriola_r17_v },
    { checkboxId: 'route18_1-checkbox', instructionsId: 'route18_1-instructions', control: routingControl18_0, markers: marcadores_par_uchumayo_r18_i_v }
    
    ];
// encontrar ruta mas cercana a dest y usuario()
/* function findRoutesNearDestinationAndUser(destination, userLocation, routes) {
    var nearbyRoutes = [];
    var nearbyMarkers = [];
    var nearestUserMarker = null;
    var nearestUserMarkerDistance = Infinity;
    var nearbyUserMarkers = [];
    var connectionRoutes = [];

    // Iterate through routes to find markers close to the destination and user
    routes.forEach(function (route) {
        var routeControl = route.control;
        var routeMarkers = route.markers;
        var isNearDestination = false;
        var isNearUser = false;

        // Iterate through markers
        routeMarkers.forEach(function (marker) {
            var distanceToDestination = destination.distanceTo(marker.getLatLng());
            var distanceToUser = userLocation.distanceTo(marker.getLatLng());

            // Mark as near if the marker is close to the destination
            if (distanceToDestination < 700) {
                isNearDestination = true;
            }

            // Mark as near if the marker is close to the user
            if (distanceToUser < 700) {
                isNearUser = true;
                nearbyUserMarkers.push(marker);

                // Update the nearest marker to the user
                if (distanceToUser < nearestUserMarkerDistance) {
                    nearestUserMarkerDistance = distanceToUser;
                    nearestUserMarker = marker;
                }
            }
        });

        // Add the route if it has markers close to both the destination and the user
        if (isNearDestination && isNearUser) {
            nearbyRoutes.push(routeControl);
            nearbyMarkers.push(routeMarkers);
        }
    });

    // Find connection routes
    routes.forEach(function (routeA) {
        var markersA = routeA.markers;
        var userCanAccessRouteA = markersA.some(markerA => userLocation.distanceTo(markerA.getLatLng()) < 700);

        if (userCanAccessRouteA) {
            routes.forEach(function (routeB) {
                if (routeA !== routeB) {
                    var markersB = routeB.markers;

                    markersA.forEach(function (markerA) {
                        markersB.forEach(function (markerB) {
                            var distanceBetweenMarkers = markerA.getLatLng().distanceTo(markerB.getLatLng());
                            var distanceToDestinationFromB = destination.distanceTo(markerB.getLatLng());

                            // Add connection route if markers are close and marker from routeB is near the destination
                            if (distanceBetweenMarkers < 500 && distanceToDestinationFromB < 500) {
                                connectionRoutes.push({
                                    firstRoute: routeA,
                                    secondRoute: routeB,
                                    connectionMarker: markerA
                                });
                            }
                        });
                    });
                }
            });
        }
    });

    var message = "";
    var travelPossible = false;

    if (nearbyRoutes.length > 0) {
        travelPossible = true;
    } else if (connectionRoutes.length > 0) {
        travelPossible = true;
    } else {
        message = "No hay rutas disponibles :(.";
    }

    return {
        nearbyRoutes: nearbyRoutes,
        nearbyMarkers: nearbyMarkers,
        nearestUserMarker: nearestUserMarker,
        nearbyUserMarkers: nearbyUserMarkers,
        connectionRoutes: connectionRoutes,
        message: message,
        travelPossible: travelPossible
    };
}
 */
function findRoutesWithOptionalThirdPoint(destination, userLocation, optionalPoint, routes) {
    const MAX_DISTANCE = 700;
    const MAX_CONNECTION_DISTANCE = 500;

    let nearbyRoutes = [];
    let nearbyMarkers = [];
    let nearestUserMarker = null;
    let nearestUserMarkerDistance = Infinity;
    let nearbyUserMarkers = [];
    let connectionRoutes = [];
    let connectionRoutesWithOptionalPoint = [];

    const isNearby = (pointA, pointB, maxDistance) => pointA.distanceTo(pointB) < maxDistance;

    routes.forEach(route => {
        let routeControl = route.control;
        let routeMarkers = route.markers;
        let isNearDestination = false;
        let isNearUser = false;
        let isNearOptional = !optionalPoint;

        routeMarkers.forEach(marker => {
            let markerLatLng = marker.getLatLng();
            if (!isNearDestination && isNearby(destination, markerLatLng, MAX_DISTANCE)) {
                isNearDestination = true;
            }
            if (!isNearUser && isNearby(userLocation, markerLatLng, MAX_DISTANCE)) {
                isNearUser = true;
                nearbyUserMarkers.push(marker);
                let distanceToUser = userLocation.distanceTo(markerLatLng);
                if (distanceToUser < nearestUserMarkerDistance) {
                    nearestUserMarkerDistance = distanceToUser;
                    nearestUserMarker = marker;
                }
            }
            if (optionalPoint && !isNearOptional && isNearby(optionalPoint, markerLatLng, MAX_DISTANCE)) {
                isNearOptional = true;
            }
        });

        if (isNearDestination && isNearUser && isNearOptional) {
            nearbyRoutes.push(routeControl);
            nearbyMarkers.push(routeMarkers);
        }
    });

    routes.forEach(routeA => {
        let markersA = routeA.markers;
        let userCanAccessRouteA = markersA.some(markerA => isNearby(userLocation, markerA.getLatLng(), MAX_DISTANCE));

        if (userCanAccessRouteA) {
            routes.forEach(routeB => {
                if (routeA !== routeB) {
                    let markersB = routeB.markers;

                    markersA.forEach(markerA => {
                        markersB.forEach(markerB => {
                            if (isNearby(markerA.getLatLng(), markerB.getLatLng(), MAX_CONNECTION_DISTANCE)) {
                                routes.forEach(routeC => {
                                    if (routeC !== routeA && routeC !== routeB) {
                                        let markersC = routeC.markers;

                                        markersB.forEach(markerB => {
                                            markersC.forEach(markerC => {
                                                let markerCLatLng = markerC.getLatLng();
                                                if (isNearby(markerB.getLatLng(), markerCLatLng, MAX_CONNECTION_DISTANCE)) {
                                                    if (isNearby(destination, markerCLatLng, MAX_CONNECTION_DISTANCE)) {
                                                        connectionRoutes.push({
                                                            firstRoute: routeA,
                                                            secondRoute: routeB,
                                                            thirdRoute: routeC,
                                                            connectionMarkerAB: markerA,
                                                            connectionMarkerBC: markerB
                                                        });
                                                    }
                                                    if (optionalPoint && isNearby(optionalPoint, markerCLatLng, MAX_CONNECTION_DISTANCE)) {
                                                        connectionRoutesWithOptionalPoint.push({
                                                            firstRoute: routeA,
                                                            secondRoute: routeB,
                                                            thirdRoute: routeC,
                                                            connectionMarkerAB: markerA,
                                                            connectionMarkerBC: markerB,
                                                            optionalPointMarker: markerC
                                                        });
                                                    }
                                                }
                                            });
                                        });
                                    }
                                });
                            }
                        });
                    });
                }
            });
        }
    });

    let message = "";
    let travelPossible = false;

    if (nearbyRoutes.length > 0 || connectionRoutes.length > 0 || (optionalPoint && connectionRoutesWithOptionalPoint.length > 0)) {
        travelPossible = true;
    } else {
        message = "No hay rutas disponibles :(.";
    }

    return {
        nearbyRoutes,
        nearbyMarkers,
        nearestUserMarker,
        nearbyUserMarkers,
        connectionRoutes,
        connectionRoutesWithOptionalPoint,
        message,
        travelPossible
    };
}

var destinationMarker;
var optionalPointMarker;
//formulario
document.getElementById('destination-form').addEventListener('submit', function (e) {
    e.preventDefault();
    //ubicacionee
    if (!marker) {
        alert("No se puede encontrar la ubicación del usuario.");
        return;
    }
    var userLatLng = marker.getLatLng();
    //coord destin
    var lat = parseFloat(document.getElementById('latitude').value);
    var lng = parseFloat(document.getElementById('longitude').value);

    //ccoord c opcional
    var latC = parseFloat(document.getElementById('latitude-c').value);
    var lngC = parseFloat(document.getElementById('longitude-c').value);

    // Validar las coordenadas del destino
    if (isNaN(lat) || isNaN(lng)) {
        alert("Por favor ingresa coordenadas válidas para el destino.");
        return;
    }
 // Limpiar marcador anterior del destino (si existe)
    var destination = L.latLng(lat, lng);
    //opc
    var optionalPoint = (!isNaN(latC) && !isNaN(lngC)) ? L.latLng(latC, lngC) : null;

    if (destinationMarker) {
        map.removeLayer(destinationMarker);
    }

    var redIcon = L.icon({
        iconUrl: 'destino.png',
        iconSize: [50, 50]
    });
    destinationMarker = L.marker(destination, { icon: redIcon, draggable: true }).addTo(map);
    destinationMarker.on('dragend', onDragEnd);//arastre

    //opc
    if (optionalPointMarker) {
        map.removeLayer(optionalPointMarker);
    }
    if (optionalPoint) {
        var blueIcon = L.icon({
            iconUrl: 'intercambio.png',
            iconSize: [50, 50]
        });
        optionalPointMarker = L.marker(optionalPoint, { icon: blueIcon, draggable: true }).addTo(map);
        optionalPointMarker.on('dragend', onDragEndOptional);
    }
    const par = [//def rutas y marc
        { name: 'Ruta 1: COTUM A',  control:routingControl1_1,markers: marcadores_par_CotumA_r1_i },
        { name: 'Ruta 1.1:COTUM A VUELTA',         control:routingControl1_2, markers: marcadores_par_CotumA_r1_v },
        { name: 'Ruta 2: Dolores',  control:routingControl2_1, markers: marcadores_par_Dolores_r2_i },
        { name: 'Ruta 2.2 Dolores VUELTA',         control:routingControl2_2, markers: marcadores_par_Dolores_r2_v },
        { name: 'Ruta 3:A15MIRAFLORES',control:routingControl3_1,  markers: marcadores_par_A15Miraflores_r3_i },
        { name: 'Ruta 3.1 A15MIRAFLORES VUELTA',         control:routingControl3_2,  markers: marcadores_par_A15Miraflores_r3_v },
        { name: 'Ruta 4:ALTOESLVA', control:routingControl4_1, markers: marcadores_par_altoselvaA_r4_i },
        { name: 'Ruta 4.1 ALTOESLVA VUELTA',         control:routingControl4_2,  markers: marcadores_par_altoselvaA_r4_v },
        { name: 'Ruta 5:CONONORTEC2',control:routingControl5_0,  markers: marcadores_par_C24DConoNorte_r5_i_v },
        { name: 'Ruta 6:BJUANXIII', control:routingControl6_1,  markers: marcadores_par_BJUANXXIII_r6_i },
        { name: 'Ruta 6.1 BJUANXIII VUELTA',         control:routingControl6_2,  markers: marcadores_par_BJUANXXIII_r6_v },
        { name: 'Ruta 7:COTUMB',    control:routingControl7_1,  markers: marcadores_par_CotumB_i },
        { name: 'Ruta 7.1 COTUMB VUELTA',         control:routingControl7_2,  markers: marcadores_par_CotumB_v },
        { name: 'Ruta 8:C75AQPMASIV',control:routingControl8_1,  markers:marcadores_par_C7_5AQPMasivo_i  },
        { name: 'Ruta 8.1C75AQPMASIV VUELTA',         control:routingControl8_2,  markers: marcadores_par_C7_5AQPMasivo_v },
        { name: 'Ruta 9:3octubre',  control:routingControl9_1,  markers: marcadores_par_3deOctubre_i },
        { name: 'Ruta 9.1 3octubre VUELTA',         control:routingControl9_2,  markers: marcadores_par_3deOctubre_v },
        { name: 'Ruta 10: C7_9AQPMasiv', control:routingControl10_1,markers: marcadores_par_C7_9AQPMasivo_i },
        { name: 'Ruta 10.1 C7_9AQPMasiv VUELTA',        control:routingControl10_2, markers: marcadores_par_C7_9AQPMasivo_v },
        { name: 'Ruta 11: AMM',     control:routingControl11_1,markers: marcadores_par_AMarianoMelgar_r11_i },
        { name: 'Ruta 11.1 AMM VUELTA',        control:routingControl11_2,markers: marcadores_par_AMarianoMelgar_r11_v },
        { name: 'Ruta 12: BPOLANCO',control:routingControl12_0, markers: marcadores_par_BPolanco_r12_i_v },
        { name: 'Ruta 15:la perla', control:routingControl15_1,markers: marcadores_par_LaPerla_r15_i },
        { name: 'Ruta 15.1 la perla VUELTA',        control:routingControl15_2,markers: marcadores_par_LaPerla_r15_v },
        { name: 'Ruta 16:15agosto', control:routingControl16_1,markers: marcadores_par_15agosto_r16_i },
        { name: 'Ruta 16.1 15agosto VUELTA',        control:routingControl16_2,markers: marcadores_par_15agosto_r16_v },
        { name: 'Ruta 17: oriola',  control:routingControl17_1,markers: marcadores_par_oriola_r17_i },
        { name: 'Ruta 17.1 oriola VUELTA',        control:routingControl17_2,markers: marcadores_par_oriola_r17_v },
        { name: 'Ruta 18 uchumayo', control:routingControl18_0,markers:marcadores_par_uchumayo_r18_i_v  }

    ];
    //busca rutas cerc a user y dest
   // var nearbyRoutes = findRoutesNearDestinationAndUser(destination, userLatLng, routes);
   var nearbyRoutes = findRoutesWithOptionalThirdPoint(destination, userLatLng, optionalPoint, routes);
   //opc
    // limpia
    var routeList = document.getElementById('route-list');
    routeList.innerHTML = '';
    // Mostrar el mensaje de rutas
    var messageElement = document.getElementById('route-message');
    messageElement.innerHTML = nearbyRoutes.message
    // Crear elementos de checkbox para las rutas
    nearbyRoutes.nearbyMarkers.forEach(function(markers, index) {
        // Busca el nombre de la ruta
        var routeName = par.find(function(route) {
            return route.markers === markers;
        }).name;
    
    // Crea el elemento del checkbox
    var routeItem = document.createElement('div');
    routeItem.classList.add('route-item');
    routeItem.innerHTML = '<input type="checkbox" id="route-checkbox-' + index + '" checked> ' +
                          '<label for="route-checkbox-' + index + '">' + routeName + '</label>';
    routeList.appendChild(routeItem);

    // Añadir un listener al checkbox
    var checkbox = document.getElementById('route-checkbox-' + index);
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            // Mostrar la ruta y los marcadores
            markers.forEach(function(marker) {
                marker.addTo(map);
            });
            var routeControl = nearbyRoutes.nearbyRoutes[index];
            if (routeControl) {
                routeControl.addTo(map);
            }
            var nearbyIcon = L.icon({
                iconUrl: 'pp.png',
                iconSize: [30, 30]
            });
            nearbyRoutes.nearbyUserMarkers.forEach(function (marker) {
                marker.setIcon(nearbyIcon);
                marker.bindTooltip(`Distancia: ${userLatLng.distanceTo(marker.getLatLng()).toFixed(2)} metros`).openTooltip();
            });
            var nearestIcon = L.icon({
                iconUrl: 'pcercano.png',
                iconSize: [50, 50]
            });
            if (nearbyRoutes.nearestUserMarker) {
                nearbyRoutes.nearestUserMarker.setIcon(nearestIcon);
                nearbyRoutes.nearestPolyline = L.polyline([userLatLng, nearbyRoutes.nearestUserMarker.getLatLng()], {color: 'green'}).addTo(map);
            }
            map.setView(destination, 14);
        } else {
            // Ocultar la ruta y los marcadores
            markers.forEach(function(marker) {
                map.removeLayer(marker);
            });
            var routeControl = nearbyRoutes.nearbyRoutes[index];
            if (routeControl) {
                map.removeLayer(routeControl);
                if (routeControl.remove) {
                    routeControl.remove(); // Usar el método remove() si existe
                }
            }
            nearbyRoutes.nearbyUserMarkers.forEach(function (marker) {
                map.removeLayer(marker);
            });
            if (nearbyRoutes.nearestUserMarker) {
                map.removeLayer(nearbyRoutes.nearestUserMarker);
            }
            if (nearbyRoutes.nearestPolyline) {
                map.removeLayer(nearbyRoutes.nearestPolyline);
                nearbyRoutes.nearestPolyline = null;
            }
        }
    });
});

// Función para configurar el listener de un checkbox de conexión
function setupConnectionCheckboxListener(checkboxId, firstRouteControl, secondRouteControl, connectionMarker, markersRuta1, markersRuta2) {
    var routingControl = null;
    document.getElementById(checkboxId).addEventListener('change', function() {
        var showConnection = this.checked; 
        if (showConnection) {
            firstRouteControl.addTo(map);
            secondRouteControl.addTo(map);

            // Agregar los marcadores de paraderos de la ruta 1 al mapa
            markersRuta1.forEach(function(marker) {
                marker.addTo(map);
            });

            // Agregar los marcadores de paraderos de la ruta 2 al mapa
            markersRuta2.forEach(function(marker) {
                marker.addTo(map);
            });

            // Agregar el marcador de conexión
            var connectionIcon = L.icon({
                iconUrl: 'intercambio.png',
                iconSize: [40, 40]
            });
            var connectionMarkerLayer = L.marker(connectionMarker.getLatLng(), { icon: connectionIcon })
                .bindTooltip("¡Bájese aquí!")
                .addTo(map); 

            // Guardar el marcador de conexión en el objeto connectionMarker para poder manipularlo posteriormente
            connectionMarker.connectionMarkerLayer = connectionMarkerLayer;
        } else {
            // Quitar la conexión del mapa si existe
            map.removeControl(firstRouteControl);
            map.removeControl(secondRouteControl);

            // Quitar los marcadores de paraderos de la ruta 1 del mapa
            markersRuta1.forEach(function(marker) {
                map.removeLayer(marker);
            });

            // Quitar los marcadores de paraderos de la ruta 2 del mapa
            markersRuta2.forEach(function(marker) {
                map.removeLayer(marker);
            });

            // Quitar el marcador de conexión si existe
            if (connectionMarker.connectionMarkerLayer) {
                map.removeLayer(connectionMarker.connectionMarkerLayer);
                delete connectionMarker.connectionMarkerLayer;
            }
        }
    });
}
//rutas conconexion opcional

 // Manejar rutas de conexión con punto opcional
 nearbyRoutes.connectionRoutesWithOptionalPoint.forEach(function (route, index) {
    var routeNameA = par.find(function (r) {
        return r.markers === route.firstRoute.markers;
    }).name;
    var routeNameB = par.find(function (r) {
        return r.markers === route.secondRoute.markers;
    }).name;
    var routeNameC = par.find(function (r) {
        return r.markers === route.thirdRoute.markers;
    }).name;

    var connectionItem = document.createElement('div');
    connectionItem.classList.add('route-item');
    connectionItem.innerHTML = '<input type="checkbox" id="connection-checkbox-' + index + '" checked> ' +
        '<label for="connection-checkbox-' + index + '">Ruta de conexión (con punto opcional): ' + routeNameA + ' &rarr; ' + routeNameB + ' &rarr; ' + routeNameC + '</label>';
    routeList.appendChild(connectionItem);

    var checkbox = document.getElementById('connection-checkbox-' + index);
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            route.firstRoute.markers.forEach(function (marker) {
                marker.addTo(map);
            });
            route.secondRoute.markers.forEach(function (marker) {
                marker.addTo(map);
            });
            route.thirdRoute.markers.forEach(function (marker) {
                marker.addTo(map);
            });

            var connectionMarkerABLayer = L.layerGroup([route.connectionMarkerAB]).addTo(map);
            var connectionMarkerBCLayer = L.layerGroup([route.connectionMarkerBC]).addTo(map);
            route.connectionMarkerAB.connectionMarkerLayer = connectionMarkerABLayer;
            route.connectionMarkerBC.connectionMarkerLayer = connectionMarkerBCLayer;

            routingControl = L.Routing.control({
                waypoints: [
                    userLatLng,
                    route.connectionMarkerAB.getLatLng(),
                    route.connectionMarkerBC.getLatLng(),
                    optionalPoint,
                    userLatLng
                ],
                createMarker: function () {
                    return null;
                }
            }).addTo(map);

            map.setView(optionalPoint, 14);
        } else {
            route.firstRoute.markers.forEach(function (marker) {
                map.removeLayer(marker);
            });
            route.secondRoute.markers.forEach(function (marker) {
                map.removeLayer(marker);
            });
            route.thirdRoute.markers.forEach(function (marker) {
                map.removeLayer(marker);
            });

            map.removeLayer(route.connectionMarkerAB.connectionMarkerLayer);
            map.removeLayer(route.connectionMarkerBC.connectionMarkerLayer);

            if (routingControl) {
                map.removeControl(routingControl);
                routingControl = null;
            }
        }
    });
});



nearbyRoutes.connectionRoutes.forEach(function(connection, index) {
    var firstRouteControl = connection.firstRoute.control;
    var secondRouteControl = connection.secondRoute.control;
    var connectionMarker = connection.connectionMarker;

    // Busca marcadores para ruta 1 y 2
    var markersRuta1 = par.find(function(route) {
        return route.control === connection.firstRoute.control;
    })?.markers || [];

    var markersRuta2 = par.find(function(route) {
        return route.control === connection.secondRoute.control;
    })?.markers || [];

    var firstRouteName = par.find(function(route) {
        return route.control === connection.firstRoute.control;
    })?.name || "Desconocida";

    var secondRouteName = par.find(function(route) {
        return route.control === connection.secondRoute.control;
    })?.name || "Desconocida";

    var connectionItem = document.createElement('div');
    connectionItem.classList.add('route-item');
    connectionItem.innerHTML = '<input type="checkbox" id="connection-checkbox-' + index + '" checked> ' +
                               '<label for="connection-checkbox-' + index + '">Conexión: ' + firstRouteName + ' -> ' + secondRouteName + '</label>';
    routeList.appendChild(connectionItem);
    setupConnectionCheckboxListener('connection-checkbox-' + index, firstRouteControl, secondRouteControl, connectionMarker, markersRuta1, markersRuta2);
});
}); 

function onDragEndOptional(e) {
    var latlng = e.target.getLatLng();
    document.getElementById('latitude-c').value = latlng.lat;
    document.getElementById('longitude-c').value = latlng.lng;
}
routes.forEach(route => {
    setupCheckboxListener(route.checkboxId, route.instructionsId, route.control, route.markers);
});

map.whenReady(function () {
    routes.forEach(route => {
        if (document.getElementById(route.checkboxId).checked) {
            toggleRoute(true, route.instructionsId, route.control, route.markers);
        }
    });
});
map.zoomControl.remove();

var zoomInButton = L.control({position: 'topright'});
var zoomOutButton = L.control({position: 'topright'});

zoomInButton.onAdd = function (map) {
var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
container.innerHTML = '<button class="custom-zoom-button" onclick="zoomIn()">+</button>';
return container;
};


zoomOutButton.onAdd = function (map) {
var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
container.innerHTML = '<button class="custom-zoom-button" onclick="zoomOut()">-</button>';
return container;
};

zoomInButton.addTo(map);
zoomOutButton.addTo(map);

function zoomIn() {
    map.zoomIn();
}

function zoomOut() {
    map.zoomOut();
}