export const createDream = ({ body, is_private }) => (
  $.ajax({
    method: 'post',
    url: '/dreams',
    data: { body, is_private }
  })
);

export const queryDreams = (query) => (
  $.ajax({
    url: '/dreams',
    dataType: 'json',
    data: { query }
  })
);
