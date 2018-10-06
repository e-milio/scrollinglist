<?php
if($_POST){
    $uname = $_POST['uname'];
    $to = $_POST['uemail'];
    $title = $_POST['title'];
    $name = $_POST['name'];
    $eol = PHP_EOL;
    $message = '
    
    <html>
    <head>
    <title>ScrollingList</title>
    </head>
    <body>
    
    <table style="font-family: Georgia, serif; font-size: 18px; line-height: 22px;">
        <tr>
            <td>
                <p>Estimado '.$uname.',  </p>
                <p>Gracias por contribuir a End Credits for the Places That Make Us en la muestra Volumes: Queens International 2018. Una copia de su entrada se puede encontrar a continuación.</p>
            </td>
        </tr>
        <tr>
            <td style="padding: 7px 35px;">
                <p><strong>'.$title.'</strong></p>
                <p><strong>'.$name.'</strong></p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Tu entrada se podrá ver en el Queens Museum hasta el 24 de febrero de 2019, y después aparecerá en la versión online en el sitio web de la exposición. En ese momento te enviaremos una actualización con el enlace.</p>
                <p>If you have questions or concerns feel free to reply to this email.</p>
                <p>Sinceramente,</p>
                <p>Emilio Martínez Poppe</p>
                <p>-</p>
                <p><em>End Credits for the Places That Make Us [Créditos finales de los lugares que nos hacen]</em> es un proyecto de arte participativo iniciado por Emilio Martínez Poppe que invita a la reflexión y al registro colectivo de las maneras en que los lugares urbanos, y nuestras memorias de ellos, se configuran en nuestros cuerpos, en nuestro lenguaje y en el mundo alrededor nuestro. Este sitio web sirve como plataforma para agregar estos "créditos". Todos los visitantes al Queens Museum entre el 7 de octubre de 2018 y el 24 de febrero de 2019 están invitados a participar. Los créditos estarán en exhibición cerca de la entrada al <em>Panorama of the City of New York</em> hasta el final de la muestra, y luego se publicarán en el sitio web <em>Queens International 2018: Volumes</em>.</p>
                <p>Te invitamos a evocar y honrar algún lugar (o lugares) que alimentó en ti un sentido de pertenencia, y que ya no está presente como tal. Es decir, que ese lugar ha sido eliminado, reemplazado, olvidado o que tu relación con él ha cambiado con la distancia y el tiempo.</p>
                <p><a href="https://endcredits.info/about/en" target="_blank">Haz click aquí para mayor información</a></p>
            </td>
        </tr>
    </table>z
    </body>
    </html>
    ';
    $subject = 'End Credits for the Places That Make Us';
    $headers = 'MIME-Version: 1.0' . $eol;
    $headers = 'Content-type: text/html; charset=UTF-8' . $eol;
    $headers .= 'To:' . $to . $eol;
    $headers .= 'From: Emilio Martinez Poppe <emilio@endcredits.info>' . $eol;

    mail($to,$subject,$message,$headers);
}
?>