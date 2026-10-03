import { useState } from 'react'

const topics = [
  {
    title: 'Компонент',
    description: 'Функция, которая возвращает часть интерфейса в формате JSX.',
  },
  {
    title: 'Состояние',
    description: 'Данные компонента. При их изменении React обновляет интерфейс.',
  },
  {
    title: 'Событие',
    description: 'Действие пользователя, например нажатие на эту кнопку.',
  },
] as const

export function HomePage() {
  const [topicIndex, setTopicIndex] = useState(0)
  const topic = topics[topicIndex]

  const showNextTopic = () => {
    setTopicIndex((currentIndex) => (currentIndex + 1) % topics.length)
  }

  return (
    <section>
      <p className="eyebrow">React-сервис запущен</p>
      <h1>Развиваем frontend OpenVerse постепенно</h1>
      <p className="lead">
        Начнём с компонентов, состояния и событий. Затем подключим FastAPI и
        перенесём мессенджер.
      </p>

      <article className="learning-card">
        <p className="eyebrow">Понятие {topicIndex + 1} из {topics.length}</p>
        <h2>{topic.title}</h2>
        <p>{topic.description}</p>
        <button type="button" onClick={showNextTopic}>
          Следующее понятие
        </button>
      </article>
    </section>
  )
}
