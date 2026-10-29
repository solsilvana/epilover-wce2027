"use strict";

const COPY = {
  es: {
    skip:"Saltar al contenido", language:"Idioma", navSurvey:"Encuesta", navDashboard:"Tablero", heroEyebrow:"DATATÓN INTERNACIONAL · WCE 2027", heroTitle:"¿Qué reto de epidemiología debemos resolver juntos?", heroBody:"Ayúdanos a construir una agenda internacional de epidemiología basada en las prioridades de quienes trabajan en los territorios.", time:"6 minutos", whyKicker:"TU VOZ CUENTA", whyTitle:"De un reto local a una colaboración global", whyBody:"Las respuestas orientarán el datatón del XXIV Congreso Mundial de Epidemiología. Buscamos problemas concretos, comparables y con potencial de colaboración.", privacyTitle:"Uso responsable de datos", privacyBody:"Tu correo funciona como identificador y solo estará disponible para el comité. El tablero muestra resultados agregados.", registrationTitle:"Nota importante", registrationBody:"Esta encuesta recoge retos e información sobre posibles fuentes de datos. No constituye una inscripción al datatón ni al Congreso.", congressDate:"Medellín, Colombia · 31 ago — 3 sep", step1Title:"Sobre ti y tu territorio", step1Lead:"Empecemos con la información mínima para ubicar el reto.", email:"Correo electrónico", emailPlaceholder:"nombre@organizacion.org", emailHelp:"No solicitamos tu nombre. Usaremos el correo para evitar respuestas duplicadas.", country:"País", select:"Selecciona…", admin1:"Departamento / estado / región", admin1Placeholder:"Primer nivel administrativo", city:"Ciudad o municipio", cityPlaceholder:"Ciudad principal", role:"Tu rol principal", organization:"Organización", optional:"opcional", organizationPlaceholder:"Institución o colectivo", scope:"Alcance de tu trabajo", step2Title:"Reto y temas del Congreso", step2Lead:"Elige un eje, selecciona hasta tres temas del Congreso y describe el reto más urgente.", thematicAxis:"Eje temático principal del Congreso", thematicAxisHelp:"La lista de temas se organizará según el eje seleccionado.", categories:"Temas del Congreso relacionados con el reto", categoriesHelp:"Selecciona entre 1 y 3 temas del eje elegido.", priorityTopic:"¿Cuál es el reto o problema prioritario?", topicPlaceholder:"Descríbelo de forma concreta: población, lugar y por qué urge actuar…", topicHelp:"Evita incluir nombres o datos personales.", population:"Población especialmente afectada", populationPlaceholder:"Ej.: comunidades rurales, niñez, trabajadores informales", step3Title:"Fuentes y disponibilidad de datos", step3Lead:"Comparte lo que sabes sobre posibles datos relacionados con el reto. Puedes referenciar conjuntos de datos o publicaciones que los describan.", dataAvailability:"Disponibilidad de datos", dataAvailabilityHelp:"Indica la situación más cercana, incluso si todavía no conoces una fuente específica.", referenceType:"Forma de referencia", sourceName:"Nombre de la fuente o publicación", sourceNamePlaceholder:"Institución, conjunto de datos o publicación", sourceUrl:"Enlace a la fuente o publicación", sourceUrlPlaceholder:"https://…", sourceUrlHelp:"Puede ser un enlace directo, catálogo, repositorio o publicación que describa cómo acceder a los datos.", sourceNotes:"Notas sobre acceso, cobertura o condiciones de uso", sourceNotesPlaceholder:"Ej.: años disponibles, población cubierta, permiso requerido o contacto responsable…", communityDataNote:"Si no conoces una fuente, puedes continuar. La comunidad organizadora también identificará y documentará datos asociados a los retos seleccionados.", step4Title:"Del reto a la acción", step4Lead:"Para cerrar, cuéntanos dónde está el principal cuello de botella y cómo podríamos sumar esfuerzos.", stage:"¿En qué etapa está la mayor dificultad?", collaboration:"¿Qué datos, capacidades o alianzas ayudarían?", collaborationPlaceholder:"Ej.: datos comparables, métodos, socios comunitarios, tecnología…", consentTitle:"Autorizo el uso de mi respuesta para el datatón", consentBody:"Acepto que el comité analice estos datos y publique resultados agregados. Mi correo no aparecerá en el tablero.", back:"Atrás", next:"Continuar", submit:"Enviar respuesta", successKicker:"RESPUESTA RECIBIDA", successTitle:"Gracias por poner tu territorio en el mapa", successBody:"Tu aporte ya forma parte de la agenda de retos para el datatón. Recuerda: esta encuesta no constituye una inscripción.", responseId:"Identificador", newResponse:"Registrar otra respuesta", dashboardEyebrow:"OBSERVATORIO DE PRIORIDADES", dashboardTitle:"Pulso epidemiológico internacional", dashboardBody:"Una lectura agregada de los retos propuestos para orientar equipos, datos y colaboraciones.", showDemo:"Ver datos demo", showReal:"Ver datos reales", downloadCsv:"Descargar CSV", committeeAccess:"ACCESO DEL COMITÉ", loginTitle:"Tablero protegido", loginBody:"Ingresa la clave de administración para consultar agregados y descargar la base de datos.", pin:"Clave de acceso", pinPlaceholder:"••••••••", enter:"Entrar al tablero", localHint:"Para esta prueba local, la clave inicial está en el archivo README.", demoBanner:"Estás viendo datos ficticios para explorar el tablero. No se mezclan con respuestas reales.", responses:"Respuestas", responsesNote:"aportes recibidos", countryCoverage:"Cobertura", countriesNote:"países representados", topPriority:"Prioridad principal", mentionsNote:"por número de menciones", dataSources:"Fuentes identificadas", dataSourcesNote:"retos con una fuente referenciada", priorityAreas:"TEMAS DEL CONGRESO", whatMobilizes:"¿Qué temas movilizan a la comunidad?", reach:"ALCANCE", workScale:"Escala de trabajo", geography:"GEOGRAFÍA", participatingCountries:"Países participantes", bottlenecks:"CUELLOS DE BOTELLA", whereHelp:"¿Dónde se necesita más apoyo?", congressAxes:"EJES DEL CONGRESO", axisDistribution:"Distribución de retos por eje", dataLandscape:"PANORAMA DE DATOS", availabilityDistribution:"Disponibilidad reportada", voices:"VOCES DEL TERRITORIO", recentChallenges:"Retos priorizados recientemente", emptyTitle:"Aún no hay respuestas reales", emptyBody:"Prueba el tablero con datos demostrativos o vuelve a la encuesta para registrar la primera respuesta.", exploreDemo:"Explorar datos demo", footer:"Prototipo del Comité del Datatón · Medellín, Colombia", selected:"seleccionado(s)", requiredError:"Revisa los campos marcados antes de continuar.", categoryError:"Selecciona entre uno y tres temas del Congreso.", maxCategories:"Puedes seleccionar máximo tres temas.", sending:"Enviando…", duplicate:"Este correo ya tiene una respuesta registrada.", submitError:"No pudimos guardar la respuesta. Inténtalo de nuevo.", loginError:"La clave no es correcta.", loading:"Cargando…", noData:"Sin datos", dashboardError:"No pudimos cargar el tablero.", total:"total"
  },
  en: {
    skip:"Skip to content", language:"Language", navSurvey:"Survey", navDashboard:"Dashboard", heroEyebrow:"INTERNATIONAL DATATHON · WCE 2027", heroTitle:"Which epidemiology challenge should we solve together?", heroBody:"Help us build an international epidemiology agenda grounded in the priorities of people working across territories.", time:"4 minutes", whyKicker:"YOUR VOICE MATTERS", whyTitle:"From a local challenge to global collaboration", whyBody:"Responses will guide the XXIV World Congress of Epidemiology datathon. We seek concrete, comparable problems with collaboration potential.", privacyTitle:"Responsible data use", privacyBody:"Your email is an identifier available only to the committee. The dashboard displays aggregated results.", congressDate:"Medellín, Colombia · Aug 31 — Sep 3", step1Title:"About you and your territory", step1Lead:"Let's begin with the minimum information needed to locate the challenge.", email:"Email address", emailPlaceholder:"name@organization.org", emailHelp:"We do not ask for your name. Email helps us prevent duplicate responses.", country:"Country", select:"Select…", admin1:"State / province / region", admin1Placeholder:"First administrative level", city:"City or municipality", cityPlaceholder:"Main city", role:"Your main role", organization:"Organization", optional:"optional", organizationPlaceholder:"Institution or collective", scope:"Scope of your work", step2Title:"Your epidemiology priority", step2Lead:"Choose up to three areas and describe the most urgent challenge in your own words.", categories:"Priority areas in epidemiology", categoriesHelp:"Select between 1 and 3 areas.", priorityTopic:"What is the priority challenge or problem?", topicPlaceholder:"Be specific: population, place, and why action is urgent…", topicHelp:"Do not include names or personal data.", population:"Population especially affected", populationPlaceholder:"E.g. rural communities, children, informal workers", step3Title:"From challenge to action", step3Lead:"Finally, tell us where the main bottleneck lies and how we might combine efforts.", stage:"At which stage is the greatest difficulty?", collaboration:"What data, capacities, or partnerships would help?", collaborationPlaceholder:"E.g. comparable data, methods, community partners, technology…", consentTitle:"I authorize use of my response for the datathon", consentBody:"I agree that the committee may analyze these data and publish aggregated results. My email will not appear on the dashboard.", back:"Back", next:"Continue", submit:"Submit response", successKicker:"RESPONSE RECEIVED", successTitle:"Thank you for putting your territory on the map", successBody:"Your contribution is now part of the datathon challenge agenda.", responseId:"Identifier", newResponse:"Submit another response", dashboardEyebrow:"PRIORITIES OBSERVATORY", dashboardTitle:"International epidemiology pulse", dashboardBody:"An aggregated view of proposed challenges to guide teams, data, and collaboration.", showDemo:"View demo data", showReal:"View real data", downloadCsv:"Download CSV", committeeAccess:"COMMITTEE ACCESS", loginTitle:"Protected dashboard", loginBody:"Enter the administration key to view aggregates and download the database.", pin:"Access key", pinPlaceholder:"••••••••", enter:"Open dashboard", localHint:"For this local test, the initial key is in the README file.", demoBanner:"You are viewing fictional data to explore the dashboard. They are not mixed with real responses.", responses:"Responses", responsesNote:"contributions received", countryCoverage:"Coverage", countriesNote:"countries represented", topPriority:"Leading priority", mentionsNote:"by number of mentions", priorityAreas:"PRIORITY AREAS", whatMobilizes:"What topics mobilize the community?", reach:"SCOPE", workScale:"Scale of work", geography:"GEOGRAPHY", participatingCountries:"Participating countries", bottlenecks:"BOTTLENECKS", whereHelp:"Where is support most needed?", voices:"VOICES FROM THE FIELD", recentChallenges:"Recently prioritized challenges", emptyTitle:"No real responses yet", emptyBody:"Try the dashboard with demonstration data or return to the survey to record the first response.", exploreDemo:"Explore demo data", footer:"Datathon Committee prototype · Medellín, Colombia", selected:"selected", requiredError:"Review the highlighted fields before continuing.", categoryError:"Select between one and three priority areas.", maxCategories:"You can select up to three areas.", sending:"Sending…", duplicate:"A response is already registered for this email.", submitError:"We could not save the response. Please try again.", loginError:"The access key is incorrect.", loading:"Loading…", noData:"No data", dashboardError:"We could not load the dashboard.", total:"total"
  },
  pt: {
    skip:"Pular para o conteúdo", language:"Idioma", navSurvey:"Questionário", navDashboard:"Painel", heroEyebrow:"DATATHON INTERNACIONAL · WCE 2027", heroTitle:"Qual desafio de epidemiologia devemos resolver juntos?", heroBody:"Ajude-nos a construir uma agenda internacional de epidemiologia baseada nas prioridades de quem trabalha nos territórios.", time:"4 minutos", whyKicker:"SUA VOZ IMPORTA", whyTitle:"De um desafio local à colaboração global", whyBody:"As respostas orientarão o datathon do XXIV Congresso Mundial de Epidemiologia. Buscamos problemas concretos, comparáveis e com potencial de colaboração.", privacyTitle:"Uso responsável dos dados", privacyBody:"Seu e-mail funciona como identificador e estará disponível apenas para o comitê. O painel mostra resultados agregados.", congressDate:"Medellín, Colômbia · 31 ago — 3 set", step1Title:"Sobre você e seu território", step1Lead:"Comecemos com as informações mínimas para localizar o desafio.", email:"E-mail", emailPlaceholder:"nome@organizacao.org", emailHelp:"Não solicitamos seu nome. O e-mail ajuda a evitar respostas duplicadas.", country:"País", select:"Selecione…", admin1:"Estado / província / região", admin1Placeholder:"Primeiro nível administrativo", city:"Cidade ou município", cityPlaceholder:"Cidade principal", role:"Sua função principal", organization:"Organização", optional:"opcional", organizationPlaceholder:"Instituição ou coletivo", scope:"Alcance do seu trabalho", step2Title:"Sua prioridade epidemiológica", step2Lead:"Escolha até três áreas e descreva o desafio mais urgente com suas próprias palavras.", categories:"Áreas prioritárias em epidemiologia", categoriesHelp:"Selecione entre 1 e 3 áreas.", priorityTopic:"Qual é o desafio ou problema prioritário?", topicPlaceholder:"Seja específico: população, lugar e por que é urgente agir…", topicHelp:"Evite incluir nomes ou dados pessoais.", population:"População especialmente afetada", populationPlaceholder:"Ex.: comunidades rurais, crianças, trabalhadores informais", step3Title:"Do desafio à ação", step3Lead:"Para concluir, conte onde está o principal gargalo e como poderíamos unir esforços.", stage:"Em que etapa está a maior dificuldade?", collaboration:"Que dados, capacidades ou alianças ajudariam?", collaborationPlaceholder:"Ex.: dados comparáveis, métodos, parceiros comunitários, tecnologia…", consentTitle:"Autorizo o uso da minha resposta no datathon", consentBody:"Aceito que o comitê analise estes dados e publique resultados agregados. Meu e-mail não aparecerá no painel.", back:"Voltar", next:"Continuar", submit:"Enviar resposta", successKicker:"RESPOSTA RECEBIDA", successTitle:"Obrigado por colocar seu território no mapa", successBody:"Sua contribuição agora faz parte da agenda de desafios do datathon.", responseId:"Identificador", newResponse:"Registrar outra resposta", dashboardEyebrow:"OBSERVATÓRIO DE PRIORIDADES", dashboardTitle:"Pulso epidemiológico internacional", dashboardBody:"Uma leitura agregada dos desafios propostos para orientar equipes, dados e colaborações.", showDemo:"Ver dados demo", showReal:"Ver dados reais", downloadCsv:"Baixar CSV", committeeAccess:"ACESSO DO COMITÊ", loginTitle:"Painel protegido", loginBody:"Digite a chave de administração para consultar os agregados e baixar a base de dados.", pin:"Chave de acesso", pinPlaceholder:"••••••••", enter:"Entrar no painel", localHint:"Para este teste local, a chave inicial está no arquivo README.", demoBanner:"Você está vendo dados fictícios para explorar o painel. Eles não se misturam com respostas reais.", responses:"Respostas", responsesNote:"contribuições recebidas", countryCoverage:"Cobertura", countriesNote:"países representados", topPriority:"Principal prioridade", mentionsNote:"por número de menções", priorityAreas:"ÁREAS PRIORITÁRIAS", whatMobilizes:"Quais temas mobilizam a comunidade?", reach:"ALCANCE", workScale:"Escala de trabalho", geography:"GEOGRAFIA", participatingCountries:"Países participantes", bottlenecks:"GARGALOS", whereHelp:"Onde é necessário mais apoio?", voices:"VOZES DO TERRITÓRIO", recentChallenges:"Desafios priorizados recentemente", emptyTitle:"Ainda não há respostas reais", emptyBody:"Experimente o painel com dados demonstrativos ou volte ao questionário para registrar a primeira resposta.", exploreDemo:"Explorar dados demo", footer:"Protótipo do Comitê do Datathon · Medellín, Colômbia", selected:"selecionada(s)", requiredError:"Revise os campos destacados antes de continuar.", categoryError:"Selecione entre uma e três áreas prioritárias.", maxCategories:"Você pode selecionar no máximo três áreas.", sending:"Enviando…", duplicate:"Já existe uma resposta registrada para este e-mail.", submitError:"Não foi possível salvar a resposta. Tente novamente.", loginError:"A chave de acesso está incorreta.", loading:"Carregando…", noData:"Sem dados", dashboardError:"Não foi possível carregar o painel.", total:"total"
  },
  fr: {
    skip:"Aller au contenu", language:"Langue", navSurvey:"Enquête", navDashboard:"Tableau", heroEyebrow:"DATATHON INTERNATIONAL · WCE 2027", heroTitle:"Quel défi d’épidémiologie devrions-nous résoudre ensemble ?", heroBody:"Aidez-nous à construire un programme international d’épidémiologie fondé sur les priorités des personnes qui travaillent dans les territoires.", time:"4 minutes", whyKicker:"VOTRE VOIX COMPTE", whyTitle:"D’un défi local à une collaboration mondiale", whyBody:"Les réponses guideront le datathon du XXIVe Congrès mondial d’épidémiologie. Nous recherchons des problèmes concrets, comparables et propices à la collaboration.", privacyTitle:"Utilisation responsable des données", privacyBody:"Votre e-mail sert d’identifiant et n’est accessible qu’au comité. Le tableau présente des résultats agrégés.", congressDate:"Medellín, Colombie · 31 août — 3 sept.", step1Title:"Vous et votre territoire", step1Lead:"Commençons par les informations minimales nécessaires pour situer le défi.", email:"Adresse e-mail", emailPlaceholder:"nom@organisation.org", emailHelp:"Nous ne demandons pas votre nom. L’e-mail aide à éviter les réponses en double.", country:"Pays", select:"Sélectionner…", admin1:"État / province / région", admin1Placeholder:"Premier niveau administratif", city:"Ville ou municipalité", cityPlaceholder:"Ville principale", role:"Votre rôle principal", organization:"Organisation", optional:"facultatif", organizationPlaceholder:"Institution ou collectif", scope:"Portée de votre travail", step2Title:"Votre priorité épidémiologique", step2Lead:"Choisissez jusqu’à trois domaines et décrivez le défi le plus urgent avec vos propres mots.", categories:"Domaines prioritaires en épidémiologie", categoriesHelp:"Sélectionnez entre 1 et 3 domaines.", priorityTopic:"Quel est le défi ou problème prioritaire ?", topicPlaceholder:"Soyez précis : population, lieu et urgence d’agir…", topicHelp:"N’incluez pas de noms ni de données personnelles.", population:"Population particulièrement touchée", populationPlaceholder:"Ex. communautés rurales, enfants, travailleurs informels", step3Title:"Du défi à l’action", step3Lead:"Enfin, indiquez où se situe le principal blocage et comment nous pourrions unir nos efforts.", stage:"À quelle étape se situe la plus grande difficulté ?", collaboration:"Quelles données, capacités ou alliances seraient utiles ?", collaborationPlaceholder:"Ex. données comparables, méthodes, partenaires communautaires, technologie…", consentTitle:"J’autorise l’utilisation de ma réponse pour le datathon", consentBody:"J’accepte que le comité analyse ces données et publie des résultats agrégés. Mon e-mail n’apparaîtra pas sur le tableau.", back:"Retour", next:"Continuer", submit:"Envoyer la réponse", successKicker:"RÉPONSE REÇUE", successTitle:"Merci de placer votre territoire sur la carte", successBody:"Votre contribution fait désormais partie du programme de défis du datathon.", responseId:"Identifiant", newResponse:"Enregistrer une autre réponse", dashboardEyebrow:"OBSERVATOIRE DES PRIORITÉS", dashboardTitle:"Pouls épidémiologique international", dashboardBody:"Une lecture agrégée des défis proposés pour orienter les équipes, les données et les collaborations.", showDemo:"Voir les données démo", showReal:"Voir les données réelles", downloadCsv:"Télécharger CSV", committeeAccess:"ACCÈS DU COMITÉ", loginTitle:"Tableau protégé", loginBody:"Saisissez la clé d’administration pour consulter les agrégats et télécharger la base.", pin:"Clé d’accès", pinPlaceholder:"••••••••", enter:"Ouvrir le tableau", localHint:"Pour ce test local, la clé initiale se trouve dans le fichier README.", demoBanner:"Vous consultez des données fictives pour explorer le tableau. Elles ne sont pas mélangées aux réponses réelles.", responses:"Réponses", responsesNote:"contributions reçues", countryCoverage:"Couverture", countriesNote:"pays représentés", topPriority:"Priorité principale", mentionsNote:"par nombre de mentions", priorityAreas:"DOMAINES PRIORITAIRES", whatMobilizes:"Quels sujets mobilisent la communauté ?", reach:"PORTÉE", workScale:"Échelle de travail", geography:"GÉOGRAPHIE", participatingCountries:"Pays participants", bottlenecks:"BLOCAGES", whereHelp:"Où le soutien est-il le plus nécessaire ?", voices:"VOIX DU TERRAIN", recentChallenges:"Défis récemment priorisés", emptyTitle:"Aucune réponse réelle pour le moment", emptyBody:"Explorez le tableau avec les données de démonstration ou revenez à l’enquête pour enregistrer la première réponse.", exploreDemo:"Explorer les données démo", footer:"Prototype du Comité du Datathon · Medellín, Colombie", selected:"sélectionné(s)", requiredError:"Vérifiez les champs signalés avant de continuer.", categoryError:"Sélectionnez entre un et trois domaines prioritaires.", maxCategories:"Vous pouvez sélectionner au maximum trois domaines.", sending:"Envoi…", duplicate:"Une réponse est déjà enregistrée pour cet e-mail.", submitError:"Impossible d’enregistrer la réponse. Réessayez.", loginError:"La clé d’accès est incorrecte.", loading:"Chargement…", noData:"Aucune donnée", dashboardError:"Impossible de charger le tableau.", total:"total"
  }
};

Object.assign(COPY.en, {
  time:"6 minutes", registrationTitle:"Important note", registrationBody:"This survey collects challenges and information about possible data sources. It is not a registration for the datathon or the Congress.",
  step2Title:"Challenge and Congress topics", step2Lead:"Choose one track, select up to three Congress topics, and describe the most urgent challenge.", thematicAxis:"Main Congress thematic track", thematicAxisHelp:"The topic list will be organized according to the selected track.", categories:"Congress topics related to the challenge", categoriesHelp:"Select between 1 and 3 topics from the chosen track.",
  step3Title:"Data sources and availability", step3Lead:"Share what you know about possible data related to the challenge. You may reference datasets or publications that describe them.", dataAvailability:"Data availability", dataAvailabilityHelp:"Choose the closest situation, even if you do not yet know a specific source.", referenceType:"Type of reference", sourceName:"Data source or publication name", sourceNamePlaceholder:"Institution, dataset, or publication", sourceUrl:"Link to the source or publication", sourceUrlPlaceholder:"https://…", sourceUrlHelp:"This may be a direct link, catalog, repository, or publication explaining how to access the data.", sourceNotes:"Notes on access, coverage, or conditions of use", sourceNotesPlaceholder:"E.g. years available, population covered, required permission, or responsible contact…", communityDataNote:"If you do not know a source, you may continue. The organizing community will also identify and document data related to the selected challenges.",
  step4Title:"From challenge to action", step4Lead:"Finally, tell us where the main bottleneck lies and how we might combine efforts.", successBody:"Your contribution is now part of the datathon challenge agenda. Remember: this survey is not a registration.", dataSources:"Sources identified", dataSourcesNote:"challenges with a referenced source", priorityAreas:"CONGRESS TOPICS", congressAxes:"CONGRESS TRACKS", axisDistribution:"Distribution of challenges by track", dataLandscape:"DATA LANDSCAPE", availabilityDistribution:"Reported availability", selected:"selected", categoryError:"Select between one and three Congress topics.", maxCategories:"You can select up to three topics."
});
Object.assign(COPY.pt, {
  time:"6 minutos", registrationTitle:"Nota importante", registrationBody:"Este questionário coleta desafios e informações sobre possíveis fontes de dados. Não constitui inscrição no datathon nem no Congresso.",
  step2Title:"Desafio e temas do Congresso", step2Lead:"Escolha um eixo, selecione até três temas do Congresso e descreva o desafio mais urgente.", thematicAxis:"Eixo temático principal do Congresso", thematicAxisHelp:"A lista de temas será organizada conforme o eixo selecionado.", categories:"Temas do Congresso relacionados ao desafio", categoriesHelp:"Selecione entre 1 e 3 temas do eixo escolhido.",
  step3Title:"Fontes e disponibilidade de dados", step3Lead:"Compartilhe o que sabe sobre possíveis dados relacionados ao desafio. Você pode referenciar conjuntos de dados ou publicações que os descrevam.", dataAvailability:"Disponibilidade de dados", dataAvailabilityHelp:"Indique a situação mais próxima, mesmo que ainda não conheça uma fonte específica.", referenceType:"Forma de referência", sourceName:"Nome da fonte ou publicação", sourceNamePlaceholder:"Instituição, conjunto de dados ou publicação", sourceUrl:"Link da fonte ou publicação", sourceUrlPlaceholder:"https://…", sourceUrlHelp:"Pode ser um link direto, catálogo, repositório ou publicação que explique como acessar os dados.", sourceNotes:"Notas sobre acesso, cobertura ou condições de uso", sourceNotesPlaceholder:"Ex.: anos disponíveis, população coberta, permissão necessária ou contato responsável…", communityDataNote:"Se você não conhece uma fonte, pode continuar. A comunidade organizadora também identificará e documentará dados associados aos desafios selecionados.",
  step4Title:"Do desafio à ação", step4Lead:"Para concluir, conte onde está o principal gargalo e como poderíamos unir esforços.", successBody:"Sua contribuição agora faz parte da agenda de desafios do datathon. Lembre-se: este questionário não constitui inscrição.", dataSources:"Fontes identificadas", dataSourcesNote:"desafios com uma fonte referenciada", priorityAreas:"TEMAS DO CONGRESSO", congressAxes:"EIXOS DO CONGRESSO", axisDistribution:"Distribuição dos desafios por eixo", dataLandscape:"PANORAMA DOS DADOS", availabilityDistribution:"Disponibilidade informada", selected:"selecionado(s)", categoryError:"Selecione entre um e três temas do Congresso.", maxCategories:"Você pode selecionar até três temas."
});
Object.assign(COPY.fr, {
  time:"6 minutes", registrationTitle:"Note importante", registrationBody:"Cette enquête recueille des défis et des informations sur des sources de données possibles. Elle ne constitue pas une inscription au datathon ni au Congrès.",
  step2Title:"Défi et thèmes du Congrès", step2Lead:"Choisissez un axe, sélectionnez jusqu’à trois thèmes du Congrès et décrivez le défi le plus urgent.", thematicAxis:"Axe thématique principal du Congrès", thematicAxisHelp:"La liste des thèmes sera organisée selon l’axe sélectionné.", categories:"Thèmes du Congrès liés au défi", categoriesHelp:"Sélectionnez entre 1 et 3 thèmes de l’axe choisi.",
  step3Title:"Sources et disponibilité des données", step3Lead:"Partagez ce que vous savez sur les données possibles liées au défi. Vous pouvez référencer des jeux de données ou des publications qui les décrivent.", dataAvailability:"Disponibilité des données", dataAvailabilityHelp:"Choisissez la situation la plus proche, même si vous ne connaissez pas encore de source précise.", referenceType:"Type de référence", sourceName:"Nom de la source ou de la publication", sourceNamePlaceholder:"Institution, jeu de données ou publication", sourceUrl:"Lien vers la source ou la publication", sourceUrlPlaceholder:"https://…", sourceUrlHelp:"Il peut s’agir d’un lien direct, d’un catalogue, d’un dépôt ou d’une publication expliquant l’accès aux données.", sourceNotes:"Notes sur l’accès, la couverture ou les conditions d’utilisation", sourceNotesPlaceholder:"Ex. années disponibles, population couverte, autorisation requise ou contact responsable…", communityDataNote:"Si vous ne connaissez pas de source, vous pouvez continuer. La communauté organisatrice identifiera et documentera également des données liées aux défis sélectionnés.",
  step4Title:"Du défi à l’action", step4Lead:"Enfin, indiquez où se situe le principal blocage et comment nous pourrions unir nos efforts.", successBody:"Votre contribution fait désormais partie du programme de défis du datathon. Rappel : cette enquête ne constitue pas une inscription.", dataSources:"Sources identifiées", dataSourcesNote:"défis avec une source référencée", priorityAreas:"THÈMES DU CONGRÈS", congressAxes:"AXES DU CONGRÈS", axisDistribution:"Répartition des défis par axe", dataLandscape:"PANORAMA DES DONNÉES", availabilityDistribution:"Disponibilité déclarée", selected:"sélectionné(s)", categoryError:"Sélectionnez entre un et trois thèmes du Congrès.", maxCategories:"Vous pouvez sélectionner jusqu’à trois thèmes."
});

Object.assign(COPY.es, {
  worldReach:"ALCANCE MUNDIAL", worldMapTitle:"Mapa de países participantes", worldMapLead:"La intensidad del color representa el número de respuestas recibidas por país.", worldMapAria:"Mapa mundial que muestra la participación por país", mapLegendAria:"Escala de respuestas por país", mapLegendNone:"Sin respuestas", mapLegendMore:"Más respuestas", mapSource:"Cartografía:", mapSourceNote:"datos de dominio público, almacenados localmente", mapLoadError:"No pudimos cargar el mapa.", mapResponse:"respuesta", mapResponses:"respuestas"
});
Object.assign(COPY.en, {
  worldReach:"GLOBAL REACH", worldMapTitle:"Map of participating countries", worldMapLead:"Color intensity represents the number of responses received from each country.", worldMapAria:"World map showing participation by country", mapLegendAria:"Scale of responses by country", mapLegendNone:"No responses", mapLegendMore:"More responses", mapSource:"Cartography:", mapSourceNote:"public-domain data stored locally", mapLoadError:"We could not load the map.", mapResponse:"response", mapResponses:"responses"
});
Object.assign(COPY.pt, {
  worldReach:"ALCANCE MUNDIAL", worldMapTitle:"Mapa dos países participantes", worldMapLead:"A intensidade da cor representa o número de respostas recebidas por país.", worldMapAria:"Mapa mundial que mostra a participação por país", mapLegendAria:"Escala de respostas por país", mapLegendNone:"Sem respostas", mapLegendMore:"Mais respostas", mapSource:"Cartografia:", mapSourceNote:"dados de domínio público armazenados localmente", mapLoadError:"Não foi possível carregar o mapa.", mapResponse:"resposta", mapResponses:"respostas"
});
Object.assign(COPY.fr, {
  worldReach:"PORTÉE MONDIALE", worldMapTitle:"Carte des pays participants", worldMapLead:"L’intensité de la couleur représente le nombre de réponses reçues par pays.", worldMapAria:"Carte mondiale montrant la participation par pays", mapLegendAria:"Échelle des réponses par pays", mapLegendNone:"Aucune réponse", mapLegendMore:"Plus de réponses", mapSource:"Cartographie :", mapSourceNote:"données du domaine public stockées localement", mapLoadError:"Impossible de charger la carte.", mapResponse:"réponse", mapResponses:"réponses"
});

const LABELS = {
  categories: {
    communicable:{es:"Enfermedades transmisibles",en:"Communicable diseases",pt:"Doenças transmissíveis",fr:"Maladies transmissibles"},
    ncd:{es:"Crónicas no transmisibles",en:"Noncommunicable diseases",pt:"Doenças crônicas não transmissíveis",fr:"Maladies non transmissibles"},
    maternal_child:{es:"Salud materna, sexual, infantil y adolescente",en:"Maternal, sexual, child & adolescent health",pt:"Saúde materna, sexual, infantil e adolescente",fr:"Santé maternelle, sexuelle, infantile et adolescente"},
    mental_health:{es:"Salud mental y consumo de sustancias",en:"Mental health & substance use",pt:"Saúde mental e uso de substâncias",fr:"Santé mentale et usage de substances"},
    injuries_violence:{es:"Lesiones, violencias y seguridad vial",en:"Injuries, violence & road safety",pt:"Lesões, violências e segurança viária",fr:"Traumatismes, violences et sécurité routière"},
    environment_climate:{es:"Salud ambiental y cambio climático",en:"Environmental health & climate change",pt:"Saúde ambiental e mudança climática",fr:"Santé environnementale et changement climatique"},
    food_nutrition:{es:"Seguridad alimentaria y nutricional",en:"Food security & nutrition",pt:"Segurança alimentar e nutricional",fr:"Sécurité alimentaire et nutrition"},
    occupational:{es:"Salud y trabajo",en:"Occupational health",pt:"Saúde e trabalho",fr:"Santé au travail"},
    health_systems:{es:"Sistemas, servicios y acceso a salud",en:"Health systems, services & access",pt:"Sistemas, serviços e acesso à saúde",fr:"Systèmes, services et accès aux soins"},
    social_determinants:{es:"Determinantes sociales, inequidades y migración",en:"Social determinants, inequities & migration",pt:"Determinantes sociais, iniquidades e migração",fr:"Déterminants sociaux, inégalités et migration"},
    one_health:{es:"Una Salud, zoonosis y salud animal",en:"One Health, zoonoses & animal health",pt:"Saúde Única, zoonoses e saúde animal",fr:"Une seule santé, zoonoses et santé animale"},
    emergencies:{es:"Emergencias, desastres y salud humanitaria",en:"Emergencies, disasters & humanitarian health",pt:"Emergências, desastres e saúde humanitária",fr:"Urgences, catastrophes et santé humanitaire"},
    amr:{es:"Resistencia a los antimicrobianos",en:"Antimicrobial resistance",pt:"Resistência antimicrobiana",fr:"Résistance aux antimicrobiens"},
    methods_data:{es:"Vigilancia, métodos, datos e IA",en:"Surveillance, methods, data & AI",pt:"Vigilância, métodos, dados e IA",fr:"Surveillance, méthodes, données et IA"}
  },
  roles: {
    research:{es:"Investigación / academia",en:"Research / academia",pt:"Pesquisa / academia",fr:"Recherche / université"}, epidemiology:{es:"Epidemiología",en:"Epidemiology",pt:"Epidemiologia",fr:"Épidémiologie"}, clinical:{es:"Atención clínica",en:"Clinical care",pt:"Assistência clínica",fr:"Soins cliniques"}, government:{es:"Gobierno / formulación de políticas",en:"Government / policymaking",pt:"Governo / políticas públicas",fr:"Gouvernement / politiques publiques"}, community:{es:"Comunidad / liderazgo social",en:"Community / social leadership",pt:"Comunidade / liderança social",fr:"Communauté / leadership social"}, student:{es:"Estudiante",en:"Student",pt:"Estudante",fr:"Étudiant·e"}, ngo:{es:"ONG / cooperación",en:"NGO / development cooperation",pt:"ONG / cooperação",fr:"ONG / coopération"}, other:{es:"Otro",en:"Other",pt:"Outro",fr:"Autre"}
  },
  scopes: {
    local:{es:"Local / municipal",en:"Local / municipal",pt:"Local / municipal",fr:"Local / municipal"}, subnational:{es:"Subnacional",en:"Subnational",pt:"Subnacional",fr:"Infranational"}, national:{es:"Nacional",en:"National",pt:"Nacional",fr:"National"}, regional:{es:"Regional / multinacional",en:"Regional / multi-country",pt:"Regional / multinacional",fr:"Régional / multinational"}, global:{es:"Global",en:"Global",pt:"Global",fr:"Mondial"}
  },
  stages: {
    define:{es:"Definir y priorizar el problema",en:"Defining and prioritizing the problem",pt:"Definir e priorizar o problema",fr:"Définir et prioriser le problème"}, data:{es:"Acceder, integrar o mejorar datos",en:"Accessing, integrating or improving data",pt:"Acessar, integrar ou melhorar dados",fr:"Accéder, intégrer ou améliorer les données"}, analysis:{es:"Analizar e interpretar evidencia",en:"Analyzing and interpreting evidence",pt:"Analisar e interpretar evidências",fr:"Analyser et interpréter les preuves"}, implementation:{es:"Diseñar e implementar soluciones",en:"Designing and implementing solutions",pt:"Desenhar e implementar soluções",fr:"Concevoir et mettre en œuvre des solutions"}, evaluation:{es:"Evaluar impacto y escalar",en:"Evaluating impact and scaling",pt:"Avaliar impacto e ampliar",fr:"Évaluer l’impact et déployer"}, communication:{es:"Comunicar evidencia e incidir",en:"Communicating evidence and influencing policy",pt:"Comunicar evidências e influenciar",fr:"Communiquer les preuves et influencer"}
  }
};

const TOPIC_GROUPS = {
  health_topics:["infectious_diseases","chronic_diseases","cancer","nutritional_metabolic","psychiatric_mental_health","mltc","perinatal_maternal","women_gender","life_course","injury_disability_care","violence_conflict","lifestyle","urban_health","climate_health","environmental_health","occupational_health","reemerging_diseases","humanitarian_health","health_migration"],
  epidemiological_methods:["innovation_epi_methods","innovation_stat_methods","ai_data_science","data_driven_epidemiology","real_world_admin_data","causal_framework","causal_aggregate_data","spatial_epidemiology","realtime_epidemiology","experimental_epidemiology","field_epidemiology","molecular_genetic","pharmacoepidemiology","clinical_epidemiology","screening_vaccination","health_inequalities","exposome"],
  policy_action:["health_policy","evidence_guidelines","surveillance_systems","epidemic_control_preparedness","epidemiology_advocacy","promotion_prevention","ethics_epidemiology","philosophy_epidemiology","epistemology_science","threats_science","implementation_science","inequalities_determinants","social_behavioral","global_south_epidemiology","global_health"],
  capacity_building:["teaching_training","research_communication"]
};

LABELS.thematicAxes = {
  health_topics:{es:"Temas de salud",en:"Health topics",pt:"Temas de saúde",fr:"Thèmes de santé"},
  epidemiological_methods:{es:"Métodos epidemiológicos",en:"Epidemiological methods",pt:"Métodos epidemiológicos",fr:"Méthodes épidémiologiques"},
  policy_action:{es:"Política y acción",en:"Policy and action",pt:"Política e ação",fr:"Politique et action"},
  capacity_building:{es:"Fortalecimiento de capacidades",en:"Capacity building",pt:"Fortalecimento de capacidades",fr:"Renforcement des capacités"}
};
LABELS.categories = {
  infectious_diseases:{es:"Enfermedades infecciosas",en:"Infectious diseases",pt:"Doenças infecciosas",fr:"Maladies infectieuses"},
  chronic_diseases:{es:"Enfermedades crónicas",en:"Chronic diseases",pt:"Doenças crônicas",fr:"Maladies chroniques"},
  cancer:{es:"Cáncer",en:"Cancer",pt:"Câncer",fr:"Cancer"},
  nutritional_metabolic:{es:"Enfermedades nutricionales y metabólicas",en:"Nutritional and metabolic diseases",pt:"Doenças nutricionais e metabólicas",fr:"Maladies nutritionnelles et métaboliques"},
  psychiatric_mental_health:{es:"Psiquiatría y salud mental",en:"Psychiatric and mental health",pt:"Psiquiatria e saúde mental",fr:"Psychiatrie et santé mentale"},
  mltc:{es:"Múltiples condiciones de larga duración (MLTC)",en:"Multiple Long Term Conditions (MLTC)",pt:"Múltiplas condições de longa duração (MLTC)",fr:"Affections multiples de longue durée (MLTC)"},
  perinatal_maternal:{es:"Salud perinatal y materna",en:"Perinatal and maternal health",pt:"Saúde perinatal e materna",fr:"Santé périnatale et maternelle"},
  women_gender:{es:"Salud de las mujeres y género",en:"Women and gender health",pt:"Saúde das mulheres e gênero",fr:"Santé des femmes et genre"},
  life_course:{es:"Primera infancia, envejecimiento y curso de vida",en:"Early life, aging, and life course",pt:"Primeira infância, envelhecimento e curso de vida",fr:"Petite enfance, vieillissement et parcours de vie"},
  injury_disability_care:{es:"Lesiones, discapacidad y cuidados",en:"Injury, disability, and care",pt:"Lesões, deficiência e cuidados",fr:"Traumatismes, handicap et soins"},
  violence_conflict:{es:"Violencia y conflicto",en:"Violence and conflict",pt:"Violência e conflito",fr:"Violence et conflit"},
  lifestyle:{es:"Estilos de vida: alcohol, tabaco, nutrición y actividad física",en:"Lifestyle: alcohol, tobacco, nutrition and physical activity",pt:"Estilo de vida: álcool, tabaco, nutrição e atividade física",fr:"Mode de vie : alcool, tabac, nutrition et activité physique"},
  urban_health:{es:"Salud urbana",en:"Urban health",pt:"Saúde urbana",fr:"Santé urbaine"},
  climate_health:{es:"Cambio climático y salud",en:"Climate change and health",pt:"Mudança climática e saúde",fr:"Changement climatique et santé"},
  environmental_health:{es:"Salud ambiental",en:"Environmental health",pt:"Saúde ambiental",fr:"Santé environnementale"},
  occupational_health:{es:"Salud ocupacional",en:"Occupational health",pt:"Saúde ocupacional",fr:"Santé au travail"},
  reemerging_diseases:{es:"Enfermedades reemergentes",en:"Re-emerging diseases",pt:"Doenças reemergentes",fr:"Maladies réémergentes"},
  humanitarian_health:{es:"Salud humanitaria",en:"Humanitarian health",pt:"Saúde humanitária",fr:"Santé humanitaire"},
  health_migration:{es:"Salud y migración",en:"Health migration",pt:"Saúde e migração",fr:"Santé et migration"},
  innovation_epi_methods:{es:"Innovaciones en métodos epidemiológicos",en:"Innovations in epidemiological methods",pt:"Inovações em métodos epidemiológicos",fr:"Innovations en méthodes épidémiologiques"},
  innovation_stat_methods:{es:"Innovaciones en métodos estadísticos",en:"Innovations in statistical methods",pt:"Inovações em métodos estatísticos",fr:"Innovations en méthodes statistiques"},
  ai_data_science:{es:"Inteligencia artificial y ciencia de datos",en:"Artificial intelligence and data science",pt:"Inteligência artificial e ciência de dados",fr:"Intelligence artificielle et science des données"},
  data_driven_epidemiology:{es:"Inteligencia de datos y epidemiología basada en datos",en:"Data intelligence and data-driven epidemiology",pt:"Inteligência de dados e epidemiologia orientada por dados",fr:"Intelligence des données et épidémiologie guidée par les données"},
  real_world_admin_data:{es:"Datos del mundo real y registros administrativos",en:"Real-world data and administrative records in epidemiology",pt:"Dados do mundo real e registros administrativos",fr:"Données en vie réelle et registres administratifs"},
  causal_framework:{es:"Marcos innovadores de inferencia causal",en:"Innovative framework of causal inference",pt:"Estruturas inovadoras de inferência causal",fr:"Cadres innovants d’inférence causale"},
  causal_aggregate_data:{es:"Métodos causales con datos agregados",en:"Causal statistical methods using aggregate data",pt:"Métodos causais com dados agregados",fr:"Méthodes causales avec données agrégées"},
  spatial_epidemiology:{es:"Epidemiología espacial",en:"Spatial epidemiology",pt:"Epidemiologia espacial",fr:"Épidémiologie spatiale"},
  realtime_epidemiology:{es:"Epidemiología en tiempo real",en:"Real-time epidemiology",pt:"Epidemiologia em tempo real",fr:"Épidémiologie en temps réel"},
  experimental_epidemiology:{es:"Epidemiología experimental e intervencional",en:"Experimental/interventional epidemiology",pt:"Epidemiologia experimental e intervencional",fr:"Épidémiologie expérimentale et interventionnelle"},
  field_epidemiology:{es:"Epidemiología de campo",en:"Field epidemiology",pt:"Epidemiologia de campo",fr:"Épidémiologie de terrain"},
  molecular_genetic:{es:"Epidemiología molecular y genética",en:"Molecular and genetic epidemiology",pt:"Epidemiologia molecular e genética",fr:"Épidémiologie moléculaire et génétique"},
  pharmacoepidemiology:{es:"Farmacoepidemiología",en:"Pharmacoepidemiology",pt:"Farmacoepidemiologia",fr:"Pharmacoépidémiologie"},
  clinical_epidemiology:{es:"Epidemiología clínica",en:"Clinical epidemiology",pt:"Epidemiologia clínica",fr:"Épidémiologie clinique"},
  screening_vaccination:{es:"Epidemiología del tamizaje y la vacunación",en:"Screening and vaccination epidemiology",pt:"Epidemiologia do rastreamento e vacinação",fr:"Épidémiologie du dépistage et de la vaccination"},
  health_inequalities:{es:"Desigualdades en salud",en:"Health inequalities",pt:"Desigualdades em saúde",fr:"Inégalités de santé"},
  exposome:{es:"Exposoma",en:"Exposome",pt:"Exposoma",fr:"Exposome"},
  health_policy:{es:"Política de salud",en:"Health policy",pt:"Política de saúde",fr:"Politique de santé"},
  evidence_guidelines:{es:"Orientaciones y decisiones basadas en evidencia epidemiológica",en:"Epidemiological guidelines and evidence-informed decision making",pt:"Diretrizes e decisões baseadas em evidências epidemiológicas",fr:"Recommandations et décisions fondées sur des données épidémiologiques"},
  surveillance_systems:{es:"Sistemas de vigilancia epidemiológica",en:"Epidemiological surveillance systems",pt:"Sistemas de vigilância epidemiológica",fr:"Systèmes de surveillance épidémiologique"},
  epidemic_control_preparedness:{es:"Control de epidemias y preparación para emergencias",en:"Epidemic control and emergency preparedness",pt:"Controle de epidemias e preparação para emergências",fr:"Contrôle des épidémies et préparation aux urgences"},
  epidemiology_advocacy:{es:"Incidencia y defensa de la epidemiología",en:"Epidemiology advocacy",pt:"Defesa e incidência em epidemiologia",fr:"Plaidoyer en faveur de l’épidémiologie"},
  promotion_prevention:{es:"Promoción y prevención",en:"Promotion and prevention",pt:"Promoção e prevenção",fr:"Promotion et prévention"},
  ethics_epidemiology:{es:"Aspectos éticos en epidemiología",en:"Ethical issues in epidemiology",pt:"Questões éticas em epidemiologia",fr:"Questions éthiques en épidémiologie"},
  philosophy_epidemiology:{es:"Filosofía de la epidemiología",en:"Philosophy of epidemiology",pt:"Filosofia da epidemiologia",fr:"Philosophie de l’épidémiologie"},
  epistemology_science:{es:"Epistemología de la ciencia",en:"Epistemology of science",pt:"Epistemologia da ciência",fr:"Épistémologie des sciences"},
  threats_science:{es:"Amenazas a la ciencia",en:"Threats to science",pt:"Ameaças à ciência",fr:"Menaces envers la science"},
  implementation_science:{es:"Ciencia de la implementación",en:"Implementation science",pt:"Ciência da implementação",fr:"Science de la mise en œuvre"},
  inequalities_determinants:{es:"Desigualdades y determinantes sociales",en:"Health inequalities and social determinants",pt:"Desigualdades e determinantes sociais",fr:"Inégalités de santé et déterminants sociaux"},
  social_behavioral:{es:"Ciencias sociales y del comportamiento",en:"Social and behavioral sciences",pt:"Ciências sociais e comportamentais",fr:"Sciences sociales et comportementales"},
  global_south_epidemiology:{es:"Epidemiología desde y para el Sur Global",en:"Epidemiology from and for the Global South",pt:"Epidemiologia do e para o Sul Global",fr:"Épidémiologie depuis et pour les Suds"},
  global_health:{es:"Salud global",en:"Global health",pt:"Saúde global",fr:"Santé mondiale"},
  teaching_training:{es:"Enseñanza y formación en epidemiología",en:"Teaching epidemiology and training",pt:"Ensino e formação em epidemiologia",fr:"Enseignement et formation en épidémiologie"},
  research_communication:{es:"Comunicación efectiva de hallazgos para decisiones basadas en evidencia epidemiológica",en:"Effective communication of research findings for evidence-informed epidemiological decisions",pt:"Comunicação eficaz de achados para decisões baseadas em evidências epidemiológicas",fr:"Communication efficace des résultats pour des décisions fondées sur des données épidémiologiques"}
};
LABELS.dataAvailability = {
  open_public:{es:"Datos abiertos y públicos",en:"Open and public data",pt:"Dados abertos e públicos",fr:"Données ouvertes et publiques"},
  public_on_request:{es:"Datos públicos disponibles mediante solicitud",en:"Public data available on request",pt:"Dados públicos mediante solicitação",fr:"Données publiques sur demande"},
  restricted_shareable:{es:"Datos restringidos que podrían compartirse con un acuerdo",en:"Restricted data potentially shareable under an agreement",pt:"Dados restritos compartilháveis mediante acordo",fr:"Données restreintes partageables sous accord"},
  private_permission:{es:"Datos privados que requieren autorización",en:"Private data requiring permission",pt:"Dados privados que exigem autorização",fr:"Données privées nécessitant une autorisation"},
  unknown:{es:"La disponibilidad aún no está clara",en:"Availability is not yet clear",pt:"A disponibilidade ainda não está clara",fr:"La disponibilité n’est pas encore claire"},
  not_identified:{es:"Aún no se ha identificado una fuente",en:"No source has been identified yet",pt:"Ainda não foi identificada uma fonte",fr:"Aucune source n’a encore été identifiée"}
};
LABELS.referenceTypes = {
  direct_link:{es:"Enlace directo a los datos",en:"Direct link to data",pt:"Link direto para os dados",fr:"Lien direct vers les données"},
  data_catalog:{es:"Catálogo o portal de datos",en:"Data catalog or portal",pt:"Catálogo ou portal de dados",fr:"Catalogue ou portail de données"},
  publication:{es:"Publicación que describe o da acceso",en:"Publication describing or providing access",pt:"Publicação que descreve ou dá acesso",fr:"Publication décrivant ou donnant accès"},
  repository:{es:"Repositorio",en:"Repository",pt:"Repositório",fr:"Dépôt"},
  contact:{es:"Contacto o institución responsable",en:"Responsible contact or institution",pt:"Contato ou instituição responsável",fr:"Contact ou institution responsable"},
  other:{es:"Otra referencia",en:"Other reference",pt:"Outra referência",fr:"Autre référence"}
};

const CATEGORY_ICONS = {};
const COUNTRY_CODES = "AD,AE,AF,AG,AL,AM,AO,AR,AT,AU,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BN,BO,BR,BS,BT,BW,BY,BZ,CA,CD,CF,CG,CH,CI,CL,CM,CN,CO,CR,CU,CV,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,ER,ES,ET,FI,FJ,FM,FR,GA,GB,GD,GE,GH,GM,GN,GQ,GR,GT,GW,GY,HN,HR,HT,HU,ID,IE,IL,IN,IQ,IR,IS,IT,JM,JO,JP,KE,KG,KH,KI,KM,KN,KP,KR,KW,KZ,LA,LB,LC,LI,LK,LR,LS,LT,LU,LV,LY,MA,MC,MD,ME,MG,MH,MK,ML,MM,MN,MR,MT,MU,MV,MW,MX,MY,MZ,NA,NE,NG,NI,NL,NO,NP,NR,NZ,OM,PA,PE,PG,PH,PK,PL,PS,PT,PW,PY,QA,RO,RS,RU,RW,SA,SB,SC,SD,SE,SG,SI,SK,SL,SM,SN,SO,SR,SS,ST,SV,SY,SZ,TD,TG,TH,TJ,TL,TM,TN,TO,TR,TT,TV,TW,TZ,UA,UG,US,UY,UZ,VA,VC,VE,VN,VU,WS,YE,ZA,ZM,ZW".split(",");
const state = {lang: localStorage.getItem("epilover-lang") || "es", step:1, dashboardDemo:false, dashboardData:null, worldMapGeo:null, worldMapPromise:null};
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const t = key => COPY[state.lang][key] || COPY.es[key] || key;
const label = (group, key) => LABELS[group]?.[key]?.[state.lang] || LABELS[group]?.[key]?.es || key;

function fillSelect(id, group) {
  const select = $(id); const current = select.value;
  select.replaceChildren(new Option(t("select"), ""));
  Object.keys(LABELS[group]).forEach(key => select.add(new Option(label(group,key), key)));
  select.value = current;
}

function countryName(code) {
  try { return new Intl.DisplayNames([state.lang], {type:"region"}).of(code); } catch { return code; }
}
function countryFlag(code) { return [...code].map(char => String.fromCodePoint(127397 + char.charCodeAt())).join(""); }
function fillCountries() {
  const select = $("#country"); const current = select.value;
  select.replaceChildren(new Option(t("select"), ""));
  COUNTRY_CODES.map(code => [code, countryName(code)]).sort((a,b)=>a[1].localeCompare(b[1],state.lang)).forEach(([code,name])=>select.add(new Option(name,code)));
  select.value = current;
}

function selectedCategories() { return $$("#category-grid input:checked").map(input => input.value); }
function renderCategories() {
  const selected = new Set(selectedCategories()); const grid = $("#category-grid"); grid.replaceChildren();
  const axis = $("#thematic_axis").value;
  const topics = TOPIC_GROUPS[axis] || [];
  topics.forEach(key => {
    const card = document.createElement("label"); card.className = "category-card" + (selected.has(key)?" selected":"");
    const input = document.createElement("input"); input.type="checkbox"; input.name="categories"; input.value=key; input.checked=selected.has(key);
    const icon = document.createElement("span"); icon.className="category-icon"; icon.textContent=CATEGORY_ICONS[key] || "•";
    const text = document.createElement("span"); text.textContent=label("categories",key);
    card.append(input,icon,text); grid.append(card);
  });
  updateCategoryCount();
}
function updateCategoryCount(message="") { const count=selectedCategories().length; $("#category-count").textContent=message || `${count}/3 ${t("selected")}`; }

function applyLanguage() {
  document.documentElement.lang = state.lang; $("#language").value = state.lang;
  $$('[data-i18n]').forEach(el => { const value=t(el.dataset.i18n); if(value) el.textContent=value; });
  $$('[data-i18n-placeholder]').forEach(el => el.placeholder=t(el.dataset.i18nPlaceholder));
  $$('[data-i18n-aria]').forEach(el => el.setAttribute("aria-label",t(el.dataset.i18nAria)));
  fillCountries(); fillSelect("#role","roles"); fillSelect("#work_scope","scopes"); fillSelect("#thematic_axis","thematicAxes"); fillSelect("#data_availability","dataAvailability"); fillSelect("#data_reference_type","referenceTypes"); fillSelect("#challenge_stage","stages"); renderCategories(); updateStep();
  if(state.dashboardData) renderDashboard(state.dashboardData);
  localStorage.setItem("epilover-lang",state.lang);
}

function updateStep() {
  $$(".form-step").forEach(step => step.classList.toggle("active", Number(step.dataset.step)===state.step));
  const titles=["",t("step1Title"),t("step2Title"),t("step3Title"),t("step4Title")];
  $("#form-title").textContent=titles[state.step]; $("#step-label").textContent=`${state.lang==="fr"?"ÉTAPE":state.lang==="en"?"STEP":state.lang==="pt"?"ETAPA":"PASO"} ${state.step} ${state.lang==="en"?"OF":state.lang==="fr"?"SUR":"DE"} 4`;
  const pct=Math.round(state.step/4*100); $("#progress-percent").textContent=`${pct}%`; $("#progress-bar").style.width=`${pct}%`;
  $("#back-btn").hidden=state.step===1; $("#next-btn").hidden=state.step===4; $("#submit-btn").hidden=state.step!==4; hideAlert();
}
function showAlert(message) { const alert=$("#form-alert"); alert.textContent=message; alert.hidden=false; }
function hideAlert() { $("#form-alert").hidden=true; $$(".invalid").forEach(el=>el.classList.remove("invalid")); }
function validateStep() {
  hideAlert(); const section=$(`.form-step[data-step="${state.step}"]`); let ok=true;
  $$('input, select, textarea',section).forEach(field=>{ if((field.required || field.value) && !field.checkValidity()){field.classList.add("invalid");ok=false;} });
  if(state.step===2){const count=selectedCategories().length;if(count<1||count>3){showAlert(t("categoryError"));return false;}}
  if(!ok) showAlert(t("requiredError"));
  if(!ok) section.querySelector(".invalid")?.focus();
  return ok;
}

function switchView(view) {
  $$(".view").forEach(el=>el.classList.toggle("active",el.id===`${view}-view`));
  $$(".nav-pill").forEach(el=>el.classList.toggle("active",el.dataset.view===view));
  history.replaceState(null,"",`#${view}`); window.scrollTo({top:0,behavior:"smooth"});
  if(view==="dashboard") loadDashboard(false);
}

function formPayload() {
  const form=$("#survey-form"); const data=new FormData(form);
  return {email:data.get("email"),country:data.get("country"),admin1:data.get("admin1"),city:data.get("city"),role:data.get("role"),organization:data.get("organization"),work_scope:data.get("work_scope"),thematic_axis:data.get("thematic_axis"),categories:selectedCategories(),priority_topic:data.get("priority_topic"),affected_population:data.get("affected_population"),data_availability:data.get("data_availability"),data_reference_type:data.get("data_reference_type"),data_source_name:data.get("data_source_name"),data_source_url:data.get("data_source_url"),data_source_notes:data.get("data_source_notes"),challenge_stage:data.get("challenge_stage"),collaboration:data.get("collaboration"),language:state.lang,consent:data.get("consent")==="on"};
}

async function submitSurvey(event) {
  event.preventDefault(); if(!validateStep()) return;
  const button=$("#submit-btn"); const old=button.textContent; button.disabled=true; button.textContent=t("sending");
  try {
    const response=await fetch("/api/responses",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(formPayload())});
    const result=await response.json();
    if(!response.ok){showAlert(result.error==="duplicate_email"?t("duplicate"):t("submitError"));return;}
    $("#survey-form").hidden=true; $(".progress-head").hidden=true; $(".progress-track").hidden=true; $("#response-id").textContent=result.respondent_id; $("#success-panel").hidden=false;
  } catch { showAlert(t("submitError")); } finally { button.disabled=false; button.textContent=old; }
}

async function login(event) {
  event.preventDefault(); const error=$("#login-error"); error.hidden=true;
  const response=await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pin:$("#admin-pin").value})});
  if(!response.ok){error.textContent=t("loginError");error.hidden=false;return;}
  $("#admin-pin").value=""; loadDashboard(false);
}
async function loadDashboard(demo) {
  try {
    const response=await fetch(`/api/dashboard?demo=${demo?1:0}`);
    if(response.status===401){$("#login-panel").hidden=false;$("#dashboard-content").hidden=true;$("#dashboard-actions").hidden=true;return;}
    if(!response.ok) throw new Error();
    const data=await response.json(); state.dashboardData=data; state.dashboardDemo=data.demo;
    $("#login-panel").hidden=true; $("#dashboard-content").hidden=false; $("#dashboard-actions").hidden=false; renderDashboard(data);
  } catch { $("#login-error").textContent=t("dashboardError");$("#login-error").hidden=false; }
}

function makeBarChart(container, values, group, limit=10) {
  container.replaceChildren(); const entries=Object.entries(values).slice(0,limit); const max=Math.max(...entries.map(x=>x[1]),1);
  if(!entries.length){container.textContent=t("noData");return;}
  entries.forEach(([key,value])=>{const row=document.createElement("div");row.className="bar-row";const lab=document.createElement("span");lab.className="bar-label";lab.textContent=label(group,key);const track=document.createElement("div");track.className="bar-track";const fill=document.createElement("div");fill.className="bar-fill";fill.style.width=`${value/max*100}%`;track.append(fill);const val=document.createElement("span");val.className="bar-value";val.textContent=value;row.append(lab,track,val);container.append(row);});
}
function makeDonut(container, values) {
  container.replaceChildren(); const entries=Object.entries(values); const total=entries.reduce((s,x)=>s+x[1],0); if(!total){container.textContent=t("noData");return;}
  const colors=["#073589","#00a8ad","#ff7058","#ffd400","#7b90b6"]; let cursor=0; const segments=entries.map(([,v],i)=>{const start=cursor;cursor+=v/total*360;return `${colors[i%colors.length]} ${start}deg ${cursor}deg`;});
  const donut=document.createElement("div");donut.className="donut";donut.style.background=`conic-gradient(${segments.join(",")})`;const center=document.createElement("div");center.className="donut-center";const strong=document.createElement("strong");strong.textContent=total;const span=document.createElement("span");span.textContent=t("total");center.append(strong,span);donut.append(center);
  const legend=document.createElement("div");legend.className="legend";entries.forEach(([key,v],i)=>{const row=document.createElement("div");row.className="legend-row";const lab=document.createElement("span");lab.className="legend-label";const dot=document.createElement("i");dot.className="legend-dot";dot.style.background=colors[i%colors.length];lab.append(dot,document.createTextNode(label("scopes",key)));const val=document.createElement("strong");val.textContent=`${Math.round(v/total*100)}%`;row.append(lab,val);legend.append(row);}); container.append(donut,legend);
}
function makeCountries(container, values) {
  container.replaceChildren(); const entries=Object.entries(values).slice(0,8); if(!entries.length){container.textContent=t("noData");return;}
  entries.forEach(([code,count])=>{const row=document.createElement("div");row.className="country-row";const flag=document.createElement("span");flag.className="country-flag";flag.textContent=countryFlag(code);const name=document.createElement("span");name.className="country-name";name.textContent=countryName(code);const value=document.createElement("span");value.className="country-count";value.textContent=count;row.append(flag,name,value);container.append(row);});
}

function mapCountryCode(properties) {
  const candidates=[properties.iso_a2,properties.postal,properties.wb_a2];
  return candidates.find(value=>typeof value==="string"&&/^[A-Z]{2}$/.test(value)) || "";
}
function projectMapPoint(coordinates) {
  const [longitude,latitude]=coordinates;
  return [(longitude+180)/360*1000,(90-latitude)/180*500];
}
function ringPath(coordinates) {
  const segments=[]; let segment=[]; let previousLongitude=null;
  coordinates.forEach(point=>{
    const longitude=point[0];
    if(previousLongitude!==null&&Math.abs(longitude-previousLongitude)>180){if(segment.length>1)segments.push(segment);segment=[];}
    segment.push(projectMapPoint(point)); previousLongitude=longitude;
  });
  if(segment.length>1)segments.push(segment);
  return segments.map(points=>points.map(([x,y],index)=>`${index?"L":"M"}${x.toFixed(1)},${y.toFixed(1)}`).join("")+"Z").join(" ");
}
function geometryPath(geometry) {
  const polygons=geometry.type==="Polygon"?[geometry.coordinates]:geometry.coordinates;
  return polygons.flatMap(polygon=>polygon.map(ringPath)).join(" ");
}
function mapFill(value,maximum) {
  if(!value)return "#e8eef3";
  const ratio=value/Math.max(maximum,1);
  if(ratio<=.25)return "#bce8e7";
  if(ratio<=.5)return "#63c8c8";
  if(ratio<=.75)return "#00a8ad";
  return "#073589";
}
function mapResponseLabel(count) { return `${count} ${count===1?t("mapResponse"):t("mapResponses")}`; }
function showMapTooltip(container,code,count,event) {
  const tooltip=$(".map-tooltip",container); if(!tooltip)return;
  tooltip.replaceChildren();
  const name=document.createElement("strong"); name.textContent=`${countryFlag(code)} ${countryName(code)}`;
  const value=document.createElement("span"); value.textContent=mapResponseLabel(count);
  tooltip.append(name,value); tooltip.hidden=false;
  if(event?.clientX){const rect=container.getBoundingClientRect();tooltip.style.left=`${Math.min(Math.max(event.clientX-rect.left+12,12),rect.width-175)}px`;tooltip.style.top=`${Math.max(event.clientY-rect.top-52,8)}px`;}
  else {tooltip.style.left="50%";tooltip.style.top="12px";}
}
function hideMapTooltip(container) { const tooltip=$(".map-tooltip",container); if(tooltip)tooltip.hidden=true; }
async function worldMapData() {
  if(state.worldMapGeo)return state.worldMapGeo;
  if(!state.worldMapPromise)state.worldMapPromise=fetch("/static/assets/world-countries.geojson").then(response=>{if(!response.ok)throw new Error("map");return response.json();});
  state.worldMapGeo=await state.worldMapPromise; return state.worldMapGeo;
}
async function renderWorldMap(values) {
  const container=$("#world-map"); if(!container)return;
  container.replaceChildren(); const loading=document.createElement("div");loading.className="map-loading";loading.textContent=t("loading");container.append(loading);
  try {
    const geo=await worldMapData(); container.replaceChildren();
    const maximum=Math.max(...Object.values(values),1);
    const svg=document.createElementNS("http://www.w3.org/2000/svg","svg");
    svg.setAttribute("viewBox","0 0 1000 500"); svg.setAttribute("preserveAspectRatio","xMidYMid meet"); svg.setAttribute("focusable","false");
    geo.features.forEach(feature=>{
      const code=mapCountryCode(feature.properties); if(!code||code==="AQ")return;
      const count=Number(values[code]||0); const path=document.createElementNS("http://www.w3.org/2000/svg","path");
      path.setAttribute("d",geometryPath(feature.geometry)); path.setAttribute("fill",mapFill(count,maximum)); path.setAttribute("data-country",code); path.classList.add("map-country");
      if(count){
        const title=document.createElementNS("http://www.w3.org/2000/svg","title"); title.textContent=`${countryName(code)} · ${mapResponseLabel(count)}`; path.append(title);
        path.classList.add("has-data"); path.setAttribute("tabindex","0"); path.setAttribute("role","button"); path.setAttribute("aria-label",title.textContent);
        path.addEventListener("pointerenter",event=>showMapTooltip(container,code,count,event)); path.addEventListener("pointermove",event=>showMapTooltip(container,code,count,event)); path.addEventListener("pointerleave",()=>hideMapTooltip(container)); path.addEventListener("focus",()=>showMapTooltip(container,code,count)); path.addEventListener("blur",()=>hideMapTooltip(container)); path.addEventListener("click",event=>showMapTooltip(container,code,count,event));
      } else path.setAttribute("aria-hidden","true");
      svg.append(path);
    });
    const tooltip=document.createElement("div");tooltip.className="map-tooltip";tooltip.hidden=true;tooltip.setAttribute("role","status");
    container.append(svg,tooltip);
  } catch { container.replaceChildren(); const error=document.createElement("p");error.className="map-error";error.textContent=t("mapLoadError");container.append(error); }
}
function makeTopics(container, rows) {
  container.replaceChildren(); if(!rows.length){container.textContent=t("noData");return;}
  rows.forEach(item=>{const row=document.createElement("div");row.className="topic-row";const id=document.createElement("span");id.className="topic-id";id.textContent=item.id;const country=document.createElement("span");country.textContent=countryFlag(item.country);country.title=countryName(item.country);const topic=document.createElement("span");topic.className="topic-text";topic.textContent=item.topic;const tag=document.createElement("span");tag.className="topic-tag";tag.textContent=label("categories",item.categories[0]);row.append(id,country,topic,tag);container.append(row);});
}
function renderDashboard(data) {
  $("#demo-banner").hidden=!data.demo; $("#demo-toggle").textContent=data.demo?t("showReal"):t("showDemo");
  $("#metric-total").textContent=data.total; $("#metric-countries").textContent=data.countries; $("#metric-top").textContent=data.top_category?label("categories",data.top_category):"—"; $("#metric-data").textContent=data.data_identified ?? 0;
  const empty=!data.demo&&data.total===0; $("#empty-dashboard").hidden=!empty; $("#charts-area").hidden=empty; $("#export-link").hidden=data.demo;
  if(empty)return;
  makeBarChart($("#category-bars"),data.categories,"categories",10); makeDonut($("#scope-donut"),data.scopes); renderWorldMap(data.country_counts); makeCountries($("#country-list"),data.country_counts); makeBarChart($("#stage-bars"),data.stages,"stages",6); makeBarChart($("#axis-bars"),data.thematic_axes || {},"thematicAxes",4); makeBarChart($("#availability-bars"),data.data_availability || {},"dataAvailability",6); makeTopics($("#topics-table"),data.recent);
}

$("#language").addEventListener("change",event=>{state.lang=event.target.value;applyLanguage();});
$$(".nav-pill").forEach(button=>button.addEventListener("click",()=>switchView(button.dataset.view)));
$("#next-btn").addEventListener("click",()=>{if(validateStep()){state.step++;updateStep();$(".form-card").scrollIntoView({behavior:"smooth",block:"start"});}});
$("#back-btn").addEventListener("click",()=>{state.step--;updateStep();});
$("#thematic_axis").addEventListener("change",()=>{$$("#category-grid input").forEach(input=>input.checked=false);renderCategories();});
$("#category-grid").addEventListener("change",event=>{if(!event.target.matches("input"))return;if(selectedCategories().length>3){event.target.checked=false;updateCategoryCount(t("maxCategories"));}renderCategories();});
$("#priority_topic").addEventListener("input",event=>$("#topic-count").textContent=event.target.value.length);
$("#survey-form").addEventListener("submit",submitSurvey);
$("#new-response").addEventListener("click",()=>{const form=$("#survey-form");form.reset();state.step=1;renderCategories();updateStep();$("#success-panel").hidden=true;form.hidden=false;$(".progress-head").hidden=false;$(".progress-track").hidden=false;});
$("#login-form").addEventListener("submit",login);
$("#demo-toggle").addEventListener("click",()=>loadDashboard(!state.dashboardDemo));
$("#empty-demo").addEventListener("click",()=>loadDashboard(true));
$("#logout-btn").addEventListener("click",async()=>{await fetch("/api/admin/logout",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"});loadDashboard(false);});

applyLanguage();
if(location.hash==="#dashboard") switchView("dashboard");
