Promise.any = promises => {
    return new Promise((resolve, reject) => {
        let len = promises.length
        let resolved = false
        for(let promise of promises) {
            promise.then(value => {
                if (resolved) return
                resolved = true
                resolve(value)
            }, err => {
                len -= 1
                if(len === 0) {
                    reject('no resolved')
                }
            })
        }
    })
}

const pErr = new Promise((resolve, reject) => {
    reject("总是失败");
  });
  
  const pSlow = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "最终完成");
  });
  
  const pFast = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "很快完成");
  });

//   Promise.any([pErr, pSlow, pFast]).then((value) => {
//     console.log(value);
//     // pFast fulfils first
//   }).catch(err => console.log(err))

  Promise.any([pErr]).catch(err => console.log(err))