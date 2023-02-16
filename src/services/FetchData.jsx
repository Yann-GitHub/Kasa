export async function fetchData() {
  try {
    const response = await fetch('../data/logements.json')
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error("Une erreur s'est produite", error)
  }
}
