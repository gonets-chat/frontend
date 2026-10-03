export function MessengerPage() {
  return (
    <section>
      <p className="eyebrow">Первый модуль для миграции</p>
      <h1>Мессенджер</h1>
      <p className="lead">
        Здесь появится React-версия текущего мессенджера. Backend и его контракты
        останутся источником данных.
      </p>

      <article className="module-card">
        <h2>Будущие компоненты</h2>
        <ul>
          <li>ChatList — список и выбор чатов</li>
          <li>Conversation — сообщения выбранного чата</li>
          <li>MessageComposer — отправка сообщения</li>
          <li>WebSocketProvider — соединение и события</li>
        </ul>
      </article>
    </section>
  )
}
