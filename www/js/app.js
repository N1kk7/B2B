const langBtn = document.querySelector(".lang-btn");
const langModal = document.querySelector(".lang-modal");
const cancelBtn = document.querySelector(".cancelBtn");
const languageItem = document.querySelectorAll(".languageItem");
const allLang = ['en', 'serb', 'mk'];

const langArr = {
    "sub-tittle" : {
        "en" : "YOUR STRATEGIC PROCUREMENT PARTNER",
        "serb" : "VAŠ STRATEŠKI PARTNER U NABAVCI",
        "mk" : "ВАШ СТРАТЕШКИ ПАРТНЕР ПРИ НАБАВКИ"

    },
    "unlockTittle" : {
        "en" : `Unlock <b>Cost-Saving</b> Opportunities <br><b>with Us!</b>`,
        "serb" : "Iskoristite sa nama mogućnosti uštede i povraćaja sredstava!",
        "mk" : "ИСКОРИСТЕТЕ ГИ СО НАС МОЖНОСТИТЕ ЗА ЗАШТЕДА И ПОВРАТ НА СРЕДСТВА!"
    },
    "unlockText" : {
        "en" : "Are you tired of skyrocketing purchase costs eating into your profits? Look no further! B2B is your gateway to significant cost reductions on essential business purchases. Partner with us and enjoy exclusive access to a world of savings!",
        "serb" : "Dali ste umorni od postojanih poskupljenja cena pri nabavci poslovnih dobara? Dali Vam ovakva poskupljenja već ynačajno utiću na poslovnu dobit? U tom slučaju, B2B je Vaša mogućnost smanjenja poslovnih troškova. Stupite u saradnju sa nama, s ciljem da Vam omogućimo pristup našem svetu ušteda!",
        "mk" : "Дали сте уморни од поскапувањата до небо на трошоците на набавка, кои ја нагризуваат Вашата добивка? Тогаш, B2B е Вашата можност за значително намалување на трошоците за деловни набавки. Влезете во соработка со нас, со цел да Ви овозможиме пристап кон нашиот свет на заштеди!"
    },
    "chooseTittle" : {
        "en" : "Why Choose <b>B2B?</b>",
        "serb" : "Zašto B2B?",
        "mk" : "Зошто B2B?"
    },
    "acessGlobal" : {
        "en" : "Access Global and local Market opportunities:",
        "serb" : "Pristup novim mogućnostima na lokalnim, regionalnim i globalnim tržištima: ",
        "mk" : "Пристап кон нови можности на глабалните и локалните пазари: "
    },
    "acessText" : {
        "en" : "Without Compromise: Whether you're working with local or international suppliers, we help you unlock a world of cost-saving opportunities without disrupting your existing relationships. Our international finance organization partnerships broaden your procurement horizons, ensuring you benefits from best prices, regardless of the supplier's location.",
        "serb" : "Nezavisno od toga, dali sarađujete sa lokalnim, regionalnim ili međunarodnim dobavljačima, mi ćemo Vam omogućiti da uđete i jednom svetu mogućnosti uštede troškova preko sistema Indenting & Outsourcing, kao i preko sistema Cashback & Refund, bez da se pritom morate odreći Vaših postojećih dobavljača. Naša partnerstva sa lokalnim, regionalnim i međunarodnim finansiskim institucijama i dobavljačima,  omogučiće Vam da proširite horizonte, pritom koristeći cenovne povoljnosti - nezavisno od lokacije dobavljača.",
        "mk" : "Независно, дали соработувате со локални или меѓународни добавувачи, ние ќе Ви овозможиме да влезете во светот на можностите на заштеда, поврат и рефундација на средства, без притоа да ги прекинувате постоечките односи со Вашите добавувачи. Нашите партнерства со меѓународни, регионални и локални финансиски организации и добавувачи ќе ги прошират Вашите хоризонти, притоа обезбедувајќи Ви ценовни бенефити - независно од локацијата на добавувачот."
    },
    "tailoredTittle" : {
        "en" : "Tailored Solutions:",
        "serb" : "Rešenja razvijeni prema Vašim potrebama: ",
        "mk" : "Решенија создадени по Ваша мерка: "
    },
    "tailoredText" : {
        "en" : "Whether you're seeking beverages, gas, cutting-edge technology, or reliable working materials, we bring customized solutions that fit perfectly with your business needs, leveraging both your current supplier network and our global connections.",
        "serb" : "Nezavisno od toga, dali se radi o energiji, nojnovijoj tehnologiji ili redovnih nabavki dobara ili usluga, mi ćemo Vam obezbediti rešenja prema Vašim potrebama, pri ćemu ne morate menjati Vaše dobavljače. ",
        "mk" : "Независно дали се работи за пијалоци, енергија, најнова технологија или пак редовни набавки на материјали или услуги, ние Ви обезбедуваме решенија создадени според Вашите потреби, притоа не засегајќи во односите со Вашите партнери на локално, регионално или глобално ниво."
    },
    "savTittle" : {
        "en" : "Savings Guaranteed:",
        "serb" : "Zagarantirane uštede: ",
        "mk" : "Загарантиран заштеди:"
    },
    "savText" : {
        "en" : " Enjoy net prices that are 4%-13% lower on your purchases compared to traditional procurement methods. ",
        "serb" : "Iskoristite preko naših sistema mogućnost, da smanjite Vaše nabavne troškove za najmanje 5%-15%  u sporedbi sa tradicionalnim metodama kupovine. ",
        "mk" : " Преку нашите системи на рефундација и поврат, искоритете ја можноста за добивање набавни цени ки се најмалку 4%-13% помали во споредба со досегашните традиционали методи на набавка. "
    },
    "intTittle" : {
        "en" : "Seamless Integration",
        "serb" : "Besprekorna integracija:  ",
        "mk" : "Беспрекорна интеграција: "
    },
    "intText" : {
        "en" : "Our user-friendly platform ensures a smooth and hassle-free purchasing experience. Focus on your core business while we handle the rest, seamlessly integrating with your current procurement processes.",
        "serb" : "Mi konstantno radimo na tome, da preko naših platforma obezbedimo preglednije, UserFriendly-iskustvo pri nabavci. Pritom, naša rešenja ne zadiru u Vaš postojeći sistem nabavki. Fokusirajte Vašim osnovnim aspektima biznisa i dozvolite nam da Vas pratimo preko integracije naših sistema Indenting & Outsourcing i CashBack & Refund.  ",
        "mk" : "Преку нашите платформи, се трудиме постојано да обезбедиме полесно и UserFriendly-искуство при набавките. Фокусирајте се на основата на Вашиот бизнис и дозволете ни да Ве придружуваме преку интеграција на нашите системи на Indenting & Outsourcing во Вашите набавки. "
    },
    "advTittle" : {
        "en" : `B2B <b>ADVANTAGES:</b>`,
        "serb" : "PREDNOSTI NAŠIH SISTEMA NABAVKE:  ",
        "mk" : "Предности на нашите системи на набавка:"
    },
    "cashText" : {
        "en" : "Benefit from immediate cashback and refunds on eligible purchases, empowering you to reinvest in your business with ease, while still supporting your local suppliers.",
        "serb" : "Iskoristite mogućnosti momentalnih ili planskih refundacija i povraćaja sredstava. Sa nama, nudimo Vam mogućnost da Više investirate u Vaš biznis, pritom podržavajući i dalje lokalne dobavljače.  ",
        "mk" : "Искористете ја можноста од моментални или плански рефундации и поврати на средства. На тој начин, имате можност повеќе да инвестирате во Вашиот бизнис, притоа подржувајќи ги и понатаму локалните добавувачи. "
    },
    "taxTittle" : {
        "en" : "Tax Refund Benefits: ",
        "serb" : "Poreske beneficije:  ",
        "mk" : "Даночни бенефиции: "
    },
    "taxText" : {
        "en" : "Maximize your savings further through strategic tax refunds, optimizing your financial gains, and ensuring you stay competitive in your market.",
        "serb" : "Optimizirajte poreske efekte, ćime postajete konkurentniji na tržištu. ",
        "mk" : "Оптимизирајте ги Вашите даночни ефекти, со што останувате конкурентни на пазарот.  "
    },
    "joinTittle" : {
        "en" : "Join Our Global Network Today!",
        "serb" : "PRIKLJUČITE SE NAŠOJ GLOBALNOJ MREŽI POPUSTA!",
        "mk" : "Приклучете се на нашата глобална мрежа!"
    },
    "joinText" : {
        "en" : "Unleash your company's potential with us. Cut costs and boost profits while preserving your valuable partnerships with local or international suppliers.",
        "serb" : "Povećajte potencijal Vaše kompanije zajedno sa nama. Smanjite troškove i povečajte dobit, ne menjajući pritom partnerstva sa dobavljačima koja Vam znače.  ",
        "mk" : "Зголемете го потенцијалот на Вашата компанија заедно со нас. Намалете на трошоци и зголемете ја добивката, истовремено зачувувајќи ги партнерствата кои Ви значат на локално, регионално или меѓународно ниво.  "
    },
    "contactUs" : {
        "en" : "Contact Us!",
        "serb" : "Kontaktirajte nas!",
        "mk" : "Контактирајте не!"
    },
    "qBenefitTittle" : {
        "en" : "What is the primary benefit of partnering with us?",
        "serb" : "Koji je osnovni benefit iz partnerstva sa B2B?",
        "mk" : "Kој е основниот бенефит од партнерството со нас?"
    },
    "aBenefitText" : {
        "en" : "At B2B, our primary goal is to help businesses lower their purchasing costs effectively. By partnering with international finance organizations, we ensure that our clients receive substantial cashback/refunds on purchases. Alongside, we provide expert financial advisory services and assist in maximizing tax refunds, resulting in significant overall savings.",
        "serb" : "Osnova В2В-mreže je pomoći biznisu da smanji troškove pri nabavci - i to trajno i efektivno! Preko naših sistema i mreže partnera, obezbeđujemo Vam refundaciju u povračaj deo sredstava uloženih u nabavci. Pokraj toga, omogućujemo Vam stručne finansiske savetodavne usluge, s ciljem optimizacije Vaših nabavnih, finansiskih i poreskih opterećenja. Sve to dovodi na kraju do uštede na više nivoa. ",
        "mk" : "Основна на В2В-мрежата е да му се помогне на бизнисот да и намали трошоците на набавка -и тоа трајно и ефективно! Преку нашите системи, ние обезбедуваме рефундација и повраток на средства при набавката. Покрај тоа, Ви овозможуваме стручни финансиски советодавни услуги и Ве подржуваме во потребата од оптимизација на набавниот, даночниот или финансискиот товар. Сето тоа доведува на крај до заштеди на повеќе нивоа. "
    },
    "qSecureTittle" : {
        "en" : "How do you secure lower purchase prices for clients?",
        "serb" : "Kako se obezbećuju jeftinije nabavke za Vaše klijente?",
        "mk" : "Како обезбедувате поефтини набавки за Вашите клиенти?"
    },
    "qSecureText" : {
        "en" : "Through our strategic collaborations with international finance organizations, we offer unique financial solutions that enable clients to benefit from cash refunds. These refunds directly reduce the net purchase price of goods, empowering businesses to save on procurement expenses.",
        "serb" : "Mi Vam nudimo preko naše mreže partnerstava, pre svega na međunarodnom nivou, finansiska rešenja koje rezultiraju do refundacije sredstava preko nas, preko naših partnera, kao i preko javnih institucija. Ove refundacije ili povraćaji - direktni ili indirektni - smanjuju nabavnu cenu dobara ili usluga, što na kraju msanjuje troškove poslovanja. ",
        "mk" : "Пшреку нашата мрежа на стратешки партнерства, пред се на меѓународно ниво, Ви нудиме финансиски решенија кои резултираат кон рефундација на средства од нас, нашите партнери или јавните институции. Овие рефундации - директни или индиректни - ја намалуваат набавната цена на  добрата или услугите, со што се намалуваат трошоците на деловното работење. "
    },
    "cashRefundM" : {
        "en" : "How does the cash refund process work?",
        "serb" : "Kako funkcioniše proces refundacije, odnosno povraćaja sredstava?",
        "mk" : "Како функционира процесот на рефундација/поврат на средства?"
    },
    "cashRefundT" : {
        "en" : "When clients make eligible purchases through B2B, we work with our partner finance organizations to secure cash refunds. These refunds are then passed on to the clients, providing them with additional funds to reinvest in their business, improve operations, or pursue growth opportunities.",
        "serb" : "Pri samostalnoj nabavci, mi se ili nadograđujemo na Vaš sistem dobavljača i pokraj njih dovodimo u saradnju naše inostrane finansiske ili proizvodne partnere, koji obezbeđuju sredstava za CashBack od lokalnih ili inostranih finansiskih, proizvodnih ili uslužnih institucija, kao i optimalni  povraćaj porekih i drugih javnih dažbina.  Ova sredstva se odobravaju klijentima i preko nas prosleđuju do njih, sa ciljem dobijanje povoljnijih uslova za reinvesticiju sredstava u biznis ili proširenje samog biznisa. ",
        "mk" : "Кога вршите набавки преку нашата мрежа или не вклучувате во Вашиот систем на набавки, ние стапуваме во соработка со нашите меѓународни партнери кои ни обезбедуваат средства за рефундација од локалните, регионалните или меѓународните добавувачи, како и оптимален поврат на даночни и други јавни давачки. Ваквите средства им се одобруваат на клиентите и проследуваат до нив, со цел добивање оптимални услови за реинвестиција во бизнисот или за проширување на истиот. "
    },
    "offerTittle" : {
        "en" : "Can you explain the financial advisory services you offer?",
        "serb" : "Objasnite finansijske ili poreske savetodavne usluge koje nudite?",
        "mk" : "Можете ли да ги објасните финансиските или даночни советодавни услуги кои ги нудите?"
    },
    "offerText" : {
        "en" : "In addition to cash refunds, our team of financial experts provides personalized advisory services to clients. We assist in optimizing financial strategies, budgeting, and investment decisions to ensure our clients achieve their financial goals effectively.",
        "serb" : "Pokraj refundacije deo troškova nabavke, naš tim finansiskih i poreskih savetnika ponudiće Vam mogućnosti optimizacije Vaših finansiskih strategija. Po potrebi, obezbeđujemo savetodavne usluge u oblastima finansiskog planiranja i budžetiranja, donošenju investicijskih strategija i odluka, kao i u oblasti optimizacije poreskih i drugi ulaznih troškova.",
        "mk" : "Покрај повратот на средства, нашитот тим на финансиски и даночни експерти ќе Ви понуди можности за оптимизација на финансиските стратегии. По потреба, обезбедуваме светодавни услуги во доменот на системите на финансико планирање и буџетирање, донесувањето инвестициски стратегии и одлуки и оптимизација на влезните трошоци. "
    },
    "taxRefunds" : {
        "en" : "How do you help with tax refunds?",
        "serb" : "Opišite pomoć u optimizaciji poreskih sistema",
        "mk" : "Опишете ја помошта во оптимизацијата на даночните оптоварувања."
    },
    "taxRefundsText" : {
        "en" : "Our dedicated tax specialists guide clients through the tax refund process, ensuring they take full advantage of all available tax benefits. By maximizing tax refunds, we further enhance the cost-saving potential for our clients. Through us, tax refunds are made possible even to industries businesses that are not part of the VAT system.",
        "serb" : "Naši sistemi dovode do optimizacije poreskih opterećenja sa više aspekata. Benefit kao rezultat saradnje sa nama imaju čak i preduzeća koja su, primerice radi, isključena iz sistema PDV-a (građevinarstvo, banke, osiguravajuća društva, zdrastvene institucije i sl.). O svim mogučnostima optimizacije poreskog sistema, obezbedite termin za sastanak sa našim timom eksperata.",
        "mk" : "Нашите системи на Cashback & Refund доведуваат до оптимизација и на даночните оптоварувања на бизнисот. Со нас, бенефити добиваат и бизниси кои, на пример, се надвор од системот на одбивка на ДДВ."
    },
    "specificIndustry" : {
        "en" : " Is there a specific industry you specialize in?",
        "serb" : "Dali postoji neka određena poslovna grana, u koju je В2В specijalizovana?",
        "mk" : "Дали постои одредена индустрија, во која В2В се специјализира?"
    },
    "specificIndustryText" : {
        "en" : "B2B caters to businesses across various industries. Whether you are in manufacturing, retail, technology, hospitality, or any other sector, our services are designed to help you save on procurement costs and improve your financial performance.",
        "serb" : "B2B pomaže biznisima iz raznih industrija. Nezavisno od toga, dali se radi o proivodnoj grani, maloprodaji, IT-tehnologiji, hotelijerstvo, trgovina, bakarstvo, osiguranje, zdravstveni sektor ili javna preduzeća i organi, naše usluge su dizajnirane tako, da obezbeđuju uštede i na taj način poboljšavaju finansijske performanse. ",
        "mk" : "B2B им помага на бизнисите од разни индустрии. Независно дали се работи за производство, малопродажба, ИТ-технологија, угостителство, банкарство, осигурување, здравство, јавен сектор или друг сектор, нашите услуги се дизајнирани да обезбедат заштеди и на тој начин да ги подобрат финансиските перформанси."
    },
    "servQuestion" : {
        "en" : "Are there any upfront fees for your services?",
        "serb" : "Dali postoje unapred predviđene ili skrivene troškove?",
        "mk" : "Дали има однапред предвидени или скриени трошоци?"
    },
    "servAnswer" : {
        "en" : "We believe in transparency, and there are no upfront fees associated with our services. Our compensation is based on a mutually agreed-upon arrangement, ensuring we align our incentives with your success.",
        "serb" : "Mi se zalažemo za transparentnost u svakm pogledu, pa tako i nema unapred zaračunatih ili skrivnih troškova. Naše troškove pokrivamo od zajednički postignute zarade i ove troškove pokrivamo nakon realizacije uštede, a u skladu sa dogovorenim aranžmanom saradnje. ",
        "mk" : "Ние веруваме во транспарентност, па оттука и не постојат однапред предвидени или скриени трошоци. Нашиот надоместок е дел од заднички постигнатата заштеда и се наплаќа дури со реализацијата на заштедата, со заеднички договорен аранжман."
    },
    "myBuisinessQuest" : {
        "en" : "How do I know if my business is eligible to partner with B2B?",
        "serb" : "Kako mogu znati, dali je moj biznis podoban da uće u saradnju sa B2B?",
        "mk" : "Како да знам, дали мојот бизнис е подобен за партнерство со B2B?"
    },
    "myBuisinessAnsw" : {
        "en" : "We welcome businesses of all sizes to explore potential partnerships with us. Our team will assess your specific requirements and provide a tailored solution that aligns with your unique business needs.",
        "serb" : "Biznise svake veličine su dobrodošli i ohrabrujemo ih da ispitaju potencijale saradnje sa nama. Naš tim će proceniti sve okolnosti i ponudiće Vam rešenja koji odgovaraju Vašim idejama i potrebama.",
        "mk" : "Бизниси од секоја големина се добредојдени да ги испитаат потенцијалите за пертнерство со нас. Нашиот тим ќе ги процени сите околности и ќе Ви понуди решенија кои одговараат на Вашите замисли и потреби. "
    },
    "relQuest" : {
        "en" : "Can I maintain my current supplier relationships?",
        "serb" : "Dali mogu zadržati postojeću mrežu dobavljača?",
        "mk" : "Дали може да ја задржам досегашната мрежа на добавувачи?"
    },
    "relAnsw" : {
        "en" : "Absolutely! We understand the importance of existing supplier relationships to your business. You can continue working with your current suppliers while benefiting from our cost-saving solutions.",
        "serb" : "U svakom slučaju! Mi razumemo potrebu zadržavanja postojeće mreže dobavljača za Vaš biznis. Mi Vam nudimo rešenja smanjenja nabavnih troškova, čak i kada se radi o postojećoj mreži dobavljača.",
        "mk" : "Во секој случај! Ние ја разбираме важноста од задржување на постоечката мрежа на добавувачи за Вашиот бизнис. Ние Ви нудиме решенија за намалување на трошоците на набавка, дури и при постоечката мрежа на добавувачи."
    },
    "startQuest" : {
        "en" : "How can I start cooperating with B2B?",
        "serb" : "Kako započeti saradnju sa B2B?",
        "mk" : "Како да започнам соработка со B2B?"
    },
    "startAnsw" : {
        "en" : "To get started, simply reach out to us through our website or contact information provided on our marketing materials. Our team will schedule a consultation to understand your business needs and explain how we can help you achieve significant savings on your procurement costs.",
        "serb" : "Za početak, jednostavno nas kontaktirajte preko ove veb-stranice. Naš tim će dogovoriti konsultativni sastanak sa Vama, s ciljem da Vam detaljnije prezentiramo, kako Vam možemo pomoći u obezbeđivanju efektivnih poslovnih ušteda. Mogučnosti dodele sistema franšize su uvek otvorene za lica zainteresovanih za bližu saradnju.",
        "mk" : "За почеток, едноставно контактирајте не преку податоците за контакт дадени на оваа веб-страница. Нашиот тим ќе договори со Вас консултативен состанок, со цел да ги разбереме Вашите деловни потреби и да презентираме подетално, како можеме да Ви помогнеме во постигнувањето значителни деловни заштеди. "
    },
    "topQuestion" : {
        "en" : "FREQUENTLY ASKED QUESTIONS (FAQ) ",
        "serb" : "ČESTO POSTAVLJENA PITANJA (FAQ) ",
        "mk" : "ЧЕСТО ПОСТАВУВАНИ ПРАШАЊА (ЧПП) "
    },
    
}


langBtn.addEventListener('click', () => {
    langModal.classList.add('modal-active');
    langBtn.classList.add("lang-hide");
});
cancelBtn.addEventListener('click', () => {
    langModal.classList.remove('modal-active');
    langBtn.classList.remove("lang-hide");

});

languageItem.forEach(elem => {
    elem.addEventListener('click', () => {
        // langModal.classList.remove('modal-active');
        // langBtn.classList.remove("lang-hide");
        let lang = elem.dataset.value;
        location.href = window.location.pathname + '#' + lang;
        location.reload();
        // console.log(elem.dataset.value);
    });
});

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    for (let elem in langArr ){
        document.querySelector(`.lng-${elem}`).innerHTML = langArr[elem][hash]
    };
}
changeLanguage();


