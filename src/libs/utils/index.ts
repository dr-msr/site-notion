export function formatDate(date: any, local: any) {
  const d = new Date(date)
  const day = d.getDate()
  const month = d.toLocaleDateString(local, { month: 'long' })
  
  // Get ordinal suffix (st, nd, rd, th)
  const getOrdinalSuffix = (n: number) => {
    if (n > 3 && n < 21) return 'th'
    switch (n % 10) {
      case 1: return 'st'
      case 2: return 'nd'
      case 3: return 'rd'
      default: return 'th'
    }
  }
  
  return `${day}${getOrdinalSuffix(day)} ${month}`
}
