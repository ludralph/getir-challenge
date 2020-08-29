const app = require('./app');
const dbConnection = require('./database');
const { PORT } = require('./config/config');

dbConnection();

app.listen(PORT, () => {
  console.log(
    `gerit express server is listening on port ${ PORT }...`
  );
});