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
  const links = document.querySelectorAll('header nav a')

  links.forEach(link => {
    link.onclick = e => {
      e.preventDefault()
      paginate(link.getAttribute('href'))
    }
  })

  router()
})