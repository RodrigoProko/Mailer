window.onload = () => {
    const $form=document.getElementById('mailer-form')
    $form.style.fontFamily = 'Sans-serif'
    $form.style.fontStyle = 'italic'
    $form.style.backgroundColor = '#fff';
    $form.style.margin = 'auto';
    $form.style.width = '90%';
    $form.style.maxWidth = '400px'
    $form.style.padding = '5px 5px'
    $form.style.borderRadius = '10px'
    $form.style.boxShadow = '0 5px 10px -5px rgb(0,0,0,30%)'
    $form.style.textAlign = 'center'

    const $title = document.getElementById('title')
    $title.style.fontFamily = 'cursive'

    const $body = document.getElementById('cuerpo')
    $body.style.backgroundColor = '#e5e5f7'
   
    const $destino = document.getElementById('form-destino')
    $destino.style.color = '#0064FF'
    $destino.style.textAlign = 'left'
    $destino.style.margin = '5%'
    $destino.style.fontFamily = 'Sans-serif'

    const $destinoInput = document.getElementById('destino-input')
    $destinoInput.style.width = '80%'
    $destinoInput.style.border = 'none'
    $destinoInput.style.outline = 'none'
    $destinoInput.style.borderBottom = '1px solid'
    $destinoInput.style.fontSize = '18px'
    $destinoInput.style.fontFamily = 'Roboto','sans-serif'

    const $asunto = document.getElementById('form-asunto')
    $asunto.style.color = '#0064FF'
    $asunto.style.textAlign = 'left'
    $asunto.style.margin = '5%'
    $asunto.style.fontFamily = 'Sans-serif'
    
    const $asuntoInput = document.getElementById('asunto-input')
    $asuntoInput.style.width = '50%'
    $asuntoInput.style.border = 'none'
    $asuntoInput.style.outline = 'none'
    $asuntoInput.style.borderBottom = '1px solid'
    $asuntoInput.style.fontSize = '18px'
    $asuntoInput.style.fontFamily = 'Roboto','sans-serif'
    
    const $mensaje = document.getElementById('mensaje')
    $mensaje.style.textAlign = 'center'
    $mensaje.style.margin = '20px'
    $mensaje.style.textDecoration = 'underline'
    
    const $mensajeAerea = document.getElementById('mensaje-textarea')
    $mensajeAerea.style.width = '100%'
    $mensajeAerea.style.paddingBottom = '10%'
    $mensajeAerea.style.marginTop = '5px'

    const $btn = document.getElementById('btn')
    $btn.style.width = '80%'
    $btn.style.background = '#3866f2'
    $btn.style.color = '#fff'
    $btn.style.borderRadius = '3px'
    $btn.style.margin = '3%'
    $btn.style.padding = '2%'
    $btn.style.fontFamily = 'Sans-serif'
    $btn.style.cursor = 'pointer'

    const $error = document.getElementById('error')
    $error.style.textAlign = 'center'
    $error.style.width = '50%'
    $error.style.color = '#fff'
    $error.style.margin = 'auto'
    $error.style.borderRadius = '3px'
    $error.style.backgroundColor = '#F94040'
    $error.style.paddingLeft = '10px'
    $error.style.paddingRight = '3px'



    const mailerform = document.getElementById('mailer-form')
    mailerform.onsubmit = async (e) => {
        e.preventDefault()
        const error = document.getElementById('error')
        error.innerHTML = ''
        const formData = new FormData(mailerform)
        const data = Object.fromEntries(formData.entries())
        const response = await fetch('/send', {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json',
            }
        })
        const responseText = await response.text()
        if (response.status > 300) {
            error.innerHTML = responseText
            return
        }

        mailerform.reset()
        alert('correo enviado con éxito')
    }
}