// src/types.ts
export interface Derby {
    _id: string;
    name: string;
    start_date: string;
    end_date: string;
  }
  
  export interface Catch {
    _id: string;
    species: string;
    weight: number;
    location: string;
  }
  
export interface StoreState {
  derbies: Derby[];
  catches: Catch[];
  fetchDerbiesByAngler: (anglerId: string) => Promise<void>;
  fetchDerbyById: (id: string) => Promise<void>;
  createDerby: (derbyData: Omit<Derby, '_id'>) => Promise<void>;
  addCatch: (catchData: Omit<Catch, '_id'>) => Promise<void>;
}