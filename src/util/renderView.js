import { getView, fetchAPOD } from './ajax'

function fetchAPI() {
  const url = `https://api.nasa.gov/planetary/apod?api_key=3AXsuVMwkt39C3DFsah6PZtGbQBuXgre46ISpntw`

  fetchAPOD({
    url,
    success(data) {
      renderAPIToHTML(data)
    },
    error(error) {
      renderAPIToHTML({
        title: 'Sorry, something went wrong',
        date: new Date(),
        explanation: '',
        media_type: '',
        url: 'https://img.icons8.com/?size=512&id=o98HlN3hzQOO&format=png'
      })
    }
  })
}

function renderAPIToHTML({ title, date, media_type, url, explanation }) {
  const boxAPOD = document.querySelector('.box-apod')

  boxAPOD.innerHTML = `
    <h3>${title}</h3>
    <span>${date}</span>
    ${(media_type === 'video') ? 
    `<iframe src=${url} scrolling="no" frameborder="0"></iframe>`
    :
    `<img src="${url}" alt="APOD Image"></img>`
    }
    <p>${explanation.split('.')[0]}...</p>
    <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank">Read more...</a>
  `
}

export default function renderView() {
  const root = document.getElementById('root')

  return {
    home() {
      getView({
        url: '../views/home.html',
        success( data ) {
          root.innerHTML = data
        }
      })
    },

    gallery() {
      getView({
        url: '../views/gallery.html',
        success( data ) {
          root.innerHTML = data
        }
      })
    },

    apod() {
      fetchAPI()
      getView({
        url: '../views/apod.html',
        success( data ) {
          root.innerHTML = data
        }
      })
    },

    login() {
      getView({
        url: '../views/login.html',
        success( data ) {
          root.innerHTML = data
        }
      })
    }
  }
}