<?php
/**************************************************
 * CONFIGURACIÓN DE TU CUENTA DE CORREO
 **************************************************/
// $SMTP_HOST     = 'mail.productoraybanqueteriaelite.cl'; // Normalmente "mail." + tu dominio
$SMTP_HOST     = 'blue201.dnsmisitio.net'; // Normalmente "mail." + tu dominio
$SMTP_USER     = 'contacto@productoraybanqueteriaelite.cl';
$SMTP_PASSWORD = 'Gujxf+%_G_qc'; // Contraseña de tu cuenta de correo
$SMTP_PORT     = 465;  // 465 = SMTPS, 587 = STARTTLS
$SMTP_SECURE   = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
$TO_ADDRESS    = 'contacto@productoraybanqueteriaelite.cl'; // Destino de los mensajes

/**************************************************
 * INCLUIR PHPMailer SIN COMPOSER
 **************************************************/
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

/**************************************************
 * LIMPIAR Y VALIDAR LOS DATOS DEL FORMULARIO
 **************************************************/
$nombre  = filter_input(INPUT_POST, 'name',    FILTER_SANITIZE_SPECIAL_CHARS);
$email   = filter_input(INPUT_POST, 'email',   FILTER_VALIDATE_EMAIL);
$fono    = filter_input(INPUT_POST, 'phone',   FILTER_SANITIZE_SPECIAL_CHARS);
$asunto  = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_SPECIAL_CHARS);
$mensaje = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);

if (!$nombre || !$email || !$fono || !$mensaje) {
  http_response_code(422);
  echo json_encode(['estado' => 'error', 'mensaje' => 'Faltan datos obligatorios.']);
  exit;
}

/**************************************************
 * ARMAR Y ENVIAR EL CORREO
 **************************************************/
$mail = new PHPMailer(true);

try {
  // Ajustes SMTP
  $mail->isSMTP();
  $mail->Host       = $SMTP_HOST;
  $mail->SMTPAuth   = true;
  $mail->Username   = $SMTP_USER;
  $mail->Password   = $SMTP_PASSWORD;
  $mail->Port       = $SMTP_PORT;
  $mail->SMTPSecure = $SMTP_SECURE;

  // Remitente y destinatario
  $mail->setFrom($SMTP_USER, 'Formulario Web');
  $mail->addAddress($TO_ADDRESS);

  // Contenido
  $mail->isHTML(true);
  $mail->Subject = "[$asunto] Mensaje de $nombre ($fono)";
  $mail->Body    = "
    <h2>Mensaje desde el formulario de contacto</h2>
    <p><strong>Nombre:</strong>  $nombre<br>
       <strong>Email:</strong>   $email<br>
       <strong>Teléfono:</strong> $fono<br>
       <strong>Tipo:</strong>    $asunto</p>
    <p>$mensaje</p>";

  $mail->AltBody = "Nombre: $nombre\nEmail: $email\nTeléfono: $fono\nTipo: $asunto\n\n$mensaje";

  $mail->send();
  echo json_encode(['estado' => 'ok', 'mensaje' => '¡Mensaje enviado con éxito!']);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode([
    'estado'  => 'error',
    'mensaje' => 'No se pudo enviar el mensaje. Error: ' . $mail->ErrorInfo
  ]);
}