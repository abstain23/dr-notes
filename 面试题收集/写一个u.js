class U {
  console(params) {
    console.log(params)
    return this
  }
  setTimeout(time) {
    const start = Date.now()
    while (Date.now() - start < time) {}
    return this
  }
}

const u = new U()

u.console('breakfast')
  .setTimeout(3000)
  .console('lunch')
  .setTimeout(3000)
  .console('dinner')
