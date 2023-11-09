// устанавливаем обработчик событий, вызываемый при ошибке
socket.onerror = function(event) {
    console.error("Ошибка WebSocket");
    socket.close(); // закрываем подключение к серверу
  }
  // устанавливаем обработчик событий, вызываемый при закрытии соединения
  socket.onclose = function(event) {
    socket.send("соединение с сервером завершено");
  }