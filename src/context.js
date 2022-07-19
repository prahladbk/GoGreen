import create from "zustand";

const useStore = create((set) => ({
  state: false,
  toggle: (state) => set({ state: state }),
  profile: null,
  setProfile: (profile) => set({ profile: profile }),
}));

export default useStore;
