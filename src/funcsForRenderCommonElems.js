import moment from 'moment';

export const onGenerateCurrentWeek = () => {
  const firstDayOfWeek = new Date();
  while (firstDayOfWeek.getDay() !== 0) {
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 1);
  }
  return Array(7).fill(null)
    .map(elem => {
      elem = new Date(firstDayOfWeek);
      firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1);
      return elem;
    });
};

export const onGenerateAnotherWeek = (event, array)  => {
  const checkArrow = event.target.classList.contains('nav__arow_left') ||
    event.target.classList.contains('nav__arow_right');
  if (!checkArrow) return;

  return array.map(date =>
    event.target.classList.contains('nav__arow_right')
      ? new Date(date.setDate(date.getDate() + 7))
      : new Date(date.setDate(date.getDate() - 7)));
};

export const onRenderTitleDate = (firstDayOfWeek, lastDayOfWeek) => {
  const firstDayMonth = moment(firstDayOfWeek).format('MMM');
  const firstDayYear = moment(firstDayOfWeek).format('YYYY');

  const lastDayMonth = moment(lastDayOfWeek).format('MMM');
  const lastDayYear = moment(lastDayOfWeek).format('YYYY');

 return firstDayMonth === lastDayMonth && firstDayYear === lastDayYear
    ? `${firstDayMonth} ${firstDayYear}`
    : firstDayMonth !== lastDayMonth && firstDayYear === lastDayYear
      ? `${firstDayMonth} - ${lastDayMonth.toLocaleLowerCase()} ${firstDayYear}`
      : firstDayMonth !== lastDayMonth && firstDayYear !== lastDayYear
        ? `${firstDayMonth} ${firstDayYear} - ${lastDayMonth} ${lastDayYear}`
        : '';
};