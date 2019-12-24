const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
let orderArr = {};
let finalArr = [];
let abcArr = [];

function orderByProps(obj, arr) {
    for (let property in obj) {
      for (let prop in arr) {
          let item = arr[prop];
          if (property == item) {
            orderArr[property] = obj[property];
            delete obj[property];
          }
      }
    }

    for (let order in orderArr) {
      finalArr.push({key: order, value: orderArr[order]});
    }

    for (let abc in obj) {
      abcArr.push({key: abc, value: obj[abc]});
      abcArr.sort(function(a, b){
        let nameA=a.key.toLowerCase(), nameB=b.key.toLowerCase()
        if (nameA < nameB)
          return -1
        if (nameA > nameB)
          return 1
        return 0
        })
    }
    
    obj = finalArr.concat(abcArr);
    
    return obj;

}    

console.log(orderByProps(obj, ['name','level']));

export {orderByProps, obj};
