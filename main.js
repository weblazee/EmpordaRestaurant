/* Restaurant Empordà — main.js */
(function(){
  'use strict';

  /* ============ i18n ============ */
  const I18N = {
    es:{
      'nav.home':'Inicio','nav.group':'El Grupo','nav.restaurants':'Restaurantes',
      'nav.jobs':'Trabaja con nosotros','nav.contact':'Contacto',
      'cta.book':'Reservar mesa','cta.discover':'Descubre nuestros restaurantes',
      'hero.eyebrow':'Cocina del Empordà · Costa Brava',
      'hero.title':'Sabores del Mediterráneo desde 1998',
      'hero.subtitle':'Más de 20 años llevando la auténtica cocina catalana a tu mesa, frente al mar de Empuriabrava y Santa Margarita.',
      'hero.scroll':'Descubre',
      'trust.years':'Años de tradición','trust.restaurants':'Restaurantes',
      'trust.gelato':'Heladerías','trust.guests':'Comensales/año',
      'rest.title':'Nuestros restaurantes','rest.eyebrow':'4 espacios, una sola pasión',
      'rest.lead':'Cada uno con su carácter, todos con la misma calidad y el sello del grupo Complex Empordà.',
      'rest.emporda.tag':'Insignia','rest.emporda.spec':'Cocina mediterránea · Mar y montaña',
      'rest.emporda.desc':'Nuestro restaurante principal frente al Passeig Marítim de Roses. Pescado fresco de la lonja, arroces y la carta de vinos del Empordà.',
      'rest.tictoc.tag':'Familiar','rest.tictoc.spec':'Tapas · Cocina catalana',
      'rest.tictoc.desc':'Ambiente desenfadado, raciones generosas y el espíritu de la cocina de toda la vida.',
      'rest.dolce.tag':'Heladería','rest.dolce.spec':'Helado artesano italiano',
      'rest.dolce.desc':'Cuatro puntos de venta de helado fabricado cada día, con frutas de temporada y recetas tradicionales italianas.',
      'rest.terraza.tag':'Frente al mar','rest.terraza.spec':'Brasa · Marisco',
      'rest.terraza.desc':'La terraza más esperada del verano: pescado a la sal, mariscadas y atardeceres inolvidables.',
      'rest.location':'Empuriabrava & Santa Margarita',
      'story.eyebrow':'Nuestra historia','story.title':'Una familia, una pasión por el Empordà',
      'story.quote':'"Empezamos con una heladería en Empuriabrava. Más de veinte años después, el sueño se ha convertido en cuatro restaurantes y cuatro heladerías. Pero la receta sigue siendo la misma: producto, cariño y honestidad."',
      'story.cite':'— Agustín Algar, fundador',
      'story.p1':'Complex Empordà nació hace más de dos décadas como un pequeño negocio familiar. Hoy somos un referente gastronómico de la Costa Brava, con cuatro restaurantes y cuatro puntos de venta de helado artesano repartidos entre Empuriabrava y Santa Margarita.',
      'story.p2':'Trabajamos con productores locales, pescadores de la lonja de Roses y elaboramos cada plato con la calma y el oficio de los que entienden la cocina como un acto de hospitalidad.',
      'story.cta':'Conoce al grupo',
      'gallery.eyebrow':'Galería','gallery.title':'Lo que vivirás en nuestra mesa',
      'gallery.lead':'Fotografías del Restaurant Empordà — frente al mar, en el Passeig Marítim de Roses.',
      'reviews.eyebrow':'Lo que dicen nuestros clientes','reviews.title':'Más de 4.7★ en Google Maps',
      'reviews.lead':'Miles de comensales han compartido su experiencia. Estos son algunos de sus testimonios.',
      'reviews.r1':'"El mejor arroz de bogavante que hemos probado en la Costa Brava. La vista al mar acompaña la experiencia."',
      'reviews.r1.cite':'María L. · Barcelona',
      'reviews.r2':'"Trato exquisito, producto fresquísimo y precios honestos. Ya somos clientes habituales."',
      'reviews.r2.cite':'Thomas K. · Berlin',
      'reviews.r3':'"Los helados de Dolce Neve son los mejores de Empuriabrava. Un imprescindible cada verano."',
      'reviews.r3.cite':'Sophie D. · Paris',
      'reserve.eyebrow':'Reserva','reserve.title':'Asegura tu mesa frente al mar',
      'reserve.urgency':'Plazas limitadas · Fines de semana se agotan',
      'reserve.lead':'Reserva en menos de 60 segundos. Te confirmamos por teléfono en menos de 2 horas.',
      'form.name':'Nombre','form.phone':'Teléfono','form.email':'E-mail',
      'form.date':'Fecha','form.time':'Hora','form.guests':'Comensales',
      'form.restaurant':'Restaurante','form.message':'Observaciones',
      'form.lopd':'He leído y acepto la política de protección de datos',
      'form.send':'Enviar reserva','form.required':'* Campos obligatorios',
      'form.success':'¡Gracias! Hemos recibido tu solicitud. Te contactaremos enseguida.',
      'contact.title':'Contacto','contact.eyebrow':'Estamos para atenderte',
      'contact.phone':'Teléfono','contact.email':'E-mail','contact.address':'Dirección',
      'contact.hours':'Abierto cada día · 13:00 - 16:00 · 19:30 - 23:30',
      'jobs.title':'Trabaja con nosotros','jobs.eyebrow':'Bolsa de trabajo',
      'jobs.lead':'Únete a un grupo familiar con más de 20 años de trayectoria. Buscamos personas con pasión por la hostelería.',
      'jobs.cv':'Currículum (PDF, DOC)','jobs.lastname':'Apellidos','jobs.city':'Población',
      'jobs.province':'Provincia','jobs.address':'Dirección','jobs.zip':'CP','jobs.country':'País',
      'jobs.mobile':'Teléfono móvil','jobs.notes':'Observaciones',
      'group.title':'El grupo Complex Empordà','group.eyebrow':'Quiénes somos',
      'footer.tagline':'Sabor, tradición y mar desde 1998.',
      'footer.explore':'Explorar','footer.contact':'Contacto','footer.newsletter':'Novedades',
      'footer.newsletter.lead':'Recibe ofertas y novedades antes que nadie.',
      'footer.subscribe':'Suscribir','footer.email':'Tu e-mail',
      'footer.legal':'© 2026 Complex Empordà, S.L. · Todos los derechos reservados',
    },
    ca:{
      'nav.home':'Inici','nav.group':'El Grup','nav.restaurants':'Restaurants',
      'nav.jobs':'Treballa amb nosaltres','nav.contact':'Contacte',
      'cta.book':'Reservar taula','cta.discover':'Descobreix els nostres restaurants',
      'hero.eyebrow':'Cuina de l\'Empordà · Costa Brava',
      'hero.title':'Sabors del Mediterrani des del 1998',
      'hero.subtitle':'Més de 20 anys portant l\'autèntica cuina catalana a la teva taula, davant el mar d\'Empuriabrava i Santa Margarida.',
      'hero.scroll':'Descobreix',
      'trust.years':'Anys de tradició','trust.restaurants':'Restaurants',
      'trust.gelato':'Gelateries','trust.guests':'Comensals/any',
      'rest.title':'Els nostres restaurants','rest.eyebrow':'4 espais, una sola passió',
      'rest.lead':'Cadascun amb el seu caràcter, tots amb la mateixa qualitat i el segell del grup Complex Empordà.',
      'rest.emporda.tag':'Insígnia','rest.emporda.spec':'Cuina mediterrània · Mar i muntanya',
      'rest.emporda.desc':'El nostre restaurant principal davant el Passeig Marítim de Roses. Peix fresc de la llotja, arrossos i la carta de vins de l\'Empordà.',
      'rest.tictoc.tag':'Familiar','rest.tictoc.spec':'Tapes · Cuina catalana',
      'rest.tictoc.desc':'Ambient distès, racions generoses i l\'esperit de la cuina de tota la vida.',
      'rest.dolce.tag':'Gelateria','rest.dolce.spec':'Gelat artesà italià',
      'rest.dolce.desc':'Quatre punts de venda de gelat elaborat cada dia, amb fruites de temporada i receptes tradicionals italianes.',
      'rest.terraza.tag':'Davant el mar','rest.terraza.spec':'Brasa · Marisc',
      'rest.terraza.desc':'La terrassa més esperada de l\'estiu: peix a la sal, mariscades i postes de sol inoblidables.',
      'rest.location':'Empuriabrava i Santa Margarida',
      'story.eyebrow':'La nostra història','story.title':'Una família, una passió per l\'Empordà',
      'story.quote':'"Vam començar amb una gelateria a Empuriabrava. Més de vint anys després, el somni s\'ha convertit en quatre restaurants i quatre gelateries. Però la recepta segueix essent la mateixa: producte, estima i honestedat."',
      'story.cite':'— Agustín Algar, fundador',
      'story.p1':'Complex Empordà va néixer fa més de dues dècades com un petit negoci familiar. Avui som un referent gastronòmic de la Costa Brava, amb quatre restaurants i quatre punts de venda de gelat artesà repartits entre Empuriabrava i Santa Margarida.',
      'story.p2':'Treballem amb productors locals, pescadors de la llotja de Roses i elaborem cada plat amb la calma i l\'ofici dels qui entenen la cuina com un acte d\'hospitalitat.',
      'story.cta':'Coneix el grup',
      'gallery.eyebrow':'Galeria','gallery.title':'El que viuràs a la nostra taula',
      'gallery.lead':'Fotografies del Restaurant Empordà — davant el mar, al Passeig Marítim de Roses.',
      'reviews.eyebrow':'El que diuen els nostres clients','reviews.title':'Més de 4.7★ a Google Maps',
      'reviews.lead':'Milers de comensals han compartit la seva experiència. Aquests són alguns dels seus testimonis.',
      'reviews.r1':'"El millor arròs de llamàntol que hem tastat a la Costa Brava. La vista al mar acompanya l\'experiència."',
      'reviews.r1.cite':'Maria L. · Barcelona',
      'reviews.r2':'"Tracte exquisit, producte fresquíssim i preus honestos. Ja som clients habituals."',
      'reviews.r2.cite':'Thomas K. · Berlin',
      'reviews.r3':'"Els gelats de Dolce Neve són els millors d\'Empuriabrava. Un imprescindible cada estiu."',
      'reviews.r3.cite':'Sophie D. · París',
      'reserve.eyebrow':'Reserva','reserve.title':'Assegura\'t la taula davant el mar',
      'reserve.urgency':'Places limitades · Els caps de setmana s\'esgoten',
      'reserve.lead':'Reserva en menys de 60 segons. Et confirmem per telèfon en menys de 2 hores.',
      'form.name':'Nom','form.phone':'Telèfon','form.email':'E-mail',
      'form.date':'Data','form.time':'Hora','form.guests':'Comensals',
      'form.restaurant':'Restaurant','form.message':'Observacions',
      'form.lopd':'He llegit i accepto la política de protecció de dades',
      'form.send':'Enviar reserva','form.required':'* Camps obligatoris',
      'form.success':'Gràcies! Hem rebut la teva sol·licitud. Et contactarem aviat.',
      'contact.title':'Contacte','contact.eyebrow':'Som aquí per atendre\'t',
      'contact.phone':'Telèfon','contact.email':'E-mail','contact.address':'Adreça',
      'contact.hours':'Obert cada dia · 13:00 - 16:00 · 19:30 - 23:30',
      'jobs.title':'Treballa amb nosaltres','jobs.eyebrow':'Borsa de treball',
      'jobs.lead':'Uneix-te a un grup familiar amb més de 20 anys de trajectòria. Busquem persones apassionades per l\'hostaleria.',
      'jobs.cv':'Currículum (PDF, DOC)','jobs.lastname':'Cognoms','jobs.city':'Població',
      'jobs.province':'Província','jobs.address':'Adreça','jobs.zip':'CP','jobs.country':'País',
      'jobs.mobile':'Telèfon mòbil','jobs.notes':'Observacions',
      'group.title':'El grup Complex Empordà','group.eyebrow':'Qui som',
      'footer.tagline':'Sabor, tradició i mar des del 1998.',
      'footer.explore':'Explorar','footer.contact':'Contacte','footer.newsletter':'Novetats',
      'footer.newsletter.lead':'Rep ofertes i novetats abans que ningú.',
      'footer.subscribe':'Subscriure','footer.email':'El teu e-mail',
      'footer.legal':'© 2026 Complex Empordà, S.L. · Tots els drets reservats',
    },
    en:{
      'nav.home':'Home','nav.group':'The Group','nav.restaurants':'Restaurants',
      'nav.jobs':'Careers','nav.contact':'Contact',
      'cta.book':'Book a table','cta.discover':'Discover our restaurants',
      'hero.eyebrow':'Empordà cuisine · Costa Brava',
      'hero.title':'Mediterranean flavours since 1998',
      'hero.subtitle':'Over 20 years bringing authentic Catalan cooking to your table, by the sea in Empuriabrava and Santa Margarita.',
      'hero.scroll':'Discover',
      'trust.years':'Years of tradition','trust.restaurants':'Restaurants',
      'trust.gelato':'Gelaterias','trust.guests':'Guests/year',
      'rest.title':'Our restaurants','rest.eyebrow':'4 venues, one passion',
      'rest.lead':'Each with its own character, all with the same quality and the seal of the Complex Empordà group.',
      'rest.emporda.tag':'Flagship','rest.emporda.spec':'Mediterranean · Surf & turf',
      'rest.emporda.desc':'Our flagship restaurant overlooking the Passeig Marítim of Roses. Fresh fish from the local market, rice dishes and an Empordà wine list.',
      'rest.tictoc.tag':'Casual','rest.tictoc.spec':'Tapas · Catalan cuisine',
      'rest.tictoc.desc':'Relaxed atmosphere, generous portions and the spirit of traditional home cooking.',
      'rest.dolce.tag':'Gelateria','rest.dolce.spec':'Italian artisan gelato',
      'rest.dolce.desc':'Four gelato shops with ice cream made fresh every day, seasonal fruits and traditional Italian recipes.',
      'rest.terraza.tag':'Seafront','rest.terraza.spec':'Grill · Seafood',
      'rest.terraza.desc':'The most awaited terrace of the summer: salt-baked fish, seafood platters and unforgettable sunsets.',
      'rest.location':'Empuriabrava & Santa Margarita',
      'story.eyebrow':'Our story','story.title':'One family, one passion for the Empordà',
      'story.quote':'"We started with a gelateria in Empuriabrava. More than twenty years later, the dream has grown into four restaurants and four gelaterias. But the recipe is still the same: product, care and honesty."',
      'story.cite':'— Agustín Algar, founder',
      'story.p1':'Complex Empordà was born more than two decades ago as a small family business. Today we are a culinary reference of the Costa Brava, with four restaurants and four artisan gelato shops between Empuriabrava and Santa Margarita.',
      'story.p2':'We work with local producers and fishermen from the Roses market, preparing every dish with the calm and craft of those who understand cooking as an act of hospitality.',
      'story.cta':'Meet the group',
      'gallery.eyebrow':'Gallery','gallery.title':'What awaits at our table',
      'gallery.lead':'Photos of Restaurant Empordà — by the sea, on the Passeig Marítim of Roses.',
      'reviews.eyebrow':'What our guests say','reviews.title':'Over 4.7★ on Google Maps',
      'reviews.lead':'Thousands of guests have shared their experience. Here are some of their words.',
      'reviews.r1':'"The best lobster rice we have ever had on the Costa Brava. The sea view completes the experience."',
      'reviews.r1.cite':'María L. · Barcelona',
      'reviews.r2':'"Wonderful service, super fresh produce and fair prices. We are now regulars."',
      'reviews.r2.cite':'Thomas K. · Berlin',
      'reviews.r3':'"Dolce Neve\'s gelato is the best in Empuriabrava. A must every summer."',
      'reviews.r3.cite':'Sophie D. · Paris',
      'reserve.eyebrow':'Reservations','reserve.title':'Secure your seaside table',
      'reserve.urgency':'Limited seats · Weekends fill fast',
      'reserve.lead':'Book in less than 60 seconds. We confirm by phone within 2 hours.',
      'form.name':'Name','form.phone':'Phone','form.email':'E-mail',
      'form.date':'Date','form.time':'Time','form.guests':'Guests',
      'form.restaurant':'Restaurant','form.message':'Notes',
      'form.lopd':'I have read and accept the privacy policy',
      'form.send':'Send request','form.required':'* Required fields',
      'form.success':'Thank you! We have received your request and will contact you shortly.',
      'contact.title':'Contact','contact.eyebrow':'We are here for you',
      'contact.phone':'Phone','contact.email':'E-mail','contact.address':'Address',
      'contact.hours':'Open daily · 1:00 - 4:00 pm · 7:30 - 11:30 pm',
      'jobs.title':'Work with us','jobs.eyebrow':'Careers',
      'jobs.lead':'Join a family-run group with over 20 years of experience. We look for people passionate about hospitality.',
      'jobs.cv':'Resume (PDF, DOC)','jobs.lastname':'Surname','jobs.city':'City',
      'jobs.province':'Province','jobs.address':'Address','jobs.zip':'Zip','jobs.country':'Country',
      'jobs.mobile':'Mobile','jobs.notes':'Notes',
      'group.title':'The Complex Empordà group','group.eyebrow':'About us',
      'footer.tagline':'Flavour, tradition and sea since 1998.',
      'footer.explore':'Explore','footer.contact':'Contact','footer.newsletter':'Newsletter',
      'footer.newsletter.lead':'Get offers and news before anyone else.',
      'footer.subscribe':'Subscribe','footer.email':'Your e-mail',
      'footer.legal':'© 2026 Complex Empordà, S.L. · All rights reserved',
    },
    de:{
      'nav.home':'Start','nav.group':'Die Gruppe','nav.restaurants':'Restaurants',
      'nav.jobs':'Karriere','nav.contact':'Kontakt',
      'cta.book':'Tisch reservieren','cta.discover':'Entdecke unsere Restaurants',
      'hero.eyebrow':'Empordà-Küche · Costa Brava',
      'hero.title':'Mediterrane Aromen seit 1998',
      'hero.subtitle':'Seit über 20 Jahren bringen wir authentische katalanische Küche an Ihren Tisch, direkt am Meer in Empuriabrava und Santa Margarita.',
      'hero.scroll':'Entdecken',
      'trust.years':'Jahre Tradition','trust.restaurants':'Restaurants',
      'trust.gelato':'Eisdielen','trust.guests':'Gäste/Jahr',
      'rest.title':'Unsere Restaurants','rest.eyebrow':'4 Häuser, eine Leidenschaft',
      'rest.lead':'Jedes mit eigenem Charakter, alle mit derselben Qualität und der Handschrift der Gruppe Complex Empordà.',
      'rest.emporda.tag':'Flaggschiff','rest.emporda.spec':'Mediterrane Küche · Meer und Land',
      'rest.emporda.desc':'Unser Hauptrestaurant am Passeig Marítim von Roses. Fangfrischer Fisch, Reisgerichte und Weine aus dem Empordà.',
      'rest.tictoc.tag':'Familiär','rest.tictoc.spec':'Tapas · Katalanische Küche',
      'rest.tictoc.desc':'Entspannte Atmosphäre, großzügige Portionen und der Geist traditioneller Hausmannskost.',
      'rest.dolce.tag':'Eisdiele','rest.dolce.spec':'Italienisches Eis',
      'rest.dolce.desc':'Vier Eisdielen mit täglich frisch hergestelltem Eis, saisonalen Früchten und italienischen Originalrezepten.',
      'rest.terraza.tag':'Direkt am Meer','rest.terraza.spec':'Grill · Meeresfrüchte',
      'rest.terraza.desc':'Die meisterwartete Terrasse des Sommers: Fisch in der Salzkruste, Meeresfrüchteplatten und unvergessliche Sonnenuntergänge.',
      'rest.location':'Empuriabrava & Santa Margarita',
      'story.eyebrow':'Unsere Geschichte','story.title':'Eine Familie, eine Leidenschaft für das Empordà',
      'story.quote':'"Wir haben mit einer Eisdiele in Empuriabrava angefangen. Mehr als zwanzig Jahre später ist daraus ein Traum mit vier Restaurants und vier Eisdielen geworden. Doch das Rezept bleibt dasselbe: Produkt, Hingabe und Ehrlichkeit."',
      'story.cite':'— Agustín Algar, Gründer',
      'story.p1':'Complex Empordà entstand vor über zwei Jahrzehnten als kleines Familienunternehmen. Heute sind wir eine kulinarische Referenz an der Costa Brava, mit vier Restaurants und vier handwerklichen Eisdielen zwischen Empuriabrava und Santa Margarita.',
      'story.p2':'Wir arbeiten mit lokalen Erzeugern und Fischern vom Markt in Roses und bereiten jedes Gericht mit der Ruhe und dem Können derer zu, die Kochen als Akt der Gastfreundschaft verstehen.',
      'story.cta':'Mehr über die Gruppe',
      'gallery.eyebrow':'Galerie','gallery.title':'Was Sie an unserem Tisch erwartet',
      'gallery.lead':'Fotos des Restaurant Empordà — am Meer, am Passeig Marítim von Roses.',
      'reviews.eyebrow':'Was unsere Gäste sagen','reviews.title':'Über 4,7★ bei Google Maps',
      'reviews.lead':'Tausende Gäste haben ihre Erfahrungen geteilt. Hier einige Stimmen.',
      'reviews.r1':'"Der beste Hummerreis, den wir an der Costa Brava je probiert haben. Der Meerblick rundet das Erlebnis ab."',
      'reviews.r1.cite':'María L. · Barcelona',
      'reviews.r2':'"Hervorragender Service, frischeste Produkte und faire Preise. Wir sind jetzt Stammgäste."',
      'reviews.r2.cite':'Thomas K. · Berlin',
      'reviews.r3':'"Das Eis von Dolce Neve ist das beste in Empuriabrava. Im Sommer ein Muss."',
      'reviews.r3.cite':'Sophie D. · Paris',
      'reserve.eyebrow':'Reservierung','reserve.title':'Sichern Sie sich Ihren Tisch am Meer',
      'reserve.urgency':'Begrenzte Plätze · Wochenenden sind schnell ausgebucht',
      'reserve.lead':'In weniger als 60 Sekunden reservieren. Wir bestätigen telefonisch innerhalb von 2 Stunden.',
      'form.name':'Name','form.phone':'Telefon','form.email':'E-Mail',
      'form.date':'Datum','form.time':'Uhrzeit','form.guests':'Personen',
      'form.restaurant':'Restaurant','form.message':'Bemerkungen',
      'form.lopd':'Ich habe die Datenschutzerklärung gelesen und akzeptiert',
      'form.send':'Reservierung senden','form.required':'* Pflichtfelder',
      'form.success':'Danke! Wir haben Ihre Anfrage erhalten und melden uns in Kürze.',
      'contact.title':'Kontakt','contact.eyebrow':'Wir sind für Sie da',
      'contact.phone':'Telefon','contact.email':'E-Mail','contact.address':'Adresse',
      'contact.hours':'Täglich geöffnet · 13:00 - 16:00 · 19:30 - 23:30',
      'jobs.title':'Arbeite mit uns','jobs.eyebrow':'Stellenangebote',
      'jobs.lead':'Werde Teil eines Familienunternehmens mit über 20 Jahren Erfahrung. Wir suchen Menschen mit Leidenschaft für die Gastronomie.',
      'jobs.cv':'Lebenslauf (PDF, DOC)','jobs.lastname':'Nachname','jobs.city':'Stadt',
      'jobs.province':'Provinz','jobs.address':'Adresse','jobs.zip':'PLZ','jobs.country':'Land',
      'jobs.mobile':'Mobil','jobs.notes':'Bemerkungen',
      'group.title':'Die Complex Empordà Gruppe','group.eyebrow':'Über uns',
      'footer.tagline':'Geschmack, Tradition und Meer seit 1998.',
      'footer.explore':'Entdecken','footer.contact':'Kontakt','footer.newsletter':'Newsletter',
      'footer.newsletter.lead':'Erhalte Angebote und Neuigkeiten zuerst.',
      'footer.subscribe':'Abonnieren','footer.email':'Deine E-Mail',
      'footer.legal':'© 2026 Complex Empordà, S.L. · Alle Rechte vorbehalten',
    }
  };

  const STORAGE_KEY='re_lang';
  function getLang(){
    const saved=localStorage.getItem(STORAGE_KEY);
    if(saved && I18N[saved]) return saved;
    const browser=(navigator.language||'es').slice(0,2);
    return I18N[browser]?browser:'es';
  }
  function applyLang(lang){
    if(!I18N[lang]) lang='es';
    localStorage.setItem(STORAGE_KEY,lang);
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key=el.getAttribute('data-i18n');
      if(I18N[lang][key]) el.textContent=I18N[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key=el.getAttribute('data-i18n-placeholder');
      if(I18N[lang][key]) el.placeholder=I18N[lang][key];
    });
    document.querySelectorAll('.lang-btn').forEach(b=>{
      b.classList.toggle('active', b.dataset.lang===lang);
    });
  }

  /* ============ Header behavior ============ */
  function initHeader(){
    const header=document.querySelector('.site-header');
    if(!header) return;
    const isTransparent=header.classList.contains('transparent');
    const onScroll=()=>{
      if(isTransparent){
        if(window.scrollY>40) header.classList.remove('transparent');
        else header.classList.add('transparent');
      }
    };
    onScroll();
    window.addEventListener('scroll',onScroll,{passive:true});

    const toggle=document.querySelector('.menu-toggle');
    const nav=document.querySelector('.nav');
    if(toggle && nav){
      toggle.addEventListener('click',()=>nav.classList.toggle('open'));
      nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
    }
  }

  /* ============ Lightbox ============ */
  function initLightbox(){
    const items=document.querySelectorAll('.gallery-item');
    if(!items.length) return;
    const box=document.createElement('div');
    box.className='lightbox';
    box.innerHTML='<button class="lightbox-close" aria-label="Close">×</button>'+
      '<button class="lightbox-nav lightbox-prev" aria-label="Previous">‹</button>'+
      '<img alt="">'+
      '<button class="lightbox-nav lightbox-next" aria-label="Next">›</button>';
    document.body.appendChild(box);
    const img=box.querySelector('img');
    let idx=0;
    const srcs=Array.from(items).map(it=>it.querySelector('img').getAttribute('src'));
    const open=i=>{idx=i;img.src=srcs[idx];box.classList.add('open');document.body.style.overflow='hidden'};
    const close=()=>{box.classList.remove('open');document.body.style.overflow=''};
    items.forEach((it,i)=>it.addEventListener('click',()=>open(i)));
    box.querySelector('.lightbox-close').addEventListener('click',close);
    box.addEventListener('click',e=>{if(e.target===box) close()});
    box.querySelector('.lightbox-prev').addEventListener('click',()=>open((idx-1+srcs.length)%srcs.length));
    box.querySelector('.lightbox-next').addEventListener('click',()=>open((idx+1)%srcs.length));
    document.addEventListener('keydown',e=>{
      if(!box.classList.contains('open')) return;
      if(e.key==='Escape') close();
      if(e.key==='ArrowLeft') open((idx-1+srcs.length)%srcs.length);
      if(e.key==='ArrowRight') open((idx+1)%srcs.length);
    });
  }

  /* ============ Forms ============ */
  function initForms(){
    document.querySelectorAll('form[data-form]').forEach(form=>{
      form.addEventListener('submit',e=>{
        e.preventDefault();
        const msg=form.querySelector('.form-msg');
        if(msg) msg.classList.add('show');
        form.reset();
        setTimeout(()=>{if(msg) msg.classList.remove('show')},6000);
      });
    });
  }

  /* ============ Reveal on scroll ============ */
  function initReveal(){
    const els=document.querySelectorAll('.reveal');
    if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return}
    const io=new IntersectionObserver((entries)=>{
      entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}});
    },{threshold:.12});
    els.forEach(e=>io.observe(e));
  }

  /* ============ Lang switcher ============ */
  function initLang(){
    document.querySelectorAll('.lang-btn').forEach(b=>{
      b.addEventListener('click',()=>applyLang(b.dataset.lang));
    });
    applyLang(getLang());
  }

  /* ============ Init ============ */
  document.addEventListener('DOMContentLoaded',()=>{
    initHeader();
    initLightbox();
    initForms();
    initReveal();
    initLang();
  });
})();
