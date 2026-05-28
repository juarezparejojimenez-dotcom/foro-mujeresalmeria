const modules = [
  {
    id: 0,
    title: "Modulo 0",
    description: "Bienvenida, orientacion inicial y preparacion antes de empezar el curso.",
    topic: "Presentacion de la plataforma, objetivos del curso y pasos para avanzar por los modulos.",
    activityType: "Documento",
    activityText: "Este modulo servira para recoger informacion inicial y confirmar que la alumna entiende como funcionara el curso.",
    videoText: "",
    deliverable: "Completar la ficha inicial de bienvenida.",
    sections: {
      "Contenidos clave": {
        description: "Materiales principales para entender que significa ser una mentora con proposito.",
        resources: [
          {
            label: "Que significa ser una mentora con proposito",
            href: "src/modulo-0/contenidos-clave/que-significa-ser-una-mentora-con-proposito.docx",
            type: "Word"
          },
          {
            label: "Guion de contenido - Ficha 2",
            href: "src/modulo-0/contenidos-clave/guion-contenido-ficha-2.docx",
            type: "Word"
          },
          {
            label: "Presentacion - Transformar Vidas",
            href: "src/modulo-0/contenidos-clave/presentacion-transformar-vidas.pdf",
            type: "PDF"
          }
        ]
      },
      "Foros y comunidad": {
        description: "Guias para participar en los foros y compartir aprendizajes con la comunidad.",
        resources: [
          {
            label: "Estructura de la guia de participacion en foros y comunidad",
            href: "src/modulo-0/foros-comunidad/estructura-guia-participacion-foros-comunidad.docx",
            type: "Word"
          },
          {
            label: "Participacion en foros y comunidad",
            href: "src/modulo-0/foros-comunidad/participacion-foros-comunidad.docx",
            type: "Word"
          }
        ]
      },
      "Lecturas, bibliografia y enlaces": {
        description: "Recursos audiovisuales y enlaces de apoyo para ampliar el contenido.",
        resources: [
          {
            label: "Esto si que es buena actitud",
            href: "src/modulo-0/lecturas-bibliografia-enlaces/esto-si-que-es-buena-actitud.mp4",
            type: "Video"
          }
        ]
      },
      "Materiales y ejercicios": {
        description: "Ejercicios y documentos practicos para trabajar el modulo.",
        resources: [
          {
            label: "Carta de intencion de la mentora con proposito",
            href: "src/modulo-0/materiales-ejercicios/carta-intencion-mentora-con-proposito.docx",
            type: "Word"
          },
          {
            label: "Decalogo",
            href: "src/modulo-0/materiales-ejercicios/decalogo.docx",
            type: "Word"
          },
          {
            label: "Infografia una mentora con proposito",
            href: "src/modulo-0/materiales-ejercicios/infografia-mentora-con-proposito.docx",
            type: "Word"
          }
        ]
      },
      "Evaluacion": {
        description: "Documento principal de evaluacion del modulo 0.",
        resources: [
          {
            label: "Evaluacion del modulo 0",
            href: "src/modulo-0/evaluacion/evaluacion-modulo-0.docx",
            type: "Word"
          }
        ]
      },
      "Ficha modulo": {
        description: "Ficha propia del modulo 0.",
        resources: [
          {
            label: "Ficha 1 del modulo",
            href: "src/modulo-0/ficha-modulo/ficha-1-modulo.docx",
            type: "Word"
          }
        ]
      },
      "Actividades": {
        description: "Actividades practicas del modulo 0.",
        resources: [
          {
            label: "Actividad ficha 3",
            href: "src/modulo-0/actividades/actividad-ficha-3.docx",
            type: "Word"
          }
        ]
      },
      "Rubrica": {
        description: "Rubrica de correccion del modulo 0.",
        resources: [
          {
            label: "Rubrica ficha 4 - Actividad 1",
            href: "src/modulo-0/rubrica/rubrica-ficha-4-actividad-1.docx",
            type: "Word"
          }
        ]
      }
    }
  },
  {
    id: 1,
    title: "Modulo 1",
    description: "Presentacion del curso, bienvenida y primeros materiales.",
    topic: "Resumen del contenido principal del modulo 1.",
    activityType: "Cuestionario",
    activityText: "Este modulo termina con un cuestionario para comprobar que la alumna ha entendido el contenido.",
    videoText: "",
    deliverable: "Responder un test al finalizar el modulo.",
    sections: {
      "Contenidos clave": {
        description: "Materiales principales sobre tutoria, mentoring, coaching y los rasgos de una mentora con proposito.",
        resources: [
          {
            label: "Diferencia entre tutoria, mentoring y coaching",
            href: "src/modulo-1/contenidos-clave/diferencia-tutoria-mentoring-coaching.docx",
            type: "Word"
          },
          {
            label: "Presentacion - 5 rasgos de una mentora con proposito",
            href: "src/modulo-1/contenidos-clave/presentacion-5-rasgos-mentora-con-proposito.pdf",
            type: "PDF"
          }
        ]
      },
      "Foros y comunidad": {
        description: "Espacio para compartir dudas, reflexiones y aprendizajes del modulo 1.",
        resources: []
      },
      "Lecturas, bibliografia y enlaces": {
        description: "Lecturas de apoyo sobre liderazgo, proposito y sentido vocacional.",
        resources: [
          {
            label: "Articulo claves para conseguir un liderazgo de altura",
            href: "src/modulo-1/lecturas-bibliografia-enlaces/articulo-claves-liderazgo-altura.pdf",
            type: "PDF"
          },
          {
            label: "Proposito corporativo: valores y resultados",
            href: "src/modulo-1/lecturas-bibliografia-enlaces/proposito-corporativo-valores-resultados.pdf",
            type: "PDF"
          },
          {
            label: "Ficha de lectura - El hombre en busca de sentido",
            href: "src/modulo-1/lecturas-bibliografia-enlaces/ficha-lectura-hombre-en-busca-de-sentido.docx",
            type: "Word"
          }
        ]
      },
      "Materiales y ejercicios": {
        description: "Infografias y plantillas para trabajar las diferencias entre tutoria, mentoring y coaching.",
        resources: [
          {
            label: "Infografia - Diferencias entre tutoria, mentoring y coaching",
            href: "src/modulo-1/materiales-ejercicios/infografia-diferencias-tutoria-mentoring-coaching.jpg",
            type: "Imagen"
          },
          {
            label: "Infografia - Diferencias entre tutoria, mentoring y coaching",
            href: "src/modulo-1/materiales-ejercicios/infografia-diferencias-tutoria-mentoring-coaching.pdf",
            type: "PDF"
          }
        ]
      },
      "Evaluacion": {
        description: "Cuestionarios y guias de evaluacion del modulo 1.",
        resources: [
          {
            label: "Cuestionario de autoevaluacion",
            href: "src/modulo-1/evaluacion/cuestionario-autoevaluacion.docx",
            type: "Word"
          },
          {
            label: "Guia de retroalimentacion",
            href: "src/modulo-1/evaluacion/guia-retroalimentacion.docx",
            type: "Word"
          },
          {
            label: "Evaluacion",
            href: "src/modulo-1/evaluacion/evaluacion.docx",
            type: "Word"
          }
        ]
      },
      "Actividades": {
        description: "Actividades practicas y dossier del modulo 1.",
        resources: [
          {
            label: "Actividad central 2",
            href: "src/modulo-1/actividades/actividad-central-2.docx",
            type: "Word"
          },
          {
            label: "Actividad central 2 - Dossier",
            href: "src/modulo-1/actividades/actividad-central-2-dossier.docx",
            type: "Word"
          },
          {
            label: "Actividad 1 - Reflexion vocacional",
            href: "src/modulo-1/actividades/actividad-1-reflexion-vocacional.docx",
            type: "Word"
          }
        ]
      },
      "Ficha modulo": {
        description: "Ficha propia del modulo 1.",
        resources: [
          {
            label: "Ficha 1 del modulo",
            href: "src/modulo-1/ficha-modulo/ficha-1-modulo.docx",
            type: "Word"
          }
        ]
      },
      "Rubrica": {
        description: "Rubrica de correccion del modulo 1.",
        resources: [
          {
            label: "Rubrica",
            href: "src/modulo-1/rubrica/rubrica.docx",
            type: "Word"
          }
        ]
      }
    }
  },
  {
    id: 2,
    title: "Modulo 2",
    description: "Materiales del modulo 2 para profundizar en empatia, motivacion y reflexion.",
    topic: "Contenidos, lecturas y actividades practicas del modulo 2.",
    activityType: "Documento",
    activityText: "En este modulo la alumna revisa los contenidos, completa la ficha de trabajo y entrega el cuestionario de autoevaluacion.",
    videoText: "",
    deliverable: "Completar la ficha del modulo y enviar el cuestionario de autoevaluacion.",
    sections: {
      "Contenidos clave": {
        description: "Documento principal para introducir los conceptos base del modulo 2.",
        resources: [
          {
            label: "Contenidos clave",
            href: "src/modulo-2/contenidos-clave/contenidos-clave.docx",
            type: "Word"
          }
        ]
      },
      "Foros y comunidad": {
        description: "Espacio para compartir reflexiones y aprendizajes del modulo 2.",
        resources: []
      },
      "Lecturas, bibliografia y enlaces": {
        description: "Lecturas complementarias para ampliar la mirada sobre empatia y motivacion.",
        resources: [
          {
            label: "Cuidado con la empatia",
            href: "src/modulo-2/lecturas-bibliografia-enlaces/cuidado-con-la-empatia.docx",
            type: "Word"
          },
          {
            label: "La motivacion clave para desarrollar personas",
            href: "src/modulo-2/lecturas-bibliografia-enlaces/la-motivacion-clave-para-desarrollar-personas.docx",
            type: "Word"
          },
          {
            label: "La rebelion de las masas - Jose Ortega y Gaset",
            href: "src/modulo-2/lecturas-bibliografia-enlaces/la-rebelion-de-las-masas-jose-ortega-y-gaset.docx",
            type: "Word"
          }
        ]
      },
      "Materiales y ejercicios": {
        description: "Ficha de trabajo y presentacion para desarrollar las actividades del modulo.",
        resources: [
          {
            label: "Presentacion y ficha del modulo 2",
            href: "src/modulo-2/materiales-ejercicios/presentacion-y-ficha-modulo-2.docx",
            type: "Word"
          }
        ]
      },
      "Evaluacion": {
        description: "Cuestionario de autoevaluacion para cerrar el modulo 2.",
        resources: [
          {
            label: "Cuestionario de autoevaluacion",
            href: "src/modulo-2/evaluacion/cuestionario-autoevaluacion.docx",
            type: "Word"
          }
        ]
      }
    }
  },
  {
    id: 3,
    title: "Modulo 3",
    description: "Desarrollo de competencias emocionales con actividades de reflexion y autoevaluacion.",
    topic: "Gestion emocional, comprension personal y aplicacion practica en mentoring.",
    activityType: "Cuestionario",
    activityText: "La alumna trabajara actividades reflexivas y cerrara el modulo con un cuestionario guiado.",
    videoText: "",
    deliverable: "Completar las actividades emocionales y entregar la autoevaluacion del modulo.",
    sections: {
      "Contenidos clave": {
        description: "Guion principal del modulo para introducir los conceptos emocionales base.",
        resources: [
          {
            label: "Guion de formacion emociones mentoras (Word)",
            href: "src/modulo-3/contenidos-clave/guion-formacion-emociones-mentoras.docx",
            type: "Word"
          },
          {
            label: "Guion de formacion emociones mentoras (PDF)",
            href: "src/modulo-3/contenidos-clave/guion-formacion-emociones-mentoras.pdf",
            type: "PDF"
          }
        ]
      },
      "Foros y comunidad": {
        description: "Espacio para compartir experiencias sobre comprension y regulacion emocional.",
        resources: []
      },
      "Lecturas, bibliografia y enlaces": {
        description: "Lecturas complementarias del modulo 3.",
        resources: []
      },
      "Materiales y ejercicios": {
        description: "Ficha de trabajo del modulo para desarrollar los ejercicios practicos.",
        resources: [
          {
            label: "Presentacion y ficha del modulo 3",
            href: "src/modulo-3/materiales-ejercicios/presentacion-ficha-modulo-3.docx",
            type: "Word"
          }
        ]
      },
      "Evaluacion": {
        description: "Rubrica, actividades y cuestionario de comprension emocional del modulo 3.",
        resources: [
          {
            label: "Modulo 3 - Rubrica de aprendizaje",
            href: "src/modulo-3/evaluacion/modulo-3-rubrica-aprendizaje.pdf",
            type: "PDF"
          },
          {
            label: "Actividad 1 - Diario emocional reflexivo",
            href: "src/modulo-3/evaluacion/actividad-1-diario-emocional-reflexivo.docx",
            type: "Word"
          },
          {
            label: "Actividad 2 - Reflexion emocional",
            href: "src/modulo-3/evaluacion/actividad-2-reflexion-emocional.docx",
            type: "Word"
          },
          {
            label: "Preguntas guia - Cuestionario de comprension emocional",
            href: "src/modulo-3/evaluacion/preguntas-guia-cuestionario-comprension-emocional-tipo-test.docx",
            type: "Word"
          }
        ]
      }
    }
  },
  {
    id: 4,
    title: "Modulo 4",
    description: "Material descargable y entrega de actividad escrita.",
    topic: "Resumen del contenido principal del modulo 4.",
    activityType: "Documento",
    activityText: "En este punto se trabajara con una actividad escrita que luego revisara el profesorado.",
    videoText: "",
    deliverable: "Abrir un documento y rellenarlo con las respuestas.",
    sections: {
      "Contenidos clave": {
        description: "Audios y videos principales sobre comunicacion autentica, dialogo transformador y presencia.",
        resources: [
          {
            label: "Audio - Liderazgo con proposito: los 3 pilares de la comunicacion",
            href: "src/modulo-4/contenidos-clave/audio-liderazgo-proposito-3-pilares-comunicacion.m4a",
            type: "Audio"
          },
          {
            label: "Video - Comunicacion autentica",
            href: "src/modulo-4/contenidos-clave/comunicacion-autentica.mp4",
            type: "Video"
          },
          {
            label: "Video - El dialogo transformador",
            href: "src/modulo-4/contenidos-clave/dialogo-transformador.mp4",
            type: "Video"
          },
          {
            label: "Audio - Escucha profunda, preguntas y silencio",
            href: "src/modulo-4/contenidos-clave/audio-escucha-profunda-preguntas-silencio.m4a",
            type: "Audio"
          },
          {
            label: "Audio - El codigo de la presencia",
            href: "src/modulo-4/contenidos-clave/audio-codigo-presencia.m4a",
            type: "Audio"
          },
          {
            label: "Video - Presencia autentica",
            href: "src/modulo-4/contenidos-clave/presencia-autentica.mp4",
            type: "Video"
          }
        ]
      },
      "Lecturas, bibliografia y enlaces": {
        description: "Lecturas redactadas, bibliografia y recursos de apoyo del modulo 4.",
        resources: [
          {
            label: "10 ideas clave",
            href: "src/modulo-4/lecturas-bibliografia-enlaces/10-ideas-clave.docx",
            type: "Word"
          },
          {
            label: "Lecturas",
            href: "src/modulo-4/lecturas-bibliografia-enlaces/lecturas.docx",
            type: "Word"
          }
        ]
      },
      "Ficha modulo": {
        description: "Ficha principal del modulo 4 para trabajar y entregar.",
        resources: [
          {
            label: "Ficha del modulo 4",
            href: "src/modulo-4/materiales-ejercicios/ficha-modulo.docx",
            type: "Word"
          },
          {
            label: "Ficha del modulo 4 (ficha propia)",
            href: "src/modulo-4/ficha-modulo/ficha-modulo.docx",
            type: "Word"
          }
        ]
      },
      "Materiales y ejercicios": {
        description: "Actividades y tests para trabajar la comunicacion en el mentoring.",
        resources: [
          {
            label: "Errores comunes en la comunicacion",
            href: "src/modulo-4/materiales-ejercicios/errores-comunes-comunicacion.docx",
            type: "Word"
          },
          {
            label: "Guia de preguntas transformadoras para el mentoring",
            href: "src/modulo-4/materiales-ejercicios/guia-preguntas-transformadoras-mentoring.docx",
            type: "Word"
          },
          {
            label: "Test de creencias limitantes",
            href: "src/modulo-4/materiales-ejercicios/test-creencias-limitantes.docx",
            type: "Word"
          },
          {
            label: "Test de escucha activa",
            href: "src/modulo-4/materiales-ejercicios/test-escucha-activa.docx",
            type: "Word"
          }
        ]
      }
    }
  },
  {
    id: 5,
    title: "Modulo 5",
    description: "Recursos del modulo y comprobacion mediante test.",
    topic: "Resumen del contenido principal del modulo 5.",
    activityType: "Cuestionario",
    activityText: "La actividad final sera un test para validar el aprendizaje.",
    videoText: "",
    deliverable: "Completar el cuestionario correspondiente.",
    sections: {
      "Ficha modulo": {
        description: "Ficha principal del modulo 5 para descargar y completar.",
        resources: [
          {
            label: "Ficha del modulo 5",
            href: "src/modulo-5/ficha-modulo/ficha-modulo.docx",
            type: "Word"
          }
        ]
      }
    }
  },
  
];
