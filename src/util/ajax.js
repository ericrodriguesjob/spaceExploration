export async function getView({ url, success, error }) {
  try {
    const request = await fetch(url)
    const response = await request.text()
    success(response)
  } catch (err) {
    error(err)
  }
}