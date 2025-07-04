<?php
/* ==== 1. CORS y tipo de respuesta ==== */
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

/* ==== 2. Solo aceptamos POST ==== */
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  echo json_encode(["status"=>"error","message"=>"Método no permitido"]);
  exit;
}

/* ==== 3. Configura tu cuenta SMTP ==== */
$SMTP_HOST     = 'blue201.dnsmisitio.net';
$SMTP_USER     = 'contacto@productoraybanqueteriaelite.cl';
$SMTP_PASSWORD = 'Gujxf+%_G_qc';
$SMTP_PORT     = 465;                       // 465: SMTPS  |  587: STARTTLS
$SMTP_SECURE   = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
$TO_ADDRESS    = 'contacto@productoraybanqueteriaelite.cl';

/* ==== 4. Incluye PHPMailer (sin Composer) ==== */
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

/* ==== 5. Sanitiza y valida ==== */
$nombre  = filter_input(INPUT_POST, 'name',    FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$email   = filter_input(INPUT_POST, 'email',   FILTER_VALIDATE_EMAIL);
$fono    = filter_input(INPUT_POST, 'phone',   FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$asunto  = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$mensaje = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

if (!$nombre || !$email || !$mensaje) {
  http_response_code(422);
  echo json_encode(["status"=>"error","message"=>"Faltan datos obligatorios."]);
  exit;
}

/* ==== 6. Código de seguimiento ==== */
$timestamp       = date("YmdHis");
$codePart        = strtoupper(substr(preg_replace('/[^A-Za-z0-9]/', '', $asunto), 0, 6));
$namePart        = strtoupper(substr(preg_replace('/[^A-Za-z0-9]/', '', $nombre), 0, 4));
$tracking_raw    = $codePart . $timestamp . '-' . $namePart;
$tracking_code   = hash('sha256', $tracking_raw);

/* ==== 7. Configura el mailer ==== */
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
try {
  // $mail->SMTPDebug = 2; // 🔹 Activa para depurar si algo falla
  $mail->isSMTP();
  $mail->Host       = $SMTP_HOST;
  $mail->SMTPAuth   = true;
  $mail->Username   = $SMTP_USER;
  $mail->Password   = $SMTP_PASSWORD;
  $mail->Port       = $SMTP_PORT;
  $mail->SMTPSecure = $SMTP_SECURE;

  /* Remitente y destinatario */
  $mail->setFrom($SMTP_USER, 'Formulario Web');
  $mail->addAddress($TO_ADDRESS);

  /* Asunto */
  $mail->Subject = "[$asunto] Mensaje de $nombre ($fono)";

  /* ==== 8. Cuerpo HTML ==== */
  $body  = "<h2>Nuevo mensaje de contacto</h2>";
  $body .= "<p><strong>Nombre:</strong> $nombre</p>";
  $body .= "<p><strong>Correo:</strong> $email</p>";
  if ($fono)  $body .= "<p><strong>Teléfono:</strong> $fono</p>";
  $body .= "<p><strong>Asunto:</strong> $asunto</p>";
  $body .= "<p><strong>Mensaje:</strong><br>$mensaje</p>";
  $body .= "<p><strong>Código de seguimiento:</strong> $tracking_code</p>";

  $mail->isHTML(true);
  $mail->Body    = $body;
  $mail->AltBody = strip_tags(str_replace("<br>", "\n", $body));

  /* ==== 9. Adjuntar archivo (opcional) ==== */
  if (!empty($_FILES['file']['tmp_name'])) {
    if ($_FILES['file']['error'] === UPLOAD_ERR_OK) {
      if ($_FILES['file']['size'] > 2 * 1024 * 1024) {
        throw new Exception('El archivo supera los 2 MB.');
      }
      $mail->addAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
    } else {
      throw new Exception('Error al subir el archivo.');
    }
  }

  /* ==== 10. Enviar ==== */
  $mail->send();
  echo json_encode([
    "status"        => "success",
    "message"       => "¡Mensaje enviado con éxito!",
    "tracking_code" => $tracking_code
  ]);

} catch (Exception $e) {
  http_response_code(500);
  echo json_encode([
    "status"  => "error",
    "message" => "No se pudo enviar el mensaje. {$mail->ErrorInfo}"
  ]);
}