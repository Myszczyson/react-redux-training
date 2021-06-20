
export const formatTime = (seconds) => {
  // seconds = Number(seconds);
  // let h = Math.floor(seconds / 3600);
  // let m = Math.floor(seconds % 3600 / 60);
  // let s = Math.floor(seconds % 3600 % 60);

  // let hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
  // let mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
  // let sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
  // return hDisplay + mDisplay + sDisplay;

  // Hours, minutes and seconds
  let hrs = ~~(seconds / 3600);
  let mins = ~~((seconds % 3600) / 60);
  let secs = ~~seconds % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = '';

  if (hrs > 0) {
    ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
  }

  ret += '' + mins + ':' + (secs < 10 ? '0' : '');
  ret += '' + secs;
  return ret;
};
