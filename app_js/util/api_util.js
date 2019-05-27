export const createDream = ({ body, is_private }) => (
  $.ajax({
    method: 'post',
    url: '/dreams',
    data: { body, is_private }
  })
);
