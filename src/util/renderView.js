import { getView } from './ajax'
import { fetchAPI } from './renderAPI'

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