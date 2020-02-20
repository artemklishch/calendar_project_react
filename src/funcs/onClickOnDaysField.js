export const onClickOnPlaceInField = (event, arrDaysOfWeek, funcOnShowPopupBlock) => {
  const clickedHour = event.target;
  if(!event.target.classList.contains('main__sidebar_days_hours')) return;

  const hourNumber = +clickedHour.dataset.hourNumber;
  const dayNumber = clickedHour.closest('.main__sidebar_days_line').dataset.dayNumber;
  const currentYear = arrDaysOfWeek[dayNumber].getFullYear();
  const currentMonth = arrDaysOfWeek[dayNumber].getMonth();
  const currentDate = arrDaysOfWeek[dayNumber].getDate();

  const startTime = new Date(Date.UTC(currentYear, currentMonth, currentDate, hourNumber));
  funcOnShowPopupBlock();
   
  const myDate = document.querySelectorAll('.specialDate');
  [...myDate].forEach(elem => elem.value = new Date(startTime)
      .toISOString().substr(0, 10));

  const startHour = new Date(currentYear, currentMonth, currentDate, hourNumber).getHours();
  const endHour = startHour + 1;

  const startTimePlace = document.querySelector('.startTime_place');
  startHour < 10 
  ? startTimePlace.value = [`0${startHour}`, '00'].join(':')
  : startTimePlace.value = [`${startHour}`, '00'].join(':');
  
  const endTimePlace = document.querySelector('.endTime_place');
  endHour < 10 
  ? endTimePlace.value = [`0${endHour}`, '00'].join(':')
  : endTimePlace.value = [`${endHour}`, '00'].join(':');
  if(startHour === 23){
      [...myDate][1].value = new Date(startTime.setDate(startTime.getDate()+1))
          .toISOString().substr(0, 10);
      endTimePlace.value = [`00`, '00'].join(':');
  }

  const headerInput = document.querySelector('.event__name');
  headerInput.value = '';

  const descriptionInput = document.querySelector('.multiline__text');
  descriptionInput.value = '';
  
  // const fieldOfDays = document.querySelector('.main__sidebar_days');
  // fieldOfDays.removeEventListener('click', onClickOnPlaceInField);

  // let tempObj = onMakeObjectFromValuesInForm();
  // onClickValidate(tempObj);
};