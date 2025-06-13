export interface Unit {
  id: string;
  name: string;
  area: number;
  unitType: string;
  rooms: number;
  bathrooms: number;
  price: number;
  thumbnail: string;
  features: string[];
}

export interface Floor {
  id: string;
  number: number;
  units: Unit[];
}

export interface Tower {
  id: string;
  name: string;
  floors: Floor[];
  totalUnits: number;
  height: string;
}