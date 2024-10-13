function changeImage(){
    const html=document.documentElement
    html.classList.toggle("light")

    var imagem=document.querySelector("#profile")
    var dt=document.getElementById("data")
    var paragraph=document.getElementById("p")
    var gender=document.getElementById("gender")
    var registro=new Date()
    dt=registro

    if(html.classList.contains("light")){
        imagem.setAttribute("src","img/img1.png")
        paragraph.style.color="blue"
        document.getElementById("data").textContent = formatarData(dt)
        gender.textContent="homem"

    }else{
        imagem.setAttribute("src","img/img2.png")
        paragraph.style.color="lightpink"
        document.getElementById("data").textContent = formatarData(dt)
        gender.textContent="mulher"
    }
}

function formatarData(item){
    var options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    };
    return item.toLocaleString("pt-BR", options)
}