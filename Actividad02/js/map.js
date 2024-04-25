/*
Descripcion: Mapa de Bolivia con marcadores
Desarollador: Denilson Noel Ledezma Condori
Fecha: 2024-04-24
Cambios: Adaptado a Bolivia
*/ 

// Función para iniciar el mapa
function iniciaMapa() {
    // Estilos del mapa
    var styledMapType = new google.maps.StyledMapType([
        {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
        }
    ]);
    // Coordenadas para el centro de Bolivia
    var propiedades = {
        center: { lat: -16.2902, lng: -63.5887 }, 
        zoom: 5,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'style_map']
        }
    };

    const mapa = document.getElementById("map");
    const map = new google.maps.Map(mapa, propiedades);

    map.mapTypes.set('style_map', styledMapType);
    map.setMapTypeId('style_map');

    // Posiciones de los marcadores para diferentes ubicaciones en Bolivia

    const markerLaPaz = new google.maps.Marker({
        position: { lat: -16.5000, lng: -68.1500 },
        map,
        title: "La Paz"
    });

    const markerCochabamba = new google.maps.Marker({
        position: { lat: -17.3833, lng: -66.1667 },
        map,
        title: "Cochabamba"
    });

    const markerSantaCruz = new google.maps.Marker({
        position: { lat: -17.8000, lng: -63.1667 },
        map,
        title: "Santa Cruz de la Sierra"
    });

    const markerSucre = new google.maps.Marker({
        position: { lat: -19.0333, lng: -65.2627 },
        map,
        title: "Sucre"
    });

    const markerPotosi = new google.maps.Marker({
        position: { lat: -19.5836, lng: -65.7531 },
        map,
        title: "Potosí"
    });

    const markerOruro = new google.maps.Marker({
        position: { lat: -17.9833, lng: -67.1500 },
        map,
        title: "Oruro"
    });

    const markerTarija = new google.maps.Marker({
        position: { lat: -21.5355, lng: -64.7296 },
        map,
        title: "Tarija"
    });

    const markerBeni = new google.maps.Marker({
        position: { lat: -14.8100, lng: -65.7667 },
        map,
        title: "Beni"
    });

    const markerPando = new google.maps.Marker({
        position: { lat: -11.0196, lng: -68.7763 },
        map,
        title: "Pando"
    });

    const infoWindowMain = new google.maps.InfoWindow({
        content: "<h1>MAPA DE BOLIVIA</h1><p>Descripción general</p>"
    });

    // Abrir el InfoWindow principal cuando se carga el mapa
    infoWindowMain.open(map);

    // Añadir eventos click en el mapa para cerrar el InfoWindow principal
    google.maps.event.addListener(map, 'click', function() {
        infoWindowMain.close();
    });

    // Añadir eventos mouseover para mostrar InfoWindows en los marcadores
    markerLaPaz.addListener("mouseover", () => {
        infoWindowMain.close(); // Cerrar el InfoWindow principal si se muestra
        infoWindowMain.setContent("<h3>La Paz</h3><p>Descripción de La Paz</p>");
        infoWindowMain.open(map, markerLaPaz);
    });


}



