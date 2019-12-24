const net = require('net');
const port = process.env.PORT ? process.env.PORT - 100 : 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startElectron = false;
const tryConnection = () =>
  client.connect({ port }, () => {
    client.end();
    if (!startElectron) {
      console.log(`Starting electron`);
      startElectron = true;
      const exec = require('child_process').exec;
      exec('npm run electron-start');
    }
  });

tryConnection();

client.on('error', () => {
  // console.log('Got an error ', error);
  setTimeout(() => {
    tryConnection();
  }, 1000);
});
