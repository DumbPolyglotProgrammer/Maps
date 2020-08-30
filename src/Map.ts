
export interface Marker {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

class Map {
    private googleMap: google.maps.Map;

    constructor(elementId: string) {
        this.googleMap =
            new google.maps.Map(
                document.getElementById(elementId),
                {
                    zoom: 1,
                    center: {
                        lat: 0,
                        lng: 0
                    }
                }
            );
    }

    addMarker(marker: Marker) {
        const googleMarker = new google.maps.Marker(
            {
                map: this.googleMap,
                position: {
                    lat: marker.location.lat,
                    lng: marker.location.lng
                }
            }
        );
        googleMarker.addListener('click', () => {
            const googleInfoWindow = new google.maps.InfoWindow({
                content: marker.markerContent()
            });
            googleInfoWindow.open(this.googleMap, googleMarker);
        });
    }
}

export default Map;
