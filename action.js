// Action

function getDataPrincipal(action) {
    let lblTemp = document.getElementById('resume').getElementsByTagName('label')[0],
        lblCold = document.getElementById('lblCold').getElementsByTagName('label')[0],
        lblHot = document.getElementById('lblHot').getElementsByTagName('label')[0],
        temp = parseInt(lblTemp.innerText),
        cold = parseInt(lblCold.innerText.split(' ')),
        hot = parseInt(lblHot.innerText.split(' '));
    if (action == 'sum' && hot != temp) {
        temp += 1
    } else if (action == 'sub' && cold != temp) {
        temp -= 1
    }
    lblTemp.innerText = temp + ' °C'

    ducha.procedimientoParcial()
}
document.getElementById('upTemp').addEventListener('click', () => {
    getDataPrincipal('sum')
})
document.getElementById('downTemp').addEventListener('click', () => {
    getDataPrincipal('sub')
})