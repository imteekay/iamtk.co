type Value = number | string | { [name: string]: Value };

export const LocalStorage = {
  get: (key: string) => {
    return JSON.parse(localStorage.get(key));
  },
  set: (key: string, value: Value) => {
    localStorage.set(key, JSON.stringify(value));
  },
};
