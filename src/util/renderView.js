import { getView } from './ajax'

const root = document.getElementById('root')

export default function renderView() {
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
      getView({
        url: '../views/apod.html',
        success( data ) {
          root.innerHTML = data
        }
      })
    }
  }
}