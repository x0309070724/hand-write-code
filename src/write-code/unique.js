// // 传统方式
// function unique(arr) {
//     const res = []
//     arr.forEach(item => {
//         if (res.indexOf(item) < 0) {
//             res.push(item)
//         }
//     })
//     return res
// }

function unique(arr) {
    const res = {}
    arr.forEach(item=>{
        if(!res[item]){
            res[item] = 0
        }
    })
    return Object.keys(res).map(Number)
}

// 使用 Set （无序，不能重复）
// function unique(arr) {
//     const set = new Set(arr)
//     return [...set]
// }

const res = unique([30, 10, 20, 30, 40, 10])
console.log(res)


