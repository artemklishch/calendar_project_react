export const forObjCreateBtn = () => {
  const startHour = new Date().getHours();
  const endHour = startHour === 23 ? 0 : startHour + 1;
 
  const startD = new Date().toISOString().substr(0, 10);
  const endD = endHour === 0
    ? new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().substr(0, 10)
    : startD;
  return {
    startTime: startHour > 9 ? [startHour, '00'].join(':') : [(`0${startHour}`), '00'].join(':'),
    endTime: endHour > 9 ? [endHour, '00'].join(':') : [(`0${endHour}`), '00'].join(':'),
    startDate: startD,
    endDate: endD,
  }
};