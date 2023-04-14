let myMap;

const init = () => {
    myMap = new ymaps.Map('map', {
        center: [56.838011, 60.597465],
        zoom: 11,
        controls: []
    });

    const coords = [
        [56.883338, 60.616666],
        [56.876666, 60.676767],
        [56.836106, 60.566519],
        [56.836103, 60.656565],
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "./img/icons/marker.svg",
        iconImageSize: [58,73],
        iconImageOffset: [-35, -52]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init); 