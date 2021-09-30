class Manager {
    constructor(max) {
        this.max = max;
        this.cbs = []
        this.waitCbs = []
    }

    add(fn) { // fn: () => Promise<any>
        if (this.cbs.length < this.max) {
            this.cbs.push(fn)
            fn().then(() => {
                let index = this.cbs.indexOf(fn)
                this.cbs.splice(index, 1)
                if (this.waitCbs.length > 0) {
                    this.add(this.waitCbs.shift())
                }
            })
        } else {
            this.waitCbs.push(fn)
        }
    }
}
const wrapper = (arg, time) => {
    return () => {
        return new Promise(res => {
            setTimeout(() => {
                console.log(arg);
                res();
            }, time)
        })
    }
}
const m = new Manager(2);

m.add(wrapper('a', 1000));
m.add(wrapper('b', 500));
m.add(wrapper('c', 300));
m.add(wrapper('d', 800));


//   0  start
//   500  b
//   800  c
//   1000  a


