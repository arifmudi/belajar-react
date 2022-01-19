

// const merupakan varible yang tidak bisa dirubah
// const harga = 3000;

// var itu global scope
// var harga = 6000;
// if (true) {
//     var harga = 10000;
// }

// let itu block scope
let harga = 2000;
if (true) {
    let harga = 500;
}

// disarankan menggunakan let

const Variable = () => {
    return (
        <div>
            <h2>Belajar Variable</h2>
            <h3>Harga { harga }</h3>
        </div>
    )
}

export default Variable;