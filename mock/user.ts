export default {
  'GET /api/user': {
    id: 1,
    name: 'mack',
  },
  'POST /api/login': (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('post user');
  },
};
