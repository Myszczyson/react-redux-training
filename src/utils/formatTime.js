
export const formatTime = (seconds) => {
  if(!seconds || isNaN(parseInt(seconds)) || seconds < 0) return null;

  let h = Math.floor(seconds / 3600);
  let m = Math.floor(seconds % 3600 / 60);
  let s = Math.floor(seconds % 3600 % 60);

  const pad0 = value => value.toString().padStart(2, '0');

  return `${pad0(h)}:${pad0(m)}:${pad0(s)}`;
};
