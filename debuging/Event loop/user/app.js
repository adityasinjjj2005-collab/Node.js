const http = require('http');
const userrequestHandler = require('./first');

const server = http.createServer(userrequestHandler);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});