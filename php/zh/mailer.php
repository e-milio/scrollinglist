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
                <p>亲爱的 '.$uname.',  </p>
                <p>感谢您为有关我们的地点的最终学分做出贡献：Queens International 2018.您可以在下面找到您的参赛作品的副本。</p>
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
                <p>您的参赛作品将于2019年2月24日在皇后区博物馆展出，之后将出现在展览网站上的在线版本中。此时将向您发送包含该链接的更新。</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>“让我们成为场所的最终学分”是由EmilioMartínezPoppe发起的参与式艺术项目，它邀请反思和集体记录城市地方的方式，我们对它们的记忆在我们的身体，语言和世界各地分层我们。在展览会上主持的网站作为聚合这些“学分”的平台。欢迎所有参观2018年10月7日至2019年2月24日皇后区博物馆的游客参加。学分将在纽约市全景入口附近展出，直至展览结束，之后将在“卷：皇后国际2018”网站上公开观看。</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>邀请访客尊重您认为已培养归属感的一个或多个地方，并且不再存在。也就是说，这个地方已被移除，替换，遗忘，或者您与它的关系已经因距离和时间而改变。</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>此致,</p>
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