export const state = ()=>({
  allNews: [
    {
      id:1,
      title: 'Заголовок новости №1',
      short: 'Краткое описание новости с различными наиболее важными деталями',
      text: 'Полный текст новости, например такой: Скорее всего, вы уже знаете, что браузеры получают данные от серверов по протоколу HTTPS, файлы — по FTP-протоколу, а сервером можно управлять по SSH-протоколу. Но так как все они используют похожие схемы установления связи и логики работы, сетевые протоколы объединяют в модели передачи данных в сети.Скорее всего, вы уже знаете, что браузеры получают данные от серверов по протоколу HTTPS, файлы — по FTP-протоколу, а сервером можно управлять по SSH-протоколу. Но так как все они используют похожие схемы установления связи и логики работы, сетевые протоколы объединяют в модели передачи данных в сети.'
    },
    {
      id:2,
      title: 'Заголовок новости №2',
      short: 'Краткое описание новости с различными наиболее важными деталями',
      text: 'Полный текст новости, например такой: Скорее всего, вы уже знаете, что браузеры получают данные от серверов по протоколу HTTPS, файлы — по FTP-протоколу, а сервером можно управлять по SSH-протоколу. Но так как все они используют похожие схемы установления связи и логики работы, сетевые протоколы объединяют в модели передачи данных в сети.Скорее всего, вы уже знаете, что браузеры получают данные от серверов по протоколу HTTPS, файлы — по FTP-протоколу, а сервером можно управлять по SSH-протоколу. Но так как все они используют похожие схемы установления связи и логики работы, сетевые протоколы объединяют в модели передачи данных в сети.'
    },
    {
      id:3,
      title: 'Заголовок новости №3',
      short: 'Краткое описание новости с различными наиболее важными деталями',
      text: 'Полный текст новости, например такой: Скорее всего, вы уже знаете, что браузеры получают данные от серверов по протоколу HTTPS, файлы — по FTP-протоколу, а сервером можно управлять по SSH-протоколу. Но так как все они используют похожие схемы установления связи и логики работы, сетевые протоколы объединяют в модели передачи данных в сети.Скорее всего, вы уже знаете, что браузеры получают данные от серверов по протоколу HTTPS, файлы — по FTP-протоколу, а сервером можно управлять по SSH-протоколу. Но так как все они используют похожие схемы установления связи и логики работы, сетевые протоколы объединяют в модели передачи данных в сети.'
    },
    {
      id:4,
      title: 'Заголовок новости №4',
      short: 'Краткое описание новости с различными наиболее важными деталями',
      text: 'Полный текст новости, например такой: Скорее всего, вы уже знаете, что браузеры получают данные от серверов по протоколу HTTPS, файлы — по FTP-протоколу, а сервером можно управлять по SSH-протоколу. Но так как все они используют похожие схемы установления связи и логики работы, сетевые протоколы объединяют в модели передачи данных в сети.Скорее всего, вы уже знаете, что браузеры получают данные от серверов по протоколу HTTPS, файлы — по FTP-протоколу, а сервером можно управлять по SSH-протоколу. Но так как все они используют похожие схемы установления связи и логики работы, сетевые протоколы объединяют в модели передачи данных в сети.'
    },
    {
      id:5,
      title: 'Заголовок новости №5',
      short: 'Краткое описание новости с различными наиболее важными деталями',
      text: 'Полный текст новости, например такой: Скорее всего, вы уже знаете, что браузеры получают данные от серверов по протоколу HTTPS, файлы — по FTP-протоколу, а сервером можно управлять по SSH-протоколу. Но так как все они используют похожие схемы установления связи и логики работы, сетевые протоколы объединяют в модели передачи данных в сети.Скорее всего, вы уже знаете, что браузеры получают данные от серверов по протоколу HTTPS, файлы — по FTP-протоколу, а сервером можно управлять по SSH-протоколу. Но так как все они используют похожие схемы установления связи и логики работы, сетевые протоколы объединяют в модели передачи данных в сети.'
    },
    {
      id:6,
      title: 'Заголовок новости №6',
      short: 'Краткое описание новости с различными наиболее важными деталями',
      text: 'Полный текст новости, например такой: Скорее всего, вы уже знаете, что браузеры получают данные от серверов по протоколу HTTPS, файлы — по FTP-протоколу, а сервером можно управлять по SSH-протоколу. Но так как все они используют похожие схемы установления связи и логики работы, сетевые протоколы объединяют в модели передачи данных в сети.Скорее всего, вы уже знаете, что браузеры получают данные от серверов по протоколу HTTPS, файлы — по FTP-протоколу, а сервером можно управлять по SSH-протоколу. Но так как все они используют похожие схемы установления связи и логики работы, сетевые протоколы объединяют в модели передачи данных в сети.'
    },
  ]
});

export const getters = {
  news(state){
    return state.allNews
  }
};

export const mutations = {
  addPost(state, newPost){
    state.allNews.push(newPost)
  },
  editPost(state, freshPost){
    const currentPost = state.allNews.find(item=> item.id === freshPost.id)
    const targetIndex = state.allNews.indexOf(currentPost)
    state.allNews[targetIndex] = freshPost
  },
  deletePost(state, id){
    const currentPost = state.allNews.find(item=> item.id === id)
    const targetIndex = state.allNews.indexOf(currentPost)
    state.allNews.splice(targetIndex, 1)
  }
}
