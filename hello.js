let purchaseProduct = [
        { title: 'aaa', qty: 500, p_rate: '250', sales_rate: '500', return_qty: '' },
        { title: 'bbb', qty: 550, p_rate: '400', sales_rate: '550', return_qty: '' },
        { title: 'ccc', qty: 470, p_rate: '350', sales_rate: '530', return_qty: '' },
        { title: 'ddd', qty: 200, p_rate: '400', sales_rate: '750', return_qty: '' }
]
let purchaseProductReturn = [
    { title: 'aaa', return_qty: '10' },
    { title: 'bbb', return_qty: '0' }
]

for(let i = 0; i< purchaseProductReturn.length ; i++) {
    purchaseProduct.map(ele=> {
        if(purchaseProductReturn[i].title === ele.title) {
            ele.return_qty = purchaseProductReturn[i].return_qty
        }
    })
}

console.log('purchase Data = ', purchaseProduct);