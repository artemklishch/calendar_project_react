export const forObjCreateBtn = () => {
  const startHour = new Date().getHours();
  const endHour = startHour + 1;
  const date = new Date().toISOString().substr(0, 10);
  return {
    startTime: startHour > 9 ? [startHour, '00'].join(':') : [(`0${startHour}`), '00'].join(':'),
    endTime: endHour > 9 ? [endHour, '00'].join(':') : [(`0${endHour}`), '00'].join(':'),
    date,
  }
};