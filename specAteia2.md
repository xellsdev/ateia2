### ***Especificación Integral para la Renovación del Portal Web       ATEIA Bahía de Algeciras***

#### *1\. Marco Estratégico y Objetivos de la Plataforma*

La renovación integral del portal web de ATEIA-OLTRA Bahía de Algeciras constituye una iniciativa de modernización corporativa orientada a fortalecer la representatividad gremial, simplificar la gestión administrativa y dotar a las empresas asociadas, alumnos y usuarios de un entorno de autoservicio digital de alto valor añadido. La Asociación de Transitarios, Expedidores Internacionales y Asimilados de la Bahía de Algeciras agrupa a las empresas clave del transporte multimodal, la cadena logística y la representación aduanera en uno de los nudos portuarios más estratégicos del sur de Europa, integrándose activamente en el comité ejecutivo de FETEIA-OLTRA.

La arquitectura del nuevo portal persigue dos propósitos complementarios: 

- proyectar de manera nítida la potencia del sector hacia la comunidad logística internacional   
- optimizar los recursos internos de secretaría. 

El diseño erradica trámites burocráticos manuales mediante la automatización de la recogida de censos, la gestión documental unificada y la canalización de relaciones ante la Administración aduanera y sanitaria. Asimismo, se incorporan métricas de seguimiento digital alineadas con el plan de marketing sectorial, evaluando el alcance de las publicaciones, el interés en la oferta formativa y la captación de nuevas empresas miembros.

Para articular esta visión de forma rigurosa y escalable, la plataforma implementa una arquitectura modular con una clara segmentación por perfiles de usuario, gobernada por una matriz estricta de permisos que garantiza la seguridad, la confidencialidad de la información gremial, la sincronización de agendas fechadas por rol y el pleno cumplimiento de la normativa de protección de datos.

#### 

#### *2\. Identidad Visual, Paleta Cromática y Sistema Tipográfico*

El rediseño del portal conserva escrupulosamente la identidad visual histórica de la entidad mediante el mantenimiento del logotipo original de ATEIA-OLTRA. La pieza gráfica se define por un emblema circular cruzado diagonalmente por una flecha ascendente orientada hacia el cuadrante superior derecho, transmitiendo dirección, impulso y dinamismo en el flujo continuo del comercio internacional. La rotulación tipográfica de la marca denominativa, configurada en caracteres mayúsculos de trazo geométrico y cortes limpios unidos por guión, refleja la seguridad jurídica y el rigor propios de la actividad aduanera.

A partir del análisis cromático directo de los elementos gráficos del logotipo conservado, se extrae una paleta armónica y contrastada. Este esquema combina la solemnidad del azul marítimo con la visibilidad del amarillo corporativo, complementados con tonos neutros calibrados para garantizar la legibilidad en pantallas de cualquier resolución.

La siguiente tabla recoge los valores cromáticos normalizados, su designación técnica y su asignación funcional dentro de la interfaz del portal:

| Rol de Diseño | Denominación Cromática | Código Hexadecimal | Código RGB | Aplicación en Interfaz de Usuario |
| :---- | :---- | :---- | :---- | :---- |

| Color Primario Corporativo | Azul Marino Marítimo | \#0C4572 | rgb(12, 69, 114\) | Cabecera principal, barras de navegación, botones primarios, títulos H1/H2 y pie de página. |
| :---- | :---- | :---- | :---- | :---- |
| Color Secundario de Soporte | Azul Océano Pizarra | \#4D7FA4 | rgb(77, 127, 164\) | Bordes de módulos, subtítulos de tarjetas, fondos de insignias y elementos de navegación secundaria. |
| Color de Acento y Acción | Amarillo ATEIA Dinámico | \#F6EE31 | rgb(246, 238, 49\) | Llamadas a la acción principales (CTA), botones de contacto urgente, destacados en calendario y flecha de marca. |
| Acento Secundario Cálido | Oro Portuario Suave | \#F5ED30 | rgb(245, 237, 48\) | Estados de interacción (hover) sobre elementos amarillos, alertas informativas suaves y fondos destacados. |
| Neutro Base de Texto | Pizarra Profundo | \#1E293B | rgb(30, 41, 59\) | Bloques de texto corrido, enunciados de formularios, etiquetas de campos y tablas informativas. |
| Neutro de Apoyo Técnico | Gris Medio de Interfaz | \#64748B | rgb(100, 116, 139\) | Metadatos de publicaciones, fechas de emisión, textos explicativos secundarios e iconos pasivos. |
| Fondo Claro de Superficie | Blanco Técnico Suave | \#F8FAFC | rgb(248, 250, 252\) | Lienzo de fondo en áreas privadas, alternancia de filas en tablas y fondos de tarjetas de empresas. |
| Superficie Neutra Pura | Blanco Puro | \#FFFFFF | rgb(255, 255, 255\) | Contenedores de lectura, tarjetas elevadas, formularios y fondo del visor documental. |

El sistema tipográfico complementa la geometría del logotipo priorizando la legibilidad, la neutralidad funcional y la jerarquía clara entre contenidos editoriales y datos estructurados:

* **Tipografía de Titulares e Identidad (Montserrat)** : Familia sans-serif geométrica seleccionada para encabezados de página, títulos de sección, botones de acción y menús principales. Se empleará en pesos Semibold (600) y Bold (700) para conferir peso institucional y modernidad visual.  
* **Tipografía de Lectura y Datos Técnicos (Inter)** : Familia tipográfica de precisión concebida para entornos digitales. Su excelente rendimiento en cuerpos reducidos y tablas la hace idónea para la lectura de circulares aduaneras, tablas de liquidación y formularios de censo. Se utilizará en pesos Regular (400) para cuerpo de texto y Medium (500) para etiquetas y datos relevantes.  
* **Escala Modular de Jerarquía** : Títulos principales H1 fijados a 32px (interlineado 1.2), títulos de bloque H2 a 24px (interlineado 1.3), encabezados de sección H3 a 18px (interlineado 1.4), texto corrido a 16px (interlineado 1.6) y textos auxiliares o metadatos a 13px (interlineado 1.4).

#### 

#### *3\. Matriz de Usuarios, Permisos y Sistema Unificado de Autenticación*

La nueva plataforma establece cuatro tipologías bien diferenciadas de usuarios para asegurar una clara separación de funciones, control administrativo y acceso granular a los recursos, asegurando que cada perfil cuente con la información y las herramientas que necesita para su operativa diaria.

Tendremos cuatro tipos de usuarios que serán:

1. **Usuario público**: con acceso abierto (sin registro ni usuario previo)  
   * Navegación y consulta de información pública sectorial.   
   * Solicitud formal de plazas en cursos y jornadas formativas abiertas.  
   * Remisión de Currículum Vitae (CV) en PDF con consentimiento explícito RGPD.   
       
2. **Secretaría**: con credencial de administración de máxima seguridad con doble factor (2FA). Constará de un panel de control y administración global del portal web.  
   * Gestión integral del censo corporativo de empresas asociadas.   
   * Revisión, cotejo y validación formal de altas de asociados con documento firmado.   
   * Subida, etiquetado y custodia de documentación (Notas de Aduana íntegras y Actas de Asambleas).   
   * Creación, edición y calendarización de acciones formativas.   
   * Moderación y validación previa obligatoria de ofertas de empleo creadas por asociados y de CVs remitidos por el público.   
   * Extracción y consolidación anual de interlocutores autorizados ante Aduana y PIF/Sanidad para su entrega a la Administración.  
   * Calendario Maestro de Gestión : Control global fechado de comisiones de trabajo, comités técnicos, asambleas, sesiones de cursos, plazos de matriculación y vencimientos regulatorios.  
       
3. **asociados (Empresas)**: Usuario corporativo cifrado (identificación mediante CIF o correo corporativo). Constará de un Área Privada de Asociados (8 pestañas de gestión).  
   * Gestión y actualización de la ficha corporativa de la empresa (datos fiscales, teléfonos y correos segmentados).   
   * Registro y designación de interlocutores autorizados ante la Aduana y el PIF.  
   * Repositorio reservado: consulta y descarga de Notas de Aduana completas y Actas de Asambleas Generales.   
   * Inscripción y suscripción directa de trabajadores a cursos de formación.  
   * Creación y publicación de ofertas de empleo corporativas.   
   * Consulta y filtrado de CVs validados   
   * Calendario Asociativo : Vista mensual y listado de comités, comisiones técnicas, asambleas y convocatorias de cursos para confirmación de asistencia de la empresa.  
       
4. **Alumnos**: Usuario personal de estudiante (correo verificado y contraseña segura). Portal / Aula Virtual de Formación.  
   * Acceso directo a los cursos y convocatorias en los que está formalmente matriculado y dado de alta.   
   * Descarga de temarios, documentación técnica y presentaciones docentes.   
   * Enlace a sesiones telemáticas o aulas virtuales.   
   * Consulta de calificaciones, estado de aprovechamiento y descarga de certificados o diplomas.  
   * Calendario Académico Personalizado : Agenda lectiva exclusiva con días/horas de clases presenciales y virtuales, entregas de casos prácticos, exámenes y cierre lectivo.

##### 

##### Mecanismo Unificado de Inicio de Sesión y Recuperación de Contraseñas

Para garantizar una experiencia de usuario ágil y sin dispersión de accesos, el portal implementa las siguientes directrices de autenticación:

* **Punto de Acceso Único** : La cabecera superior permanente aloja el icono unificado de acceso (representado por el monigote de usuario). Al accionarlo, se despliega una ventana modal donde el usuario introduce sus credenciales (identificador/email y clave). El motor de autenticación detecta en base de datos el rol asociado al perfil ( *Secretaría* ,  *asociado*  o  *Alumno* ) y redirige de forma transparente al panel correspondiente.  
* **Protocolo Seguro de Recordatorio de Contraseña** : En la vista de login se dispone de un enlace permanente claramente rotulado:  *«¿Olvidaste tu contraseña?»* .  
* Cualquier usuario registrado ( *Secretaría* ,  *asociado*  o  *Alumno* ) puede solicitar el restablecimiento introduciendo su correo corporativo o personal vinculado.  
* El sistema genera un token criptográfico de un solo uso con una caducidad estricta de sesenta minutos y remite un correo automatizado con el enlace seguro de regeneración.  
* No se envían contraseñas en texto claro bajo ninguna circunstancia, y el enlace queda invalidado de inmediato tras su primer uso satisfactorio.

#### *4\. Especificación Funcional de la Navegación Pública y Contenidos*

La navegación pública está orientada a la claridad, la velocidad de carga y la utilidad práctica, eliminando contenidos superfluos. La cabecera superior fija integra el logotipo histórico en el extremo izquierdo, los accesos a redes sociales profesionales (LinkedIn y X), el enlace directo de mensajería instantánea a WhatsApp, los correos institucionales de contacto y el icono de acceso unificado. En el pie de página se incorporan los datos de contacto corporativo en la sede del Edificio Cámara de Comercio, Paseo de la Cornisa s/n (Algeciras), teléfono de atención general 956 646 913, correo secretaria@ateiacg.com y los textos legales obligatorios.  
A continuación, se define el contenido y los textos resumidos de referencia para cada una de las pestañas públicas:

##### Inicio (Home)

Página principal de bienvenida configurada como escaparate del sector transitario y logístico en la Bahía de Algeciras.

* **Texto Resumido del Hero** : ATEIA-OLTRA Bahía de Algeciras: Organización para la Logística, el Transporte y la Representación Aduanera. Agrupamos y representamos a las empresas líderes del sector logístico y transitario del Estrecho de Gibraltar. Impulsamos la competitividad operativa, la formación continua de excelencia y la interlocución directa ante la Administración aduanera y portuaria para garantizar la agilidad del comercio internacional.  
* **Vínculo Institucional FETEIA** : Módulo destacado que acredita la condición de miembro activo del Comité Ejecutivo de la Federación Española de Transitarios (FETEIA-OLTRA), subrayando la representatividad nacional y europea de la asociación.

##### asociados (Directorio Empresarial)

Directorio público interactivo que visibiliza la fortaleza del tejido asociativo y fomenta la interconexión comercial.

* **Texto Resumido Introductorio** : En ATEIA tienen cabida todas las empresas legalmente constituidas vinculadas al mundo del transporte multimodal, la cadena logística integral y la representación aduanera: operadores transitarios globales, empresas almacenistas, agencias de aduanas, consignatarias y compañías navieras. Nuestra unión fortalece la comunidad logística del Campo de Gibraltar.  
* **Estructura de las Fichas de Empresa** : Disposición en cuadrícula interactiva donde cada empresa socia cuenta con tarjeta corporativa individualizada que incluye su logotipo oficial, denominación social y comercial, dirección física, teléfono de contacto directo, correo electrónico, enlaces a redes sociales y enlace a su sitio web oficial.  
* **Censo Representado** : Integración de las firmas asociadas, entre las que figuran Noatum, Tránsito 2000, Transbull, Totallogistic, Servimensa, ProEx, Paublete, Agencia de Aduanas, Marítima del Estrecho Aduanas, On Logistics, Logika Distribution, Intercargo Andalucía, Hispamaroc, Mertramar, González G., AyF Transit Levante y Nieves Operador Logístico.

##### Servicios

Exposición rigurosa de los cuatro pilares fundamentales de actuación y soporte que la asociación proporciona a sus integrantes.

* **Representación Institucional y Defensa Colectiva** : Defensa de los intereses legítimos de los asociados ante la Autoridad Portuaria de la Bahía de Algeciras (APBA), la Administración de Aduanas, la Cámara de Comercio, estamentos de inspección en frontera (Sanidad Exterior, Sanidad Animal, Sanidad Vegetal, SOIVRE) y administraciones públicas locales, autonómicas y estatales.  
* **Información Técnica Especializada** : Canalización inmediata de circulares técnicas, directrices operativas aduaneras, modificaciones regulatorias y alertas sobre contingencias en las terminales del recinto portuario.  
* **Formación y Perfeccionamiento Profesional** : Oferta continuada de cursos y jornadas monográficas impartidas por especialistas de primer nivel, orientadas a la actualización de agentes de aduanas, directores de operaciones y personal de tráfico marítimo y terrestre.  
* **Promoción Comercial y Proyección Exterior** : Asistencia y participación en ferias y congresos logísticos de ámbito nacional e internacional para promocionar los servicios de la Bahía de Algeciras, captar tráficos y posicionar a las empresas miembros en los foros globales de decisión.

##### Comisiones de Trabajo

Presentación de los órganos de gobierno y las mesas técnicas especializadas que vertebran la actividad técnica de ATEIA.

* **Texto Resumido de Presentación** : La operatividad de ATEIA se fundamenta en comisiones de trabajo activas, donde profesionales de nuestras empresas asociadas debaten, analizan y fijan criterios sobre las materias críticas que condicionan la competitividad del puerto.  
* **Estructura de Comisiones y Órganos** :  
* *Comité Ejecutivo* : Dirección y gobierno estratégico de la asociación.  
* *Comisión de Aduanas* : Seguimiento permanente de criterios de despacho aduanero, resoluciones tributarias y coordinación operativa con la Aduana de Algeciras.  
* *Comisión de Formación* : Detección de necesidades formativas, planificación académica y diseño de programas técnicos.  
* *Comisión de Internacionalización* : Desarrollo de iniciativas en mercados exteriores y seguimiento de normativas de transporte transfronterizo.  
* *Comisión de Asuntos Jurídicos* : Análisis de marcos regulatorios, contratación mercantil y régimen de responsabilidad del transitario.  
* **Transparencia de Integrantes** : Cada comisión incluye su ficha funcional con las bases de trabajo y el listado de miembros con fotografía corporativa, cargo institucional y empresa de procedencia.

##### Formación (Área Pública)

Portal de capacitación técnica profesional enfocado al desarrollo de competencias especializadas en el entorno portuario.

* **Texto Resumido de Apertura** : Formación especializada adaptada a las realidades y exigencias del comercio internacional. Desarrollamos programas docentes actualizados que impulsan la capacitación técnica del personal aduanero y logístico.  
* **Próximos Cursos** : Fichas informativas con desglose de temarios, profesorado, fechas lectivas, número de horas, modalidad y formulario abierto de solicitud de plaza para usuarios públicos.  
* **Histórico de Cursos Impartidos** : Registro de convocatorias concluidas que certifica el compromiso formativo ininterrumpido de la asociación.  
* **Buzón de Necesidades Formativas** : Formulario interactivo que permite solicitar cursos específicos en nuevas tecnologías, aduanas o comercio exterior, facilitando la coordinación previa con la Cámara de Comercio.

##### Empleo (Captación de Talento y Envío de CV)

Módulo público concebido para tender un puente directo entre aspirantes laborales y las empresas transitarias asociadas.

* **Texto Resumido de Apertura** : ¿Deseas desarrollar tu carrera profesional en el sector logístico y aduanero de la Bahía de Algeciras? Registra tu currículum en nuestra plataforma de empleo para que las empresas asociadas puedan acceder a tu perfil en sus convocatorias de selección de personal.  
* **Flujo de Registro y Consentimiento RGPD** : El candidato cumplimenta un formulario con datos personales, nivel de estudios, dominio de idiomas y experiencia profesional, adjuntando obligatoriamente su currículum vitae en formato PDF. El formulario exige la marcación de una casilla de consentimiento informado conforme a la normativa de protección de datos (RGPD/LOPD). Los CV permanecerán en el sistema 3 meses, en caso de querer retirarlo antes se facilitará un email de contacto.  
* **Proceso de Moderación y Caducidad** : Los CVs remitidos entran en una bandeja de entrada pendiente de validación en la secretaría de ATEIA. Una vez revisados y aprobados por secretaría, pasan a estar disponibles en la bolsa privada de los asociados durante un plazo improrrogable de treinta días naturales, tras el cual se eliminan de manera automatizada si no han sido renovados.  
* **Ofertas de empleo vigentes**: los asociados podrán publicar ofertas de trabajo desde su portal rellenando un formulario. Estas ofertas aparecerán en este apartado mientras estén activas. Habrá un formulario para presentar candidaturas expresas para cada una de las ofertas de empleo independiente del formulario general de la asociación.

#### 

#### *5\. Especificación del Área Privada del Asociado y Flujos de Secretaría*

El Área Privada se articula como el centro de gestión administrativa y documental de cada compañía asociada. Una vez autenticada la empresa, la cabecera del panel privado muestra de forma continua su NIF y razón social (por ejemplo, B12345678X \- EMPRESA TRANSITARIA S.L.), dando acceso a ocho pestañas especializadas.  
A continuación, se detalla la operativa y especificación técnica de cada pestaña:

##### Pestaña 1: Mi Perfil (Censo, Altas y Delegaciones Oficiales)

Módulo destinado al mantenimiento íntegro de la ficha empresarial, la acreditación formal de nuevas empresas y la designación de interlocutores ante los organismos del Estado.  
Los campos y submódulos se estructuran con el siguiente nivel de detalle:

* **Datos Identificativos de la Empresa** :  
* *Denominación Fiscal* : Razón social oficial de la empresa.  
* *Denominación Comercial* : Nombre comercial de la firma en caso de diferir de la denominación fiscal.  
* *CIF / NIF* : Código fiscal oficial de la empresa.  
* *Dirección Completa* : Domicilio social o instalaciones en el área de la Bahía de Algeciras (vía, número, código postal y localidad).  
* **Datos Financieros** :  
* *Cuenta Bancaria (IBAN)* : Código normalizado de cuenta bancaria para la domiciliación autorizada de recibos y cuotas asociativas.  
* **Canales de Contacto Telefónico** :  
* *Teléfono General de Contacto* : Línea fija de oficina para comunicaciones ordinarias.  
* *Teléfono Móvil para Chat de Asociados* : Línea móvil designada por la dirección para su alta en el canal directo y chat de asociados de ATEIA, destinado a avisos operativos de carácter urgente.  
* **Segmentación Funcional de Correos Electrónicos** :  
* *Email de Aduanas* : Hasta dos direcciones de correo electrónico por empresa destinadas a la recepción diaria de circulares críticas, criterios de despacho aduanero y avisos de contingencia.  
* *Email de Contabilidad* : Dirección designada para la remisión de liquidaciones de cuotas, facturas de servicios y temas de cobros y facturación.  
* *Email de Responsable ATEIA* : Dirección del interlocutor institucional de la empresa para confirmación de asistencias a asambleas, comisiones de trabajo y actividades formativas.  
* **Procedimiento de Altas Nuevas** :  
* El sistema no valida solicitudes de alta exclusivamente a través de la cumplimentación digital de campos web. Se incorpora un enlace directo para la descarga del documento formal de alta asociativa. Para que la solicitud sea procesada por secretaría, la empresa aspirante debe cumplimentar dicho impreso, estampar firma digital autorizada o manuscrita con sello social, y subir obligatoriamente el archivo adjunto dentro del formulario de alta.  
* **Gestión de Interlocutores Autorizados ante Organismos Públicos** :  
* *Interlocutores ante la Aduana* : Formulario donde la empresa identifica a los representantes habilitados para trámites e incidencias ante la Dependencia de Aduanas e Impuestos Especiales.  
* *Interlocutores ante el PIF* : Formulario de registro de representantes autorizados ante Sanidad Exterior, Sanidad Animal y Sanidad Vegetal en el Puesto de Inspección Fronteriza.  
* *Volcado Consolidado Anual* : Los registros introducidos o actualizados quedan archivados en base de datos para que la secretaría de ATEIA genere el censo consolidado y lo remita a la Administración con la periodicidad anual preceptiva.  
* **Sistema de Alertas Automáticas a Secretaría** :  
* Cualquier modificación efectuada en los datos de empresa, correos de contacto, cuentas bancarias o interlocutores genera de inmediato un correo electrónico automatizado a la secretaría de ATEIA informando de los campos modificados, garantizando la auditoría y control de los cambios.

##### Pestaña 2: Formación

Gestor corporativo de la actividad académica de la empresa asociada.

* **Datos de contacto del responsable de Formación:** nombre, apellidos, teléfono y email.  
* **Histórico de Cursos por Empresa** : Registro pormenorizado de las acciones formativas en las que han participado profesionales de la firma a través de ATEIA.  
* **Desglose Detallado** : Consulta del título de la acción formativa, fechas de impartición, listado nominal de trabajadores matriculados y enlace directo a la factura vinculada.  
* **Suscripción e Inscripción de Personal** : Interfaz directa para que el asociado inscriba a empleados de su plantilla en los cursos vigentes. La confirmación genera el alta de los trabajadores con rol Alumno para el curso correspondiente.

##### Pestaña 3: Recibos y Facturación

Área de consulta económica y descarga de comprobantes contables.

* **Repositorio Documental Financiero** : Histórico ordenado cronológicamente de la totalidad de recibos de cuotas asociativas ordinarias, cuotas extraordinarias y facturas por acciones formativas o servicios complementarios.  
* **Descarga Oficial** : Descarga unitaria de cada justificante en formato PDF con indicación de fecha de emisión, importe liquidado y estado de pago.

##### Pestaña 4: Normativas y Documentación Especializada

Centro documental técnico dotado de un motor de búsqueda avanzado con filtrado por etiquetas temáticas (como Aduanas, PIF, Sanidad, Tasas, APBA o SOIVRE) y selector cronológico por fecha de emisión.  
En materia de custodia y difusión de documentos se aplica el siguiente criterio operativo estricto:

* **Notas de Aduana** : Publicación exhaustiva, sistemática y clasificada de la totalidad de las notas operativas, criterios y resoluciones aduaneras emitidas en el recinto portuario, garantizando la trazabilidad histórica de los criterios de despacho.   
* **Criterio Restrictivo sobre Actas** : Con el fin de salvaguardar la reserva de las deliberaciones técnicas ordinarias y no sobrecargar la plataforma digital, se establece que  **únicamente se colgarán en la web las Actas de las Asambleas Generales** . Las actas correspondientes a comisiones de trabajo, comités técnicos y reuniones ordinarias quedan excluidas de la plataforma web y se remitirán de forma directa y exclusiva mediante correo electrónico a los miembros convocados.

##### Pestaña 5: Calendario Asociativo de Actividades

Agenda corporativa interactiva concebida para la consulta y planificación de las empresas asociadas.

* **Registro Fechado de Eventos Institucionales** : Disposición en vista mensual y listado cronológico de la totalidad de eventos asociativos con indicación de fecha, hora, lugar o enlace telemático:  
* Convocatorias fechadas de Comisiones de Trabajo (Aduanas, Internacionalización, Jurídico, etc.).  
* Reuniones de Comités Técnicos y Comité Ejecutivo.  
* Convocatorias oficiales de Asambleas Generales Ordinarias y Extraordinarias.  
* Calendario de cursos formativos y jornadas técnicas de la asociación.  
* **Confirmación de Asistencia** : Interfaz ágil para que la empresa confirme la asistencia de sus representantes acreditados a las reuniones y comisiones convocadas.

##### Pestaña 6: Comunicaciones e Incidencias

Canal formal bidireccional para la gestión de incidencias portuarias y consultas operativas.

* **Formulario Estructurado** : Herramienta para comunicar incidencias en terminales marítimas, dudas de despacho aduanero, inspecciones en el PIF o sugerencias a la dirección de ATEIA.  
* **Panel de Seguimiento** : Registro histórico con indicación de fecha de remisión, asunto y estado de tramitación por parte del equipo de secretaría.

##### Pestaña 7: Portal de Empleo para asociados (Creación de Ofertas y Consulta de CVs)

Entorno laboral especializado para optimizar los procesos de contratación en las empresas de la asociación.

* **Creación de Ofertas de Trabajo** : Las empresas asociadas disponen de un formulario para publicar vacantes laborales describiendo perfil requerido, titulación, requisitos de idiomas y condiciones del puesto. Al crearse, la oferta queda en estado  *Pendiente de Aprobación*  hasta su validación en secretaría.  
* **Base de Candidaturas Vivas y Validadas** : Acceso directo y exclusivo a los currículums vitae remitidos por aspirantes públicos que han sido validados previamente por la secretaría de ATEIA.  
* **Filtros Avanzados de Búsqueda** : Clasificación ágil de candidatos por experiencia en despacho de aduanas, logística de contenedores, consignación de buques, titulación y nivel de idiomas.  
* **Mantenimiento y Purga Automática** : Visualización exclusiva de candidaturas vigentes dentro del periodo legal de 30 días, garantizando el cumplimiento del RGPD.

##### Pestaña 8: Portal de Innovación y Asistencia Inteligente

Espacio destinado al seguimiento de proyectos de digitalización y tecnología sectorial.

* **Buzón de Ideas Innovadoras** : Formulario donde los asociados pueden plantear iniciativas en áreas como ventanilla única portuaria, sostenibilidad logística o automatización de procesos aduaneros.  
* **Repositorio de Novedades** : Publicación periódica de análisis y noticias sobre innovaciones tecnológicas portuarias y aduaneras.  
* **Asistente Virtual Sectorial ("Pascualín")** : Módulo preparado para incorporar un asistente conversacional dotado de inteligencia artificial, entrenado con las circulares, notas de aduana y normativas de ATEIA para brindar soporte y respuestas inmediatas a las consultas habituales de los asociados.

#### *6\. Especificación del Portal y Aula de Alumnos con Calendario Académico Personalizado*

El perfil de Alumno está diseñado para garantizar una experiencia formativa focalizada, intuitiva y exenta de distracciones corporativas o administrativas. Para asegurar un seguimiento académico riguroso, el entorno incorpora un  **Calendario Académico Personalizado** , adaptado estrictamente a las convocatorias en que el alumno se encuentra matriculado.  
Su estructura funcional se organiza en los siguientes módulos:

##### 1\. Calendario Académico del Alumno

* **Fechas Clave Lectivas** : Visualización cronológica de todas las jornadas de clase (presenciales o mediante aula virtual por videoconferencia), con indicación expresa de horario y temática de la sesión.  
* **Hitos de Evaluación y Entregas** : Fechas límite para la presentación de supuestos prácticos, casos de despacho aduanero y realización de cuestionarios o exámenes finales.  
* **Cierre de Convocatoria y Certificados** : Fecha prevista de clausura del curso y momento a partir del cual está disponible para descarga el diploma o certificado oficial de aprovechamiento.  
* **Acceso Directo desde el Calendario** : Al pulsar sobre la sesión formativa correspondiente en el calendario, el sistema despliega un botón de acceso directo a la sala de videoconferencia o al módulo lectivo correspondiente.  
* **Sincronización de Agenda Externa** : Botón de exportación universal que genera un archivo de calendario normalizado (.ics), permitiendo al alumno integrar sus clases y exámenes en su agenda personal de Google Calendar, Microsoft Outlook o Apple Calendar.

##### 2\. Aula Virtual y Repositorio de Materiales

* **Mis Cursos Activos** : Vista limpia que muestra únicamente las acciones formativas en las que el alumno cuenta con matrícula activa formalizada por su empresa socia o por la secretaría.  
* **Descarga de Documentación Técnica** : Acceso permanente a temarios oficiales, presentaciones en diapositivas, textos normativos, guías de despacho aduanero y ejercicios resueltos.  
* **Canal de Tutorías** : Enlace directo para remitir dudas técnicas al profesorado responsable de la materia.

##### 3\. Calificaciones y Diplomas

* **Panel de Estado** : Registro individualizado del porcentaje de asistencia a las sesiones lectivas y estado de corrección de las pruebas obligatorias.  
* **Certificación Oficial** : Descarga del certificado oficial emitido por ATEIA-OLTRA Bahía de Algeciras en formato PDF protegido con código seguro de verificación una vez superados los requisitos docentes.

#### 

#### *7\. Panel de Secretaría y Calendario Maestro de Gestión*

El perfil de Secretaría constituye el cerebro operativo del portal web, dotado de privilegios de administración global y herramientas de supervisión estratégica. 

Desde el panel de Secretaría se llevará control de todos los aspectos de la asociación:

##### 1\. Gestión de asociados

* Administración de datos generales  
* Emisión de recibos y estado de pago de los mismos, tanto de cuotas como de formación
* Generación de informes sobre asociados y sus recibos

##### 2\. Gestión de formación

* Creación y gestión de cursos

##### 3\. Gestión de ofertas de empleo

* Revisión de ofertas de empleo.

##### 4\. Gestión de información

* Subida y publicación de documentos de interés para asociados.

Para dar respuesta a la necesidad de control interno de la asociación, el panel incorpora el  **Calendario Maestro de Gestión** , una consola centralizada que coordina todos los hitos asociativos, académicos y regulatorios.

Su arquitectura operativa comprende las siguientes capacidades:

##### 1\. Gestión Integral de Convocatorias Asociativas

* **Comisiones de Trabajo** : Programación fechada de las sesiones ordinarias y extraordinarias de las comisiones (Aduanas, Asuntos Jurídicos, Formación, Internacionalización), con asignación de orden del día, sala física en la Cámara de Comercio o enlace a sala virtual.  
* **Comités Técnicos y Órganos de Gobierno** : Agendamiento de las reuniones del Comité Ejecutivo y comités especializados.  
* **Asambleas Generales** : Planificación de Asambleas Ordinarias y Extraordinarias, vinculando las fechas de envío de convocatorias formales y posterior publicación del Acta aprobada.

##### 2\. Coordinación y Cronograma de Formación

* **Ciclos Lectivos Completos** : Fechado exacto del inicio y finalización de cada acción formativa, fechas de exámenes o evaluaciones, y plazos límite para la reserva de matrículas y solicitudes de plaza.  
* **Gestión de Horarios y Aulas** : Asignación de días lectivos y horarios para cada grupo de alumnos, evitando solapamientos de profesorado o de salas de videoconferencia.

##### 3\. Vencimientos Regulatorios y Administrativos

* **Censo Anual de Interlocutores (Aduana y PIF/Sanidad)** : Hito fijado en el calendario que alerta a la secretaría con antelación suficiente de la fecha límite para consolidar las bases de datos de interlocutores autorizados de los asociados y formalizar su remisión obligatoria anual ante la Administración.  
* **Supervisión de Ofertas y Candidaturas** : Fechas límite de publicación de ofertas laborales corporativas y alertas sobre pautas de depuración de CVs.

##### 4\. Herramientas Operativas del Calendario Maestro

* **Detección de Conflictos de Agenda** : El motor del calendario advierte automáticamente a secretaría si se pretende programar una comisión o evento en coincidencia horaria con otra actividad relevante.  
* **Remisión de Convocatorias y Notificaciones** : Capacidad de disparar recordatorios por correo electrónico a los miembros inscritos o responsables de ATEIA con 48 o 24 horas de antelación.

#### *8\. Flujo de Moderación y Gestión de la Bolsa de Empleo*

La gestión de empleo del portal implementa un modelo de doble filtro y moderación previa por parte de la secretaría de ATEIA, asegurando la calidad de los contenidos y la máxima seguridad jurídica:

* **Recepción de Candidaturas (Público \-\> Secretaría)** :  
* El usuario público cumplimenta el formulario y adjunta su CV aceptando formalmente las cláusulas de protección de datos.  
* El expediente se registra en el sistema con estado  *Pendiente de Validación* .  
* La secretaría de ATEIA revisa que el archivo cumpla con los estándares de seguridad (ausencia de virus, formato PDF válido) y que el contenido corresponda a una candidatura legítima.  
* Tras la aprobación, el CV pasa a estado  *Activo*  y resulta visible para las empresas socias en la Pestaña 7 de su área privada.  
* **Publicación de Ofertas de Trabajo (asociado \-\> Secretaría \-\> Público/asociados)** :  
* La empresa socia redacta su oferta laboral a través de su panel privado.  
* La oferta queda registrada como  *Pendiente de Revisión* .  
* La secretaría comprueba la adecuación de la convocatoria y la aprueba, habilitando su difusión pública o interna según los parámetros definidos.  
* **Auditoría y Purga Mensual** :  
* El sistema ejecuta rutinas periódicas de depuración que dan de baja automáticamente los perfiles de candidatos transcurridos 30 días naturales desde su registro o última renovación explícita, notificando al interesado para preservar la vigencia de la base de datos.

#### 

#### *9\. Criterios de Publicación Documental, Calendario y Protección de Datos*

La gestión de la información en el nuevo portal armoniza las exigencias operativas de la asociación con el cumplimiento de la normativa vigente en materia de protección de datos personales y seguridad documental.

La siguiente tabla resume las políticas de acceso, conservación, soporte y visibilidad aplicables a cada tipología de información y agendas dentro de la plataforma:

| Tipología de Información / Calendario | Canal de Distribución | Nivel de Visibilidad | Plazo de Conservación y Eliminación | Requisitos de Validación |
| :---- | :---- | :---- | :---- | :---- |

| Tipología de Información / Calendario | Canal de Distribución | Nivel de Visibilidad | Plazo de Conservación y Eliminación | Requisitos de Validación |
| :---- | :---- | :---- | :---- | :---- |
| Solicitud de Alta de Nuevo Asociado | Área Privada / Secretaría | Confidencial (Empresa y Secretaría) | Conservación permanente durante la vinculación de la empresa. | Descarga de impreso formal y subida obligatoria del documento firmado. |
| Interlocutores Autorizados (Aduana / PIF) | Área Privada / Secretaría | Restringido (Empresa y Secretaría) | Actualización permanente y extracción anual para la Administración. | Formulario electrónico validado con notificación de cambio a secretaría. |
| Notas Operativas de Aduana | Repositorio Privado | Exclusivo para Empresas Asociadas | Histórico indefinido con etiquetado por materias y fecha de emisión. | Publicación íntegra y sistemática en el área de normativas. |
| Actas de Asambleas Generales | Repositorio Privado | Exclusivo para Empresas Asociadas | Archivo histórico permanente accesible para todos los asociados. | Aprobación en asamblea previa y publicación en formato PDF protegido. |
| Actas de Comisiones y Comités | Correo Electrónico Directo | Restringido a miembros convocados | No se publican en el portal web; envío exclusivo por email. | Remisión por secretaría a los asistentes a la reunión. |
| Ofertas de Empleo de asociados | Panel Privado / Público | Moderado (Revisión de Secretaría) | Periodo de vigencia de la vacante (máximo 60 días o retirada). | Aprobación previa por secretaría antes de su visibilidad. |
| Currículums de Candidatos de Empleo | Bolsa de Empleo Privada | Candidato, Secretaría y asociados | Purga automática a los 30 días naturales sin prórroga. | Consentimiento explícito RGPD y validación de secretaría. |
| Calendario Maestro de Secretaría | Panel de Control de Secretaría | Exclusivo de Secretaría y Dirección | Ejercicio en curso e histórico de programación plurianual. | Control total, edición de eventos y remisión anual de censos. |
| Calendario Asociativo de asociados | Pestaña 5 del Área Privada | Exclusivo de Empresas Asociadas | Anualidad en curso y consulta de convocatorias programadas. | Carga centralizada por secretaría y confirmación de asistencia del asociado. |
| Calendario Académico del Alumno | Portal del Alumno (Aula Virtual) | Restringido al Alumno Matriculado | Vigencia durante el periodo lectivo de las materias matriculadas. | Generación automática vinculada a las fechas del curso y exportación .ics. |

#### 

#### *10\. Requerimientos Técnicos, Infraestructura de Correo y Seguridad*

Para garantizar un funcionamiento estable, seguro y adaptable a cualquier dispositivo, la implementación técnica del portal debe cumplir las siguientes especificaciones operativas:

* **Adaptabilidad a Dispositivos Móviles (Responsive Web Design)** : Maquetación fluida y adaptativa que garantice una visualización precisa tanto en ordenadores de escritorio como en terminales móviles y tabletas, reconfigurando automáticamente tablas densas, vistas de calendarios mensuales y formularios extensos.  
* **Enrutamiento e Infraestructura de Correo Institucional** : El sistema debe conectarse con el servidor de correo institucional para canalizar los formularios y notificaciones transaccionales a las cuentas oficiales de la organización:  
* *Secretaría General y Administración* : secretaria@ateiacg.com, administracion@ateiacg.com y cuenta de secretaría ejecutiva (rocioj.arias@ateiacg.com).  
* *Presidencia* : presidencia@ateiacg.com.  
* *Comisiones Técnicas* : comisionaduanas@ateiacg.com, asuntosjuridicos@ateiacg.com y formacion@ateiacg.com.  
* *Soporte Técnico* : soporte@ateiacg.com para la atención de incidencias en la plataforma.  
* **Seguridad y Carga Restringida de Documentos** : Los módulos de subida de archivos (documentos formales de alta firmados, currículums vitae y comprobantes) admitirán exclusivamente ficheros en formatos PDF, DOC y DOCX, con un límite máximo fijado en 10 megabytes por archivo y verificación antivirus previa a su almacenamiento.  
* **Automatización de Tareas Programadas** : Configuración de rutinas de servidor (cron jobs) de periodicidad diaria para auditar la vigencia de los candidatos inscritos en la bolsa de empleo (purga a 30 días naturales) y remitir alertas programadas de calendario a secretaría, asociados y alumnos con 24/48 horas de antelación.  
* **Registro de Auditoría de Cambios** : Almacenamiento en base de datos de un registro de trazabilidad que consigne cada modificación realizada por los asociados en sus perfiles empresariales o censos de interlocutores, guardando la fecha, la hora exacta, el usuario autenticado y la dirección IP desde la que se formalizó el cambio.

