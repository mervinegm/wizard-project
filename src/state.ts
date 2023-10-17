const state = {
  data: {},
  listeners: [],
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const callback of this.listeners) {
      callback();
    }
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
};

export { state };
