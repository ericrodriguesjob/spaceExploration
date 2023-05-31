import renderView from './util/renderView'

export const routes = [
  {
    path: '/',
    view() { renderView().home() }
  },
  {
    path: '/gallery',
    view() { renderView().gallery() }
  },
  {
    path: '/apod',
    view() { renderView().apod() }
  }
]