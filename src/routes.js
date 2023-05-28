import renderView from './util/renderView'

export const routes = [
  {
    path: '/',
    view() { renderView().home() }
  }
]