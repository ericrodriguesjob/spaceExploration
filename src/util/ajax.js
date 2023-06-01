const boxLoading = document.querySelector('.box-loading')
boxLoading.classList.add('active')

export async function getView({ url, success, error }) {
  try {
    const request = await fetch(url)
    const response = await request.text()
    success(response)
    boxLoading.classList.remove('active')
  } catch (err) {
    error(err)
  }
}

export async function fetchAPOD({ url, success, error }) {
  try {
    const request = await fetch(url)
    const response = await request.json()
    success(response)
    if (request.status === 200) {
      boxLoading.classList.remove('active')
    }
  } catch (err) {
    error(err)
  }
}