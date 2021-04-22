function convertTime (input) {
  // console.log(typeof input, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
  const date = new Date(input)
  // console.log(typeof date, 'typppppppeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
  // console.log(date, 'daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaate')
  return date.toDateString()
}

function getStripDate (input) {
  const date = new Date(input)
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  if (month < 10) {
    month = `0${month}`
  }
  if (day < 10) {
    day = `0${day}`
  }
  // console.log(`${year}-${month}-${day}`)
  return `${year}-${month}-${day}`
}

export { convertTime, getStripDate }
