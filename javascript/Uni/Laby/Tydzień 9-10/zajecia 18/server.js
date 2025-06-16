const WebSocket = require('ws');

// Tworzenie serwera WebSocket na porcie 3000
const server = new WebSocket.Server({ port: 3000 });

console.log('Serwer WebSocket działa na ws://localhost:3000');

// Obsługa połączeń klientów
server.on('connection', (socket) => {
  console.log('Nowy klient połączony');

  // Obsługa wiadomości od klienta
  socket.on('message', (message) => {
    console.log(`Odebrano: ${message}`);

    // Wysyłanie wiadomości do wszystkich podłączonych klientów
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});
