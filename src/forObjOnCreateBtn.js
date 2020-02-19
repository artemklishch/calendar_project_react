export const forObjCreateBtn = () => {
  const startHour = new Date().getHours();
  const endHour = startHour + 1;
  const date = new Date().toISOString().substr(0, 10);
  
  return {
    startTime: [startHour, '00'].join(':'),
    endTime: [endHour, '00'].join(':'),
    date,
  }
};