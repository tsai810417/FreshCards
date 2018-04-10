export const fetchSearch = () => (
  $.ajax({
    url: 'api/search',
    method: 'GET'
  })
);
