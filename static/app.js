"use strict";

const COPY = {
  es: {
    skip:"Saltar al contenido", language:"Idioma", navSurvey:"Encuesta", navDashboard:"Tablero", heroEyebrow:"DATATÓN INTERNACIONAL · WCE 2027", heroTitle:"¿Qué reto de epidemiología debemos resolver juntos?", heroBody:"Ayúdanos a construir una agenda internacional de epidemiología basada en las prioridades de quienes trabajan en los territorios.", time:"4 minutos", whyKicker:"TU VOZ CUENTA", whyTitle:"De un reto local a una colaboración global", whyBody:"Las respuestas orientarán el datatón del XXIV Congreso Mundial de Epidemiología. Buscamos problemas concretos, comparables y con potencial de colaboración.", privacyTitle:"Uso responsable de datos", privacyBody:"Tu correo funciona como identificador y solo estará disponible para el comité. El tablero muestra resultados agregados.", congressDate:"Medellín, Colombia · 31 ago — 3 sep", step1Title:"Sobre ti y tu territorio", step1Lead:"Empecemos con la información mínima para ubicar el reto.", email:"Correo electrónico", emailPlaceholder:"nombre@organizacion.org", emailHelp:"No solicitamos tu nombre. Usaremos el correo para evitar respuestas duplicadas.", country:"País", select:"Selecciona…", admin1:"Departamento / estado / región", admin1Placeholder:"Primer nivel administrativo", city:"Ciudad o municipio", cityPlaceholder:"Ciudad principal", role:"Tu rol principal", organization:"Organización", optional:"opcional", organizationPlaceholder:"Institución o colectivo", scope:"Alcance de tu trabajo", step2Title:"Tu prioridad epidemiológica", step2Lead:"Elige hasta tres áreas y describe el reto más urgente en tus propias palabras.", categories:"Áreas prioritarias de epidemiología", categoriesHelp:"Selecciona entre 1 y 3 áreas.", priorityTopic:"¿Cuál es el reto o problema prioritario?", topicPlaceholder:"Descríbelo de forma concreta: población, lugar y por qué urge actuar…", topicHelp:"Evita incluir nombres o datos personales.", population:"Población especialmente afectada", populationPlaceholder:"Ej.: comunidades rurales, niñez, trabajadores informales", step3Title:"Del reto a la acción", step3Lead:"Para cerrar, cuéntanos dónde está el principal cuello de botella y cómo podríamos sumar esfuerzos.", stage:"¿En qué etapa está la mayor dificultad?", collaboration:"¿Qué datos, capacidades o alianzas ayudarían?", collaborationPlaceholder:"Ej.: datos comparables, métodos, socios comunitarios, tecnología…", consentTitle:"Autorizo el uso de mi respuesta para el datatón", consentBody:"Acepto que el comité analice estos datos y publique resultados agregados. Mi correo no aparecerá en el tablero.", back:"Atrás", next:"Continuar", submit:"Enviar respuesta", successKicker:"RESPUESTA RECIBIDA", successTitle:"Gracias por poner tu territorio en el mapa", successBody:"Tu aporte ya forma parte de la agenda de retos para el datatón.", responseId:"Identificador", newResponse:"Registrar otra respuesta", dashboardEyebrow:"OBSERVATORIO DE PRIORIDADES", dashboardTitle:"Pulso epidemiológico internacional", dashboardBody:"Una lectura agregada de los retos propuestos para orientar equipos, datos y colaboraciones.", showDemo:"Ver datos demo", showReal:"Ver datos reales", downloadCsv:"Descargar CSV", committeeAccess:"ACCESO DEL COMITÉ", loginTitle:"Tablero protegido", loginBody:"Ingresa la clave de administración para consultar agregados y descargar la base de datos.", pin:"Clave de acceso", pinPlaceholder:"••••••••", enter:"Entrar al tablero", localHint:"Para esta prueba local, la clave inicial está en el archivo README.", demoBanner:"Estás viendo datos ficticios para explorar el tablero. No se mezclan con respuestas reales.", responses:"Respuestas", responsesNote:"aportes recibidos", countryCoverage:"Cobertura", countriesNote:"países representados", topPriority:"Prioridad principal", mentionsNote:"por número de menciones", priorityAreas:"ÁREAS PRIORITARIAS", whatMobilizes:"¿Qué temas movilizan a la comunidad?", reach:"ALCANCE", workScale:"Escala de trabajo", geography:"GEOGRAFÍA", participatingCountries:"Países participantes", bottlenecks:"CUELLOS DE BOTELLA", whereHelp:"¿Dónde se necesita más apoyo?", voices:"VOCES DEL TERRITORIO", recentChallenges:"Retos priorizados recientemente", emptyTitle:"Aún no hay respuestas reales", emptyBody:"Prueba el tablero con datos demostrativos o vuelve a la encuesta para registrar la primera respuesta.", exploreDemo:"Explorar datos demo", footer:"Prototipo del Comité del Datatón · Medellín, Colombia", selected:"seleccionada(s)", requiredError:"Revisa los campos marcados antes de continuar.", categoryError:"Selecciona entre una y tres áreas prioritarias.", maxCategories:"Puedes seleccionar máximo tres áreas.", sending:"Enviando…", duplicate:"Este correo ya tiene una respuesta registrada.", submitError:"No pudimos guardar la respuesta. Inténtalo de nuevo.", loginError:"La clave no es correcta.", loading:"Cargando…", noData:"Sin datos", dashboardError:"No pudimos cargar el tablero.", total:"total"
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

COPY.es.localHint = "Usa la clave local configurada por el comité.";
COPY.en.localHint = "Use the local key configured by the committee.";
COPY.pt.localHint = "Use a chave local configurada pelo comitê.";
COPY.fr.localHint = "Utilisez la clé locale configurée par le comité.";

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

const CATEGORY_ICONS = {communicable:"✦",ncd:"♥",maternal_child:"◉",mental_health:"≈",injuries_violence:"△",environment_climate:"☀",food_nutrition:"◒",occupational:"◇",health_systems:"+",social_determinants:"≋",one_health:"∞",emergencies:"!",amr:"⌁",methods_data:"▥"};
const COUNTRY_CODES = "AD,AE,AF,AG,AL,AM,AO,AR,AT,AU,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BN,BO,BR,BS,BT,BW,BY,BZ,CA,CD,CF,CG,CH,CI,CL,CM,CN,CO,CR,CU,CV,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,ER,ES,ET,FI,FJ,FM,FR,GA,GB,GD,GE,GH,GM,GN,GQ,GR,GT,GW,GY,HN,HR,HT,HU,ID,IE,IL,IN,IQ,IR,IS,IT,JM,JO,JP,KE,KG,KH,KI,KM,KN,KP,KR,KW,KZ,LA,LB,LC,LI,LK,LR,LS,LT,LU,LV,LY,MA,MC,MD,ME,MG,MH,MK,ML,MM,MN,MR,MT,MU,MV,MW,MX,MY,MZ,NA,NE,NG,NI,NL,NO,NP,NR,NZ,OM,PA,PE,PG,PH,PK,PL,PS,PT,PW,PY,QA,RO,RS,RU,RW,SA,SB,SC,SD,SE,SG,SI,SK,SL,SM,SN,SO,SR,SS,ST,SV,SY,SZ,TD,TG,TH,TJ,TL,TM,TN,TO,TR,TT,TV,TW,TZ,UA,UG,US,UY,UZ,VA,VC,VE,VN,VU,WS,YE,ZA,ZM,ZW".split(",");
const state = {lang: localStorage.getItem("epilover-lang") || "es", step:1, dashboardDemo:false, dashboardData:null};
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
  Object.keys(LABELS.categories).forEach(key => {
    const card = document.createElement("label"); card.className = "category-card" + (selected.has(key)?" selected":"");
    const input = document.createElement("input"); input.type="checkbox"; input.name="categories"; input.value=key; input.checked=selected.has(key);
    const icon = document.createElement("span"); icon.className="category-icon"; icon.textContent=CATEGORY_ICONS[key];
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
  fillCountries(); fillSelect("#role","roles"); fillSelect("#work_scope","scopes"); fillSelect("#challenge_stage","stages"); renderCategories(); updateStep();
  if(state.dashboardData) renderDashboard(state.dashboardData);
  localStorage.setItem("epilover-lang",state.lang);
}

function updateStep() {
  $$(".form-step").forEach(step => step.classList.toggle("active", Number(step.dataset.step)===state.step));
  const titles=["",t("step1Title"),t("step2Title"),t("step3Title")];
  $("#form-title").textContent=titles[state.step]; $("#step-label").textContent=`${state.lang==="fr"?"ÉTAPE":state.lang==="en"?"STEP":state.lang==="pt"?"ETAPA":"PASO"} ${state.step} ${state.lang==="en"?"OF":state.lang==="fr"?"SUR":"DE"} 3`;
  const pct=Math.round(state.step/3*100); $("#progress-percent").textContent=`${pct}%`; $("#progress-bar").style.width=`${pct}%`;
  $("#back-btn").hidden=state.step===1; $("#next-btn").hidden=state.step===3; $("#submit-btn").hidden=state.step!==3; hideAlert();
}
function showAlert(message) { const alert=$("#form-alert"); alert.textContent=message; alert.hidden=false; }
function hideAlert() { $("#form-alert").hidden=true; $$(".invalid").forEach(el=>el.classList.remove("invalid")); }
function validateStep() {
  hideAlert(); const section=$(`.form-step[data-step="${state.step}"]`); let ok=true;
  $$('[required]',section).forEach(field=>{ if(!field.checkValidity()){field.classList.add("invalid");ok=false;} });
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
  return {email:data.get("email"),country:data.get("country"),admin1:data.get("admin1"),city:data.get("city"),role:data.get("role"),organization:data.get("organization"),work_scope:data.get("work_scope"),categories:selectedCategories(),priority_topic:data.get("priority_topic"),affected_population:data.get("affected_population"),challenge_stage:data.get("challenge_stage"),collaboration:data.get("collaboration"),language:state.lang,consent:data.get("consent")==="on"};
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
function makeTopics(container, rows) {
  container.replaceChildren(); if(!rows.length){container.textContent=t("noData");return;}
  rows.forEach(item=>{const row=document.createElement("div");row.className="topic-row";const id=document.createElement("span");id.className="topic-id";id.textContent=item.id;const country=document.createElement("span");country.textContent=countryFlag(item.country);country.title=countryName(item.country);const topic=document.createElement("span");topic.className="topic-text";topic.textContent=item.topic;const tag=document.createElement("span");tag.className="topic-tag";tag.textContent=label("categories",item.categories[0]);row.append(id,country,topic,tag);container.append(row);});
}
function renderDashboard(data) {
  $("#demo-banner").hidden=!data.demo; $("#demo-toggle").textContent=data.demo?t("showReal"):t("showDemo");
  $("#metric-total").textContent=data.total; $("#metric-countries").textContent=data.countries; $("#metric-top").textContent=data.top_category?label("categories",data.top_category):"—";
  const empty=!data.demo&&data.total===0; $("#empty-dashboard").hidden=!empty; $("#charts-area").hidden=empty; $("#export-link").hidden=data.demo;
  if(empty)return;
  makeBarChart($("#category-bars"),data.categories,"categories",10); makeDonut($("#scope-donut"),data.scopes); makeCountries($("#country-list"),data.country_counts); makeBarChart($("#stage-bars"),data.stages,"stages",6); makeTopics($("#topics-table"),data.recent);
}

$("#language").addEventListener("change",event=>{state.lang=event.target.value;applyLanguage();});
$$(".nav-pill").forEach(button=>button.addEventListener("click",()=>switchView(button.dataset.view)));
$("#next-btn").addEventListener("click",()=>{if(validateStep()){state.step++;updateStep();$(".form-card").scrollIntoView({behavior:"smooth",block:"start"});}});
$("#back-btn").addEventListener("click",()=>{state.step--;updateStep();});
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
