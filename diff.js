const isObject = obj => Object(obj) === obj

const isArray = Array.isArray

const mut = (obj, [key, value]) => {
    obj[key] = value
    return obj
}

const diff1 = (left = {}, right = {}, rel = "left") =>
    Object.entries(left).map(([key, value]) =>
        isObject(value) && isObject(right[key]) ?
        [key, diff1(value, right[key], rel)] :
        right[key] !== value ?
        [key, {
            [rel]: value
        }] :
        [key, {}]
    ).filter(([key, value]) => Object.keys(value).length !== 0)
     .reduce(mut, isArray(left) && isArray(right) ? [] : {})

const merge = (left = {}, right = {}) =>
    Object.entries(right)
    .map(([key, value]) =>
        isObject(value) && isObject(left[key]) ?
        [key, merge(left[key], value)] :
        [key, value]
    )
    .reduce(mut, left)


const diff = (x = {}, y = {}) => merge(diff1(x, y, "left"), diff1(y, x, "right"))


const x = {
    a: 1,
    b: [{
        c: 1
    }, {
        d: 1
    }, {
        e: 1
    }]
}

const y = {
    a: 1,
    b: [{
        c: 2
    }, {
        d: 1
    }, 5, 6],
    z: 2
}

console.log(diff(x, y))