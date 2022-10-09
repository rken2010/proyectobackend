
const socket = io.connect();

socket.on("messages", function(data){ render(data)})

function render(data) {
    const html = data.map((elem, index) => {
        return (
            `<div>
                <strong>${elem.author.nick}</strong>
                <em> ${elem.mje}
            </div>
            `
        ).join("")
    })
    document.getElementById("chat").innerHTML = html
}

function addMessage (e) {
    const mensaje = {
        author: document.getElementById("username").value,
        mensaje: document.getElementById("inputMensaje").value
    }
    socket.emit("new-message", mensaje);
    return false;
}
/*
const socket = io.connect();

function addMessage(e) {
    const message = {
        author: document.getElementById("username").value,
        message: document.getElementById("text").value,
    }

    socket.emit("new-message", message);
    return false
}

function render(data) {
    const html = data.map((elem, index) => {
        return(`<div>
        <strong>${elem.author}</strong>
        <em>${elem.message}</em>
        </div>`)
    }).join(" ")

    document.getElementById("messages").innerHTML = html
}

socket.on("messages", function(data) {render(data)})
*/