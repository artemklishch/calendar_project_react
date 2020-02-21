import { onFormObject } from './onFormObject';
export const onChangeArrayOfEvents = (array, event, isEditing) => {
  const [...arr] = array;
  const tempObj = onFormObject(event);
  let indexElement;
  if (isEditing !== false) {
    arr.forEach((elem, index) => {
      if (elem.id === isEditing) indexElement = index;
    });
    arr.splice(indexElement, 1, tempObj);
  } else arr.push(tempObj);
  return arr;
};

export const onChangeArrayOfEventsInDelete = (array, isEditing) => {
  const [...arr] = array;
  let indexElement;
  arr.forEach((elem, index) => {
    if (elem.id === isEditing) indexElement = index;
  });
  arr.splice(indexElement, 1);
  return arr;
};