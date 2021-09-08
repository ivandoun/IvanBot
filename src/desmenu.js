const desmenu = (prefix, pushname) => {
    return `
*Comandos De Descargas ✅*
 
══════════════

*AUDIO*

${prefix}play2
Una alternativa por si *play llego a su limite de canciones

${prefix}play
Coloca el nombre de la cancion, o el link del video YT

Ejemplo:
${prefix}play Industry Baby - Lil Nas X

══════════════

*VIDEO*

${prefix}ytmp4
Descarga videos de YouTube

Ejemplo:
${prefix}ytmp4 www.youtube.com/xxxxxxxx

══════════════
    
_*play y *play2 tiene un limite de 2000 canciones en el server, si llega a su limite se restablecera dentro de 24 horas_
     
𝒃𝒚 𝒊𝒗𝒂𝒏𝒅𝒐𝒖𝒏`

}

exports.desmenu = desmenu
