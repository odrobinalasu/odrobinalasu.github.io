let questionArray = ['Czy jeżeli miałabyś możliwość przeżyć jeden dzień w skórze swojego dziecka, skorzystałabyś z niej? Czego byś chciał się dowiedzieć o swoim dziecku?',
'Gdybyś mógł cofnąć się w czasie i coś zmienić w swoim życiu to co by to było?',
'Jeżeli mógłbyś iść na kolację z dowolną osobą żyjącą na świecie, kto by to był?',
'Jakie jest twoje największe marzenie?',
'Kogo najbardziej cenisz, podziwiasz? Za co?',
'Jakie są twoje pasje?',
'Jakie jest twoje ulubione wspomnienie?',
'Jaka jest 1 rzecz, której nie zrobiłeś w przeszłości i tego żałujesz?',
'Jaka 1 postać z przeszłości chciałbyś poznać osobiście i móc z nią porozmawiać?',
'Jaki jest Twój ulubiony moment w ciągu Twojego standardowego tygodnia?',
'Gdyby to był Twój ostatni miesiąc życia, co byś zrobił?',
'Co znaczy według Ciebie być szczęśliwym człowiekiem?',
'Jak lubisz spędzać wolny czas ?',
'Kim jesteś?',
'Co cię uspokaja?',
'Co Cię denerwuje ?',
'Co najbardziej cenisz w życiu?',
'Gdybyś napisał książkę o sobie jaki miała by tytuł? Jak nazywałyby się rozdziały, które przeżyłeś a jak te, które chcesz przeżyć?',
'Jaki jest Twój wymarzony dzień? Co robisz, kogo spotykasz, co czujesz?',
'Załóżmy, że istnieje reinkarnacja – jaką postacią z przeszłości byłbyś? Co byś robił jakie były twoje talenty?',
'Jak wyobrażasz sobie swoje życie za 5 lat?',
'Gdybyś miał możliwość przenieść się w czasie do jakiegokolwiek momentu zapragniesz, kiedy by to było i dlaczego?',
'O czym marzysz?',
'Gdybyś miał wymienić jedno wspomnienie, które jest dla Ciebie najważniejsze, co by to było?',
'Czy robisz w życiu, to co kochasz i co Cię inspiruje?',
'Mógłbyś opisać siebie w trzech słowach?',
'Czego się boisz?',
'Jesteś introwertykiem czy ekstrawertykiem?',
'Kto jest Twoim autorytetem?',
'Czego w sobie nie lubisz?',
'Dokąd biegniesz, jaki jest Twój cel?',
'Co Cię motywuje do codziennego wstawania z łóżka?',
'Gdybyś miał nieograniczoną ilość pieniędzy do wydania- jak byś je wykorzystał?',
'Gdybyś mógł przez jeden dzień być dowolną osobą, zwierzęciem, rośliną bądź postacią z bajki kogo byś wybrał?',
'Gdybyś mógł zadać jedno pytanie o Twoją przyszłość i uzyskać pewną odpowiedź, czego by ono dotyczyło?',
'Jak spędziłbyś wymarzony dzień nie mając żadnych ograniczeń finansowych?',
'Gdybyś wiedział,że za rok świat się kończy to jak spedziłbyś pozostały czas? Czego byś spróbował po raz pierwszy?Na czym byś się skupił, a czego absolutnie nie zrobił?',
'Jakie negatywne wydarzenie mające miejsce w przeszłości miało późniejszy pozytywny skutek w Twoim życiu?',
'W razie pożaru jakie trzy rzeczy będziesz ratował jako pierwsze? Nie wliczając dokumentów i ludzi.',
'Kim chciałeś zostać, gdy byłeś mały?',
'Co bardziej się dla Ciebie liczy, droga czy cel?',
'Jaka książka najbardziej wpłynęła na Twoje życie?',
'Notatnik i długopis czy laptop?',
'Jaka była Twoja pierwsza samodzielnie podjęta decyzja i jej konsekwencje?',
'Co lubisz robić w wolnym czasie? (Dałoby to jakieś pojęcie o tym czy ktoś lubi być w ruchu, czy woli intelektualne rozrywki, z ludźmi czy bez nich, z ludźmi których nie zna, czy z bliskimi, a może z sobą samym, mogłabym się też wtedy dowiedzieć czegoś o pasjach albo talentach tej osoby)',
'Co robisz W czasie wolnym? (To pytanie mogłoby mi pokazać czy ta osoba odmawia sobie przyjemności by poświecić sie innym, a moze pracy -znam kilka osób, które mówią, że po wyjściu z pracy też pracują- a może poświęcają czas sobie)',
'Wolisz planować czy działać spontanicznie? (Byłby to jakiś punkt wyjścia do rozmowy o stylu pracy i organizacji. Jest to bardzo ważne przy współpracy).Mogłabym mnożyć pytania w nieskończoność, ale żadne pytanie nie pozwoli Ci poznać drugiego człowieka jeśli nie będziesz go uważnie słuchał. To tak jak w RISB (test niedokończonych zdań Rottera) – ważne jest nie tylko co ktoś mówi, ale też jakich słów używa.',
'Jak wygląda twoja dieta (w kontekście ‘stylu życia’)?',
'Jakie miałeś dzieciństwo i jak wyglądają twoje relacje z rodzicami?',
'Co daje ci szczęście?',
'Czy chciałbyś być sławny? Dlaczego tak lub nie?',
'Jacy są twoi przyjaciele?',
'Co byś zrobił z wygraną w totka?',
'Jakie pytanie byś sobie zadał?',
'Jaki jest Twój wymarzony dzień?',
'Co jest dla Ciebie ważne?',
'Jakie Twoje cechy sprawiły, że jesteś dziś tu, gdzie jesteś?',
'Co oznacza dla Ciebie słowo szczęście?',
'Z jaką sławną osobą chciałbyś pójść na kolację?',
'Jaka jest Twoja pierwsza myśl po przebudzeniu?',
'Co sprawia że cieszysz się życiem?',
'Na czym Ci zależy?',
'Kim chciałbyś się stać, gdybyś miał magiczne moce?',
'Jak znajdujesz w sobie siłę i determinację?',
'Czym jest dla Ciebie sukces?',
'Czy czujesz się spełniony?',
'Kogo podziwiasz?',
'Jaką masz osobowość?',
'Czy lubisz ludzi?',
'Czy lubisz być w centrum uwagi?',
'Lubisz porządek?',
'Gdzie chciałbyś pracować?',
'Lubisz podróże?',
'Co to znaczy kochać?',
'Wierzysz w reinkarnację?',
'Lubisz dzieci?',
'Co odważnego zrobiłeś?',
'Jak pomagasz innym?',
'Bez czego nie wyobrażasz sobie życia?',
'Lubisz być czasami sam?',
'Masz silną wolę?',
'Ci oznacza dla Ciebie słowo ograniczenia?',
'Co myślisz kiedy słyszysz słowo kompromis?',
'Dokończ zdanie “Wolność to…”',
'Jaką masz własna definicję miłości?',
'Jaka jest Twoja historia?',
'Co byś zrobił, gdyby nie było żadnych ograniczeń (np. wstydu, lęku, braku funduszy, czasu), barier (poza zdrowym rozsądkiem i zachowaniem granic innych ludzi, np. bariery językowej), Twoich zobowiązań (np. gdybyś nie miał kredytu, ścisłych godzin pracy, itp)?',
'Czego się boisz? (w sensie: jakich wydarzeń? ale i np. straty czego? kogo?)',
'Kiedy się uśmiechasz?',
'Gdzie lub w czym odnajdujesz spokój?',
'Jaki jest Twój przepis na szczęście?',
'Co jest Twoim największym marzeniem?',
'Lubisz siebie?',
'Opowiedz o swoim życiu w 3 minuty.',
'Każdy człowiek o czymś marzył, marzy i będzie marzyć: jakie masz podejście do marzeń i celów życiowych, w swoim życiu?',
'Jeśli za tydzień miałby być koniec świata, to czy pozamykałbyś najpierw swoje sprawy i pożegnał się z bliskimi, czy zrobił coś szalonego, coś odważnego, coś dla siebie?',
'Wyobraź sobie siebie za 10 lat. Popatrz z tej perspektywy na swoje obecne życie. Co kazałbyś sobie zmienić?',
'Czy zajmowałbyś się tym co teraz gdybyś mógł wybrać dowolną aktywność zawodową i został zapewnionym, że będzie to opłacalne finansowo?',
'Dlaczego wybrałeś właśnie taką ścieżkę zawodową?',
'Czy obawa przed opinią innych ludzi często powstrzymuje Cię oddziałania?',
'Jakie jest Twoje wymarzone miejsce na samotną podróż?',
'W jakiej sytuacji czułeś się ostatnio naprawdę szczęśliwy?',
'Kogo prosisz o radę w trudnych sprawach?',
'Czy w wolnym czasie chętniej zaszywasz się w domu czy spotykasz z przyjaciółmi?',
'Czy Twój dom jest miejscem, w którym czujesz się bezpiecznie?',
'Czy Twój dom tworzą ludzie, których łączą zdrowe relacje? Czy chciałbyś aby twoje dzieci właśnie taki obraz rodziny powieliły?',
'Podaj 3 cechy, które Cię charakteryzują.',
'Jakie jest Twoje wewnętrzne zwierzę?',
'Co chciałbyś, aby było napisane na Twoim nagrobku.',
'Jakie są Twoje pragnienia związane z życiem prywatnym, a jakie z zawodowym?',
'Czego się boisz (tak globalnie i tak każdego dnia)?',
'Co myślisz o swojej rodzinie?',
'Powiedz, co myślisz o sobie, jak się oceniasz, jakie jest Twoje zdanie o Tobie samym i jak to się ma do tego, jak widzą Cię inni.',
];


document.getElementById('getQuestion').addEventListener('click', ()=>{
    document.getElementById("question").innerHTML = questionArray[Math.floor(Math.random()*questionArray.length)];
});