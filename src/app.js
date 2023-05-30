import { routes } from './routes'

function router() {
  const matches = routes.map(route => {
    return {
      route,
      isMatch: location.pathname === route.path
    }
  })

  let match = matches.find(match => match.isMatch)

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true
    }
  }

  match.route.view()
}

/***
 * @description works together with history.pushState 
 */
window.addEventListener('popstate', router)

function paginate(url) {
  history.pushState(null, null, url)
  router()
}

document.addEventListener('DOMContentLoaded', () => {
  const responsiveMenu = document.querySelector('header nav')
  const btnBar = document.querySelector('#bar')

  btnBar.onclick = () => responsiveMenu.classList.toggle('active')

  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault()
      paginate(e.target.href)
      responsiveMenu.classList.remove('active')
    }
  })



  router()
})