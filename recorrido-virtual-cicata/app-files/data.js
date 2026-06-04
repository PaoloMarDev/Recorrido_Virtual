var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada-cicata",
      "name": "Entrada CICATA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.24817154764432914,
        "pitch": -0.0945363724796291,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": -0.5208853415230195,
          "pitch": 0.0008839448952571161,
          "rotation": 1.583185307179586,
          "target": "1-zona-exterior"
        },
        {
          "yaw": -0.9061242135186589,
          "pitch": -0.06317819442235262,
          "rotation": 0,
          "target": "2-letras-cicata"
        }
      ],
      "mediaHotspots": [
        
      ]
    },
    {
      "id": "1-zona-exterior",
      "name": "Zona-Exterior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2001,
      "initialViewParameters": {
        "yaw": 0.9550742392403748,
        "pitch": -0.024445585235293166,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": -1.444129898834614,
          "pitch": 0.015834386222316255,
          "rotation": 0,
          "target": "0-entrada-cicata"
        },
        {
          "yaw": 0.2994789997697822,
          "pitch": -0.09858577344548891,
          "rotation": 0,
          "target": "2-letras-cicata"
        },
        {
          "yaw": 1.4639306234619216,
          "pitch": 0.010122502069087602,
          "rotation": 0,
          "target": "3-estacionamiento-exterior"
        }
      ],
    },
    {
      "id": "2-letras-cicata",
      "name": "Explanada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.989709422953963,
        "pitch": -0.08089570356876408,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 2.391609466474854,
          "pitch": 0.10583648617019392,
          "rotation": 0,
          "target": "13-lobby-piso-1"
        },
        {
          "yaw": -0.02625116840191133,
          "pitch": 0.05889334162933224,
          "rotation": 1.5707963267948966,
          "target": "0-entrada-cicata"
        },
        {
          "yaw": -0.8064124030107163,
          "pitch": 0.050900732884553435,
          "rotation": 0,
          "target": "1-zona-exterior"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.2183552531072497,
          "pitch": -0.23716614446166417,
          "title": "Prueba de hotspot",
          "text": "Este es un texto de prueba para ver como funciona el hotspot de información"
        }
      ]
    },
    {
      "id": "3-estacionamiento-exterior",
      "name": "Estacionamiento Exterior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.7103123536809832,
        "pitch": 0.1004760386839223,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": -0.41190956161684866,
          "pitch": 0.03703358212276342,
          "rotation": 0,
          "target": "4-estacionamiento-interior"
        },
        {
          "yaw": -1.295612193548692,
          "pitch": 0.004464484946389291,
          "rotation": 0,
          "target": "1-zona-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-estacionamiento-interior",
      "name": "Semisótano",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.5389672916302999,
        "pitch": -0.08203529894608153,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 1.6146487952933635,
          "pitch": 0.04247901358926498,
          "rotation": 0,
          "target": "3-estacionamiento-exterior"
        },
        {
          "yaw": -1.3336839204542272,
          "pitch": 0.022008160355877493,
          "rotation": 0,
          "target": "13-lobby-piso-1"
        },
      ],
      "infoHotspots": []
    },
    {
      "id": "13-lobby-piso-1",
      "name": "Lobby Planta Baja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.6622351991318283,
        "pitch": -0.024350811751444823,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 1.4811787760304727,
          "pitch": 0.2055322836535769,
          "rotation": 3.141592653589793,
          "target": "4-estacionamiento-interior"
        },
        {
          "yaw": 2.054599441684929,
          "pitch": 0.19118784322098392,
          "rotation": 0,
          "target": "30-lobby-piso-2"
        },
        {
          "yaw": -1.3932222536088794,
          "pitch": 0.10916121093772801,
          "rotation": 0,
          "target": "2-letras-cicata"
        },
        {
          "yaw": -2.929165148264879,
          "pitch": 0.03800672062961574,
          "rotation": 6.283185307179586,
          "target": "14-oficinas-piso-1"
        },
        {
          "yaw": -0.1474020286966944,
          "pitch": 0.0403198423876745,
          "rotation": 0,
          "target": "16-pasillo-entrada-laboratorios"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-oficinas-piso-1",
      "name": "Área administrativa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.6241089952601424,
        "pitch": 0.12000075266769272,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": -2.0700771747217193,
          "pitch": 0.029698471980335484,
          "rotation": 4.71238898038469,
          "target": "13-lobby-piso-1"
        },
        {
          "yaw": 1.0758450129502926,
          "pitch": 0.0012919722453368365,
          "rotation": 0,
          "target": "15-mesa-reuniones"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-mesa-reuniones",
      "name": "Sala Circular I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.4506840987273293,
        "pitch": 0.09260401484614178,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 3.024863429412627,
          "pitch": 0.05137695381964846,
          "rotation": 1.5707963267948966,
          "target": "14-oficinas-piso-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-pasillo-entrada-laboratorios",
      "name": "Esclusa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.3905978024051251,
        "pitch": 0.06087739290854621,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": -2.840610653206708,
          "pitch": 0.08427993089710029,
          "rotation": 0,
          "target": "13-lobby-piso-1"
        },
        {
          "yaw": 0.3450020346217926,
          "pitch": 0.10683742134082408,
          "rotation": 0,
          "target": "17-pasillo-laboratorios-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-pasillo-laboratorios-1",
      "name": "Pasillo 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.8491658842300396,
        "pitch": 0.14062352270095602,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 2.3274110277221247,
          "pitch": 0.04111521439268451,
          "rotation": 0,
          "target": "16-pasillo-entrada-laboratorios"
        },
        {
          "yaw": -0.7735083472471196,
          "pitch": 0.14385152481009378,
          "rotation": 0,
          "target": "18-pasillo-laboratorios-2"
        },
        {
          "yaw": -2.421664056412837,
          "pitch": 0.17008485321496458,
          "rotation": 0,
          "target": "27-pasillo-laboratorios-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-pasillo-laboratorios-2",
      "name": "Pasillo 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.3040339174260573,
        "pitch": -0.006518822729406182,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 1.8365357487987337,
          "pitch": 0.13864078235222976,
          "rotation": 0,
          "target": "17-pasillo-laboratorios-1"
        },
        {
          "yaw": -1.3789860461837016,
          "pitch": 0.18995259957751998,
          "rotation": 0,
          "target": "19-pasillo-laboratorios-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-pasillo-laboratorios-3",
      "name": "Pasillo 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.369069601207439,
        "pitch": 0.21173912008181617,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 2.5041354909115316,
          "pitch": 0.19973502932030485,
          "rotation": 0,
          "target": "18-pasillo-laboratorios-2"
        },
        {
          "yaw": -2.2168743022477315,
          "pitch": 0.22091718417924788,
          "rotation": 0,
          "target": "22-pasillo-laboratorios-4"
        },
        {
          "yaw": -0.5168230247661452,
          "pitch": 0.28589237751278773,
          "rotation": 0,
          "target": "20-biologa-molecular"
        },
        {
          "yaw": -1.6776747049015146,
          "pitch": 0.1324047755927804,
          "rotation": 1.5707963267948966,
          "target": "21-cultivo-celular-y-microscopia"
        }
      ],
      "infoHotspots": [
      ]
    },
    {
      "id": "20-biologa-molecular",
      "name": "Biología Molecular",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.7907087081233213,
        "pitch": 0.14924819152115631,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 2.2752490715748372,
          "pitch": 0.13149473814922352,
          "rotation": 0,
          "target": "19-pasillo-laboratorios-3"
        }
      ],
      "mediaHotspots": [
        {
          "yaw": 0.8917419215550062, 
          "pitch": 0.1320556493301357,
          "title": "Termociclador tiempo real marca Thermo Fisher Scientific (applied biosystems)",
          "tag": "Equipo de laboratorio",
          "image": "img/equipoLab/10.1 Termociclador tiempo real_.webp",
          "sections": [
            {
              "subtitle": "Función principal:",
              "body": "Equipo diseñado para realizar PCR en tiempo real (qPCR), permitiendo la amplificación y detección simultánea de ADN o ARN en tiempo real."
            },
            {
              "subtitle": "Componente o característica clave:",
              "body": "Cuenta con sistema óptico de fluorescencia de alta sensibilidad y tecnología Fast PCR que reduce significativamente los tiempos de corrida."
            },
            {
              "subtitle": "Uso común:",
              "body": "Se utiliza en diagnóstico molecular, análisis de expresión génica, cuantificación de ácidos nucleicos y detección de patógenos en laboratorios clínicos y de investigación."
            }
          ]
        },
        {
          yaw: 0.07811019839374822, 
          pitch: 0.19750675812122154,
          "title": "Termociclador punto final Marca Axygen",
          "tag": "Equipo de laboratorio",
          "image": "img/equipoLab/10.2.-Termocicladorpuntofinal.webp",
          "sections": [
            {
              "subtitle": "Función principal:",
              "body": "Equipo utilizado para realizar reacciones de PCR (Reacción en Cadena de la Polimerasa) mediante ciclos controlados de temperatura para amplificar material genético."
            },
            {
              "subtitle": "Componente o característica clave:",
              "body": "Cuenta con un bloque térmico de alta precisión y programación rápida de protocolos de amplificación."
            },
            {
              "subtitle": "Uso común:",
              "body": "Se emplea en experimentos de biología molecular, genética, diagnóstico e investigación para amplificación y análisis de ADN y/o ARN."
            }
          ]
        },
        {
          yaw: -0.1346127651381437, 
          pitch: 0.1796694598999391,
          "title": "Termociclador punto final Marca BioRad",
          "tag": "Equipo de laboratorio",
          "image": "img/equipoLab/10.3.-Termocicladorpuntofinal.webp",
          "sections": [
            {
              "subtitle": "Función principal:",
              "body": "Equipo utilizado para realizar reacciones de PCR (Reacción en Cadena de la Polimerasa) mediante ciclos controlados de temperatura para amplificar material genético."
            },
            {
              "subtitle": "Componente o característica clave:",
              "body": "Cuenta con un bloque térmico de alta precisión y programación rápida de protocolos de amplificación."
            },
            {
              "subtitle": "Uso común:",
              "body": "Se emplea en experimentos de biología molecular, genética, diagnóstico e investigación para amplificación y análisis de ADN y/o ARN."
            }
          ]
        },
        {
          yaw: -2.4298590571103738, 
          pitch: 0.10167359695774536,
          "title": "Nanodrop marca Thermo Scientific",
          "tag": "Equipo de laboratorio",
          "image": "img/equipoLab/10.4.-Nanodrop.webp",
          "sections": [
            {
              "subtitle": "Función principal:",
              "body": "Equipo utilizado para medir la concentración y pureza de ácidos nucleicos y proteínas mediante espectrofotometría UV-Vis."
            },
            {
              "subtitle": "Componente o característica clave:",
              "body": "Requiere volúmenes mínimos de muestra (1–2 µL) y cuenta con sistema de medición directa sin necesidad De celdas o cubetas."
            },
            {
              "subtitle": "Uso común:",
              "body": "Se emplea en pruebas de biología molecular, genética y bioquímica para cuantificación rápida de ADN, ARN y proteínas."
            }
          ]
        }
      ]
    },
    {
      "id": "21-cultivo-celular-y-microscopia",
      "name": "Cultivo Celular y Microscopía",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.9272375918346043,
        "pitch": 0.1495636360177901,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": -1.7835877604012147,
          "pitch": 0.1070084838812484,
          "rotation": 4.71238898038469,
          "target": "19-pasillo-laboratorios-3"
        },
        {
          "yaw": -1.542557918547688,
          "pitch": 0.11866800450579085,
          "rotation": 1.5707963267948966,
          "target": "22-pasillo-laboratorios-4"
        }
      ],
      "mediaHotspots": [
        {
          yaw: -0.17846533555522726, 
          pitch: 0.23429732922500968,
          "title": "Cultivo Celular y Microscopía",
          "tag": "Habitación",
          "sections": [
            {
              "subtitle": "Descripción:",
              "body": "Diseñado para el cultivo, manipulación y análisis de células en condiciones controladas. Permite llevar a cabo procedimientos tales como la producción de proteínas en modelos celulares, la evaluación del efecto terapéutico de diversas moléculas in vitro, la determinación de las características tales como la migración, proliferación, etc. Este espacio cuenta con equipos como centrífuga refrigerada y agitador orbital con incubadora. "
            }
          ]
        },
        {
          yaw: 2.818487465850805, 
          pitch: 0.17458203042592693,
          "title": "Lector de placas marca Thermo Scientific",
          "tag": "Equipo de laboratorio",
          "image": "img/equipoLab/12.1.-Lectordeplacas.webp",
          "sections": [
            {
              "subtitle": "Función principal:",
              "body": "Equipo diseñado para la lectura y análisis de microplacas mediante diferentes métodos de detección óptica en ensayos biológicos y químicos."
            },
            {
              "subtitle": "Componente o característica clave:",
              "body": "Integra sistema multimodo de detección con capacidades de absorbancia, fluorescencia y luminiscencia, además de control automatizado."
            },
            {
              "subtitle": "Uso común:",
              "body": "Se utiliza en diagnóstico para ensayos ELISA, cuantificación celular, análisis enzimáticos y estudios de expresión molecular."
            }
          ]
        },
        {
          yaw: 1.5693647533830193, 
          pitch: 0.068419439709551,
          "title": "Cuarto anexo a cultivo celular",
          "tag": "Habitación",
          "sections": [
            {
              "subtitle": "Descripción:",
              "body": "Este espacio cuenta con un área de incubación celular con acabados especializados, como piso de caucho y paredes con recubrimiento epóxico antibacterial, además de curva sanitaria, lo que permite cumplir con las normas de buenas prácticas de laboratorio. Aquí se dispone de una cabina de bioseguridad BSL-2, incubadoras de CO₂ y un microscopio invertido para el monitoreo del crecimiento celular."
            }
          ]
        },
        {
          yaw: 2.044407965328217, 
          pitch: 0.02650290889278395,
          "title": "Campana de bioseguridad Clase II Tipo A2 marca LABCONCO",
          "tag": "Equipo de laboratorio",
          "image": "img/equipoLab/13.1.- Cuarto anexo.webp",
          "sections": [
            {
              "subtitle": "Función principal:",
              "body": "Equipo diseñado para proporcionar protección al usuario, la muestra y el ambiente durante la manipulación de material biológico."
            },
            {
              "subtitle": "Componente o característica clave:",
              "body": "Cuenta con flujo de aire laminar vertical y filtros HEPA de alta eficiencia que mantienen un ambiente de trabajo limpio y seguro."
            },
            {
              "subtitle": "Uso común:",
              "body": "Se utiliza en manipulación estéril de muestras biológicas."
            }
          ]
        },
        {
          yaw: 1.9403686585730657, 
          pitch: -0.03623068873415747,
          "title": "Microscopio investido marca Carl Zeiss",
          "tag": "Equipo de laboratorio",
          "image": "img/equipoLab/13.2.-Microscopioinvestido.webp",
          "sections": [
            {
              "subtitle": "Función principal:",
              "body": "Microscopio invertido diseñado para la observación de cultivos celulares y muestras biológicas."
            },
            {
              "subtitle": "Componente o característica clave:",
              "body": "Cuenta con sistema óptico de alta calidad y configuración invertida que facilita la visualización de células vivas en placas y frascos de cultivo."
            },
            {
              "subtitle": "Uso común:",
              "body": "Se utiliza para monitoreo de crecimiento celular, confluencia y morfología de células vivas."
            }
          ]
        },
        {
          yaw: 1.5102187069022737, 
          pitch: -0.02115913802255065,
          "title": "Incubadora de CO2 marca TShermo cientific",
          "tag": "Equipo de laboratorio",
          "image": "img/equipoLab/13.3.-IncubadoradeCO2.webp",
          "sections": [
            {
              "subtitle": "Función principal:",
              "body": "Equipo diseñado para mantener condiciones controladas de temperatura, humedad y concentración de CO₂ para el crecimiento y mantenimiento de cultivos celulares."
            },
            {
              "subtitle": "Componente o característica clave:",
              "body": "Cuenta con sistema de esterilización por calor, control preciso de CO₂ y temperatura, además de cámara interna de acero inoxidable para reducir el riesgo de contaminación de los medios de cultivo."
            },
            {
              "subtitle": "Uso común:",
              "body": "Se utiliza para incubación de células, tejidos y microorganismos sensibles."
            }
          ]
        },
        {
          yaw: 1.3525564842355102, 
          pitch: 0.07667761043608223,
          "title": "Microscopio marca Thermo Scientific",
          "tag": "Equipo de laboratorio",
          "image": "img/equipoLab/13.5.-Microscopio.webp",
          "sections": [
            {
              "subtitle": "Función principal:",
              "body": "Microscopio digital diseñado para la observación, captura y documentación de muestras biológicas en campo claro y campo oscuro."
            },
            {
              "subtitle": "Componente o característica clave:",
              "body": "Cuenta con cámara digital integrada, pantalla táctil de alta resolución y sistema de iluminación LED ajustable para adquisición rápida de imágenes."
            },
            {
              "subtitle": "Uso común:",
              "body": "Se utiliza en la observación de cultivos celulares, tejidos y muestras biológicas."
            }
          ]
        },
      ]
    },
    {
      "id": "22-pasillo-laboratorios-4",
      "name": "Pasillo 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.319573490052882,
        "pitch": 0.15650568013713162,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": -2.966159231881077,
          "pitch": 0.26923686930801694,
          "rotation": 0,
          "target": "19-pasillo-laboratorios-3"
        },
        {
          "yaw": -1.3513530092720458,
          "pitch": 0.22647500720012204,
          "rotation": 0,
          "target": "24-pasillo-laboratorios-5"
        },
        {
          "yaw": -1.0806522841638468,
          "pitch": 0.20610982066467898,
          "rotation": 7.853981633974483,
          "target": "23-microbiologa"
        },
        {
          "yaw": 2.772886593003851,
          "pitch": 0.15008147978363517,
          "rotation": 4.71238898038469,
          "target": "21-cultivo-celular-y-microscopia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-microbiologa",
      "name": "Microbiología",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.8595971064449515,
        "pitch": 0.14878386112298259,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 2.883195486589531,
          "pitch": 0.13916217145836107,
          "rotation": -1.5707963267948966,
          "target": "22-pasillo-laboratorios-4"
        }
      ],
      "mediaHotspots": [
        {
          yaw: -0.8608338891432936, 
          pitch: 0.6360365382306004,
          "title": "Microbiología",
          "tag": "Habitación",
          "sections": [
            {
              "subtitle": "Descripción:",
              "body": "El Laboratorio de Microbiología está destinado al análisis, modificación y cultivo de microorganismos, con el objetivo de producir biomoléculas para el estudio de sus efectos terapéuticos y el desarrollo de vacunas. Cuenta con equipos como campana de flujo laminar, incubadora, agitador orbital, microcentrífugas refrigeradas y sistemas de refrigeración para el adecuado almacenamiento de muestras."
            }
          ]
        },
        {
          yaw: -2.183809862189122, 
          pitch: 0.10532664602342834,
          "title": "Campana de flujo laminar marca Lab-Tech",
          "tag": "Equipo de laboratorio",
          "image": "img/equipoLab/14.1.-Campanadeflujolaminar.webp",
          "sections": [
            {
              "subtitle": "Función principal:",
              "body": "Equipo diseñado para proporcionar un ambiente de trabajo limpio y libre de partículas durante la manipulación de muestras sensibles."
            },
            {
              "subtitle": "Componente o característica clave:",
              "body": "Cuenta con flujo de aire laminar horizontal y filtros HEPA de alta eficiencia que minimizan el riesgo de contaminación de las muestras."
            },
            {
              "subtitle": "Uso común:",
              "body": "Se utiliza en la preparación de medios para procedimientos que requieren condiciones estériles."
            }
          ]
        },
        {
          yaw: -1.3507484538545889, 
          pitch: 0.05474544038763085,
          "title": "Agitador orbital con incubación marca Thermo Scientific",
          "tag": "Equipo de laboratorio",
          "image": "img/equipoLab/14.2.-Agitadororbitalconincubación.webp",
          "sections": [
            {
              "subtitle": "Función principal:",
              "body": "Equipo diseñado para incubar y agitar muestras simultáneamente bajo condiciones controladas de temperatura y movimiento orbital."
            },
            {
              "subtitle": "Componente o característica clave:",
              "body": "Integra sistema de agitación orbital de velocidad ajustable y control digital preciso de temperatura para mantener condiciones homogéneas de cultivo."
            },
            {
              "subtitle": "Uso común:",
              "body": "Se utiliza para el crecimiento de bacterias, levaduras y preparación de cultivos en medios líquidos."
            }
          ]
        },
        {
          yaw: -0.5147036223846797, 
          pitch: 0.0036854768779743807,
          "title": "Incubadora marca Ecoshel",
          "tag": "Equipo de laboratorio",
          "image": "img/equipoLab/14.3.-Incubadora.webp",
          "sections": [
            {
              "subtitle": "Función principal:",
              "body": "Equipo utilizado para mantener muestras biológicas y microbiológicas en condiciones controladas de temperatura durante procesos de incubación."
            },
            {
              "subtitle": "Componente o característica clave:",
              "body": "Cuenta con control digital de temperatura y cámara de incubación con distribución uniforme de calor para asegurar estabilidad térmica."
            },
            {
              "subtitle": "Uso común:",
              "body": "Se emplea para la incubación de cultivos celulares, microorganismos y muestras biológicas."
            }
          ]
        },
      ]
    },
    {
      "id": "24-pasillo-laboratorios-5",
      "name": "Pasillo 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.7691422063691995,
        "pitch": 0.16283733810811718,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 1.893352793586816,
          "pitch": 0.20207382653939732,
          "rotation": 1.5707963267948966,
          "target": "25-camara-fria"
        },
        {
          "yaw": 3.0134377284037006,
          "pitch": 0.2180436501912446,
          "rotation": 0,
          "target": "27-pasillo-laboratorios-6"
        },
        {
          "yaw": -2.896798195947115,
          "pitch": 0.22763593424266482,
          "rotation": 1.5707963267948966,
          "target": "26-cromatografa-y-espectrofotometra"
        },
        {
          "yaw": 0.016660348765933364,
          "pitch": 0.18554508887666543,
          "rotation": 0,
          "target": "22-pasillo-laboratorios-4"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0990289515300589,
          "pitch": 0.19526464416981426,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "25-camara-fria",
      "name": "Cámara Fría",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.8837171543024134,
        "pitch": 0.07278436404616428,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": -2.2999795558560017,
          "pitch": 0.23236712217272526,
          "rotation": 4.71238898038469,
          "target": "24-pasillo-laboratorios-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-cromatografa-y-espectrofotometra",
      "name": "Cromatografía y Espectrofotometría",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.9133311270312099,
        "pitch": 0.12629054848242838,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": -1.8191867139499838,
          "pitch": 0.10906646075994786,
          "rotation": 4.71238898038469,
          "target": "24-pasillo-laboratorios-5"
        }
      ],
      "mediaHotspots": [
        {
          yaw: 0.8441552565477437, 
          pitch: 0.11807807366217915,
          "title": "Espectrofotómetro marca Thermo Scientific",
          "tag": "Equipo de laboratorio",
          "image": "img/equipoLab/16.1.-Espectrofotómetro.webp",
          "sections": [
            {
              "subtitle": "Función principal:",
              "body": "Equipo utilizado para medir la absorbancia y transmitancia de muestras en las regiones ultravioleta y visible del espectro electromagnético."
            },
            {
              "subtitle": "Componente o característica clave:",
              "body": "Cuenta con sistema óptico de alta precisión y amplio rango espectral para análisis cuantitativos confiables de compuestos químicos y biológicos."
            },
            {
              "subtitle": "Uso común:",
              "body": "Se emplea en la cuantificación de sustancias, análisis de pureza y estudios cinéticos."
            }
          ]
        },
        {
          yaw: 1.1078944551714134, 
          pitch: 0.10829321050280427,
          "title": "Fotodocumentador BioRad",
          "tag": "Equipo de laboratorio",
          "image": "img/equipoLab/16.2.-Fotodocumentador.webp",
          "sections": [
            {
              "subtitle": "Función principal:",
              "body": "Equipo diseñado para capturar imágenes de geles de electroforesis (geles de acrilamida o de agarosa)."
            },
            {
              "subtitle": "Componente o característica clave:",
              "body": "Cuenta con cámara digital de alta sensibilidad y sistema de iluminación UV/LED para detección y análisis de bandas de ADN, ARN y proteínas."
            },
            {
              "subtitle": "Uso común:",
              "body": "Se utiliza para documentación de resultados de electroforesis y análisis de ácidos nucleicos y proteínas."
            }
          ]
        },
      ]
    },
    {
      "id": "27-pasillo-laboratorios-6",
      "name": "Pasillo 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.244976490812329,
        "pitch": 0.18232445563329058,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": -0.30560286807528314,
          "pitch": 0.49675936924619535,
          "rotation": 4.71238898038469,
          "target": "24-pasillo-laboratorios-5"
        },
        {
          "yaw": 0.14946346831758994,
          "pitch": 0.17980802562322395,
          "rotation": 0,
          "target": "17-pasillo-laboratorios-1"
        },
        {
          "yaw": 2.5648232789485785,
          "pitch": 0.26916246195099625,
          "rotation": 1.5707963267948966,
          "target": "28-bioprocesos"
        },
        {
          "yaw": 2.0766797204137024,
          "pitch": 0.18234349201132893,
          "rotation": 1.5707963267948966,
          "target": "29-acondicionamiento-de-material"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-bioprocesos",
      "name": "Bioprocesos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.8291735672272864,
        "pitch": 0.13627547795357664,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 1.8806784074480056,
          "pitch": 0.18392009714055924,
          "rotation": 10.995574287564278,
          "target": "27-pasillo-laboratorios-6"
        }
      ],
      "mediaHotspots": [
        {
          yaw: 0.5555040968347527, 
          pitch: 0.024187236804149137,
          "title": "Campana de extracción marca Lab-Tech",
          "tag": "Equipo de laboratorio",
          "image": "img/equipoLab/18.1.-Campanadeextracción.webp",
          "sections": [
            {
              "subtitle": "Función principal:",
              "body": "Equipo diseñado para extraer y eliminar vapores y gases generadas durante procedimientos de laboratorio."
            },
            {
              "subtitle": "Componente o característica clave:",
              "body": "Cuenta con sistema de extracción de aire y gabinete de trabajo resistente a agentes químicos que ayuda a proteger al usuario y al ambiente del laboratorio."
            },
            {
              "subtitle": "Uso común:",
              "body": "Se utiliza para manipulación segura de reactivos volátiles, solventes y sustancias químicas."
            }
          ]
        }
      ]
    },
    {
      "id": "29-acondicionamiento-de-material",
      "name": "Acondicionamiento de Material",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.8239083204094513,
        "pitch": 0.15574801787125736,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 2.9715870778031768,
          "pitch": 0.1259484233008159,
          "rotation": 4.71238898038469,
          "target": "27-pasillo-laboratorios-6"
        }
      ],
      "mediaHotspots": [
        {
          yaw: -2.5189156518849884, 
          pitch: 0.17355939244038332,
          "title": "Purificador de agua marca Thermo Scientific",
          "tag": "Equipo de laboratorio",
          "image": "img/equipoLab/19.1.- Purificador de Agua.webp",
          "sections": [
            {
              "subtitle": "Función principal:",
              "body": "Equipo diseñado para producir agua purificada y ultrapura de uso en laboratorio mediante sistemas de prefiltración, filtración y purificación."
            },
            {
              "subtitle": "Componente o característica clave:",
              "body": "Integra tecnologías UV y ultrafiltración (UF) que eliminan contaminantes, microorganismos y compuestos orgánicos para obtener agua de alta calidad."
            },
            {
              "subtitle": "Uso común:",
              "body": "Se utiliza en la preparación de reactivos, cultivos y procedimientos analíticos sensibles."
            }
          ]
        },
        {
          yaw: -1.9124477322524562, 
          pitch: 0.13431693794366595,
          "title": "Balanza analítica marca ADAM",
          "tag": "Equipo de laboratorio",
          "image": "img/equipoLab/19.2-Balanza analitica.webp",
          "sections": [
            {
              "subtitle": "Función principal:",
              "body": "Equipo utilizado para medir masas con alta precisión en procedimientos analíticos y de laboratorio."
            },
            {
              "subtitle": "Componente o característica clave:",
              "body": "Cuenta con sistema de pesaje de alta sensibilidad, pantalla digital y cabina protectora que minimiza interferencias por corrientes de aire."
            },
            {
              "subtitle": "Uso común:",
              "body": "Se utiliza en el pesaje para la preparación de reactivos, medios de cutivo y análisis cuantitativos precisos."
            }
          ]
        },
        {
          yaw: 0.7345086885988792, 
          pitch: 0.17197088575817787,
          "title": "Horno de convección forzada marca YAMATO ",
          "tag": "Equipo de laboratorio",
          "image": "img/equipoLab/19.3.-Horno de convección forzada.webp",
          "sections": [
            {
              "subtitle": "Función principal:",
              "body": "Equipo diseñado para el calentamiento, secado y acondicionamiento de muestras mediante circulación uniforme de aire caliente."
            },
            {
              "subtitle": "Componente o característica clave:",
              "body": "Cuenta con sistema de convección forzada que distribuye homogéneamente la temperatura en la cámara, además de control digital preciso."
            },
            {
              "subtitle": "Uso común:",
              "body": "Se utiliza para el secado de material, esterilización en seco y pruebas térmicas de muestras."
            }
          ]
        },
        {
          yaw: 1.4945127851276503, 
          pitch: 0.45009222783581926,
          "title": "Autoclave vertical marca EVAR",
          "tag": "Equipo de laboratorio",
          "image": "img/equipoLab/19.4.-Autoclave vertical.webp",
          "sections": [
            {
              "subtitle": "Función principal:",
              "body": "Equipo utilizado para esterilizar material, medios de cultivo mediante vapor a alta presión y temperatura."
            },
            {
              "subtitle": "Componente o característica clave:",
              "body": "Cuenta con cámara vertical de acero inoxidable, control de presión y temperatura para procesos de esterilización confiables."
            },
            {
              "subtitle": "Uso común:",
              "body": "Se emplea en la esterilización de instrumental, material y medios de cultivo."
            }
          ]
        },
      ]
    },
    {
      "id": "30-lobby-piso-2",
      "name": "Lobby Planta Alta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.25616922101584,
        "pitch": -0.08493122109158868,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": -2.4661555786863048,
          "pitch": 0.15653794980046953,
          "rotation": 3.141592653589793,
          "target": "13-lobby-piso-1"
        },
        {
          "yaw": -0.6068663255398228,
          "pitch": 0.009208497024232543,
          "rotation": 0,
          "target": "36-salas-vacias-segundo-piso"
        },
        {
          "yaw": 2.309798843394254,
          "pitch": 0.033491263700859975,
          "rotation": 0,
          "target": "31-oficinas-segundo-piso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-oficinas-segundo-piso",
      "name": "Subdirección Académica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.423304399305005,
        "pitch": 0.0784741096012116,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": -1.3098090471464197,
          "pitch": -0.0056392855446141255,
          "rotation": 0,
          "target": "30-lobby-piso-2"
        },
        {
          "yaw": 1.8804217774362977,
          "pitch": 0.03229256994251628,
          "rotation": 0,
          "target": "35-sala-reuniones-2"
        },
        {
          "yaw": 0.5062178166473998,
          "pitch": 0.025859078636941035,
          "rotation": 0,
          "target": "32-salon-clases-1"
        },
        {
          "yaw": -0.14720861427510457,
          "pitch": 0.015939843283458544,
          "rotation": 0,
          "target": "33-salon-clases-2"
        },
        {
          "yaw": 1.2776425919986707,
          "pitch": 0.05188941504383848,
          "rotation": 0,
          "target": "34-biblioteca"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-salon-clases-1",
      "name": "Aula I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.8268261543062696,
        "pitch": 0.09488274707480926,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 2.638901138537501,
          "pitch": 0.10702828102075124,
          "rotation": 0,
          "target": "31-oficinas-segundo-piso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-salon-clases-2",
      "name": "Aula II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.825327132219675,
        "pitch": 0.13202001473137592,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 1.2432221294116044,
          "pitch": 0.1090418611438757,
          "rotation": 0,
          "target": "31-oficinas-segundo-piso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-biblioteca",
      "name": "Biblioteca",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.0154848644427688,
        "pitch": 0.0496298791387666,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": -1.9091063196862095,
          "pitch": 0.10504394612556567,
          "rotation": 1.5707963267948966,
          "target": "31-oficinas-segundo-piso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-sala-reuniones-2",
      "name": "Sala Circular II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3760982480986446,
          "pitch": 0.09836536487416936,
          "rotation": 0,
          "target": "31-oficinas-segundo-piso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-salas-vacias-segundo-piso",
      "name": "Gestión Escolar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.0220417185041537,
        "pitch": 0.03511427101490838,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 0.6340813567268668,
          "pitch": 0.07165237289873261,
          "rotation": 4.71238898038469,
          "target": "30-lobby-piso-2"
        },
        {
          "yaw": -1.2590337005139443,
          "pitch": 0.08645872399235444,
          "rotation": 0,
          "target": "38-sala-grande"
        },
        {
          "yaw": -2.122787371345469,
          "pitch": 0.20343524177559047,
          "rotation": -1.5,
          "target": "37-laboratorio-de-computo"
        },
        {
          "yaw": -3.029162392323764,
          "pitch": 0.24595664323615019,
          "rotation": 0,
          "target": "39-sala-pequea"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-laboratorio-de-computo",
      "name": "Laboratorio de cómputo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.4889535034496184,
        "pitch": 0.14305731424857093,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": -2.268240939199151,
          "pitch": 0.1823169622519174,
          "rotation": 1.5707963267948966,
          "target": "36-salas-vacias-segundo-piso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-sala-grande",
      "name": "Sala de Usos Multiple",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.012962216020151,
        "pitch": -0.02512201377516554,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 2.2913957657260093,
          "pitch": 0.060544612585138324,
          "rotation": 1.5707963267948966,
          "target": "36-salas-vacias-segundo-piso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-sala-pequea",
      "name": "Aula III",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.1051286752407563,
        "pitch": 0.11026516351124194,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 1.778464565156483,
          "pitch": 0.2433275693508996,
          "rotation": 0,
          "target": "36-salas-vacias-segundo-piso"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Recorrido-Virtual-CICATA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
