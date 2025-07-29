export default {
  'GET /api/user': {
    code: 200,
    data: {
      id: 1,
      name: 'David',
    },
  },
  'POST /api/login': (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('post user');
  },
};
