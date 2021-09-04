export const checkNickname = async ():Promise<boolean> => {
  await timeout(1000)
  return true
}

function timeout (ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
