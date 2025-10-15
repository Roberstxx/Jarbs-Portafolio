# Por qué una demo externa no se puede ver en el modal

La vista previa que se abre desde `PreviewModal` renderiza la URL de la demo dentro de un `<iframe>`.
El componente marca el estado de error (`failed`) cuando el `iframe` no llega a disparar el evento
`load` dentro de 8 segundos; en ese caso se muestra el mensaje **"Esta demo no permite ser embebida en un iframe."**
Puedes ver la lógica en [`src/components/PreviewModal.tsx`](../src/components/PreviewModal.tsx).

Cuando esto ocurre no es un fallo de Netlify ni del modal, sino que el servidor de la demo se niega a ser
mostrado como contenido embebido. Normalmente sucede por alguno de estos encabezados HTTP que añade el origen externo:

- `X-Frame-Options: DENY` o `X-Frame-Options: SAMEORIGIN`.
- `Content-Security-Policy: frame-ancestors 'self' ...` sin incluir al dominio que intenta integrarlo.

Mientras uno de esos encabezados esté presente el navegador bloqueará el `iframe` y nunca llegará a ejecutar el `load`.
No hay manera de saltárselo desde el front‑end, por lo que la solución es quitar o ajustar dichos encabezados en el
servidor que hospeda la demo (IONOS en el caso de jadaburger.com) para que permita a `https://jarbsportafolio.netlify.app`
como `frame-ancestor`.

Para comprobarlo puedes ejecutar, desde cualquier terminal con acceso a Internet, el siguiente comando y buscar los
encabezados comentados:

```bash
curl -I https://jadaburger.com/
```

Si ves alguno de los encabezados anteriores tendrás que modificar la configuración del hosting para eliminarlos o
sustituirlos por una política que incluya tu dominio. Consulta la documentación de tu proveedor para saber cómo
personalizar `Content-Security-Policy` o `X-Frame-Options`.
