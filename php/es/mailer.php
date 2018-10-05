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
            <td>
                <p>"'.$title.'"</p>
                <p>"'.$name.'"</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Su entrada estará a la vista en el Museo de Queens hasta el 24 de febrero de 2019, después de lo cual aparecerá en la versión alojada en el sitio web de la exposición. Se le enviará una actualización con el enlace en ese momento.</p>
            </td>
        </tr>
        <tr>
            <td>
                <p><em>End Credits for the Places That Make Us (Créditos finales de los lugares que nos hacen)</em> es un proyecto de arte participativo iniciado por Emilio Martínez Poppe que invita a al registro colectivo y a la reflexión de las formas en que los lugares urbanos se ubican en la memoria, en nuestros cuerpos, en nuestro lenguaje y en el mundo alrededor nuestro. El sitio web alojado en la exposición sirve como plataforma para agregar estos "créditos". Todos los visitantes al Queens Museum desde el 7 de octubre de 2018 hasta el 24 de febrero de 2019 están invitados a participar. Los créditos estarán en exhibición cerca de la entrada de <em>El Panorama de la Ciudad de Nueva York</em> hasta el final de la muestra, y luego se publicarán en el sitio web <em>Volumes: Queens International 2018</em>.</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Los visitantes están invitados a honrar un lugar (o lugares) que sientes que ha alimentado un sentido de pertenencia en ti y que ya no está presente como tal. Es decir, que el lugar ha sido eliminado, reemplazado, olvidado o que tu relación con él ha cambiado con la distancia y el tiempo.</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Sinceramente,</p>
                <p>Emilio Martínez Poppe</p>
            </td>
        </tr>
    </table>z
    </body>
    </html>
    ';
    $subject = 'End Credits for the Places That Make Us';
    $headers = 'MIME-Version: 1.0' . $eol;
    $headers = 'Content-type: text/html; charset=iso-8859-1' . $eol;
    $headers .= 'To:' . $to . $eol;
    $headers .= 'From: Emilio Martinez Poppe <emilio@endcredits.info>' . $eol;

    mail($to,$subject,$message,$headers);
}
?>