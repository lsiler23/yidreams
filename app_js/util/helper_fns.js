import dateFormat from 'dateformat';

export const dateAndTime = (createdAt) => {
  const day = dateFormat(createdAt).slice(0, 11);
  const time = dateFormat(createdAt, 'shortTime');

  return `${day} - ${time}`;
};
