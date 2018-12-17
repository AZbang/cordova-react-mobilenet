export function saveState(name, state) {
  localStorage.setItem(name, JSON.stringify(state));
}

export function getState(name) {
  return JSON.parse(localStorage.getItem(name) || 'null');
}
