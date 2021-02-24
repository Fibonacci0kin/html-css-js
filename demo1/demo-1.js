var arr = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法制", "爱国", "敬业", "诚信", "友善"]
document.onclick = function (x) {
    var span = document.createElement("span")
    span.style.left = x.clientX + "px"
    span.style.top = x.clientY + "px"
    span.innerHTML = arr[Math.floor(Math.random() * arr.length)]

    setTimeout(function () {
        span.style.opacity = "0"
        span.style.transform = "translateY(-200px)"
    }, 25)

    var chi = document.getElementsByClassName("span")
    for (var i = 0; i < chi.length; i++) {
        if (chi[i].style.opacity === "0") {
            document.body.removeChild(chi[i])
        }
    }
    document.body.appendChild(span)
}