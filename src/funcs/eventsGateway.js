const baseUrl = 'https://crudcrud.com/api/0671888a0f4047cca1d765647c97f7d9/eventsArray';

export const onCreateEventAfterSubmit = object => {
  fetch(baseUrl, {
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
  fetch(baseUrl)
    .then(response => response.json())
    .then(array => array.map(({_id, ...obj}) => ({...obj, id: _id})));
};