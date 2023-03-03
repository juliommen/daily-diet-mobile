export function formatDatePtToIso(date: string) {
  const dateArray = date.split('/')
  const dateFormatted = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0]
  return dateFormatted
}

export function isDateValid(date: string) {
  const dateformat = /^(0?[1-9]|[1-2][0-9]|3[01])[/](0?[1-9]|1[0-2])/

  if (date.match(dateformat)) {
    const operator = date.split('/')

    let datepart: any = []
    if (operator.length > 1) {
      datepart = date.split('/')
    }
    const day = parseInt(datepart[0])
    const month = parseInt(datepart[1])
    const year = parseInt(datepart[2])

    if (month > 12) {
      return false
    }

    const ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (month === 1 || month > 2) {
      if (day > ListofDays[month - 1]) {
        return false
      }
    } else if (month === 2) {
      let leapYear = false
      if ((!(year % 4) && year % 100) || !(year % 400)) leapYear = true
      if (leapYear === false && day >= 29) {
        return false
      } else if (leapYear === true && day > 29) {
        return false
      }
    }
  } else {
    return false
  }
  return true
}

export function isTimeValid(time: string) {
  const [hour, minutes] = time.split(':').map((v) => Number(v))
  if (time.length !== 5) {
    return false
  }

  if (hour < 0 || hour > 23) {
    return false
  }
  if (minutes < 0 || minutes > 59) {
    return false
  }

  return true
}

export function formatTimeToMinutes(time: string) {
  const [hour, minutes] = time.split(':').map((v) => Number(v))
  const totalMinutes = hour * 60 + minutes
  return totalMinutes
}
