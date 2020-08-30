import { Marker } from './Map'
import faker from 'faker';

class User implements Marker {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return (
            `
            <div>
                <h3>User Name: ${this.name}</h3>
            </div>
            `
        );
    }
}

export default User;
