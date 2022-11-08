const app = require('./app');

const PORT: string = process.env.PORT || '3000';

app.listen(PORT, (err: any) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${PORT}`);
});
