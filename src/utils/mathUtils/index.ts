const roundTo2th = (number: number) => {
  return Math.round(parseFloat(String(number)) * 100) / 100
}

export {
  roundTo2th
}
