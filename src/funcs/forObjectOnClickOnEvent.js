export const forObjectOnClickOnEvent = (event, arrayOfEvents) => {
  const id = event.target.dataset.eventId;
  const currenEvent = arrayOfEvents.find(event => event.id === id);
  
  const startHour = new Date(currenEvent.startDate).getHours();
  const endHour = new Date(currenEvent.endDate).getHours();

  return {
    startTime: startHour > 9 ? [startHour, '00'].join(':') : [(`0${startHour}`), '00'].join(':'),
    endTime: endHour > 9 ? [endHour, '00'].join(':') : [(`0${endHour}`), '00'].join(':'),
    startDate: currenEvent.startDate.toISOString().substr(0, 10),
    endDate: currenEvent.endDate.toISOString().substr(0, 10),
    header: currenEvent.header,
    description: currenEvent.description,
    id: currenEvent.id,
  };
};  