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
    }
  }
}