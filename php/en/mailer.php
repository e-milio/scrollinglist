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
    
    <table style="font-family: Georgia,Times,Times New Roman,serif; font-size: 18px; line-height: 22px;">
        <tr>
            <td>
                <p>Dear '.$uname.',  </p>
                <p>Thank you for contributing to <em>End Credits for the Places That Make Us at Queens International 2018: Volumes.</em> A copy of your entry can be found below.</p>
            </td>
        <tr>
            <td style="padding: 7px 35px;">
                <p><strong>'.$title.'</strong></p>
                <p><strong>'.$name.'</strong></p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Your entry will be on view at the Queens Museum through February 24, 2019 after which it will appear on the online version hosted on the exhibition website. An update with the link will be sent to you at that time.</p>
                <p>If you have questions or concerns feel free to reply this email.</p>
                <p>Sincerely,</p>
                <p>Emilio Martínez Poppe</p>
                <p>-</p>
                <p><em>End Credits for the Places That Make Us</em> is a participatory art project, initiated by Emilio Martínez Poppe, that invites reflection and collective recording of the ways urban places and our memory of them are layered in our bodies, in language, and in the world around us. The website hosted at the exhibition serves as a platform for aggregating these “credits”. All visitors to the Queens Museum from October 7, 2018 to February 24, 2019 are welcome to participate. The credits will be on display near the entrance to the <em>Panorama of the City of New York</em> until the end of the exhibition after which they will be hosted for public view on the Volumes: <em>Queens International 2018</em> website.</p>
                <p>Visitors are invited to honor a place (or places) that you feel have nurtured a sense of belonging in you and that are no longer there as such. This is to say, this place has been removed, replaced, forgotten, or your relationship to it has changed through distance and time.</p>
            </td>
        </tr>
    </table>
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