var cybercops = ['Jupiter', 'Marte', 'Saturno', 'Mercurio', 'Lucifer', 'Tomoko']

function listaCybercops() {

    var ul = document.getElementById('cybercops')
    ul.innerHTML = ''

    cybercops.forEach(function (a) {

        var li = document.createElement('li')
        var text = document.createTextNode(a)
        li.appendChild(text)
        ul.appendChild(li)
    })
}