// const lotter_number = prompt('กรอกเลขที่ต้องการซื้อ ')
// document.getElementById('lotter_number').textContent = Math.floor(Math.random() * 100)
// const input_number = document.getElementById('input_number').textContent = lotter_number

// let age =prompt('กรุณากรอกอายุของคุณ :')
// if(age >= 13){
//     document.getElementById('content').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/F6c6klpIiu8?si=UdhPJ7Sn5C_jnkM_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
// }else{
//     document.getElementById('content').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/F6c6klpIiu8?si=UdhPJ7Sn5C_jnkM_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
// }

// let lotter_number = prompt('กรุณากรอกเลขที่ต้องการซื้อ :')
// let random_number = Math.floor(Math.random() * 100)
// document.getElementById('lotter_number').textContent = random_number
// if(lotter_number == random_number){
//     document.getElementById('result').textContent = 'ถูกต้อง'
// }else{
//     document.getElementById('result').textContent = 'ไม่ถูกต้อง'
// }
    

// let score = prompt("คะแนนของคุณ :")
// if(score >= 80){
//     document.getElementById("result").innerHTML = "คุณได้เกรด A"
// } else if(score >= 70){
//     document.getElementById("result").innerHTML = "คุณได้เกรด B"
// } else if(score >= 60){
//     document.getElementById("result").innerHTML = "คุณได้เกรด C"
// } else if(score >= 50){
//     document.getElementById("result").innerHTML = "คุณได้เกรด D"
// } else{
//     document.getElementById("result").innerHTML = "คุณได้เกรด F"
// }

// for(let counter = 0; counter < 5; counter++){
//     console.log("Hello" + counter)
// }
// console.log("Exit")


let qrt = prompt("จำนวนสินค้า")
for(let i = 1; i <= qrt; i++){
    let item_price = prompt("ราคาสินค้าชิ้นที่" + i)
    document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่ " + i + ":" + item_price + "บาท"

}
