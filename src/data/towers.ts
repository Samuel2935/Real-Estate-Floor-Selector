import { Tower } from '../types';

export const towers: Tower[] = [
  {
    id: 'tower-a',
    name: 'Tower A',
    totalUnits: 48,
    height: '12 floors',
    floors: Array.from({ length: 12 }, (_, i) => ({
      id: `floor-a-${i + 1}`,
      number: i + 1,
      units: Array.from({ length: 4 }, (_, j) => ({
        id: `unit-a-${i + 1}-${j + 1}`,
        name: `Unit ${String.fromCharCode(65 + j)}${i + 1}`,
        area: 850 + Math.floor(Math.random() * 400),
        unitType: ['Studio', '1BR', '2BR', '3BR'][j],
        rooms: j + 1,
        bathrooms: Math.ceil((j + 1) / 2),
        price: 450000 + Math.floor(Math.random() * 200000),
        thumbnail: `https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop`,
        features: ['Balcony', 'City View', 'Modern Kitchen', 'Hardwood Floors']
      }))
    }))
  },
  {
    id: 'tower-b',
    name: 'Tower B',
    totalUnits: 60,
    height: '15 floors',
    floors: Array.from({ length: 15 }, (_, i) => ({
      id: `floor-b-${i + 1}`,
      number: i + 1,
      units: Array.from({ length: 4 }, (_, j) => ({
        id: `unit-b-${i + 1}-${j + 1}`,
        name: `Unit ${String.fromCharCode(65 + j)}${i + 1}`,
        area: 920 + Math.floor(Math.random() * 500),
        unitType: ['1BR', '2BR', '3BR', 'Penthouse'][j],
        rooms: j + 1,
        bathrooms: Math.ceil((j + 1) / 2),
        price: 520000 + Math.floor(Math.random() * 300000),
        thumbnail: `https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop`,
        features: ['Ocean View', 'Premium Finishes', 'Walk-in Closet', 'Private Terrace']
      }))
    }))
  },
  {
    id: 'tower-c',
    name: 'Tower C',
    totalUnits: 40,
    height: '10 floors',
    floors: Array.from({ length: 10 }, (_, i) => ({
      id: `floor-c-${i + 1}`,
      number: i + 1,
      units: Array.from({ length: 4 }, (_, j) => ({
        id: `unit-c-${i + 1}-${j + 1}`,
        name: `Unit ${String.fromCharCode(65 + j)}${i + 1}`,
        area: 780 + Math.floor(Math.random() * 350),
        unitType: ['Studio', '1BR', '2BR', '2BR+Den'][j],
        rooms: j === 3 ? 3 : j + 1,
        bathrooms: Math.max(1, Math.ceil((j + 1) / 2)),
        price: 380000 + Math.floor(Math.random() * 180000),
        thumbnail: `https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop`,
        features: ['Garden View', 'Open Concept', 'In-unit Laundry', 'Storage Locker']
      }))
    }))
  }
];