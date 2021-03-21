function map(n) {
   google.maps.Map.prototype.setCenterWithOffset = function (latlng, offsetX, offsetY) {
      var map = this;
      var ov = new google.maps.OverlayView();
      ov.onAdd = function () {
         var proj = this.getProjection();
         var aPoint = proj.fromLatLngToContainerPixel(latlng);
         aPoint.x = aPoint.x + offsetX;
         aPoint.y = aPoint.y + offsetY;
         map.panTo(proj.fromContainerPixelToLatLng(aPoint));
         //map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
      }
      ov.draw = function () { };
      ov.setMap(this);
   };
   var markers = new Array();
   var infowindow = new google.maps.InfoWindow({
      //pixelOffset: new google.maps.Size(-230,250)
   });
   var locations = [
      [new google.maps.LatLng(48.86034078351874, 2.329974268293546)],
      [new google.maps.LatLng(48.85826555160619, 2.356045339773109)],
      [new google.maps.LatLng(48.85652192984055, 2.3250886732044713)],
      [new google.maps.LatLng(48.855212467442826, 2.3500654034572803)],
   ]
   var options = {
      zoom: 15,
      panControl: false,
      mapTypeControl: false,
      center: locations[0][0],
      //styles: [{ "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#e0efef" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "hue": "#1900ff" }, { "color": "#c0e8e8" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 100 }, { "visibility": "simplified" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "lightness": 700 }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#7dcdcd" }] }],
      styles: [
         {
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#212121"
               }
            ]
         },
         {
            "elementType": "labels.icon",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
         },
         {
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#757575"
               }
            ]
         },
         {
            "elementType": "labels.text.stroke",
            "stylers": [
               {
                  "color": "#212121"
               }
            ]
         },
         {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#757575"
               }
            ]
         },
         {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#9e9e9e"
               }
            ]
         },
         {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
         },
         {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#bdbdbd"
               }
            ]
         },
         {
            "featureType": "landscape.natural",
            "stylers": [
               {
                  "visibility": "on"
               }
            ]
         },
         {
            "featureType": "landscape.natural.terrain",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
         },
         {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#757575"
               }
            ]
         },
         {
            "featureType": "poi.business",
            "stylers": [
               {
                  "visibility": "on"
               }
            ]
         },
         {
            "featureType": "poi.business",
            "elementType": "geometry",
            "stylers": [
               {
                  "visibility": "on"
               }
            ]
         },
         {
            "featureType": "poi.business",
            "elementType": "geometry.fill",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
         },
         {
            "featureType": "poi.business",
            "elementType": "geometry.stroke",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
         },
         {
            "featureType": "poi.business",
            "elementType": "labels.icon",
            "stylers": [
               {
                  "visibility": "on"
               }
            ]
         },
         {
            "featureType": "poi.business",
            "elementType": "labels.text",
            "stylers": [
               {
                  "visibility": "on"
               }
            ]
         },
         {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#181818"
               }
            ]
         },
         {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#616161"
               }
            ]
         },
         {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
               {
                  "color": "#1b1b1b"
               }
            ]
         },
         {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
               {
                  "color": "#2c2c2c"
               }
            ]
         },
         {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#8a8a8a"
               }
            ]
         },
         {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#373737"
               }
            ]
         },
         {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#3c3c3c"
               },
               {
                  "visibility": "off"
               }
            ]
         },
         {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#4e4e4e"
               }
            ]
         },
         {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
         },
         {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#616161"
               }
            ]
         },
         {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#757575"
               },
               {
                  "visibility": "off"
               }
            ]
         },
         {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#004044"
               }
            ]
         },
         {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#3d3d3d"
               },
               {
                  "visibility": "off"
               }
            ]
         }
      ],
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };
   var map = new google.maps.Map(document.getElementById('map'), options);
   var icon = {
      url: 'img/icons/map.svg',
      scaledSize: new google.maps.Size(18, 20),
      anchor: new google.maps.Point(9, 10)
   }
   for (var i = 0; i < locations.length; i++) {
      var marker = new google.maps.Marker({
         icon: icon,
         position: locations[i][0],
         map: map,
      });
      google.maps.event.addListener(marker, 'click', (function (marker, i) {
         return function () {
            for (var m = 0; m < markers.length; m++) {
               markers[m].setIcon(icon);
            }
            var cnt = i + 1;
            //infowindow.setContent($('.contacts-map-item_' + cnt).html());
            infowindow.open(map, marker);
            marker.setIcon(icon);
            map.setCenterWithOffset(marker.getPosition(), 0, 0);
            setTimeout(function () {
               baloonstyle();
            }, 10);
         }
      })(marker, i));
      markers.push(marker);
   }

   if (n) {
      var nc = n - 1;
      setTimeout(function () {
         google.maps.event.trigger(markers[nc], 'click');
      }, 500);
   }
}

map(1);


/* YA
function map(n) {
   ymaps.ready(init);
   function init() {
      // Создание карты.
      var myMap = new ymaps.Map("map", {
         // Координаты центра карты.
         // Порядок по умолчанию: «широта, долгота».
         // Чтобы не определять координаты центра карты вручную,
         // воспользуйтесь инструментом Определение координат.
         controls: [],
         center: [43.585525, 39.723062],
         // Уровень масштабирования. Допустимые значения:
         // от 0 (весь мир) до 19.
         zoom: 10
      });

      let myPlacemark = new ymaps.Placemark([43.585525, 39.723062], {
      },{
         // Опции.
         //balloonContentHeader: 'Mistoun',
         //balloonContentBody: 'Москва, Николоямская 40с1',
         //balloonContentFooter: '+ 7(495) 507-54 - 90',
         //hasBalloon: true,
         //hideIconOnBalloonOpen: true,

         hasBalloon: false,
         hideIconOnBalloonOpen: false,
         // Необходимо указать данный тип макета.
         iconLayout: 'default#imageWithContent',
         // Своё изображение иконки метки.
         iconImageHref: 'img/icons/map.svg',
         // Размеры метки.
         iconImageSize: [40, 40],
         // Смещение левого верхнего угла иконки относительно
         // её "ножки" (точки привязки).
         iconImageOffset: [-20, -20],
         // Смещение слоя с содержимым относительно слоя с картинкой.
         iconContentOffset: [0, 0],
      });
      myMap.geoObjects.add(myPlacemark);

      myMap.behaviors.disable('scrollZoom');
      myMap.behaviors.disable('drag');
   }
}
*/