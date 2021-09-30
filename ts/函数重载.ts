function attr(val: string): string
function attr(val: number): number
function attr(val: any): any {
  if(typeof val === 'string') {
    return val
  } else {
    return val + 1
  }
}

attr(1)
attr('a')

