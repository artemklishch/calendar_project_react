const baseUrl = 'https://crudcrud.com/api/60bfb24803d94f51a47eb0d3413c220/eventsArray';

export const onCreateEventAfterSubmit = object => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(object),
  })
  .then(response => {
    if(!response.ok) throw new Error('Failed to create event');
  });
};

export const fetchForGetData = () => {
  return fetch(baseUrl)
    .then(response => response.json())
    .then(array => array.map(({_id, ...obj}) => ({...obj, id: _id})));
};