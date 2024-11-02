// src/store.ts
import { create } from 'zustand';
import axios from 'axios';
import { Derby, Catch } from './types';

// API instance
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Update base URL as needed
});

// Define Zustand store state and actions
interface StoreState {
  derbies: Derby[];
  catches: Catch[];
  fetchDerbiesByAngler: (anglerId: string) => Promise<void>;
  fetchDerbyById: (id: string) => Promise<void>;
  createDerby: (derbyData: Omit<Derby, '_id'>) => Promise<void>;
  addCatch: (catchData: Omit<Catch, '_id'>) => Promise<void>;
}

// Create Zustand store
const useStore = create<StoreState>((set) => ({
  derbies: [],
  catches: [],

  // Fetch all derbies for a specific angler
  fetchDerbiesByAngler: async (anglerId: string) => {
    try {
      const response = await api.get(`/derbies/angler/${anglerId}`);
      set({ derbies: response.data });
    } catch (error) {
      console.error("Failed to fetch derbies for angler", error);
    }
  },

  // Fetch a specific derby by ID
  fetchDerbyById: async (id: string) => {
    try {
      const response = await api.get(`/derby/${id}`);
      set((state) => ({
        derbies: [response.data, ...state.derbies.filter((derby) => derby._id !== id)],
      }));
    } catch (error) {
      console.error("Failed to fetch derby", error);
    }
  },

  // Create a new derby
  createDerby: async (derbyData: Omit<Derby, '_id'>) => {
    try {
      const response = await api.post('/derbies', derbyData);
      set((state) => ({
        derbies: [response.data, ...state.derbies],
      }));
    } catch (error) {
      console.error("Failed to create derby", error);
    }
  },

  // Add a new catch
  addCatch: async (catchData: Omit<Catch, '_id'>) => {
    try {
      const response = await api.post('/catches', catchData);
      set((state) => ({
        catches: [...state.catches, response.data],
      }));
    } catch (error) {
      console.error("Failed to add catch", error);
    }
  },
}));

export default useStore;
