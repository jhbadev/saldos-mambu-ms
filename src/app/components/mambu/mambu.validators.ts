import { body, header } from "express-validator";

export function mambuRequest() {
    
  const response = [

    body("headerRQ.msgId").notEmpty().withMessage("Campo Obligatorio"),
    body("headerRQ.timestamp").notEmpty().withMessage("Campo Obligatorio"),
    
    body("securityRQ.userId").notEmpty().withMessage("Campo Obligatorio"),
    body("securityRQ.hostId").notEmpty().withMessage("Campo Obligatorio"),
    body("securityRQ.channelId").notEmpty().withMessage("Campo Obligatorio"),
    body("securityRQ.profile").notEmpty().withMessage("Campo Obligatorio"),

    body("messageRQ.rut").notEmpty().withMessage("Campo Obligatorio"),
    body("messageRQ.numCta").notEmpty().withMessage("Campo Obligatorio"),



    header("pChannel").notEmpty().withMessage("Campo Obligatorio"),

    header("Content-Type").notEmpty().withMessage("Campo Obligatorio"),

 
  ];
  return response;
}

 