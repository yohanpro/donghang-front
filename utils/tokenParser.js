export const parseToken = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]))
  } catch (error) {
    return {}
  }
}
