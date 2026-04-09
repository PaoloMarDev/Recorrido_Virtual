var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada-cicata",
      "name": "Entrada-CICATA",
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
          "yaw": 0.1294596363967706,
          "pitch": -0.04151092886110064,
          "rotation": 6.283185307179586,
          "target": "1-zona-exterior"
        },
        {
          "yaw": -0.4772643962467029,
          "pitch": -0.09065543442489243,
          "rotation": 0,
          "target": "2-letras-cicata"
        }
      ],
      "infoHotspots": [],
      "videoHotspots": [
        {
          "yaw": -1.04339730574711709,
          "pitch": 0.16778635584351953,
          "title": "Pedro pica papas",
          "text": "Pedro pica papas",
          "video": "King of Meat bugs.mov"
        },
      ],
      "imageHotspots": [
        {
          "yaw": -2.0,
          "pitch": 0,
          "title": "Pedro pica papas",
          "text": "Pedro pica papas",
          "image": "./img/ImagenDePrueba.jpg"
        }
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
      "infoHotspots": []
    },
    {
      "id": "2-letras-cicata",
      "name": "Letras CICATA",
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
      "name": "Estacionamiento-Exterior",
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
      "name": "Estacionamiento-Interior",
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
        {
          "yaw": 0.294459113531909,
          "pitch": 0.013795745115142921,
          "rotation": 0,
          "target": "5-entrada-bioterio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-entrada-bioterio",
      "name": "Entrada-Bioterio",
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
        "yaw": -0.5914318019059266,
        "pitch": -0.012765000151370387,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        /*
        { (Esto se va a eliminar)
          "yaw": -0.7385727681256498,
          "pitch": 0.05386655938713858,
          "rotation": 0,
          "target": "6-pasillo-bioterio"
        },
        */
        {
          "yaw": 2.2923807511436323,
          "pitch": 0.031686282451936165,
          "rotation": 0,
          "target": "4-estacionamiento-interior"
        },
        /*
        {
          "yaw": 0.18245284071836743,
          "pitch": 0.05011252770234975,
          "rotation": 4.71238898038469,
          "target": "12-bioterio-sala-falta-nombre"
        }
        */
      ],
      "infoHotspots": []
    },
    /* 
    {
      "id": "6-pasillo-bioterio",
      "name": "Pasillo-Bioterio",
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
        "yaw": -0.05985934739248577,
        "pitch": 0.21983597060592253,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": -2.965422125007498,
          "pitch": 0.669652810321475,
          "rotation": 0,
          "target": "9-bioterior-sala-cuarentena"
        },
        {
          "yaw": -0.8568523768220526,
          "pitch": 0.19968093193499215,
          "rotation": 0,
          "target": "11-alojamiento-2"
        },
        {
          "yaw": -0.5668096888434597,
          "pitch": 0.22157595906239358,
          "rotation": 1.5707963267948966,
          "target": "10-alojamiento-1"
        },
        {
          "yaw": 0.31340540126364935,
          "pitch": 0.6331418804256437,
          "rotation": 0,
          "target": "8-rea-de-prodecimientos"
        },
        {
          "yaw": 2.1291988326381617,
          "pitch": 0.18565301514816746,
          "rotation": 4.71238898038469,
          "target": "12-bioterio-sala-falta-nombre"
        },
        {
          "yaw": 2.4984418814944247,
          "pitch": 0.18921893002205792,
          "rotation": 1.5707963267948966,
          "target": "5-entrada-bioterio"
        },
        {
          "yaw": 2.504613830539639,
          "pitch": 0.5388056142441329,
          "rotation": 1.5707963267948966,
          "target": "7-bioterio-almacen"
        }
      ],
      "infoHotspots": []
    },
    
    {
      "id": "7-bioterio-almacen",
      "name": "Bioterio-Almacen",
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
        "yaw": 1.762999079077363,
        "pitch": 0.40972725408095734,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 1.1611518858206207,
          "pitch": 0.306302985863681,
          "rotation": 4.71238898038469,
          "target": "6-pasillo-bioterio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-rea-de-prodecimientos",
      "name": "Área-de-Prodecimientos",
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
        "yaw": 2.599697504028727,
        "pitch": 0.3057410076532747,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 2.1222479595611814,
          "pitch": 0.32351639104355456,
          "rotation": 0,
          "target": "6-pasillo-bioterio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bioterior-sala-cuarentena",
      "name": "Bioterior-Sala-Cuarentena",
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
        "yaw": -1.5267744695358516,
        "pitch": 0.35254204510955844,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 1.8195332972938472,
          "pitch": 0.6779340434452124,
          "rotation": 0,
          "target": "6-pasillo-bioterio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-alojamiento-1",
      "name": "Alojamiento-1",
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
        "yaw": 2.5549134919190983,
        "pitch": 0.21131395961672794,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 1.825283325167847,
          "pitch": 0.24686448829238117,
          "rotation": 0,
          "target": "6-pasillo-bioterio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-alojamiento-2",
      "name": "Alojamiento-2",
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
        "yaw": 1.8492311047620804,
        "pitch": 0.29287601427739496,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": 1.2975833768592473,
          "pitch": 0.4300366178476658,
          "rotation": 0,
          "target": "6-pasillo-bioterio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bioterio-sala-falta-nombre",
      "name": "Bioterio-Sala-Falta-Nombre",
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
        "yaw": -1.3964421433206518,
        "pitch": 0.2852819036744112,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": -0.2888081161904541,
          "pitch": 0.43140151743513044,
          "rotation": 0,
          "target": "5-entrada-bioterio"
        },
        {
          "yaw": 1.609916494125355,
          "pitch": 0.3222213519309154,
          "rotation": 0,
          "target": "6-pasillo-bioterio"
        }
      ],
      "infoHotspots": []
    },
    */
    {
      "id": "13-lobby-piso-1",
      "name": "Lobby-Piso-1",
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
      "name": "Oficinas-Piso-1",
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
          "yaw": -2.8894203945317756,
          "pitch": 0.02704057065891341,
          "rotation": 4.71238898038469,
          "target": "13-lobby-piso-1"
        },
        {
          "yaw": 0.207327812862097,
          "pitch": 0.03093505173534794,
          "rotation": 0,
          "target": "15-mesa-reuniones"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-mesa-reuniones",
      "name": "Mesa-Reuniones",
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
        "yaw": -1.0687425554934968,
        "pitch": 0.03256054106154416,
        "fov": 1.5410497529145328
      },
      "linkHotspots": [
        {
          "yaw": -1.2554658508354066,
          "pitch": 0.02027671738189163,
          "rotation": 1.5707963267948966,
          "target": "14-oficinas-piso-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-pasillo-entrada-laboratorios",
      "name": "Pasillo-Entrada-Laboratorios",
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
      "name": "Pasillo-Laboratorios-1",
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
          "yaw": 2.106967659320662,
          "pitch": 0.2802178726378912,
          "rotation": 0,
          "target": "16-pasillo-entrada-laboratorios"
        },
        {
          "yaw": -1.000887655592848,
          "pitch": 0.13139920224792334,
          "rotation": 0,
          "target": "18-pasillo-laboratorios-2"
        },
        {
          "yaw": -2.6626821215737344,
          "pitch": 0.17496884481138153,
          "rotation": 0,
          "target": "27-pasillo-laboratorios-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-pasillo-laboratorios-2",
      "name": "Pasillo-Laboratorios-2",
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
      "name": "Pasillo-Laboratorios-3",
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
        {
          "yaw": 0.9243392322791681,
          "pitch": 0.13900939254760125,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": 2.0170826893490466,
          "pitch": 0.09723116149784694,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "20-biologa-molecular",
      "name": "Biología-Molecular",
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
      "infoHotspots": []
    },
    {
      "id": "21-cultivo-celular-y-microscopia",
      "name": "Cultivo-Celular-y-Microscopia",
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
      "infoHotspots": [
        {
          "yaw": 1.63974169394751,
          "pitch": 0.1472042051361413,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "22-pasillo-laboratorios-4",
      "name": "Pasillo-Laboratorios-4",
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
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 0.3690356310004326,
          "pitch": 0.07162783340847412,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": 1.4726927029182466,
          "pitch": 0.1297626244104393,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "24-pasillo-laboratorios-5",
      "name": "Pasillo-Laboratorios-5",
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
      "name": "Camara-Fria",
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
      "infoHotspots": []
    },
    {
      "id": "27-pasillo-laboratorios-6",
      "name": "Pasillo-Laboratorios-6",
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
          "target": "29-laboratorio-falta-nombre"
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
      "infoHotspots": []
    },
    {
      "id": "29-laboratorio-falta-nombre",
      "name": "Laboratorio-falta-nombre",
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
          "yaw": 2.6859821414528042,
          "pitch": 0.14444660360608275,
          "rotation": 4.71238898038469,
          "target": "27-pasillo-laboratorios-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-lobby-piso-2",
      "name": "Lobby-Piso-2",
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
      "name": "Oficinas-Segundo-Piso",
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
      "name": "Salon-Clases-1",
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
      "name": "Salon-Clases-2",
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
      "name": "Sala-Reuniones-2",
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
      "name": "Salas-Vacias-Segundo-Piso",
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
          "yaw": 1.4142501216853702,
          "pitch": 0.12125739059313645,
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
          "yaw": -2.111849656795224,
          "pitch": 0.08388516545767999,
          "rotation": 0,
          "target": "37-laboratorio-de-computo"
        },
        {
          "yaw": -2.8746519329200932,
          "pitch": 0.07526760272707556,
          "rotation": 0,
          "target": "39-sala-pequea"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-laboratorio-de-computo",
      "name": "Laboratorio-de-Computo",
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
          "yaw": -2.931088944371785,
          "pitch": 0.07743520352131839,
          "rotation": 1.5707963267948966,
          "target": "36-salas-vacias-segundo-piso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-sala-grande",
      "name": "Sala-Grande",
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
          "yaw": -2.2008036996770617,
          "pitch": 0.037625751728285195,
          "rotation": 1.5707963267948966,
          "target": "36-salas-vacias-segundo-piso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-sala-pequea",
      "name": "Sala-Pequeña",
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
          "yaw": -2.065346682283433,
          "pitch": 0.15744330837754816,
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
