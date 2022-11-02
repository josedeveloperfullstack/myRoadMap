import qrcode from 'https://cdn.skypack.dev/qrcode';

console.log(qrcode)

const from = document.querySelector('#qr-form')
from.addEventListener('submit', async function(e){
e.preventDefault();
const data = new FormData(from)
const values = Object.fromEntries(data)
console.log(values.qrname)
const svgCode = await qrcode.toString(values.qrname, {
    type: 'png',
    color: {
        light: '#3685FF',
        dark: '#ffffff'
    }
})
document.querySelector('#qr-picture').innerHTML = svgCode;
})
