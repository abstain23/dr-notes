class AAAAA {
  static message = 'cccc'

  greet() {
    return 'aaaa'
  }
}

const aaaaaa:AAAAA = {
  greet() {
    return '1'
  }
}

const bbb:AAAAA = new AAAAA()

bbb.greet()

const ccc:typeof AAAAA = AAAAA
ccc.message
ccc.prototype.greet()

function test({x}:{x: number} = {x: 1}) {

}

interface Test {
  arr: string[]
  bb: string
}

const ccccccc:Pick<Test, 'arr'> = {arr: []}

const dddd:Omit<Test, 'arr'> = {
  bb: 'ccc'
}