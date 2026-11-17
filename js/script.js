/* ============================================================
   Bus & LKW Fragenkatalog - Komplettes Script
   - خلط الأجوبة تلقائياً
   - قراءة صوتية ألمانية أصلية فقط (SpeechSynthesis)
   ============================================================ */

/* ===================== الأسئلة ===================== */
		const originalQuestions = [
 			{ id: 1, ziffer: "1a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "In welchem Drehzahlbereich des Motors fährt man mit den besten Verbrauchswerten?", options: ["Bei Leerlaufdrehzahl", "Im am Drehzahlmesser gelb gekennzeichneten Bereich", "Im am Drehzahlmesser rot gekennzeichneten Bereich", "Im am Drehzahlmesser grün gekennzeichneten Bereich"], correctIndex: 3 },
			{ id: 2, ziffer: "1a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie befahren eine Steigung. Wann müssen Sie bei Fahrzeugen mit manuellem Schaltgetriebe zurückschalten?", options: ["Wenn die Drehzahl auf die Leerlaufdrehzahl abgesunken ist", "Wenn die Motordrehzahl trotz Vollgas unter den gruenen Bereich des Drehzahlmessers fällt", "Wenn der Motor stark zu vibrieren beginnt", "Wenn die Motordrehzahl bei Vollgas in den gelben Bereich des Drehzahlmessers steigt"], correctIndex: 1 },
			{ id: 3, ziffer: "1a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Folgen für das Drehmoment hat es, wenn mit einer Motordrehzahl außerhalb des gruenen Bereiches gefahren wird?", options: ["Das Drehmoment steigt an", "Das Drehmoment fällt ab", "Das Drehmoment bleibt annähernd gleich", "Das Drehmoment fällt ab und steigt dann wieder an"], correctIndex: 1 },
			{ id: 4, ziffer: "1a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Folgen für den Kraftstoffverbrauch hat es, wenn mit einer Motordrehzahl außerhalb des gruenen Bereiches gefahren wird?", options: ["Der Kraftstoffverbrauch steigt an", "Der Kraftstoffverbrauch fällt ab", "Der Kraftstoffverbrauch bleibt annähernd gleich", "Der Kraftstoffverbrauch fällt ab und steigt dann wieder an"], correctIndex: 0 },
			{ id: 5, ziffer: "1a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wodurch kann eine Verminderung der schädlichen Anteile im Abgas eines Dieselmotors erzielt werden?", options: ["Durch Nachbehandlung der Abgase mit Wasserstoff", "Durch einen SCR-Katalysator und Zuführung von AdBlue", "Durch Beimengung von Benzin zum Dieselkraftstoff", "Durch Nachbehandlung der Abgase mit Stickstoff"], correctIndex: 1 },
			{ id: 6, ziffer: "1a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Motorarten werden bei Nutzfahrzeugen hauptsächlich eingesetzt?", options: ["Ottomotor", "Dieselmotor", "Wasserstoffmotor", "Elektromotor"], correctIndex: 1 },
			{ id: 7, ziffer: "1a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Am Armaturenbrett Ihres Fahrzeuges befindet sich ein Drehzahlmesser. Wofür steht das grüne Kennfeld?", options: ["Für das niedrigste Drehmoment des Motors", "Für die höchste Leistung des Motors", "Für optimale Bodenhaftung", "Für den spezifisch geringsten Kraftstoffverbrauch des Motors"], correctIndex: 3 },
			{ id: 8, ziffer: "1a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Am Armaturenbrett Ihres Fahrzeuges befindet sich ein Drehzahlmesser. Was zeigt das rote Kennfeld an?", options: ["Die niedrigste Leistung des Motors", "Das geringste Drehmoment des Motors", "Das höchste Drehmoment des Motors", "Den Drehzahlbereich, in dem der Motor nicht betrieben werden soll"], correctIndex: 3 },
			{ id: 9, ziffer: "1a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Warum soll der Motor im gruenen Bereich des Drehzahlmessers betrieben werden?", options: ["Um den geringsten spezifischen Kraftstoffverbrauch des Motors zu nutzen", "Um den höchsten spezifischen Kraftstoffverbrauch des Motors zu erzielen", "Um den Ölverbrauch des Motors gering zu halten", "Um eine möglichst gleichmäßige Abnutzung der Reifen zu erzielen"], correctIndex: 0 },
			{ id: 10, ziffer: "1a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wodurch kann eine Verminderung der schädlichen Anteile im Abgas eines Dieselmotors erzielt werden?", options: ["Durch Nachbehandlung der Abgase mit Wasserstoff", "Durch Abgasrückführung in Kombination mit einem Dieselpartikelfilter", "Durch Beimengung von Benzin zum Dieselkraftstoff", "Durch Nachbehandlung der Abgase mit Stickstoff"], correctIndex: 1 },
			{ id: 31, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Vorteile hat es, dass die Federspeicherbremsanlage durch Entlüften eingebremst wird?", options: ["Das Fahrzeug kann nicht entwendet werden", "Das Fahrzeug kann auch ohne Druckluft verwendet werden", "Das Fahrzeug bleibt auch bei einem Luftverlust in den Vorratsbehältern eingebremst", "Der Druckluftverbrauch ist geringer als beim Belüften der Radbremszylinder"], correctIndex: 2 },
			{ id: 32, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie lenken ein vollbeladenes Fahrzeug. Welche Handlungen schaden der Lenkung?", options: ["Zu langsames Fahren auf schlechten Straßen", "Lenken am Stand", "Einschlagen der Vorderräder während der Fahrt", "Längere Fahrten mit hohem Tempo auf der Autobahn"], correctIndex: 1 },
			{ id: 33, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welches Bremssystem ist bei schweren Nutzfahrzeugen als Betriebsbremse in der Regel eingebaut?", options: ["Eine reine Flüssigkeitsbremsanlage", "Eine Druckluftbremsanlage", "Eine elektrische Bremsanlage", "Eine Auflaufbremsanalage"], correctIndex: 1 },
			{ id: 34, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wozu dient das Entwässerungsventil an den Vorratsbehältern einer Druckluftbremsanlage?", options: ["Damit die Funktionstüchtigkeit eines Lufttrockners überprüft werden kann", "Um einen zu geringen Druck in der Anlage ablassen zu können", "Um im Pannenfall den Federspeicherbremszylinder lösen zu können", "Um bei Ausfall der Druckluftversorgung die Anlage fremdbelüften zu können"], correctIndex: 0 },
			{ id: 35, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Das Aufpumpen der Vorratsbehälter einer Druckluftbremsanlage dauert wesentlich länger als gewöhnlich. Was kann die Ursache dafür sein?", options: ["Zu hohe Luftfeuchtigkeit im Sommer", "Geringe Lufttemperatur im Winter", "Kondenswasser in den Vorratsbehältern", "Undichtheiten im Vorratssystem"], correctIndex: 3 },
			{ id: 36, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Ihr Fahrzeug hat eine Druckluftbremsanlage. Woran erkennen Sie einen Tristopzylinder?", options: ["Am Bremsgestänge", "Er hat drei Zuleitungen", "Er hat zwei Zuleitungen", "Er hat drei getrennte Zylinder"], correctIndex: 2 },
			{ id: 37, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Der Vorratsdruck einer Druckluftbremsanlage fällt bei einer Vollbremsung um mehr als 0,7 bar ab. Welche Ursache kann dies haben?", options: ["Undichtheit in den Bremskreisen", "Undichtheit in den Vorratskreisen", "Der Kompressor liefert zu wenig Luft", "Eine Überladung einer Fahrzeugachse"], correctIndex: 0 },
			{ id: 38, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie fahren mit einem voll beladenen Fahrzeug in einem längeren Gefälle. Wie können Sie die Wirkung der Verlangsameranlage verstärken?", options: ["Durch Zurückschalten auf einen niedrigen Getriebegang", "Durch Hochschalten auf einen höheren Getriebegang", "Durch ständiges Betätigen der Betriebsbremsanlage", "Durch vorsichtiges Betätigen der Feststellbremsanlage"], correctIndex: 0 },
			{ id: 39, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Die Warnleuchte für den Druckluftvorrat der Bremsanlage leuchtet auf. Was bedeutet das?", options: ["Der Vorratsdruck ist stark abgesunken", "Der Vorratsdruck ist stark angestiegen", "Der Feuchtigkeitsgehalt der Druckluft ist zu hoch", "Die Kartusche am Lufttrockner muss getauscht werden"], correctIndex: 0 },
			{ id: 40, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Die Warnleuchte für den Druckluftvorrat leuchtet auf. Wie verhalten Sie sich?", options: ["Ich halte an und aktiviere den Fremdbelüftungsanschluss", "Ich fahre weiter und beobachte die Warnleuchte", "Ich fahre weiter und beobachte die Druckmanometer", "Ich halte an und sehe in der Betriebsanleitung nach, was zu tun ist"], correctIndex: 3 },
			{ id: 41, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Ihr Fahrzeug hat einen technischen Defekt an der Druckluftbremsanlage. Die Federspeicherbremse kann wegen eines zu geringen Vorratsdrucks nicht mehr gelöst werden. Was müssen Sie tun, um das Fahrzeug abschleppen zu können?", options: ["Ich muss den Federspeicher mechanisch oder durch Fremdbelüften lösen", "Nichts, weil das Fahrzeug immer abgeschleppt werden kann", "Ich muss die Antriebsräder abmontieren", "Ich muss die Zuluftleitung am Federspeicherbremszylinder abschließen"], correctIndex: 0 },
			{ id: 42, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Womit können Sie die Wirkung einer Motorstaubremse abstufen?", options: ["Mit einem Hebel an der Lenksäule oder einem Schalter am Armaturenbrett", "Mit dem Fußbremspedal", "Mit einem Druckschalter am Schalthebel", "Mit dem Handbremsventil"], correctIndex: 0 },
			{ id: 43, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie befahren mit Ihrem voll beladenen Fahrzeug eine längere Gefällestrecke. Welche Gefahr besteht, wenn Sie dabei durchgehend die Betriebsbremse verwenden?", options: ["Die Radbremsen können überhitzen und ausfallen", "Es besteht keine Gefahr", "Der Druckluftvorrat kann überhitzen", "Die Räder können durch überhitzte Druckluft blockieren"], correctIndex: 0 },
			{ id: 44, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie befahren mit Ihrem Fahrzeug eine längere Gefällestrecke. Welche Bremse sollten Sie überwiegend verwenden?", options: ["Die Betriebsbremse", "Die Verlangsameranlage", "Die Feststellbremse", "Die Hilfsbremse"], correctIndex: 1 },
			{ id: 45, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie machen die tägliche Abfahrtskontrolle. Was müssen Sie bei der Druckluftbremsanlage kontrollieren?", options: ["Den Leerweg am Bremspedal", "Ob bei abgestelltem Motor Zischgeräusche aus der Druckluftbremsanlage hörbar sind", "Den Leerweg am Handbremshebel", "Die Prüfstellung am Bremspedal"], correctIndex: 1 },
			{ id: 46, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie machen die tägliche Abfahrtskontrolle. Dabei hören Sie bei abgestelltem Motor Zischgeräusche aus der Druckluftbremsanlage. Wie müssen Sie sich verhalten?", options: ["Ich repariere die undichte Stelle provisorisch mit einem farbigen Isolierband", "Ich darf das Fahrzeug nicht in Betrieb nehmen und verständige den Zulassungsbesitzer", "Ich fahre bis zum nächsten regulären Werkstatttermin weiter", "Ich fahre weiter und verwende dabei vorwiegend die Verlangsameranlage"], correctIndex: 1 },
			{ id: 47, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie überprüfen die Dichtheit der Vorratskreise. Um wieviel darf der Druck in 10 Minuten absinken?", options: ["5 % des Abschaltdruckes", "Nicht merkbar", "10 % des Abschaltdruckes", "2 % des Abschaltdruckes"], correctIndex: 1 },
			{ id: 48, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie überprüfen die Dichtheit des Vorratskreises. Um wie viel darf der Druck in 3 Minuten absinken?", options: ["Um 2 % des Abschaltdruckes", "Um 10 % des Abschaltdruckes", "Um 5 % des Abschaltdruckes", "Nicht merkbar"], correctIndex: 3 },
			{ id: 49, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie fahren mit einem voll beladenen Fahrzeug in einem längeren Gefälle. Woran können Sie erkennen, dass die Motorbremswirkung ausreicht?", options: ["Das Fahrzeug verzögert stark ohne mit der Betriebsbremse zu bremsen", "Die Fahrgeschwindigkeit bleibt ohne zu bremsen annähernd gleich", "Der Motor wird nicht zu heiß", "Ich muss ständig zusätzlich mitbremsen"], correctIndex: 1 },
			{ id: 50, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Aufgabe hat das Traktionskontrollsystem?", options: ["Es verhindert das Zurückrollen des Fahrzeuges beim Anfahren in Steigungen", "Es verhindert das Vorwärtsrollen des Fahrzeuges beim Anfahren in Gefällen", "Es verhindert das Schieben des Fahrzeuges beim Fahren von Kurven", "Es erleichtert das Anfahren bei rutschigen Fahrbahnverhältnissen"], correctIndex: 3 },
			{ id: 51, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Aufgabe hat das elektronische Stabilitätssystem \"ESP\"?", options: ["Es verringert immer den Bremsweg", "Es verringert die Ansprechzeit der Druckluftbremsanlage", "Es vermindert die Schleudergefahr bei rutschigen Fahrbahnverhältnissen", "Es erleichtert einen Fahrstreifenwechsel"], correctIndex: 2 },
			{ id: 52, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Ihr Fahrzeug ist mit einem Notbremsassistenzsystem ausgestattet. Wann kann dieses System versagen?", options: ["Wenn während der elektronischen Regelung die Betriebsbremse betätigt wird", "Wenn der Abstandssensor verschmutzt ist oder durch die Witterung in seiner Funktion beeinträchtigt wird", "Wenn der Abstandssensor vor jeder Abfahrt nicht mechanisch kalibriert wird", "Wenn während der elektronischen Regelung das Lenkrad zu fest gehalten wird"], correctIndex: 1 },
			{ id: 53, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Ihr Fahrzeug ist mit einem Abstandsregeltempomat ausgestattet. Was ist der Vorteil dieses Assistenzsystems?", options: ["Auffahrunfälle werden auf jeden Fall verhindert", "Eine höhere Durchschnittsgeschwindigkeit kann erreicht werden", "Stressfreieres Fahren und die Gefahr eines Auffahrunfalles wird verringert", "Das Lenkrad muss während der Fahrt nicht mehr gehalten werden"], correctIndex: 2 },
			{ id: 54, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was ist der Unterschied zwischen einem \"Tempomat\" und einem \"Limiter\"?", options: ["Beim \"Limiter\" muss Gas gegeben werden, um die Geschwindigkeit zu halten. Der \"Tempomat\" hält die Geschwindigkeit, auch wenn kein Gas gegeben wird", "Beim \"Tempomat\" muss Gas gegeben werden, um die Geschwindigkeit zu halten. Der \"Limiter\" hält die Geschwindigkeit, auch wenn kein Gas gegeben wird", "Keiner. Es handelt sich um zwei unterschiedliche Bezeichnungen für dasselbe Assistenzsystem", "Der \"Limiter\" begrenzt die Lenkzeit. Der \"Tempomat\" hält die Geschwindigkeit"], correctIndex: 0 },
			{ id: 55, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was ist ein \"A B S\"?", options: ["Ein Anti-Blockier-System", "Eine hydraulische Strömungsbremse", "Eine automatisch lastabhängige Bremskraftregelung", "Eine Anfahrhilfe"], correctIndex: 0 },
			{ id: 56, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was verstehen Sie unter dem \"Abschaltdruck\" einer Druckluftbremsanlage?", options: ["Der Druck, bei dem der Druckregler den Kompressor in den Lastlauf schaltet", "Der Druck, bei dem der Kompressor stehen bleibt", "Der Druck, ab dem der Kompressor keine Luft in die Vorratsbehälter fördert", "Der Druck, bei dem der Druckregler das Abblasen der Druckluft ins Freie abstellt"], correctIndex: 2 },
			{ id: 57, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was verstehen Sie unter dem \"Einschaltdruck\" einer Druckluftbremsanlage?", options: ["Das ist der Druck, bei dem der Druckregler die vom Kompressor geförderte Luft ins Freie lässt", "Das ist der Druck, bei dem der Druckregler die vom Kompressor geförderte Luft wieder in die Luftbehälter lässt", "Das ist der Druck, bei dem der Druckregler den Kompressor in den Leerlauf schaltet", "Das ist der Druck, bei dem der Druckregler das Abblaseventil einschaltet"], correctIndex: 1 },
			{ id: 58, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was verstehen Sie unter dem \"Sicherungsdruck\" einer Druckluftbremsanlage?", options: ["Das ist jener Druck von 11 - 14 bar, bei dem das Sicherheitsventil im Druckregler öffnet, wenn der Abschaltvorgang versagt", "Das ist der Selbststabilisierungsdruck eines Kompressors", "Der Druck, bei dem das Fahrzeug sicherheitshalber automatisch abgebremst wird", "Das ist jener Druck, der bei Ausfall eines Druckluftkreises erhalten bleiben muss"], correctIndex: 3 },
			{ id: 59, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was verstehen Sie unter dem \"Betriebsdruck\" einer Druckluftbremsanlage?", options: ["Ist jener Druck, der bei einer Bremsung höchstens erreicht werden kann", "Ist der Druckunterschied zwischen Einschalt- und Abschaltdruck", "Ist ein Druck von 65 % des Abschaltdruckes", "Ist jener Druck, ab dem mit dem Fahrzeug gefahren werden darf"], correctIndex: 3 },
			{ id: 60, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was verstehen Sie unter einem \"EBS-Bremssystem\"?", options: ["Eine Bremsanlage, welche die Bremsenergie elektrisch bereitstellt", "Eine Bremsanlage, die vollständig elektronisch geregelt wird", "Eine Druckluftbremse mit Anti-Blockier-System", "Eine Druckluftbremse mit Bremsdruckkraftbegrenzer"], correctIndex: 1 },
			{ id: 61, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was verstehen Sie unter einer \"Druckluftbremsanlage\"?", options: ["Eine Bremsanlage, bei der die Bremskraft durch Druckluft erzeugt wird", "Eine Bremsanlage, bei der die Bremskraft durch Flüssigkeitsdruck erzeugt wird", "Eine Bremsanlage, bei der die Bremskraft durch Unterdruck erzeugt wird", "Eine Bremsanlage, bei der die Bremskraft elektrisch erzeugt wird"], correctIndex: 0 },
			{ id: 62, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was verstehen Sie unter einer ALB-Regelung bei einer Druckluftbremsanlage?", options: ["Eine Bremsanlage mit Blockierschutz", "Eine Regelung der Bremskraft entsprechend den Witterungsverhältnissen", "Eine Regelung, welche die Bremskraft an den Achsen nach dem Beladungszustand automatisch anpasst", "Eine automatisch selbstnachstellende Bremsanlage"], correctIndex: 2 },
			{ id: 63, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was ist eine Verlangsameranlage?", options: ["Ein System, mit dem der Reifenverschleiß verringert werden kann", "Ein System, mit dem der Motorölverbrauch verringert werden kann", "Ein System, mit dem ein mitgeführter Anhänger alleine abgebremst werden kann", "Ein System, mit dem die Geschwindigkeit verschleißfrei vermindert werden kann"], correctIndex: 3 },
			{ id: 64, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Aufgabe hat das Druckregler einer Druckluftbremsanlage?", options: ["Er regelt die Fördermenge", "Er bestimmt den Sicherungsdruck", "Er regelt den Betriebsdruck zwischen Ein- und Abschaltdruck", "Er regelt den Bremsdruck"], correctIndex: 2 },
			{ id: 65, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Aufgabe hat der Lufttrockner einer Druckluftbremsanlage?", options: ["Der vom Kompressor geförderten Luft die Feuchtigkeit zu entziehen", "Die Luft des Fahrerhauses zu trocknen", "Die angesaugte Luft des Motors zu trocknen, um die Leistung zu steigern", "Die vom Turbolader komprimierte Luft zu trocknen"], correctIndex: 0 },
			{ id: 66, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was ist ein \"Tristopzylinder\" bei einer Druckluftbremsanlage?", options: ["Ein Bremszylinder mit drei Zuleitungen", "Eine Kombination aus Kolben- und Membranbremszylinder", "Ein Bremszylinder mit drei Kolbenstangen", "Eine Kombination aus Membran- und Federspeicherzylinder"], correctIndex: 3 },
			{ id: 67, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche der folgenden Bremsanlagen funktioniert ohne nennenswerten Verschleiß?", options: ["Hydraulische Strömungsbremse (Retarder)", "Feststellbremse", "Fahrtwindbremse", "Motorkolbenbremse"], correctIndex: 0 },
			{ id: 68, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welchen Vorteil hat ein elektronisch geregeltes Bremssystem gegenüber einer Druckluftbremse ohne EBS?", options: ["Es darf damit schneller gefahren werden", "Der Kraftstoffverbrauch wird geringer", "Die Ansprechzeit der Druckluftbremsanlage ist wesentlich kürzer", "Nach Ausfall eines Druckluftbremskreises wirkt die Bremse immer noch auf alle Räder"], correctIndex: 2 },
			{ id: 70, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welchen Zweck haben Verlangsameranlagen?", options: ["Sie entlasten und schonen die Betriebsbremsanlage", "Sie verhindern das Überhitzen der Reifen", "Sie verringern den Kraftstoffverbrauch", "Mit ihnen kann man bei Ausfall der Betriebsbremsanlage das Fahrzeug zum Stillstand bringen"], correctIndex: 0 },
			{ id: 71, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Woran erkennen Sie nach dem Starten des Fahrzeugmotors, dass die Druckluftbremsanlage den Betriebsdruck erreicht hat?", options: ["Die Kontrolllampen erlöschen, der Warnsummer verstummt", "Das Manometer zeigt zumindest den Abschaltdruck an", "Das Motorwagenbremsventil lässt sich nicht mehr ganz durchdrücken", "Es lässt sich ein Gang einlegen"], correctIndex: 0 },
			{ id: 72, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Während der Fahrt leuchtet die ABS-Kontrollleuchte auf. Wie verhalten Sie sich?", options: ["Haltemöglichkeit aufsuchen, Motor abstellen und nochmals starten; falls die Kontrollleuchte immer noch leuchtet, Werkstätte aufsuchen", "Anhalten; die Kontrollleuchte signalisiert, dass nur noch ein Kreis der pneumatischen Bremsanlage funktioniert", "Sofort Anhalten; jede Weiterfahrt ist verboten", "Weiterfahren; es wird nur zwischendurch angezeigt, dass das ABS noch in Ordnung ist"], correctIndex: 0 },
			{ id: 73, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wodurch kann es zum Überhitzen der Radbremsen kommen?", options: ["Durch oftmaliges Betätigen der Motorstaubremse", "Durch ständiges Bremsen mit der Betriebsbremsanlage beim Bergabfahren", "Durch Einsetzen der Verlangsameranlagen", "Durch sehr hohe Temperaturen des Straßenbelages"], correctIndex: 1 },
			{ id: 74, ziffer: "1b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Können Sie die Wirkung der Motorstaubremse abstufen?", options: ["Ja, über den Druckregler", "Ja, durch die Fußkraft", "Ja, über den Handbremshebel", "Ja, über die Wahl des Getriebeganges"], correctIndex: 3 },
			{ id: 91, ziffer: "1c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie fahren bergauf. Die Anzeige des Drehzahlmessers wandert aus dem grünen Bereich in den roten. Was müssen Sie tun?", options: ["Das Schaltgetriebe in den Leerlauf schalten und das Fahrzeug rollen lassen", "Auf den nächstniedrigeren Getriebegang zurückschalten", "Sofort anhalten und den Motor abstellen", "Auf einen höheren Getriebegang schalten"], correctIndex: 1 },
			{ id: 92, ziffer: "1c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wodurch lässt sich Kraftstoff einsparen?", options: ["Durch frühes Hochschalten", "Durch Laufenlassen des Motors vor geschlossenen Bahnschranken", "Durch Laufenlassen des Motors beim kurzfristigen Be- und Entladen des Fahrzeuges", "Durch häufiges Fahren im oberen Drehzahlbereich des Motors"], correctIndex: 0 },
			{ id: 93, ziffer: "1c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was führt zu einer Verminderung des Kraftstoffverbrauches?", options: ["Fahren mit zu geringem Luftdruck in den Reifen", "Fahren mit hoher Motordrehzahl", "Fahren im \"roten\" Bereich des Drehzahlmessers", "Fahren im \"grünen\" Bereich des Drehzahlmessers"], correctIndex: 3 },
			{ id: 94, ziffer: "1c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wo finden Sie Angaben über den optimalen Drehzahlbereich Ihres Fahrzeuges?", options: ["Am Ausdruck aus dem digitalen Kontrollgerät", "Auf einem Aufkleber an der rechten Fahrzeugseite", "In der Betriebsanleitung des Fahrzeuges", "In der Zulassungsbescheinigung des Fahrzeuges"], correctIndex: 2 },
			{ id: 95, ziffer: "1c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wozu dient der grüne Bereich des Drehzahlmessers des Motors?", options: ["Er zeigt den Drehzahlbereich des Motors mit dem geringsten spezifischen Kraftstoffverbrauch unter Volllast und den Drehzahlbereich des Motors mit großem Drehmoment an", "Er zeigt den Drehzahlbereich des Motors mit dem niedrigsten Drehmoment an", "Er zeigt den Drehzahlbereich des Motors mit dem höchsten Kraftstoffverbrauch an", "Er zeigt den Drehzahlbereich des Motors mit dem höchsten Verschleiß an"], correctIndex: 0 },
			{ id: 96, ziffer: "1c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie fahren im Ortsgebiet hinter anderen Fahrzeugen. Wie groß sollte ein angemessener Sicherheitsabstand mindestens sein?", options: ["2 Sekunden", "1 Sekunde", "50 m", "Eine Fahrzeuglänge"], correctIndex: 0 },
			{ id: 97, ziffer: "1c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie fahren mit einem 8 m langen Fahrzeug im Freiland. Vor Ihnen fährt ein Sattelkraftfahrzeug. Welchen Mindestabstand müssen Sie einhalten, wenn Sie nicht überholen wollen oder dürfen?", options: ["Höchstens den doppelten Anhalteweg", "Den erforderlichen Sicherheitsabstand, jedoch höchstens 20 m", "Den erforderlichen Sicherheitsabstand, jedoch mindestens 50 m", "Den erforderlichen Sicherheitsabstand, jedoch höchstens eine Fahrzeuglänge"], correctIndex: 2 },
			{ id: 121, ziffer: "1d", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welchen Sicherheitsabstand haben Sie als Lenker eines 8 m langen Fahrzeuges auf Freilandstraßen einzuhalten, wenn Sie hinter einem Fahrzeug mit größeren Längsabmessungen (z.B. Lkw oder Omnibus) fahren?", options: ["25 m", "200 m", "1 Sekunde - Abstand", "50 m"], correctIndex: 3 },
			{ id: 122, ziffer: "1d", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie fahren mit einem Nutzfahrzeug bei Schneefall auf einer Autobahn. Wie sollten Sie sich verhalten?", options: ["Ich achte auf einen ausreichenden Sicherheitsabstand zu den vor mir fahrenden Fahrzeugen und achte im Verkehrsfunk auf Meldungen über den Straßenzustand auf diesem Autobahnteilstück", "Ich wechsle auf den linken Fahrstreifen und überhole alle Fahrzeuge, die vor mir langsam fahren", "Ich muss sofort am Pannenstreifen anhalten und Schneeketten auf den Antriebsrädern montieren", "Ich muss sofort am Pannenstreifen anhalten und Schneeketten auf den Vorderrädern montieren"], correctIndex: 0 },
			{ id: 123, ziffer: "1d", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie lenken in einem Gegenverkehrsbereich einer Autobahn ein Nutzfahrzeug. Sie bemerken, dass der rechte vordere Reifen defekt geworden ist. Wie sollten Sie sich verhalten?", options: ["Ich schalte die Alarmblinkanlage ein, bremse ab und fahre in die nächste Pannenbucht", "Ich halte auf dem ersten Fahrstreifen der Autobahn an", "Ich fahre solang weiter, bis die Autobahnbaustelle endet. Danach halte ich am Pannenstreifen an", "Ich fahre solang weiter, bis die nächste Autobahnausfahrt kommt. Dort fahre ich von der Autobahn ab und wechsle dann den Reifen"], correctIndex: 0 },
			{ id: 124, ziffer: "1d", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie befahren mit einem Nutzfahrzeug ein schneebedecktes Gefälle. Das Gefälle ist gestreut und hat eine Neigung von 15 %. Benötigt das Nutzfahrzeug Schneeketten?", options: ["Nein", "Ja, auf den Antriebsrädern und auf den gelenkten Vorderrädern", "Ja, auf allen Rädern", "Ja, aber nur auf den gelenkten Vorderrädern"], correctIndex: 1 },
			{ id: 125, ziffer: "1d", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie befahren mit einem Nutzfahrzeug ein schneebedecktes Gefälle. Das Gefälle ist gestreut und hat eine Neigung von 15 %. Mit welchen Gefahren müssen Sie rechnen, wenn Sie versuchen, das Gefälle ohne Schneeketten zu bewältigen?", options: ["Das Fahrzeug könnte ins Rutschen kommen und nicht mehr lenkbar werden", "Der Motor könnte überlastet werden", "Die Bremsen könnten überhitzen", "Das Schaltgetriebe könnte überlastet werden"], correctIndex: 0 },
			{ id: 126, ziffer: "1d", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Tätigkeiten können beim Lenken eines Fahrzeuges stark ablenken?", options: ["Das Rauchen von Zigaretten, Essen von Speisen, Trinken", "Die Bedienung eines Abstands-Tempomaten", "Das Einschalten der Scheibenwischer", "Das auf- oder abblenden des Fernlichts"], correctIndex: 0 },
			{ id: 151, ziffer: "1e", klasse: "C1, C1E, C, CE", frage: "Sie lenken einen LKW der Fahrzeugklasse N3. In welchem Bereich ist die Gefahr, durch \"Tote Winkel\" im Sichtbereich andere Verkehrsteilnehmer zu übersehen, besonders groß?", options: ["Unmittelbar vor der Windschutzscheibe, hinter und seitlich rechts neben dem Fahrzeug", "Nur seitlich links neben dem Fahrzeug", "Nur seitlich rechts neben dem Fahrzeug", "Nur hinter dem Fahrzeug"], correctIndex: 0 },
			{ id: 152, ziffer: "1e", klasse: "C1, C1E, C, CE", frage: "Bei welchen Fahrmanövern müssen Sie beim Lenken eines LKW´s die von \"Toten Winkeln\" in den Sichtbereichen ausgehenden Gefahren besonders berücksichtigen?", options: ["Beim Einbiegen nach rechts, Rückwärtsfahren und Überholen", "Beim Einbiegen nach links", "Nur beim Einbiegen nach rechts", "Nur beim Überholen"], correctIndex: 0 },
			{ id: 171, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Wovon hängt die Größe des Reibbeiwertes zwischen Ladung und Ladefläche grundsätzlich ab?", options: ["Von der Gewichtskraft der Ladung", "Von der Fahrgeschwindigkeit", "Von der Rutschfestigkeit der Ladefläche und des Ladegutes", "Von der Größe der Ladefläche"], correctIndex: 2 },
			{ id: 172, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Welche Ladungen müssen am LKW gesichert werden?", options: ["Alle", "Nur solche, die verrutschen können", "Nur solche, die leicht sind", "Nur solche, die schwer sind"], correctIndex: 0 },
			{ id: 174, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Was sind Hilfsmittel für die kraftschlüssige Ladungssicherung?", options: ["Luftkissen", "Paletten", "Kantenschutzvorrichtungen", "Anschlagleisten"], correctIndex: 2 },
			{ id: 175, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Wie wirkt sich eine niedrige Reibungszahl zwischen Ladefläche und Ladegut auf die Ladungssicherung aus?", options: ["Je höher die Reibungszahl, desto höher die notwendige Sicherungskraft", "Je geringer die Reibungszahl, desto höher die notwendige Sicherungskraft", "Gar nicht. Die notwendige Sicherungskraft hängt nur vom Gewicht der Ladung ab", "Gar nicht. Die notwendige Sicherungskraft hängt nur vom der Größe der Ladefläche ab"], correctIndex: 1 },
			{ id: 176, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Womit ist eine über einen Meter über das Fahrzeug hinausragende Ladung zu kennzeichnen?", options: ["Mit einem roten Tuch", "Mit einer weißen Tafel (25 cm x 40 cm) mit rotem Rand", "Mit einer rot-weiß gestreiften Tafel (25 cm x 25 cm)", "Mit einer gelb-roten Drehleuchte"], correctIndex: 1 },
			{ id: 177, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Wie groß ist der Beschleunigungsbeiwert, der bei der Ladungssicherung im Straßenverkehr nach vorne mindestens zu berücksichtigen ist?", options: ["0,25", "1,00", "0,50", "0,80"], correctIndex: 3 },
			{ id: 178, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Wie groß ist der Beschleunigungsbeiwert, der bei der Ladungssicherung im Straßenverkehr nach hinten mindestens zu berücksichtigen ist?", options: ["0,50", "1,00", "0,25", "0,80"], correctIndex: 0 },
			{ id: 179, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Wie groß ist der Beschleunigungsbeiwert, der bei der Ladungssicherung im Straßenverkehr zur Seite mindestens zu berücksichtigen ist?", options: ["0,80", "1,00", "0,25", "0,50"], correctIndex: 3 },
			{ id: 180, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Welche der Angaben am Etikett eines Zurrgurtes sind für das Niederzurren von Bedeutung?", options: ["Die Vorspannkraft, die im Gurt für das Niederzurren genutzt werden kann (STF)", "Die maximale Belastbarkeit des Zurrgurtes bei geradem Zug (LC)", "Die Länge (L)", "Das Erzeugerdatum"], correctIndex: 0 },
			{ id: 181, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Was ist \"Formschluss\" bei der Ladungssicherung?", options: ["Verladen der Last mit Freilassen von Zwischenräumen", "Bündiges, lückenloses Verladen des Ladeguts auf der Ladefläche oder z.B. Festsetzen der Ladung an Aufbauteilen durch Direktzurren", "Festsetzen der Ladung auf der Ladefläche durch Niederzurren", "Festsetzen der Ladung auf der Ladefläche durch Gewichtskraft"], correctIndex: 1 },
			{ id: 182, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Wie können Sie eine Ladung, die Staub entwickeln kann, ordnungsgemäß sichern?", options: ["Durch Befördern auf einer offenen Ladefläche", "Durch Befördern in einem geschlossenen Behälter oder in einem geschlossenen Aufbau", "Mit einem Gitternetz", "Durch anfeuchten mit Wasser"], correctIndex: 1 },
			{ id: 183, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Was ist \"Kraftschluss\" bei der Ladungssicherung?", options: ["Lückenloses Verladen der Last", "Festsetzen der Ladung an Aufbauteilen durch Direktzurren", "Festsetzen der Ladung auf der Ladefläche durch Niederzurren", "Verladen der Last mit Freilassen von Zwischenräumen"], correctIndex: 2 },			{ id: 184, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Was bedeutet die Angabe \"STF\" auf dem Herstellerschild eines Zurrgurtes?", options: ["Die Vorspannkraft, die im Gurt für das Niederzurren genutzt werden kann", "Die maximale Belastbarkeit des Zurrgurtes bei geradem Zug", "Die Handkraft des Anwenders", "Die maximale Belastbarkeit des Zurrgurtes bei einem Zurrwinkel von 45 Grad"], correctIndex: 0 },
			{ id: 185, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Was bedeutet die Angabe \"LC\" auf dem Herstellerschild eines Zurrgurtes?", options: ["Die Vorspannkraft, die im Gurt für das Niederzurren genutzt werden kann", "Die maximale Belastbarkeit des Zurrgurtes bei geradem Zug", "Die Handkraft des Anwenders", "Die maximale Belastbarkeit des Zurrgurtes bei einem Zurrwinkel von 45 Grad"], correctIndex: 1 },
			{ id: 186, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Bei den Angaben auf dem Kennzeichnungsanhänger einer Zurrkette ist keine Angabe der Spannkraft STF vorhanden. Was bedeutet das für Sie?", options: ["Die Zurrkette darf nur für das Niederzurren verwendet werden", "Die Zurrkette darf nicht für das Niederzurren verwendet werden", "Die Zurrkette darf für jede Art der Ladungssicherung verwendet werden", "Die Zurrkette darf nur für das Direktzurren verwendet werden"], correctIndex: 1 },
			{ id: 187, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Darf bei Rundholztransporten das Holz quer zur Fahrtrichtung geladen werden?", options: ["Ja, immer", "Grundsätzlich nein! Außer es erfolgt die Landungssicherung mit einem geeigneten, engmaschigen Netz", "Nur dann, wenn der Transport im Rahmen einer Wirtschaftsfuhre erfolgt", "Nur dann, wenn der Transport im Rahmen der Land- und Forstwirtschaft erfolgt"], correctIndex: 1 },
			{ id: 188, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Wie viel muss das Gewicht auf der bzw. den Antriebsachsen Ihres LKW´s betragen?", options: ["Mindestens 25 % des Eigengewichts", "Mindestens 25 % des höchsten zulässigen Gesamtgewichts", "Mindestens 25 % des tatsächlichen Gesamtgewichts", "Höchstens 25 % des höchsten zulässigen Gesamtgewichts"], correctIndex: 2 },
			{ id: 189, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Wo greift die Gewichtskraft an der Ladung an?", options: ["Im Schwerpunkt", "Gleichmäßig entlang ihrer Auflagefläche", "Am höchsten Punkt", "Am niedrigsten Punkt"], correctIndex: 0 },
			{ id: 190, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Wie kann Ladung kraftschlüssig gesichert werden?", options: ["Durch die Verwendung von Spannlatten", "Durch Diagonalzurren", "Durch Anstellen der Ladung an die Stirn- bzw. Seitenwand", "Durch Niederzurren"], correctIndex: 3 },
			{ id: 191, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Eine Ladung soll durch Niederzurren gesichert werden. Welche Angabe am Etikett des Zurrgurtes ist bei der Berechnung der Anzahl der erforderlichen Zurrgurte zu berücksichtigen?", options: ["Die maximale Vorspannkraft STF", "Die maximale Zurrkraft LC", "Die maximale Handkraft SHF", "Die maximale Dehnung des Gurtbandes"], correctIndex: 0 },
			{ id: 192, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Eine Ladung soll durch Direktzurren gesichert werden. Welche Angabe am Etikett des Zurrgurtes ist bei der Berechnung der Anzahl der erforderlichen Zurrgurte zu berücksichtigen?", options: ["Der Zurrwinkel \"Alpha\"", "Die maximale Vorspannkraft STF", "Die maximale Handkraft SHF", "Die maximale Zurrkraft LC"], correctIndex: 3 },
			{ id: 193, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Welchen Einfluss hat der Zurrwinkel \"Alpha\" auf die wirksame Vorspannkraft beim Niederzurren?", options: ["Je flacher der Zurrwinkel Alpha ist, um so kleiner ist die wirksame Vorspannkraft", "Je flacher der Zurrwinkel Alpha ist, um so größer ist die wirksame Vorspannkraft", "Der Zurrwinkel Alpha hat keinen Einfluss auf die wirksame Vorspannkraft", "Je flacher der Zurrwinkel Alpha ist, um so kleiner ist die wirksame maximale Handkraft SHF"], correctIndex: 0 },
			{ id: 194, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Sie transportieren Rundholz. Wie bzw. womit müssen Sie Ihre Ladung sichern?", options: ["Mit Staupolstern und Euro-Paletten", "In Fahrtrichtung mit Rungen und zur Seite mit rutschhemmenden Unterlagen", "Durch Diagonalzurren mit Zurrseilen und Spannlatten", "Durch Niederzurren mit Spanngurten, Zurrketten oder Zurrseilen (die Verwendung von Rungen ist ratsam)"], correctIndex: 3 },
			{ id: 195, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Was bedeutet die Angabe STF = 300 daN auf dem Etikett eines Zurrgurtes?", options: ["Die maximale Vorspannkraft der Ratsche beträgt 300 daN", "Die maximale Kraft im Gurtband beträgt 300 daN", "Der Ratschenhebel darf maximal mit 300 kg betätigt werden", "Dass nur Ladegüter bis zu einem Gewicht von 300 kg gesichert werden dürfen"], correctIndex: 0 },
			{ id: 197, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Mit welcher Buchstabenfolge wird die maximale Vorspannkraft der Ratsche auf dem Etikett eines Zurrgurtes gekennzeichnet?", options: ["FMAX", "LC", "SHF", "STF"], correctIndex: 3 },
			{ id: 198, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Sie wollen einen LKW mit einem höchsten zulässigen Gesamtgewicht von 10 t beladen. Dieser LKW hat Zurrpunkte, die nach EN 12640 zertifiziert sind. Welche höchste zulässige Belastung der Zurrpunkte ist dann garantiert?", options: ["Höchstens 500 daN", "1.000 daN", "Auf jeden Fall zumindest 2.000 daN", "Auf jeden Fall zumindest 3.500 daN"], correctIndex: 1 },
			{ id: 199, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Sie wollen einen LKW mit einem höchsten zulässigen Gesamtgewicht von 6 t beladen. Dieser LKW hat Zurrpunkte, die nach EN 12640 zertifiziert sind. Welche höchste zulässige Belastung der Zurrpunkte ist dann garantiert?", options: ["800 daN", "1.000 daN", "Auf jeden Fall zumindest 2.000 daN", "Auf jeden Fall zumindest 3.500 daN"], correctIndex: 0 },
			{ id: 200, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Welche Ladungen sind mit einer Plane abzudecken?", options: ["Schüttgut, wie z.B. Sand oder Erdreich, wenn es abgeweht werden kann", "Stückgut, das in Kofferaufbauten befördert wird", "Rundholz", "Betonteile"], correctIndex: 0 },
			{ id: 201, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Was bedeutet die Angabe \"SHF\" auf dem Herstellerschild eines Zurrgurtes?", options: ["Die Vorspannkraft, die im Gurt für das Niederzurren genutzt werden kann", "Die maximale Belastbarkeit des Zurrgurtes bei geradem Zug", "Die Handkraft des Anwenders", "Die maximale Belastbarkeit des Zurrgurtes bei einem Zurrwinkel von 45 Grad"], correctIndex: 2 },
			{ id: 202, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Sie wollen einen LKW mit einem höchsten zulässigen Gesamtgewicht von 18 t beladen. Dieser LKW hat Zurrpunkte, die nach EN 12640 zertifiziert sind. Welche höchste zulässige Belastung der Zurrpunkte ist dann garantiert?", options: ["800 daN", "1.000 daN", "Auf jeden Fall zumindest 2.000 daN", "Auf jeden Fall zumindest 3.500 daN"], correctIndex: 2 },
			{ id: 203, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Welche Kräfte können während der Fahrt auf die Ladung nach vorne wirken?", options: ["Die Beschleunigungskraft beim Bremsen und eine zusätzliche Gewichtskraft beim Bergabfahren", "Die Fliehkraft beim Kurvenfahren", "Die Beschleunigungskraft beim Beschleunigen", "Die Fliehkraft bei schnellen Ausweichmanövern"], correctIndex: 0 },
			{ id: 204, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Welche Kräfte können während der Fahrt auf die Ladung seitlich wirken?", options: ["Die Bremskraft beim Bremsen", "Eine zusätzliche Gewichtskraft beim Bergabfahren", "Die Beschleunigungskraft beim Beschleunigen", "Die Fliehkraft beim Kurvenfahren und schnellen Ausweichmanövern"], correctIndex: 3 },
			{ id: 205, ziffer: "1f", klasse: "C1, C1E, C, CE", frage: "Welche Kräfte können während der Fahrt auf die Ladung nach hinten wirken?", options: ["Die Bremskraft beim Bremsen", "Eine zusätzliche Kraft beim Bergauffahren und die Beschleunigungskraft beim Beschleunigen", "Die Fliehkraft beim Kurvenfahren", "Die Fliehkraft bei schnellen Ausweichmanövern"], correctIndex: 1 },
			{ id: 221, ziffer: "1g", klasse: "D1, D1E, D, DE", frage: "Sie lenken einen Omnibus im Linienverkehr. Was beachten Sie, wenn Sie im Ortsgebiet von einer Haltestelle abfahren wollen?", options: ["Ich überzeuge mich durch einen Blick in den Rückspiegel, dass ich ohne Gefährdung nachkommender Verkehrsteilnehmer abfahren kann", "Ich überzeuge mich durch einen Blick in den Rückspiegel, dass ich ohne jede Behinderung nachkommender Verkehrsteilnehmer abfahren kann", "Ich darf erst abfahren, wenn alle Fahrgäste sitzen", "Ich darf erst abfahren, wenn im Rückspiegel keine Fahrzeuge zu sehen sind"], correctIndex: 0 },
			{ id: 222, ziffer: "1g", klasse: "D1, D1E, D, DE", frage: "Sie lenken einen Omnibus im Linienverkehr und wollen im Ortsgebiet von einer Haltstelle abfahren. Dabei dürfen Sie nachkommende Verkehrsteilnehmer nicht gefährden. Wann liegt eine Gefährdung Nachkommender vor?", options: ["Wenn Nachkommende nicht mehr gefahrlos ausweichen oder anhalten können", "Wenn Nachkommende zum Anhalten gezwungen werden", "Wenn Nachkommende zum Abbremsen gezwungen werden", "Wenn Nachkommende zum Blinken gezwungen werden"], correctIndex: 0 },
			{ id: 223, ziffer: "1g", klasse: "D1, D1E, D, DE", frage: "Was haben Sie zu beachten, wenn Sie an der Haltestelle Kinder aus Ihrem Schulbus aussteigen lassen?", options: ["Ich muss die Alarmblinkanlage und zusätzliche Warnleuchten, welche in der Heckscheibe oder am Dach des Busses montiert sind, einschalten", "Ich muss Warnzeichen mit der Hupe abgeben", "Ich muss den rechten Blinker einschalten", "Ich muss den linken Blinker einschalten"], correctIndex: 0 },
			{ id: 224, ziffer: "1g", klasse: "D1, D1E, D, DE", frage: "Welche Vorteile bringt eine sorgfältige Routenplanung?", options: ["Es ergibt sich auf jeden Fall eine kürzere Fahrzeit", "Lenkpausen können vorab so geplant werden, dass sie zum optimalen Zeitpunkt an einem geeigneten Ort gehalten werden können. Auch können Stoßzeiten und stauanfällige Straßen vermieden werden", "Es ergibt sich auf jeden Fall eine längere Fahrzeit", "Keine besonderen"], correctIndex: 1 },
			{ id: 225, ziffer: "1g", klasse: "D1, D1E, D, DE", frage: "Welchen Sicherheitsabstand haben Sie als Lenker eines Omnibusses auf Freilandstraßen mindestens einzuhalten, wenn Sie hinter einem Fahrzeug mit größeren Längsabmessungen (z.B. LKW oder Omnibus) fahren?", options: ["50 m", "200 m", "1 Sekunde - Abstand", "25 m"], correctIndex: 0 },
			{ id: 226, ziffer: "1g", klasse: "D1, D1E, D, DE", frage: "Wie viele Personen dürfen Sie in einem Omnibus befördern, wenn Sie im Gelegenheitsverkehr fahren?", options: ["In jedem Fall höchstens 62 Personen", "So viel wie Sitzplätze in der Zulassungsbescheinigung eingetragen sind", "In jedem Fall höchstens 48 Personen", "So viel wie Sitze mit Sicherheitsgurt im Fahrgastraum vorhanden sind"], correctIndex: 1 },
			{ id: 227, ziffer: "1g", klasse: "D1, D1E, D, DE", frage: "Ihr Omnibus ist mit Stehplätzen ausgerüstet. Dürfen dort Fahrgäste befördert werden?", options: ["Ja, wenn im Linienverkehr gefahren wird", "Ja, aber nur dann, wenn alle Sitzplätze besetzt sind", "Nein, nie", "Ja, aber nur dann, wenn das Fahrtziel nicht weiter als 25 km vom Ausgangspunkt der Fahrt entfernt ist (Kurzstreckenfahrt)"], correctIndex: 0 },
			{ id: 228, ziffer: "1g", klasse: "D1, D1E, D, DE", frage: "Sie lenken einen Omnibus im Gelegenheitsverkehr. Was müssen Sie beachten, wenn Sie Kinder oder Jugendliche im Alter zwischen 3 und 14 Jahren befördern?", options: ["Die Kinder oder Jugendlichen dürfen nur in einem ihrem Alter entsprechenden Kindersitz befördert werden", "Die Kinder oder Jugendlichen dürfen nur in einem ihrem Körpergewicht entsprechenden Kindersitz befördert werden", "Die Kinder oder Jugendlichen müssen die Sicherheitsgurte verwenden, falls solche vorhanden sind", "Die Kinder oder Jugendlichen müssen die Sicherheitsgurte nur dann verwenden, wenn sie in der ersten Sitzreihe befördert werden"], correctIndex: 2 },
			{ id: 229, ziffer: "1g", klasse: "D1, D1E, D, DE", frage: "Sie wollen mit Ihrem Omnibus im Rahmen einer Ausflugsfahrt nach einer zweistündigen Mittagspause weiterfahren. Was haben Sie vor der Abfahrt zu tun?", options: ["Ich muss eine Bremsprobe durchführen", "Ich muss am digitalen Kontrollgerät auf jeden Fall einen Nachtrag der Tätigkeiten durchführen", "Ich muss am analogen Kontrollgerät auf jeden Fall einen Nachtrag der Tätigkeiten durchführen, wenn die Tachoscheibe während der Fahrtpause im Kontrollgerät war", "Ich muss überprüfen, ob noch alle Verbandpäckchen vorhanden sind"], correctIndex: 0 },
			{ id: 230, ziffer: "1g", klasse: "D1, D1E, D, DE", frage: "Sie wollen mit Ihrem Omnibus im Rahmen einer Ausflugsfahrt nach einer zweistündigen Mittagspause weiterfahren. Wie führen Sie die vorgeschriebene Bremsprobe durch?", options: ["Ich achte vor der Abfahrt am Manometer der Betriebsbremsanlage darauf, ob während der Fahrtpause ein sichtbarer Druckabfall eingetreten ist und mache bei der Abfahrt eine gefühlvolle Betriebsbremsung", "Ich beschleunige auf etwa 50 km/h und mache eine Vollbremsung. Der Omnibus muss innerhalb von 10 m zum Stillstand kommen", "Ich beschleunige auf etwa 20 km/h und mache eine Vollbremsung. Der Omnibus muss innerhalb von 3 m zum Stillstand kommen", "Ich beschleunige auf etwa 10 km/h und mache eine Vollbremsung. Der Omnibus muss innerhalb von 5 m zum Stillstand kommen"], correctIndex: 0 },
			{ id: 231, ziffer: "1g", klasse: "D1, D1E, D, DE", frage: "Sie sollen mit Ihrem Omnibus Angehörige eines Fußballvereines zu einem Fußballspiel befördern. Beim Einsteigen der Fahrgäste bemerken Sie, dass einzelne Fahrgäste pyrotechnische Gegenstände mit sich führen. Wie sollten Sie sich verhalten?", options: ["Ich fordere diese Fahrgäste höflich auf, diese Gegenstände gesichert im Gepäckraum des Omnibusses unterzubringen", "Ich fordere diese Fahrgäste höflich auf, diese Gegenstände in den Ablagen über den Sitzen des Omnibusses unterzubringen", "Ich verlange von diesen Fahrgästen, sich mit diesen Gegenständen sofort aus dem Omnibus zu entfernen", "Ich ersuche diese Fahrgäste höflich, sich mit diesen Gegenständen sofort aus dem Omnibus zu entfernen"], correctIndex: 0 },
			{ id: 232, ziffer: "1g", klasse: "D1, D1E, D, DE", frage: "Ein Fahrgast möchte bei der Fahrt im Omnibus unbedingt seinen Hund ohne Maulkorb lassen. Andere Fahrgäste beschweren sich darüber. Wie sollten Sie sich verhalten?", options: ["Ich weise den Fahrgast höflich darauf hin, dass Hunde ohne Maulkorb (ausgenommen Assistenzhunde) von der Fahrt ausgeschlossen werden können, und zeige dem Fahrgast den entsprechenden Passus in den Betriebs- und Beförderungsbedingungen der Betriebsordnung", "Ich weise den Fahrgast darauf hin, dass er den Hund ohne Maulkorb nur mitführen darf, wenn er den Hund in der letzten Sitzreihe anleint", "Ich weise den Fahrgast höflich darauf hin, dass er den Hund ohne Maulkorb nur mitführen darf, wenn er mit dem Hund alleine in einer Sitzreihe sitzt", "Ich weise den Fahrgast höflich darauf hin, dass er den Hund ohne Maulkorb nur mitführen darf, wenn der Hund am Boden auf einer eigenen Decke liegt"], correctIndex: 0 },
			{ id: 233, ziffer: "1g", klasse: "D1, D1E, D, DE", frage: "Ein Fahrgast möchte bei der Fahrt im Omnibus unbedingt seinen Hund ohne Maulkorb lassen. Wie können Sie dem Fahrgast den entsprechenden Passus in den Betriebs- und Beförderungsbedingungen der Betriebsordnung zeigen, der das verbietet?", options: ["Ich bin verpflichtet, einen Abdruck dieser Verordnung mitzuführen und auf Verlangen Fahrgästen vorzulegen", "Es genügt, wenn der Fahrgast die Verordnung am Firmensitz einsehen kann", "Die Verordnung muss bei jeder öffentlichen Haltestelle per WLAN heruntergeladen werden können", "Die Verordnung muss bei jeder öffentlichen Haltestelle als Ausdruck angebracht sein"], correctIndex: 0 },
			{ id: 234, ziffer: "1g", klasse: "D1, D1E, D, DE", frage: "Welche Einrichtungen eines Omnibusses müssen besonders sauber gehalten werden, um die Übertragung von Krankheitserregern zwischen den Fahrgästen möglichst zu verhindern?", options: ["Die Griffstangen bei den Ein- und Ausstiegen sowie die Bord-Toilette", "Die Abdeckungen des Gepäckraumes", "Das Lenkrad", "Der Bodenbelag im Bereich der Ein- und Ausstiege"], correctIndex: 0 },
			{ id: 251, ziffer: "1h", klasse: "D1, D1E, D, DE", frage: "Warum muss die Ladung in einem Omnibus gesichert werden?", options: ["Damit Fahrer, Beifahrer, Fahrgäste und andere Verkehrsteilnehmer nicht gefährdet werden und die Ladung und der Omnibus nicht beschädigt werden", "Damit die Ladung bei einem Unfall auf jeden Fall im Omnibus bleibt", "Damit Fahrgäste beim Aussteigen ihr Gepäck möglichst rasch finden können", "Damit Lenkerinnen und Lenker beim Aussteigen das Gepäck der jeweiligen Fahrgäste möglichst rasch finden können"], correctIndex: 0 },
			{ id: 252, ziffer: "1h", klasse: "D1, D1E, D, DE", frage: "In welchem Fall muss die Ladung durch die Ladungssicherung sicher im Gepäckraum bzw. Gepäckfächern Ihres Omnibusses gehalten werden?", options: ["Bei scharfen Ausweichmanövern sowie Notbremsungen", "Beim Abkommen von der Fahrbahn", "Bei Auffahrunfällen", "Beim Entnehmen durch Fahrgäste am Ende einer Fahrt"], correctIndex: 0 },
			{ id: 253, ziffer: "1h", klasse: "D1, D1E, D, DE", frage: "Wie groß ist der Beschleunigungsbeiwert, der bei der Ladungssicherung im Straßenverkehr nach vorne mindestens zu berücksichtigen ist?", options: ["0,80", "0,50", "1,00", "0,25"], correctIndex: 0 },
			{ id: 254, ziffer: "1h", klasse: "D1, D1E, D, DE", frage: "Wie groß ist der Beschleunigungsbeiwert, der bei der Ladungssicherung im Straßenverkehr zur Seite mindestens zu berücksichtigen ist?", options: ["0,80", "0,50", "1,00", "0,25"], correctIndex: 1 },
			{ id: 255, ziffer: "1h", klasse: "D1, D1E, D, DE", frage: "Wie groß ist der Beschleunigungsbeiwert, der bei der Ladungssicherung im Straßenverkehr nach hinten mindestens zu berücksichtigen ist?", options: ["0,80", "0,50", "1,00", "0,25"], correctIndex: 1 },
			{ id: 256, ziffer: "1h", klasse: "D1, D1E, D, DE", frage: "Welche Kräfte können während der Fahrt auf die Ladung nach vorne wirken?", options: ["Eine zusätzliche Gewichtskraft beim Bergabfahren und die Beschleunigungskraft beim Bremsen", "Die Fliehkraft beim Kurvenfahren", "Die Beschleunigungskraft beim Beschleunigen", "Die Fliehkraft bei schnellen Ausweichmanövern"], correctIndex: 0 },
			{ id: 257, ziffer: "1h", klasse: "D1, D1E, D, DE", frage: "Welche Kräfte können während der Fahrt auf die Ladung seitlich wirken?", options: ["Die Bremskraft beim Bremsen", "Eine zusätzliche Gewichtskraft beim Bergabfahren", "Die Beschleunigungskraft beim Beschleunigen", "Die Fliehkraft beim Kurvenfahren und schnellen Ausweichmanövern"], correctIndex: 3 },
			{ id: 258, ziffer: "1h", klasse: "D1, D1E, D, DE", frage: "Welche Kräfte können während der Fahrt auf die Ladung nach hinten wirken?", options: ["Die Bremskraft beim Bremsen", "Eine zusätzliche Kraft beim Bergauffahren und die Beschleunigungskraft beim Beschleunigen", "Die Fliehkraft beim Kurvenfahren", "Die Fliehkraft bei schnellen Ausweichmanövern"], correctIndex: 1 },
			{ id: 260, ziffer: "1h", klasse: "D1, D1E, D, DE", frage: "Sie sollen die Koffer einer Reisegruppe in Ihrem Omnibus verstauen. Was beachten Sie dabei?", options: ["Ich verstaue die Koffer möglichst lückenlos im Gepäckraum des Omnibusses und achte darauf, dass die Koffer möglichst formschlüssig zur Stirnwand, den Teilungsstreben und den Seitenwänden des Gepäckraumes verladen sind", "Wenn der Gepäckraum voll geladen ist, ersuche ich die Fahrgäste, ihre Koffer auf den Schoß zu nehmen", "Wenn der Gepäckraum voll geladen ist, ersuche ich die Fahrgäste, die Koffer im Mittelgang des Fahrgastraumes aufzustellen", "Wenn der Gepäckraum voll geladen ist, ersuche ich die Fahrgäste, ihre Koffer auf freien Sitzen möglichst hoch gestapelt unterzubringen"], correctIndex: 0 },
			{ id: 261, ziffer: "1h", klasse: "D1, D1E, D, DE", frage: "Sie bemerken vor der Abfahrt, dass Fahrgäste im Mittelgang Ihres Omnibusses Getränkekisten aufgestellt haben, um während der Fahrt Getränke zu konsumieren. Wie sollten Sie sich verhalten?", options: ["Ich sorge dafür, dass die Getränkekisten im Mittelgang mit Zurrgurten gesichert werden", "Ich sorge dafür, dass die Getränkekisten im Mittelgang mit rutschhemmenden Unterlagen gesichert werden", "Ich sorge dafür, dass die Getränkekisten im Gepäckraum des Omnibusses gesichert verladen werden. Für den Transport der Getränkegebinde biete ich die Benutzung der Kühlboxen im Fahrgastraum an", "Ich bestimme einen Fahrgast, der jeweils eine Kiste während der Fahrt festhalten muss"], correctIndex: 2 },
			{ id: 262, ziffer: "1h", klasse: "D1, D1E, D, DE", frage: "Warum dürfen während der Fahrt im Mittelgang Ihres Omnibusses keine Gegenstände wie Getränkekisten, Koffer und dergleichen stehen?", options: ["Weil der Mittelgang im Gefahrenfall als Fluchtweg dient", "Weil eine ausreichende Ladungssicherung im Mittelgang unmöglich herzustellen ist", "Weil der Boden im Mittelgang keine ausreichende Festigkeit aufweist", "Weil der Boden im Mittelgang eine zu hohe Gleitzahl aufweist"], correctIndex: 0 },
			{ id: 263, ziffer: "1h", klasse: "D1, D1E, D, DE", frage: "Die Gepäckablagen über den Sitzen im Fahrgastraum Ihres Omnibusses weisen Verschlussklappen auf. Was beachten Sie dabei?", options: ["Ich überzeuge mich vor der Abfahrt, dass alle Verschlussklappen geschlossen und verriegelt sind", "Die Verschlussklappen können während der Fahrt geöffnet bleiben, wenn die Fahrgäste das wünschen", "Einzelne Verschlussklappen können während der Fahrt geöffnet bleiben, wenn das in der Gepäckablage verstaute Handgepäck zu viel Platz benötigt", "Die Verschlussklappen können während der Fahrt geöffnet bleiben, wenn die Fahrt nicht nur innerhalb eines Ortsgebietes durchgeführt wird"], correctIndex: 0 },
			{ id: 281, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Daten werden auf der Fahrerkarte gespeichert?", options: ["Daten zu den gefahrenen Fahrzeugen sowie Fahreraktivitäten", "Daten zum Kraftstoffverbrauch", "Daten zur Motordrehzahl", "Daten zur Ausnutzung der Motorleistung"], correctIndex: 0 },
			{ id: 282, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "In welchen Fällen müssen Sie einen Ausdruck aus dem digitalen Kontrollgerät anfertigen?", options: ["Immer nach einem Verkehrsunfall", "Auf Verlangen eines Kontrollorgans sowie bei einem Defekt der Fahrerkarte", "Immer nachdem eine Fahrt mit dem \"Out\"-Modus erfolgte", "Immer nachdem eine Fahrt mit einem Fährschiff erfolgte"], correctIndex: 1 },
			{ id: 283, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "In welchem Zeitraum müssen die Daten von der Fahrerkarte ausgelesen und im Unternehmen gespeichert werden?", options: ["Auf jeden Fall am Ende der täglichen Ruhezeit", "Spätestens nach 28 Tagen, an denen Tätigkeiten aufgezeichnet wurden", "Spätestens nach 90 Tagen, an denen Tätigkeiten aufgezeichnet wurden", "Auf jeden Fall spätestens nach 56 Kalendertagen"], correctIndex: 3 },
			{ id: 284, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "In welcher Weise können Sie nach einem Verkehrsunfall die im digitalen Kontrollgerät gesicherten Daten zur Beweissicherung heranziehen?", options: ["Durch Eingabe des Unfallzeitpunkts in das Menü des Kontrollgerätes", "Durch Download von der Fahrerkarte innerhalb der nächsten 24 Lenkstunden", "Durch einen handschriftlichen Vermerk auf einem Ausdruck", "Durch Download aus dem Massenspeicher innerhalb der nächsten 24 Lenkstunden"], correctIndex: 3 },
			{ id: 285, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wie lang werden die detaillierten Geschwindigkeitsdaten im Massenspeicher des Kontrollgerätes gespeichert?", options: ["24 Lenkstunden", "28 Tage", "90 Tage", "1 Jahr"], correctIndex: 0 },
			{ id: 286, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie nehmen ein Fahrzeug mit digitalem Kontrollgerät in Betrieb. Dabei wird die Uhrzeit mit dem Zusatz \"UTC\" angezeigt. Was bedeutet \"UTC\"?", options: ["Es wird in einer ortsunabhängigen Zeitzone (\"Weltzeit\") aufgezeichnet", "Das Kontrollgerät läuft in einem unkoordinierten Modus", "Das Kontrollgerät muss sofort neu kalibriert werden", "Die Daten müssen sofort aus dem Datenspeicher des Kontrollgerätes ausgelesen werden"], correctIndex: 0 },
			{ id: 287, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Ortszeit in Österreich entspricht an einem Dezembertag 9:30 Uhr UTC-Zeit?", options: ["10:00 Uhr", "11:30 Uhr", "8:30 Uhr", "10:30 Uhr"], correctIndex: 3 },
			{ id: 288, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wie lang ist eine Fahrerkarte ab dem Ausstellungszeitpunkt gültig?", options: ["5 Jahre", "1 Jahr", "10 Jahre", "15 Jahre"], correctIndex: 0 },
			{ id: 289, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie wollen ein Fahrzeug mit digitalem Kontrollgerät lenken. Wie sollten Sie sich vor Fahrtbeginn verhalten, wenn Ihre Fahrerkarte defekt geworden oder verloren gegangen ist?", options: ["Ich fertige einen Ausdruck aus dem Kontrollgerät an. Dieser Ausdruck ist mit meinem Namen und der Nummer des Führerscheins oder Nummer der Fahrerkarte sowie meiner Unterschrift zu versehen. Die jeweils anfallenden Tätigkeiten, die keine Lenktätigkeiten sind, vermerke ich", "Ich führe handschriftliche Aufzeichnungen über die Dauer der Lenkzeiten", "Ich fahre als Ersatz mit der gesteckten Unternehmenskarte", "Ich fahre als Ersatz mit der gesteckten Fahrerkarte eines Kollegen, der sich gerade im Urlaub befindet"], correctIndex: 0 },
			{ id: 290, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie wollen ein Fahrzeug mit digitalem Kontrollgerät lenken. Ihre Fahrerkarte ist defekt geworden oder verloren gegangen. Wie lang dürfen Sie ohne Karte fahren?", options: ["Höchstens 15 Tage", "Höchstens 28 Tage", "Höchstens 7 Tage", "Gar nicht"], correctIndex: 0 },
			{ id: 291, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie sind im \"Mehrfahrerbetrieb\" als Beifahrer im Fahrzeug unterwegs. In welchem Kartenschacht des digitalen Kontrollgerätes muss sich Ihre Fahrerkarte befinden?", options: ["In keinem, da keine Fahrerkarte gesteckt werden muss, wenn ich nicht selbst lenke", "Im Kartenschacht 1", "Im Kartenschacht 1 oder 2", "Im Kartenschacht 2"], correctIndex: 3 },
			{ id: 292, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was bedeutet der Begriff \"Tägliche Ruhezeit\"?", options: ["Das ist der tägliche Zeitraum, in dem eine Lenkerin oder ein Lenker frei über ihre bzw. seine Zeit verfügen kann und der eine „regelmäßige tägliche Ruhezeit“ oder eine „reduzierte tägliche Ruhezeit“ umfasst", "Das ist die Pause, die nach 6 Stunden ununterbrochener Arbeitszeit zu halten ist", "Das ist die Lenkpause, die nach 4,5 Stunden Lenkzeit gesetzlich zu halten ist", "Das ist die Pause, die nach 12 Stunden ununterbrochener Arbeitszeit zu halten ist"], correctIndex: 0 },
			{ id: 293, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Die österreichische Ortszeit beträgt 11:00 Uhr. Welche UTC-Zeit entspricht an einem Sommertag der österreichischen Ortszeit?", options: ["13:00 Uhr", "10:00 Uhr", "12:00 Uhr", "9:00 Uhr"], correctIndex: 3 },
			{ id: 294, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie lenken ein Fahrzeug mit digitalem Kontrollgerät. Welche Einstellungen müssen Sie vornehmen, wenn Sie einen Grenzübertritt durchführen?", options: ["Ich muss das Ländersymbol umstellen, wenn das Kontrollgerät diese Umstellung nicht automatisch vornimmt", "Ich muss die UTC-Zeit umstellen", "Ich muss das Tätigkeitssymbol umstellen", "Ich muss das Kontrollgerät in den \"Out\"-Modus umstellen"], correctIndex: 0 },
			{ id: 295, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Tätigkeiten fallen unter den Begriff \"Bereitschaftszeit\"?", options: ["Wenn ich auf Anweisungen für die Aufnahme oder Wiederaufnahme der Weiterfahrt oder zur Ausführung anderer Arbeiten warte. Dabei darf ich den Arbeitsplatz verlassen. Diese Zeiten und ihre voraussichtliche Dauer müssen mir vorab bekannt sein", "Nur solche, bei denen ich das Fahrzeug belade", "Wenn ich am Fahrzeug einen Radwechsel vornehme", "Nur solche, bei denen ich das Fahrzeug entlade"], correctIndex: 0 },
			{ id: 296, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was müssen Sie tun, wenn Sie nach einer täglichen Ruhezeit Ihre Fahrerkarte wieder in das digitale Kontrollgerät stecken?", options: ["Ich trage die Aktivitäten seit der letzten Entnahme der Karte im Gerät nach", "Ich stelle die Ortszeit auf die aktuelle UTC-Zeit um", "Ich drucke einen Ereignisausdruck aus und trage meine Ruhezeit handschriftlich darauf ein", "Ich muss das Ländersymbol überprüfen"], correctIndex: 0 },
			{ id: 297, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Tätigkeiten fallen unter den Begriff \"Andere Arbeiten\" (Beispiele)?", options: ["Wenn ich für das Lenken eines Fahrzeuges zur Verfügung stehe, dieses aber nicht selbst lenke und auch sonst keine Arbeiten verrichte", "Wenn ich bei Mehrfahrerbetrieb im fahrenden Fahrzeug als 2. Person mitfahre", "Wenn ich am Fahrzeug eine Abfahrtskontrolle durchführe oder es be- oder entlade oder beim Be- oder Entladen Wartezeiten habe, deren Ende nicht vorab bekannt ist oder Frachtpapiere ausfülle", "Wenn ich das Fahrzeug als Lenkerin oder Lenker zu einem anderen Betriebsstandort überstelle"], correctIndex: 2 },
			{ id: 298, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie machen im Mehrfahrerbetrieb einen Fahrerwechsel. Wie müssen Sie sich in Bezug auf das digitale Kontrollgerät verhalten?", options: ["Ich wechsle nur den Sitzplatz, die Fahrerkarten werden nicht umgesteckt", "Die Fahrerkarte des jeweiligen Lenkers muss im Kartenschacht 1 stecken, jene des Beifahrers im Kartenschacht 2", "Die Fahrerkarte des Beifahrers wird nicht gesteckt, sondern nur mitgeführt", "Die Fahrerkarte des jeweiligen Lenkers muss im Kartenschacht 2 stecken, jene des Beifahrers im Kartenschacht 1"], correctIndex: 1 },
			{ id: 299, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wie verhalten Sie sich im kombinierten Verkehr, wenn Sie Teile der Fahrt auf einer Fähre oder auf einem Zug verbringen?", options: ["Ich stelle das digitale Kontrollgerät auf die Menüeinstellung \"Zug-Fähre\"", "Ich entnehme meine Fahrerkarte und stelle meine Aktivität auf Lenkzeit", "Ich stecke meine Fahrerkarte in den Kartenschacht 2 und stelle die Aktivität auf Arbeitszeit", "Ich stelle das digitale Kontrollgerät auf die Menüeinstellung \"OUT\""], correctIndex: 0 },
			{ id: 300, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was bedeutet der Begriff \"Wochenlenkzeit\"?", options: ["Das ist die Gesamtlenkzeit innerhalb einer Woche. Die Woche ist der Zeitraum von Montag 00:00 Uhr bis Sonntag 24:00 Uhr", "Das ist die Gesamtlenkzeit in einem beliebigen Zeitraum von insgesamt 168 Stunden", "Das ist die gesamte Anwesenheitszeit im Fahrerhaus innerhalb einer Woche", "Das ist die gesamte Anwesenheitszeit in der Firma innerhalb einer Woche"], correctIndex: 0 },
			{ id: 301, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was müssen Sie am digitalen Kontrollgerät beachten, wenn Sie nach 4 Stunden und 30 Minuten Lenkzeit eine Pause einlegen?", options: ["Ich muss gleich nach dem Abstellen des Fahrzeuges meine Aktivität auf das Symbol \"Ruhezeit\" umstellen", "Ich muss gleich nach dem Abstellen des Fahrzeuges meine Aktivität auf das Symbol \"Andere Arbeitszeit\" umstellen", "Ich muss gleich nach dem Abstellen des Fahrzeuges meine Aktivität auf das Symbol \"Bereitschaftszeit\" umstellen", "Ich muss gleich nach dem Abstellen des Fahrzeuges meine Fahrerkarte aus dem Gerät entnehmen"], correctIndex: 0 },
			{ id: 302, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie lenken ein Fahrzeug auf einer Autobahn. Sie planen, in den nächsten 15 Minuten einen Rastplatz anzufahren, weil eine Lenkpause fällig ist. Plötzlich müssen Sie wegen eines Verkehrsunfalles anhalten. Wie gehen Sie weiter vor?", options: ["Ich lenke das Fahrzeug auf den Pannenstreifen, sichere ihn ab und halte die Lenkpause dort. Andernfalls würde ich die zulässigen Lenkzeiten überschreiten", "Ich warte ab, bis die Weiterfahrt möglich ist, und steuere danach für das Halten der Lenkpause den nächstgelegenen Rastplatz an. Dort muss ich sofort einen manuellen Ausdruck aus dem Kontrollgerät anfertigen und den Grund dieser Lenkzeitüberschreitung dokumentieren", "Ich nutze die nächstmögliche Betriebsabfahrt der Straßenmeisterei und halte die Lenkpause dort. Andernfalls würde ich die zulässigen Lenkzeiten überschreiten", "Ich lenke in die Rettungsgasse, sichere das Fahrzeug ab und halte die Lenkpause dort. Andernfalls würde ich die zulässigen Lenkzeiten überschreiten"], correctIndex: 1 },
			{ id: 303, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie wollen ein Fahrzeug mit digitalem Kontrollgerät lenken. Ihre Fahrerkarte ist defekt geworden oder verloren gegangen. Wie lang dürfen Sie ohne Karte fahren?", options: ["Gar nicht", "Höchstens 28 Tage", "Höchstens 7 Tage", "Höchstens 15 Tage"], correctIndex: 3 },
			{ id: 304, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie benutzen mit Ihrem Fahrzeug ein Fährschiff oder die \"Rollende Landstraße\". Unter welchen Bedingungen gilt die dort verbrachte Zeit als tägliche Ruhezeit?", options: ["Wenn eine Schlafkabine oder eine Koje oder ein Liegewagen zur Verfügung steht", "Wenn der Waggon lärmarm zertifiziert ist", "Wenn das Fährschiff klimatisiert ist", "Wenn der Waggon klimatisiert ist"], correctIndex: 0 },
			{ id: 305, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "In welchem Staat muss ein EU-Bürger seine Fahrerkarte beantragen?", options: ["In jedem beliebigen EU-Mitgliedstaat", "In dem EU-Mitgliedstaat, in dem er seinen Wohnsitz hat", "In dem EU-Mitgliedstaat, in dem er geboren wurde", "In dem EU-Mitgliedstaat, in dem der Firmensitz liegt"], correctIndex: 1 },
			{ id: 306, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie arbeiten für verschiedene Arbeitgeber. Wie viele gültige Fahrerkarten dürfen Sie besitzen?", options: ["Für jeden Arbeitgeber eine eigene", "Höchstens fünf", "Höchstens eine", "Für jeden EU-Staat, in dem ich fahre, eine eigene"], correctIndex: 2 },
			{ id: 307, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wo ist in Österreich der Antrag für die Fahrerkarte zu stellen?", options: ["Bei der Landesregierung, die für meinen Wohnsitz zuständig ist", "Beim Dienstgeber", "Bei der Bezirksverwaltungsbehörde, die für meinen Wohnsitz zuständig ist", "Bei den Autofahrerclubs A R B Ö oder Ö A M T C"], correctIndex: 3 },
			{ id: 308, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "Sie lenken ein Fahrzeug 4,5 Stunden lang. Kann die notwendige Lenkpause von 45 Minuten auch geteilt werden?", options: ["Ja. Teil 1 muss mindestens 15 Minuten, Teil 2 mindestens 30 Minuten lang dauern", "Ja. Jede beliebige Aufteilung ist zulässig, solang nach 4,5 Stunden Lenkzeit 45 Minuten Lenkpause gehalten werden", "Nein", "Ja. Wenn Teil 1 mindestens 25 Minuten gedauert hat, genügen für Teil 2 20 Minuten"], correctIndex: 0 },
			{ id: 309, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Ihre Fahrerkarte ist durch Zeitablauf ungültig geworden. Wie lang danach müssen Sie diese Fahrerkarte noch mitführen?", options: ["Gar nicht. Sie kann sofort vernichtet werden", "Mindestens 56 Tage nach Ablauf der Gültigkeit", "Noch die laufende Woche und dann weitere 15 Kalendertage", "Noch die laufende Woche und dann weitere 7 Kalendertage"], correctIndex: 1 },
			{ id: 310, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Im Zuge einer Verkehrskontrolle wird aufgrund der Aufzeichnung am Schaublatt des analogen Kontrollgerätes festgestellt, dass Sie mit 95 km/h unterwegs waren. Kann das zu einer Bestrafung führen?", options: ["Nein, weil der Ort der Geschwindigkeitsüberschreitung nicht festgestellt werden kann", "Ja, auf jeden Fall", "Ja, wenn die Geschwindigkeitsüberschreitung weniger als 2 Stunden vor der Kontrolle erfolgt ist", "Ja, aber nur, wenn der Strafbehörde der genaue Ort der Geschwindigkeitsüberschreitung bekannt ist"], correctIndex: 2 },
			{ id: 311, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Nach welcher durchgehenden Lenkzeit müssen Sie die Fahrt spätestens unterbrechen?", options: ["Nach 9 Stunden", "Nach 4,5 Stunden", "Nach 2 Stunden", "Nach 3 Stunden"], correctIndex: 1 },
			{ id: 312, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Unter welchen Voraussetzungen dürfen Sie eine tägliche oder reduzierte wöchentliche Ruhezeit im Fahrzeug verbringen?", options: ["Wenn eine geeignete Schlafmöglichkeit (Schlafkabine) zur Verfügung steht und das Fahrzeug stillsteht", "Nur wenn das Fahrzeug mit Klimaanlage ausgestattet ist", "Wenn kein Hotelzimmer in einem Umkreis von 10 km gefunden werden kann", "Nur wenn das Fahrzeug mit Standheizung ausgestattet ist"], correctIndex: 0 },
			{ id: 313, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Ihr Fahrzeug hat ein analoges EG-Kontrollgerät. Darf das EG-Kontrollgerät während der Einsatzzeit des Fahrzeuges geöffnet werden?", options: ["Ja, während der Mittagspause", "Ja, bei jeder Lenkpause", "Ja, bei einem Fahrerwechsel, einer Kontrolle, einem Grenzübertritt oder einem Fahrzeugwechsel", "Nein, nie"], correctIndex: 2 },
			{ id: 314, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was bedeutet der Begriff \"Wöchentliche Ruhezeit\"?", options: ["Das ist der wöchentliche Zeitraum, in dem ein Fahrer frei über seine Zeit verfügen kann. Diese kann eine regelmäßige wöchentliche Ruhezeit oder eine reduzierte wöchentliche Ruhezeit umfassen", "Die Summe der in einer Kalenderwoche gehaltenen täglichen Ruhezeiten", "Eine immer am Sonntag zu haltende Ruhezeit", "Eine Ruhezeit, die immer in die Zeit des Wochenendfahrverbotes fällt"], correctIndex: 0 },
			{ id: 315, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wer ist für die korrekte Bedienung des digitalen Kontrollgerätes verantwortlich?", options: ["Der Fahrzeughersteller", "Der Empfänger der transportierten Fracht", "Der Auftraggeber der Fahrt", "Der Fahrer und der Arbeitgeber"], correctIndex: 3 },
			{ id: 316, ziffer: "2c", klasse: "D1, D1E, D, DE", frage: "Ihr Omnibus ist mit einem Kontrollgerät Smart Tacho 2 (GEn2 V2) ausgestattet. Sie führen damit eine Rundfahrt durch. Wie ist dann beim erstmaligen Einsteigen am Beginn bzw. beim Aussteigen der Fahrgäste am Ende der Rundfahrt vorzugehen?", options: ["Ich muss diesen Vorgang im Kontrollgerät durch Auswahl des entsprechenden Symbols (\"laden\" oder \"entladen\" oder \"laden/entladen\") erfassen", "Ich muss diesen Vorgang in einem eigenen Formblatt aufzeichnen", "Ich muss diesen Vorgang nur dann in einem eigenen Formblatt aufzeichnen, wenn er länger als 15 Minuten dauert", "Ich muss diesen Vorgang im Kontrollgerät durch Auswahl des entsprechenden Symbols \"Andere Arbeiten\" erfassen"], correctIndex: 0 },
			{ id: 317, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie lenken ein Fahrzeug mit digitalem Kontrollgerät. Am Display des Kontrollgerätes blinkt die Meldung \"Geschwindigkeit zu hoch\". Wie sollten Sie sich verhalten?", options: ["Ich suche sofort die nächste Werkstatt auf", "Ich fahre langsamer und quittiere die Meldung durch Drücken der Taste \"OK\" am Kontrollgerät", "Ich muss auf dem Tagesausdruck dieses Ereignis durch meine Unterschrift quittieren", "Ich muss die Firmenleitung innerhalb von 48 Stunden von dem Ereignis verständigen"], correctIndex: 1 },
			{ id: 318, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wie lang darf die Lenkzeit zwischen zwei Ruhezeiten höchstens dauern?", options: ["Im Normalfall insgesamt 9 Stunden, zweimal in der Kalenderwoche insgesamt 10 Stunden", "Dreimal in der Kalenderwoche insgesamt 11 Stunden", "Im Normalfall insgesamt 11 Stunden", "Im Normalfall insgesamt 14 Stunden"], correctIndex: 0 },
			{ id: 319, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wie oft darf die tägliche Lenkzeit während einer Woche auf 10 Stunden ausgedehnt werden?", options: ["1 mal", "2 mal", "3 mal", "4 mal"], correctIndex: 1 },
			{ id: 320, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie lenken ein Fahrzeug, das mit einem \"intelligenten\" digitalen Kontrollgerät ausgerüstet ist. Wie können Sie im Regelfall den Nachweis über die Einhaltung der wöchentlichen Ruhezeit erbringen?", options: ["Durch Nachtragen beim ersten Stecken der Fahrerkarte nach der Ruhezeit", "Durch das EU-Formblatt zur Bescheinigung lenkfreier Tage", "Durch schriftliche Aufzeichnungen in einem Tagebuch", "Durch eine formlose schriftliche Bestätigung der Geschäftsführung"], correctIndex: 0 },
			{ id: 321, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wie viele Stunden darf die wöchentliche Lenkzeit grundsätzlich höchstens dauern?", options: ["60 Stunden", "38 Stunden", "40 Stunden", "56 Stunden"], correctIndex: 3 },
			{ id: 322, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was bedeutet der Begriff \"Lenkpause\"?", options: ["Die Zeit, in der keine Lenk- oder andere Arbeitstätigkeit ausgeführt werden darf", "Die Arbeitszeit, die im Zeitraum eines Tages anfällt, ausgenommen die Lenktätigkeiten", "Die Zeit, in der keine Lenktätigkeit ausgeführt werden darf. Andere Tätigkeiten sind erlaubt", "Die Zeit, in der keine Aufzeichnungen am Schaublatt oder auf der Fahrerkarte erfolgen"], correctIndex: 0 },
			{ id: 323, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Nach wie vielen Stunden ununterbrochener Lenkzeit muss spätestens eine Lenkpause eingelegt werden?", options: ["3 Stunden", "4,5 Stunden", "5 Stunden", "5,5 Stunden"], correctIndex: 1 },
			{ id: 324, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "Sie lenken einen LKW ununterbrochen 4,5 Stunden lang. Wie lang muss Ihre Lenkpause dann mindestens dauern?", options: ["45 Minuten", "60 Minuten", "90 Minuten", "120 Minuten"], correctIndex: 0 },
			{ id: 325, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie dehnen die tägliche Lenkzeit auf 10 Stunden aus. Wie viele Lenkpausen müssen Sie dann halten?", options: ["Eine genügt", "Mindestens zwei", "Mindestens drei", "Mindestens vier"], correctIndex: 1 },
			{ id: 326, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Unter welcher Voraussetzung dürfen Sie mit Fahrzeugen mit digitalem Kontrollgerät ohne Fahrerkarte fahren?", options: ["Wenn ich meine Fahrerkarte verloren habe", "Wenn ich meine Fahrerkarte gerade an einen Kollegen verborgt habe", "Wenn ich meine Fahrerkarte zwar beantragt, sie aber noch nicht erhalten habe", "Wenn mein Fahrzeug unbeladen ist"], correctIndex: 0 },
			{ id: 327, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "Welche Standortdaten zeichnet das Kontrollgerät Smart Tacho 2 (GEN 2 V 2) automatisch auf?", options: ["Die Geodaten zu Beginn und am Ende der täglichen Arbeitszeit bzw. nach jeweils drei Stunden Lenkzeit, bei jeder Be- oder Entladung des Fahrzeuges, bei jeder Überschreitung einer Grenze zu einem Mitgliedsstaat der EU", "Den Standort nach jeweils viereinhalb Stunden Lenkzeit", "Den vollständigen Fahrtverlauf", "Den Standort einer Lenkpause"], correctIndex: 0 },
			{ id: 328, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wie lang werden detaillierte Geschwindigkeitsdaten im Massenspeicher des Kontrollgerätes gespeichert?", options: ["24 Lenkstunden", "365 Tage", "24 Stunden", "28 Tage"], correctIndex: 0 },
			{ id: 329, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wie lang muss eine regelmäßige wöchentliche Ruhezeit mindestens dauern?", options: ["24 Stunden", "36 Stunden", "45 Stunden", "48 Stunden"], correctIndex: 2 },
			{ id: 330, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wie lang muss eine verkürzte (reduzierte) wöchentliche Ruhezeit mindestens dauern?", options: ["24 Stunden", "30 Stunden", "35 Stunden", "40 Stunden"], correctIndex: 0 },
			{ id: 331, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "In welchem Fall müssen Sie an einem Tag eine dritte Lenkpause machen?", options: ["Bei Vorliegen außergewöhnlicher Umstände nach der Halteplatzregel, wenn ich die maximale tägliche Lenkzeit zum Erreichen meines Wohnstandortes oder meines Firmenstandortes um zwei weitere Stunden verlängere, um dort eine regelmäßige wöchentliche Ruhezeit zu halten", "Nach der Halteplatzregel, wenn ich die maximale tägliche Lenkzeit zum Erreichen meines Wohnstandortes oder meines Firmenstandortes um eine weitere Stunde verlängere, um dort eine regelmäßige wöchentliche Ruhezeit zu halten", "Wenn ich nach 11 Stunden Lenkzeit zum Erreichen meines Wohnstandortes oder meines Firmenstandortes die Lenkzeit um eine weitere Stunde verlängere, um dort eine regelmäßige wöchentliche Ruhezeit zu halten", "Wenn ich nach 12 Stunden Lenkzeit zum Erreichen meines Wohnstandortes oder meines Firmenstandortes die Lenkzeit um eine zwei weitere Stunden verlängere, um dort eine regelmäßige wöchentliche Ruhezeit zu halten"], correctIndex: 0 },
			{ id: 332, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie müssen wegen der Halteplatzregel an einem Tag eine dritte Lenkpause halten. Wie lang muss diese Lenkpause mindestens dauern?", options: ["15 Minuten", "25 Minuten", "30 Minuten", "60 Minuten"], correctIndex: 2 },
			{ id: 333, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie sind unmittelbar vor dem Beginn einer reduzierten wöchentlichen Ruhezeit. Unter welchen Umständen dürfen Sie dann die täglich zulässige Lenkzeit von 10 Stunden um eine Stunde ausdehnen?", options: ["Wenn unvorhersehbare Umstände eintreten (z. B. widrige Witterungsbedingungen, plötzlich auftretende Verkehrsstaus)", "Das darf der Fahrer nach eigenem Ermessen entscheiden", "Das darf der Firmeninhaber nach eigenem Ermessen anordnen", "Das darf der Disponent nach eigenem Ermessen anordnen"], correctIndex: 0 },
			{ id: 334, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie sind unmittelbar vor dem Beginn einer regelmäßigen wöchentlichen Ruhezeit. Unter welchen Umständen dürfen Sie dann die täglich zulässige Lenkzeit von 10 Stunden um zwei Stunden ausdehnen?", options: ["Wenn unvorhersehbare Umstände eintreten (z. B. widrige Witterungsbedingungen, plötzlich auftretende Verkehrsstaus)", "Das darf der Fahrer nach eigenem Ermessen entscheiden", "Das darf der Firmeninhaber nach eigenem Ermessen anordnen", "Das darf der Disponent nach eigenem Ermessen anordnen"], correctIndex: 0 },
			{ id: 335, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie haben die täglich zulässige Lenkzeit von 10 Stunden wegen eines unvorhersehbaren Ereignisses verlängert. Was müssen Sie dann beim Erreichen ihres Fahrtziels beachten?", options: ["Ich muss auf jeden Fall die Fahrerkarte aus dem Kontrollgerät entnehmen", "Ich muss einen Ausdruck aus dem Kontrollgerät erstellen. Auf diesem Ausdruck bzw. dem Schaublatt muss ich den Grund für die Überschreitung der täglich zulässigen Lenkzeit vermerken", "Ich muss auf jeden Fall das Schaublatt im Kontrollgerät belassen", "Ich muss die Firmenleitung sofort von dem Ereignis verständigen"], correctIndex: 1 },
			{ id: 336, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie sind zu Ihrem Wohnort oder zur Firmenniederlassung im Heimatland unterwegs. Wegen eines unvorhersehbaren Ereignisses haben Sie die zulässige tägliche Lenkzeit überschritten. Wie lang darf in diesem Fall die wöchentliche Lenkzeit höchstens dauern?", options: ["38 Stunden", "40 Stunden", "58 Stunden", "60 Stunden"], correctIndex: 2 },
			{ id: 337, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie haben die täglich zulässige Lenkzeit von 10 Stunden wegen eines unvorhersehbaren Ereignisses verlängert. Müssen Sie diese Verlängerung danach wieder ausgleichen?", options: ["Nein", "Ja, durch eine gleichwertige Ruhezeit. Diese muss spätestens zum Ende des dritten Monats, das auf die Verlängerung folgt, genommen werden", "Ja, durch eine gleichwertige Ruhezeit. Diese muss spätestens mit der nächstfolgenden Ruhezeit genommen werden", "Ja, durch eine gleichwertige Ruhezeit. Diese muss spätestens zum Ende der dritten Woche, die auf die Woche folgt, in der die Verlängerung erfolgte, genommen werden"], correctIndex: 3 },
			{ id: 338, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wann muss eine regelmäßige wöchentliche Ruhezeit begonnen werden?", options: ["Spätestens am Ende von sechs 24-Stunden Zeiträumen nach der letzten wöchentlichen Ruhezeit", "Spätestens am Ende von fünf 24-Stunden Zeiträumen nach der letzten wöchentlichen Ruhezeit", "Spätestens am Ende von acht 24-Stunden Zeiträumen nach der letzten wöchentlichen Ruhezeit", "Spätestens am Ende von 14 24-Stunden Zeiträumen nach der letzten wöchentlichen Ruhezeit"], correctIndex: 0 },
			{ id: 339, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie haben eine verkürzte (reduzierte) wöchentliche Ruhezeit im Inland genommen. Müssen Sie diese danach ausgleichen?", options: ["Nein", "Ja. Der Ausgleich muss spätestens am Ende der dritten Woche, die auf die Verkürzung folgt, erfolgen. Dieser Ausgleich muss an eine Ruhezeit mit zumindest 24 Stunden Dauer angehängt werden", "Ja. Der Ausgleich muss spätestens am Ende der dritten Woche, die auf die Verkürzung folgt, erfolgen. Dieser Ausgleich muss an eine Ruhezeit mit zumindest 11 Stunden angehängt werden", "Ja. Der Ausgleich muss spätestens am Ende der dritten Woche, die auf die Verkürzung folgt, erfolgen. Dieser Ausgleich muss an eine Ruhezeit mit zumindest 9 Stunden angehängt werden"], correctIndex: 3 },
			{ id: 340, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Darf eine wöchentliche Ruhezeit unterbrochen werden?", options: ["Nein", "Ja, bis zu zwei Mal, wenn diese Unterbrechungen insgesamt nicht länger als eine Stunde dauern und im Zuge einer Eisenbahn- oder Fährfahrt erfolgen", "Ja, wenn diese Unterbrechung insgesamt nicht länger als acht Stunden dauert", "Ja, wenn diese Unterbrechung insgesamt nicht länger als vier Stunden dauert"], correctIndex: 1 },
			{ id: 341, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie halten eine regelmäßige wöchentliche Ruhezeit. Dürfen Sie diese in der Fahrerkabine verbringen?", options: ["Nein", "Ja, immer", "Ja, wenn das Fahrzeug auf einem gesicherten Parkplatz steht", "Ja, wenn das Fahrzeug eine Heiz- und Kühlmöglichkeit hat"], correctIndex: 0 },
			{ id: 342, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie halten eine regelmäßige wöchentliche Ruhezeit. Wo dürfen Sie diese verbringen?", options: ["In der Fahrerkabine", "In einer geeigneten Unterkunft. Deren Kosten trägt der Arbeitgeber", "In einer geeigneten Unterkunft. Deren Kosten trägt der Dienstnehmer", "In einer geeigneten Unterkunft. Deren Kosten trägt das Arbeitsmarktservice"], correctIndex: 1 },
			{ id: 344, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Standortdaten zeichnet das \"intelligente\" Kontrollgerät Smart Tacho 1 (GEN 1 V2) automatisch auf?", options: ["Die Geodaten zu Beginn und am Ende der täglichen Arbeitszeit bzw. nach jeweils drei Stunden Lenkzeit (diese Aufzeichnungen ersetzen jedoch nicht die erforderliche Ländereingabe)", "Den Standort nach jeweils viereinhalb Stunden Lenkzeit", "Den vollständigen Fahrtverlauf", "Den Standort einer Lenkpause"], correctIndex: 0 },
			{ id: 345, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Vorschriften gelten für die Rückkehr zum Wohnort des Fahrers oder zum Firmenstandort?", options: ["Fahrer müssen spätestens nach vier Wochen die Möglichkeit bekommen, zum Wohnort oder Firmenstandort für eine regelmäßige Ruhezeit von mindestens 45 Stunden zurückzukehren", "Fahrer müssen spätestens nach sechs Wochen die Möglichkeit bekommen, zum Wohnort oder Firmenstandort für eine Ruhezeit zurückzukehren", "Fahrer müssen spätestens nach acht Wochen die Möglichkeit bekommen, zum Wohnort oder Firmenstandort für eine Ruhezeit von mindestens 11 Stunden zurückzukehren", "Fahrer müssen spätestens nach vier Wochen die Möglichkeit bekommen, zum Wohnort oder Firmenstandort für eine Ruhezeit von mindestens 9 Stunden zurückzukehren"], correctIndex: 0 },
			{ id: 346, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "Ihr LKW ist mit einem Kontrollgerät Smart Tacho 2 (GEn2 V2) ausgestattet. Wie ist dann bei einem Be- oder Entladevorgang vorzugehen?", options: ["Ich muss diesen Vorgang im Kontrollgerät durch Auswahl des entsprechenden Symbols (\"laden\" oder \"entladen\" oder \"laden/entladen\") erfassen", "Ich muss diesen Vorgang in einem eigenen Formblatt aufzeichnen", "Ich muss diesen Vorgang nur dann in einem eigenen Formblatt aufzeichnen, wenn er länger als 15 Minuten dauert", "Ich muss diesen Vorgang im Kontrollgerät durch Auswahl des entsprechenden Symbols \"Andere Arbeiten\" erfassen"], correctIndex: 0 },
			{ id: 347, ziffer: "2c", klasse: "D1, D1E, D, DE", frage: "Sie lenken einen Omnibus ununterbrochen 4,5 Stunden lang. Wie lang muss Ihre Lenkpause dann mindestens dauern?", options: ["45 Minuten", "60 Minuten", "90 Minuten", "120 Minuten"], correctIndex: 0 },
			{ id: 348, ziffer: "2c", klasse: "D1, D1E, D, DE", frage: "Sie lenken einen Omnibus im Gelegenheitsverkehr 4,5 Stunden lang. Kann die notwendige Lenkpause von 45 Minuten auch geteilt werden?", options: ["Ja. Teil 1 muss mindestens 15 Minuten, Teil 2 mindestens 30 Minuten lang dauern", "Ja. Jede beliebige Aufteilung ist zulässig, solang nach 4,5 Stunden Lenkzeit 45 Minuten Lenkpause gehalten werden", "Nein", "Ja. Die Lenkpause kann in zwei Teile von je mindestens 15 Minuten geteilt werden, wenn die Lenkpause in Summe 45 Minuten beträgt"], correctIndex: 3 },
			{ id: 349, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wann liegt im Bezug auf die wöchentliche Ruhezeit grenzüberschreitender Verkehr vor?", options: ["Der Fahrer beginnt nur eine von zwei aufeinander folgenden reduzierten wöchentlichen Ruhezeiten außerhalb des Staates, in dem der Standort des Unternehmens oder sein Wohnsitzes liegt", "Der Fahrer beginnt zwei aufeinander folgende reduzierte wöchentliche Ruhezeiten außerhalb des Staates, in dem der Standort des Unternehmens oder sein Wohnsitzes liegt", "Der Fahrer beginnt drei aufeinander folgende reduzierte wöchentliche Ruhezeiten außerhalb des Staates, in dem der Standort des Unternehmens oder sein Wohnsitzes liegt", "Der Fahrer beginnt keine aufeinander folgende reduzierte wöchentliche Ruhezeiten außerhalb des Staates, in dem der Standort des Unternehmens oder sein Wohnsitzes liegt"], correctIndex: 1 },
			{ id: 350, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie haben zwei aufeinander folgende reduzierte (verkürzte) wöchentliche Ruhezeiten im Ausland verbracht. Was gilt dann für den notwendigen Zeitausgleich?", options: ["Der Fahrer muss vor dem Beginn des Zeitausgleichs und der anschließenden regelmäßigen wöchentlichen Ruhezeit zum Standort des Unternehmens oder an seinen Wohnort zurückkehren", "Der Fahrer muss erst nach dem Beginn des Zeitausgleichs und der anschließenden regelmäßigen wöchentlichen Ruhezeit zum Standort des Unternehmens oder an seinen Wohnort zurückkehren", "Der Fahrer muss erst spätestens nach vier Wochen zum Standort des Unternehmens oder an seinen Wohnort zurückkehren", "Der Fahrer muss erst spätestens nach acht Wochen zum Standort des Unternehmens oder an seinen Wohnort zurückkehren"], correctIndex: 0 },
			{ id: 351, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie sind im Zweifahrerbetrieb unterwegs. Was gilt für die 45-minütige Lenkpause?", options: ["Der Beifahrer darf die Lenkpause auch im fahrenden Fahrzeug verbringen, wenn er den Fahrer in dieser Zeit nicht unterstützt", "Während einer Lenkpause muss das Fahrzeug auf jeden Fall stehen", "Der Fahrer darf die Lenkpause auch im fahrenden Fahrzeug verbringen, wenn er in dieser Zeit vom Beifahrer unterstützt wird", "Für den Beifahrer gilt jeder Zeitraum als Lenkpause, in der er das Fahrzeug nicht selbst lenkt"], correctIndex: 0 },
			{ id: 352, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wie lang muss die regelmäßige tägliche Ruhezeit mindestens dauern?", options: ["8 Stunden innerhalb von 30 Stunden bei Zweifahrerbesetzung", "8 Stunden innerhalb von 24 Stunden bei Einfahrerbesetzung", "11 Stunden innerhalb von 24 Stunden bei Einfahrerbesetzung", "12 Stunden innerhalb von 48 Stunden bei Zweifahrerbesetzung"], correctIndex: 2 },
			{ id: 353, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wie lang muss die reduzierte tägliche Ruhezeit mindestens dauern?", options: ["8 Stunden", "9 Stunden", "10 Stunden", "11 Stunden"], correctIndex: 1 },
			{ id: 354, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wie oft pro Woche darf die tägliche Ruhezeit auf 9 Stunden verkürzt werden?", options: ["Ein mal", "Zwei mal", "Drei mal", "Vier Mal"], correctIndex: 2 },
			{ id: 355, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wie darf die tägliche Ruhezeit grundsätzlich geteilt werden?", options: ["Auf 3 und 9 Stunden", "Auf 8 und 4 Stunden", "Auf 7 und 5 Stunden", "Auf 6 und 6 stunden"], correctIndex: 0 },
			{ id: 371, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "In welchem Feld eines CMR-Frachtbriefes finden Sie den Ort, an dem Sie das Frachtgut abholen müssen?", options: ["Im \"Absender\"", "Im Feld \"Empfänger\"", "Im Feld \"Auslieferungsort des Gutes\"", "Im Feld \"Ort und Tag der Übernahme des Gutes\""], correctIndex: 2 },
			{ id: 372, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "In welchem Feld eines CMR-Frachtbriefes finden Sie das Datum, an dem Sie das Frachtgut abholen müssen?", options: ["Im Feld \"Absender\"", "Im Feld \"Empfänger\"", "Im Feld \"Auslieferungsort des Gutes\"", "Im Feld \"Ort und Tag der Übernahme des Gutes\""], correctIndex: 2 },
			{ id: 373, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "In welchem Feld eines CMR-Frachtbriefes finden Sie den Ort, an dem Sie das Frachtgut abliefern müssen?", options: ["Im Feld \"Absender\"", "Im Feld \"Empfänger\"", "Im Feld \"Auslieferungsort des Gutes\"", "Im Feld \"Ort und Tag der Übernahme des Gutes\""], correctIndex: 3 },			
			{ id: 374, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "In welchem Feld eines CMR-Frachtbriefes finden Sie Anweisungen zum Transport des Frachtgutes, die Sie beachten müssen?", options: ["Im Feld \"Absender\"", "Im Feld \"Empfänger\"", "Im Feld \"Anweisungen des Absenders\"", "Im Feld \"Vorbehalte und Anmerkungen der Frachtführer\""], correctIndex: 2 },
			{ id: 375, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "In welchem Feld eines CMR-Frachtbriefes finden Sie Angaben darüber, welche Dokumente den Transport des Frachtgutes begleiten?", options: ["Im Feld \"Absender\"", "Im Feld \"Empfänger\"", "Im Feld \"Anweisungen des Absenders\"", "Im Feld \"Beigefügte Dokumente\""], correctIndex: 3 },
			{ id: 376, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "In welchem Feld eines CMR-Frachtbriefes finden Sie Angaben darüber, wie schwer das Frachtgut ist?", options: ["Im Feld \"Kennzeichen und Nummern\"", "Im Feld \"Art der Verpackung\"", "Im Feld \"Bruttogewicht in kg\"", "Im Feld \"Anzahl der Packstücke\""], correctIndex: 2 },
			{ id: 377, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "In welchem Feld eines CMR-Frachtbriefes finden Sie Angaben zu Datum und Uhrzeit, an dem Sie das Frachtgut abliefern müssen?", options: ["Im Feld \"Absender\"", "Im Feld \"Empfänger\"", "Im Feld \"Besondere Vereinbarungen\"", "Im Feld \"Ort und Tag der Übernahme des Gutes\""], correctIndex: 2 },
			{ id: 378, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "Warum ist es wichtig, dass der Absender des Frachtgutes im Feld \"22 - Unterschrift und Stempel des Absenders\" den CMR-Frachtbrief unterschreibt und abstempelt?", options: ["Weil er damit für die Richtigkeit der Angaben im CMR-Frachtbrief haftet", "Weil er damit das volle Transportrisiko übernimmt", "Weil er damit die Versicherungsprämien übernimmt", "Weil er damit Mautgebühren übernimmt"], correctIndex: 0 },
			{ id: 379, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "Sie lenken einen LKW. Welche Gutachten und Prüfberichte über technische Fahrzeugüberprüfungen müssen Sie mitführen?", options: ["Das letzte Gutachten der wiederkehrenden Begutachtung (\"Pickerlüberprüfung\") und wenn gegebenenfalls vorhanden, den letzten Prüfbericht über eine technische Unterwegskontrolle", "Das letzte Gutachten über die Funktion der GO-Box", "Das letzte Gutachten über die Funktion der Klimaanlage im Fahrerhaus", "Das letzte Gutachten über die Dichtheit der Plane bzw. des Kofferaufbaus"], correctIndex: 0 },
			{ id: 380, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "Ihr LKW ist mit einer GO-Box zur Entrichtung der Maut ausgerüstet. Müssen Sie die zum LKW gehörende Fahrzeugdeklaration der ASFINAG mitführen?", options: ["Nein", "Ja, auf jeden Fall", "Ja, wenn der LKW mit einem Motor der Abgasklasse EURO 4 oder höher angetrieben wird", "Ja, wenn der LKW mit einem Motor der Abgasklasse EURO 1, 2 oder 3 angetrieben wird"], correctIndex: 2 },
			{ id: 381, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "Sie wollen in Ihrem LKW eine GO-Box zur Mauteinhebung anbringen. Was müssen Sie dabei beachten?", options: ["Sie muss am Dach des Fahrerhauses angebracht werden", "Sie muss an der Innenseite der Windschutzscheibe zwischen Lenkradmitte und Fahrzeugmitte, mindestens 10 cm oberhalb des Scheibenwischers in Ruhestellung und mindestens 30 cm unterhalb der Windschutzscheibenoberkante angebracht sein. Genaue Informationen zur ordnungsgemäßen Anbringung der GO-Box finde ich in der ASFINAG-Mautordnung", "Sie muss an der Innenseite der Windschutzscheibe zwischen Fahrzeugmitte und Beifahrertüre angebracht werden", "Sie muss an der Innenseite der Beifahrertüre angebracht werden"], correctIndex: 1 },
			{ id: 382, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "Die GO-Box Ihres Fahrzeuges hat beim Durchfahren eines Mautportals vier Signaltöne abgegeben. Wie sollten Sie sich verhalten?", options: ["Ich suche innerhalb von 5 Stunden oder innerhalb einer Fahrtstrecke von 100 km eine Vertriebsstelle auf, um die Maut nachzuzahlen", "Ich stelle die Abgasklasse des LKW´s an der GO-Box neu ein", "Ich habe 96 Stunden Zeit, um eine Vertriebsstelle zur Nachzahlung der Maut aufzusuchen", "Ich habe vier Wochen Zeit, um eine Vertriebsstelle zur Nachzahlung der Maut aufzusuchen"], correctIndex: 0 },
			{ id: 383, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "Was bedeutet es, wenn beim Durchfahren eines Mautportales kein Signalton der GO-Box erfolgt?", options: ["Das aufgebuchte Guthaben ist in Kürze verbraucht", "Die Maut wurde nicht ordnungsgemäß entrichtet", "Die Abgasklasse des LKW's ist richtig eingestellt", "Die Abgasklasse des LKW's ist falsch eingestellt"], correctIndex: 1 },
			{ id: 384, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "Die GO-Box Ihres Fahrzeuges hat beim Durchfahren eines Mautportals keinen Signalton abgegeben. Wie sollten Sie sich verhalten?", options: ["Ich suche innerhalb von 5 Stunden oder innerhalb einer Fahrtstrecke von 100 km eine Vertriebsstelle auf, um die Maut nachzuzahlen", "Ich stelle die Abgasklasse des LKW's an der GO-Box neu ein", "Ich habe 96 Stunden Zeit, um eine Vertriebsstelle zur Nachzahlung der Maut aufzusuchen", "Ich habe vier Wochen Zeit, um eine Vertriebsstelle zur Nachzahlung der Maut aufzusuchen"], correctIndex: 0 },
			{ id: 385, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "Sie lenken einen LKW der Fahrzeugklasse N2 mit 2 Achsen und ziehen einen einachsigen Anhänger der Fahrzeugklasse O1. Was müssen Sie bei der Einstellung der GO-Box beachten?", options: ["Dass die Achsenzahl auf \"2\" eingestellt ist", "Dass die Achsenzahl auf \"4\" eingestellt ist", "Dass die Achsenzahl auf \"3\" eingestellt ist", "Dass die Achsenzahl auf \"S\" eingestellt ist"], correctIndex: 2 },
			{ id: 386, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "Warum ist es wichtig, dass der Frachtführer des Frachtgutes im Feld \"Unterschrift und Stempel des Frachtführers\" den CMR-Frachtbrief unterschreibt und abstempelt?", options: ["Weil er damit für die Richtigkeit der Angaben im CMR-Frachtbrief haftet", "Weil er damit das volle Transportrisiko übernimmt", "Weil er damit dem Versender die Übernahme des Frachtgutes bestätigt", "Weil er damit für die Richtigkeit der Gewichtsangaben haftet"], correctIndex: 2 },
			{ id: 387, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "Warum ist es wichtig, dass der Empfänger des Frachtgutes im Feld \"Gut empfangen\" den CMR-Frachtbrief unterschreibt und abstempelt?", options: ["Weil er damit für die Richtigkeit der Angaben im CMR-Frachtbrief haftet", "Weil er damit dem Frachtführer und dem Absender die ordnungsgemäße Übernahme des Frachtgutes bestätigt", "Weil er damit Mautgebühren übernimmt", "Weil er damit Strafgebühren wegen Verkehrsverstößen beim Transport übernimmt"], correctIndex: 1 },
			{ id: 388, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "Wie stellen Sie fest, ob die GO-Box im Fahrzeug funktionstüchtig ist?", options: ["Durch eine Statusabfrage bei der GO-Box vor und nach der Fahrt", "Durch das Starten des Fahrzeugmotors", "Durch einen Anruf bei der Hotline der ASFINAG vor der Fahrt", "Durch Auslesen der GO-Box mit der ASFINAG-Fahrer-App"], correctIndex: 0 },
			{ id: 389, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "Wo soll die GO-Box auf der Windschutzscheibe des Fahrzeuges montiert werden, um eine korrekte Mautentrichtung zu gewährleisten?", options: ["An der Innenseite der Windschutzscheibe zwischen Lenkradmitte und Fahrzeugmitte, mindestens 10 cm oberhalb des Scheibenwischers in Ruhestellung und mindestens 30 cm unterhalb der Windschutzscheibenoberkante. Genaue Informationen zur ordnungsgemäßen Anbringung der GO-Box sind in der ASFINAG-Mautordnung zu finden", "Immer genau in der Fahrzeugmitte", "Nahe der Oberkante der Windschutzscheibe", "So, dass sie von den in Ruhelage befindlichen Scheibenwischern völlig verdeckt wird"], correctIndex: 0 },
			{ id: 390, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "Was ist gesetzlich zur ordnungsgemäßen Entrichtung der LKW-Maut vorgesehen?", options: ["Es muss im Fahrzeug eine GO-Box oder ein gleichwertiges Gerät installiert sein", "Es muss eine Mautvignette mitgeführt werden", "Es muss bei einem österreichischen Bankinstitut ein Dauerauftrag zur Abbuchung der Maut eingerichtet sein", "Es muss die ASFINAG-Fahrer-App vorgewiesen werden können"], correctIndex: 0 },
			{ id: 391, ziffer: "2b", klasse: "C1, C1E, C, CE", frage: "Wann sollten Sie die Einstellung der Achsenzahl bei der GO-Box durchführen?", options: ["Unmittelbar vor Fahrtantritt", "Am Ende einer Arbeitswoche", "Am Beginn einer wöchentlichen Ruhezeit", "Am Beginn einer täglichen Ruhezeit"], correctIndex: 0 },
			{ id: 411, ziffer: "2c", klasse: "D1, D1E, D, DE", frage: "Sie lenken einen Omnibus und führen im Gelegenheitsverkehr eine Fahrt mit älteren Fahrgästen durch. Müssen Sie dafür sorgen, dass die Fahrgäste Sicherheitsgurte benutzen?", options: ["Ja, auf jeden Fall", "Nein, das liegt in der eigenen Verantwortung der einzelnen Fahrgäste", "Ja, aber nur, wenn das Fahrziel im Freiland liegt", "Nein, weil in Omnibussen keine Gurtpflicht beachtet werden muss"], correctIndex: 1 },
			{ id: 412, ziffer: "2c", klasse: "D1, D1E, D, DE", frage: "Die GO-Box Ihres Fahrzeuges hat beim Durchfahren eines Mautportals vier Signaltöne abgegeben. Wie sollten Sie sich verhalten?", options: ["Ich suche innerhalb von 5 Stunden bzw. einer Fahrtstrecke von 100 km eine Vertriebsstelle auf, um die Maut nachzuzahlen", "I stelle die Abgasklasse des Omnibusses an der GO-Box neu ein", "Ich habe 96 Stunden Zeit, um eine Vertriebsstelle zur Nachzahlung der Maut aufzusuchen", "Ich habe vier Wochen Zeit, um eine Vertriebsstelle zur Nachzahlung der Maut aufzusuchen"], correctIndex: 0 },
			{ id: 413, ziffer: "2c", klasse: "D1, D1E, D, DE", frage: "Was bedeutet es, wenn beim Durchfahren eines Mautportales kein Signalton der GO-Box erfolgt?", options: ["Das aufgebuchte Guthaben ist in Kürze verbraucht", "Die Maut wurde nicht ordnungsgemäß entrichtet", "Die Abgasklasse des Omnibusses ist richtig eingestellt", "Die Abgasklasse des Omnibusses ist falsch eingestellt"], correctIndex: 1 },
			{ id: 414, ziffer: "2c", klasse: "D1, D1E, D, DE", frage: "Die GO-Box Ihres Fahrzeuges hat beim Durchfahren eines Mautportals keinen Signalton abgegeben. Wie sollten Sie sich verhalten?", options: ["Ich suche innerhalb von 5 Stunden bzw. einer Fahrtstrecke von 100 km eine Vertriebsstelle auf, um die Maut nachzuzahlen", "Ich stelle die Abgasklasse des Omnibusses an der GO-Box neu ein", "Ich habe 96 Stunden Zeit, eine Vertriebsstelle zur Nachzahlung der Maut aufzusuchen", "Ich habe vier Wochen Zeit, um die Maut nachzuzahlen"], correctIndex: 0 },
			{ id: 415, ziffer: "2c", klasse: "D1, D1E, D, DE", frage: "Sie lenken einen Omnibus der Fahrzeugklasse M2 mit 2 Achsen und ziehen einen einachsigen Anhänger der Fahrzeugklasse O1. Müssen Sie die Einstellung der Achsenzahl bei der GO-Box gegenüber einer Fahrt mit dem Bus ohne Anhänger verändern?", options: ["Nein", "Ja, ich muss die Achsenzahl auf \"3\" einstellen", "Ja, ich muss die Achsenzahl auf \"4\" einstellen", "Ja, ich muss die Achsenzahl auf \"S\" einstellen"], correctIndex: 0 },
			{ id: 417, ziffer: "2c", klasse: "D1, D1E, D, DE", frage: "Am Beginn des Fahrdienstes überprüfen Sie Ihren Omnibus. Dabei stellen Sie fest, dass die Frontscheibe auf Höhe des Reiseleiterplatzes einen etwa 50 cm langen Riss aufweist. Wie sollten Sie sich verhalten?", options: ["Ich melde diese Beschädigung unverzüglich dem Dienstgeber und darf mit diesem Omnibus keine Fahrgäste befördern", "Ich darf mit diesem Omnibus Fahrgäste befördern, solang der Riss nicht bis in meinem Sichtbereich geht", "Ich darf mit diesem Omnibus Fahrgäste befördern, solang dabei kein Reiseleiter mitfährt", "Ich darf diesen Omnibus nicht in Betrieb nehmen"], correctIndex: 0 },
			{ id: 418, ziffer: "2c", klasse: "D1, D1E, D, DE", frage: "Sie lenken im Gelegenheitsverkehr einen Omnibus mit 48 Sitzplätzen und holen eine Reisegruppe ab. Dabei stellt sich heraus, dass die Reisegruppe 54 Personen umfasst. Wie sollten Sie sich verhalten?", options: ["Ich darf nicht mehr als 48 Personen im Omnibus befördern. Daher verständige ich unverzüglich die Betriebsleitung, um das Problem zu lösen", "Ich fahre mit den 54 Personen und lasse 6 Freiwillige im Mittelgang stehen", "Ich fahre mit den 54 Personen und fordere die Fahrgäste auf, auf den Sitzplätzen zusammenzurücken", "Ich fahre mit den 54 Personen und lasse 6 Freiwillige im Gepäckraum mitfahren"], correctIndex: 0 },
			{ id: 419, ziffer: "2c", klasse: "D1, D1E, D, DE", frage: "Sie lenken einen Omnibus und befördern Kinder oder Jugendliche im Alter zwischen 3 und 14 Jahren. Sind Sie dafür verantwortlich, dass die Kinder oder Jugendlichen die Sicherheitsgurte benutzen?", options: ["Nein, wenn im Gelegenheitsverkehr gefahren wird und eine erwachsene Begleitperson im Omnibus mitfährt oder wenn im Linienverkehr gefahren wird", "Ja, auf jeden Fall", "Ja, aber nur, wenn ich einen Schülertransport durchführe", "Ja, aber nur, wenn ich einen Kindergartentransport durchführe"], correctIndex: 0 },
			{ id: 420, ziffer: "2c", klasse: "D1, D1E, D, DE", frage: "Wie müssen Sie Ihren Omnibus kennzeichnen, wenn Sie einen Schülertransport durchführen?", options: ["Durch eine gelbrote quadratische Tafel mit dem Kindersymbol an der Vorder- und Rückseite des Busses", "Durch die Aufschrift \"Schülertransport\" im Zielschild", "Durch gelbrote quadratische Tafeln mit dem Kindersymbol an den Seitenwänden des Busses", "Durch gelbrote quadratische Tafeln mit dem Kindersymbol im Fahrgastraum an den Sitzen des Busses"], correctIndex: 0 },
			{ id: 421, ziffer: "2c", klasse: "D1, D1E, D, DE", frage: "Was haben Sie zu beachten, wenn Sie an der Haltestelle Kinder aus Ihrem Schulbus aussteigen lassen?", options: ["Ich muss die Alarmblinkanlage und zusätzliche Warnleuchten, welche in der Heckscheibe oder am Dach des Busses montiert sind, einschalten", "Ich muss Warnzeichen mit der Hupe abgeben", "Ich muss den rechten Blinker einschalten", "Ich muss den linken Blinker einschalten"], correctIndex: 0 },
			{ id: 422, ziffer: "2c", klasse: "D1, D1E, D, DE", frage: "Sie sollen mit einem Omnibus einen Schülertransport durchführen. Welche Lenkberechtigungen bzw. Eintragungen im Führerschein und behördliche Ausweise berechtigen Sie dazu?", options: ["Eine Lenkberechtigung der Klasse D oder D1 alleine reicht dazu immer aus. Es sind keine weiteren Eintragungen im Führerschein notwendig", "Eine Lenkberechtigung der Klasse D mit den im Führerschein eingetragenen Code \"95\" und \"121\"", "Eine Lenkberechtigung der Klasse D mit den im Führerschein eingetragenen Code \"95\" und \"111\"", "Eine Lenkberechtigung der Klasse D oder D1 mit dem im Führerschein eingetragenen Code \"95\""], correctIndex: 3 },
			{ id: 423, ziffer: "2c", klasse: "D1, D1E, D, DE", frage: "Wie stellen Sie fest, ob die GO-Box im Fahrzeug funktionstüchtig ist?", options: ["Durch eine Statusabfrage bei der GO-Box vor und nach der Fahrt", "Durch das Starten des Fahrzeugmotors", "Durch einen Anruf bei der Hotline der ASFINAG vor der Fahrt", "Durch Auslesen der GO-Box mit der ASFINAG-Fahrer-App"], correctIndex: 0 },
			{ id: 424, ziffer: "2c", klasse: "D1, D1E, D, DE", frage: "Wo soll die GO-Box auf der Windschutzscheibe des Fahrzeuges montiert werden, um eine korrekte Mautentrichtung zu gewährleisten?", options: ["An der Innenseite der Windschutzscheibe zwischen Lenkradmitte und Fahrzeugmitte, mindestens 10 cm oberhalb des Scheibenwischers in Ruhestellung und mindestens 30 cm unterhalb der Windschutzscheibenoberkante. Genaue Informationen zur ordnungsgemäßen Anbringung der GO-Box sind in der ASFINAG-Mautordnung zu finden", "Immer genau in der Fahrzeugmitte", "Nahe der Oberkante der Windschutzscheibe", "So, dass sie von den in Ruhelage befindlichen Scheibenwischern völlig verdeckt wird"], correctIndex: 0 },
			{ id: 425, ziffer: "2c", klasse: "D1, D1E, D, DE", frage: "Was ist gesetzlich zur ordnungsgemäßen Entrichtung der Omnibus-Maut vorgesehen?", options: ["Es muss im Fahrzeug eine GO-Box oder ein gleichwertiges Gerät installiert sein", "Es muss eine Mautvignette mitgeführt werden", "Es muss bei einem österreichischen Bankinstitut ein Dauerauftrag zur Abbuchung der Maut eingerichtet sein", "Es muss die ASFINAG-Fahrer-App vorgewiesen werden können"], correctIndex: 0 },
			{ id: 451, ziffer: "3a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie müssen rückwärts aus einem Firmengelände ausfahren und haben keine ausreichende Sicht auf den herannahenden Verkehr. Wie sollten Sie sich verhalten?", options: ["Ich lasse mich von einer geeigneten Person einweisen", "Ich schiebe im Schritttempo zurück. Der von rechts kommende Verkehr muss warten", "Ich verzichte auf das Einweisen, wenn beim Rückwärtsfahren die Alarmblinkanlage eingeschaltet ist", "Ich verzichte auf das Einweisen, wenn beim Rückwärtsfahren der Rückfahrwarner eingeschaltet ist"], correctIndex: 0 },
			{ id: 452, ziffer: "3a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Während der Fahrt läutet Ihr Handy. Das Telefon ist nicht mit einer Freisprecheinrichtung gekoppelt. Wie verhalten Sie sich?", options: ["Ich telefoniere, halte aber das Gespräch so kurz wie möglich", "Ich telefoniere, konzentriere mich aber noch mehr als sonst auf den Verkehr", "Ich lasse das Handy läuten und rufe nach Beendigung der Fahrt zurück", "Ich antworte während der Fahrt mit einer Kurznachricht"], correctIndex: 2 },
			{ id: 453, ziffer: "3a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welches Schuhwerk ist beim Lenken eines Fahrzeugs zu benutzen?", options: ["Fußumschließendes Schuhwerk (z.B. Sandalen mit Fersenriemen, Stiefel, Halbschuhe)", "Pantoffeln", "Genagelte Bergschuhe", "Skischuhe"], correctIndex: 0 },
			{ id: 454, ziffer: "3a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie beschädigen beim Ausparken ein abgestelltes Fahrzeug. Der Lenker des anderen Fahrzeuges ist nicht erreichbar. Müssen Sie diesen Unfall der nächsten Polizeidienststelle melden?", options: ["Ja, aber nur, wenn es sich um ein Fahrzeug mit ausländischem Kennzeichen handelt", "Ja, dieser Unfall ist zu melden", "Nein, es genügt, einen Zettel mit meinem Namen am anderen Fahrzeug anzubringen", "Nein, es genügt, diesen Unfall nur der Versicherung zu melden"], correctIndex: 1 },
			{ id: 455, ziffer: "3a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche sind die häufigsten Unfallursachen mit LKW bzw. OMNIBUSSEN im Straßenverkehr?", options: ["Nicht angepasste Geschwindigkeit sowie zu geringer Sicherheitsabstand", "Zu hohe Aufmerksamkeit von Lenkerinnen und Lenkern", "Gute Ausbildung von Lenkerinnen und Lenkern", "Guter technischer Zustand der Fahrzeuge"], correctIndex: 0 },
			{ id: 456, ziffer: "3a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche sind die häufigsten Unfallursachen mit Beteiligung von Nutzfahrzeugen im Straßenverkehr?", options: ["Auffahrunfälle, Abkommen von der Fahrbahn, Zusammenstöße mit anderen Fahrzeugen", "Zu geringe Fahrgeschwindigkeit", "Zu hohe Aufmerksamkeit von Lenkerinnen und Lenkern", "Guter technischer Zustand der Fahrzeuge"], correctIndex: 0 },
			{ id: 481, ziffer: "3b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Werden Fahrer und Unternehmer zur Verantwortung gezogen, wenn bei der Einreise nach Großbritannien in ihrem Fahrzeug illegale Einwanderer entdeckt werden?", options: ["Ja, es ist in jedem Fall mit Strafverfahren vor den Behörden oder Gerichten zu rechnen", "Nein, wenn der Fahrer glaubhaft behauptet, nichts gewusst zu haben", "Es wird immer nur der Fahrer zur Verantwortung gezogen", "Es wird immer nur das Unternehmen zur Verantwortung gezogen"], correctIndex: 0 },
			{ id: 482, ziffer: "3b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was sollte bei der Ausreisekontrolle vom Festland (z. B. in Frankreich) in Richtung Großbritannien vom Fahrer immer beantragt werden, um einer Schleusung illegaler Einwanderer vorzubeugen?", options: ["Eine behördliche Kontrolle des Laderaums mit Hilfe von Atemluft-Messgeräten", "Es soll immer ein Spürhund angefordert werden", "Eine behördliche Kontrolle des Laderaums mit Hilfe eines Scanners", "Eine behördliche Kontrolle des Laderaums mit Hilfe von Wärmebild-Kameras"], correctIndex: 0 },
			{ id: 483, ziffer: "3b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Ein Autostopper bittet Sie, mitgenommen zu werden. Wie sollten Sie sich verhalten, um einer Schleusung illegaler Einwanderer vorzubeugen?", options: ["Ich überzeuge mich, ob er für den Aufenthalt in Österreich ein gültiges Ausweisdokument mit sich führt und nehme ihn im Zweifelsfall nicht mit", "Ich darf ihn auf jeden Fall mitnehmen, wenn er Gepäckstücke mit sich führt", "Ich darf ihn auf jeden Fall mitnehmen, wenn er ausreichend deutsch spricht", "Ich darf ihn auf jeden Fall mitnehmen, wenn er über ausreichende Geldmittel verfügt"], correctIndex: 0 },
			{ id: 484, ziffer: "3b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Ein Autostopper bittet Sie, mitgenommen zu werden. Welche Dokumente sollten Sie sich von ihm zeigen lassen, damit Sie der Schleusung illegaler Einwanderer vorbeugen?", options: ["Einen Reisepass oder Personalausweis eines EU- oder EWR-Staates oder eine österreichische Aufenthaltskarte oder einen österreichischen Identitätsausweis", "Einen Reisepass irgend eines Staates", "Einen internationalen Führerschein", "Einen nationalen Führerschein"], correctIndex: 0 },
			{ id: 485, ziffer: "3b", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie führen bei einer Tankstelle einen Tankvorgang durch. Wie sollten Sie sich dabei verhalten, um der Schleusung illegaler Einwanderer vorzubeugen?", options: ["Ich lasse den Motor laufen, schließe aber die Türe des Fahrerhauses", "Ich schließe die Fahrzeugtüren bzw. Behälter und Ausrüstungskisten ab und kontrolliere vor der Weiterfahrt, ob sich jemand in Hohlräumen des Fahrzeuges versteckt hat", "Solang ich das Fahrzeug im Blick habe, kann ich ohne weiteres auf das Absperren des Fahrzeuges verzichten", "Ich stelle den Motor ab, lasse aber die Türe des Fahrerhauses geöffnet"], correctIndex: 1 },
			{ id: 511, ziffer: "3c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wodurch können Sie die Funktionsfähigkeit Ihrer Stützmuskulatur (z.B. der Rückenmuskulatur) erhalten?", options: ["Durch gezielte gymnastische Übungen", "Durch viel sitzen und liegen", "Durch eine vorgebeugte Haltung während der Fahrt", "Durch eine rückwärtsgebeugte Haltung während der Fahrt"], correctIndex: 0 },
			{ id: 512, ziffer: "3c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wie beladen Sie Ihr Fahrzeug möglichst ergonomisch bzw. gesundheitsschonend?", options: ["Ich trage auf einmal so viel Gewicht, wie ich gerade noch heben kann", "Ich gehe beim Heben von Lasten in die Knie und halten den Rücken gerade und nutze möglichst Ladehilfen", "Ich trage Lasten möglichst mit ausgestreckten Armen", "Ich trage Lasten möglichst hinter dem Rücken"], correctIndex: 1 },
			{ id: 513, ziffer: "3c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wo treten die größten körperlichen Belastungen auf, wenn Sie Lasten falsch heben?", options: ["Im Lendenwirbelbereich", "Am Schienbein", "In den Kniegelenken", "An den Halswirbeln"], correctIndex: 0 },
			{ id: 514, ziffer: "3c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wie hebt man eine Last richtig?", options: ["Man beugt sich im Lendenwirbelbereich vor und hebt die Last mit möglichst gestreckten Beinen", "Man hält die Last möglichst weit vom Körper entfernt", "Man geht nach unten in die Hocke mit aufrechtem Rücken und gebeugten Knien. Die Gewichte sollen nahe am Körper gehalten werden. Die Last soll zügig und gleichmäßig angehoben werden", "Zuerst kniet man sich nieder, nimmt die Last in die Hände und steht danach auf"], correctIndex: 2 },
			{ id: 515, ziffer: "3c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Bei langen Fahrzeiten ohne Flüssigkeitszufuhr und mit starrer Beinhaltung besteht die Gefahr...", options: ["eines Herzinfarktes", "eines Schlaganfalles", "eines Nierenversagens", "eines Blutgerinnsels in den Beinvenen"], correctIndex: 3 },
			{ id: 516, ziffer: "3c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Andauernde, laute Radiomusik beim Lenken eines Fahrzeuges...", options: ["fördert die Konzentrationsfähigkeit", "fördert die Durchblutung des Gehirns", "trainiert und verbessert die Hörfähigkeit", "vermindert die Konzentrationsfähigkeit"], correctIndex: 3 },
			{ id: 517, ziffer: "3c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Beim Lenken eines Fahrzeuges soll ich...", options: ["meine Sitzhaltung und Sitzposition möglichst nicht verändern und starr sitzen bleiben", "meine Sitzhaltung und Sitzposition möglichst häufig verändern z.B. leicht nach vorn beugen, zurücklehnen", "die Beine immer gestreckt halten und möglichst gar nicht beugen", "die Beine immer gebeugt halten und gar nicht strecken"], correctIndex: 1 },
			{ id: 518, ziffer: "3c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Bei durchgetretenem Brems- oder Kupplungspedal...", options: ["sollen die Beine möglichst völlig gestreckt sein", "sollen die Beine möglichst stark gebeugt sein", "sollen die Beine leicht angewinkelt sein", "ist die Stellung der Beine egal"], correctIndex: 2 },
			{ id: 519, ziffer: "3c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wirbelsäulenerkrankungen und Rückenschmerzen...", options: ["entstehen nur beim Tragen von zu schweren Lasten", "kommen bei Berufskraftfahrern häufig vor", "kommen bei Berufskraftfahrern seltener vor als bei Gelegenheitsfahrern", "entstehen nur beim Heben von zu schweren Lasten"], correctIndex: 1 },
			{ id: 520, ziffer: "3c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was führt zu verbessertem Schlafverhalten?", options: ["Wenn ich vor dem Schlafengehen Entspannungstechniken anwende", "Wenn ich vor dem Schlafengehen übermäßig fettreiche Mahlzeiten konsumiere", "Wenn ich immer einen Mittagsschlaf halte", "Wenn ich vor dem Schlafengehen übermäßig Alkohol konsumiere"], correctIndex: 0 },
			{ id: 521, ziffer: "3c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wodurch kann die Widerstandsfähigkeit gegen Stress erhöht werden?", options: ["Durch möglichst seltenes Ausüben von Sport", "Durch regelmäßiges Mentaltraining", "Durch regelmäßigen Konsum von Alkohol", "Durch wenig Schlaf"], correctIndex: 1 },
			{ id: 522, ziffer: "3c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Flüssigkeiten und in welchen Mengen sollten Sie täglich trinken?", options: ["Wasser oder ungezuckerten Kräuter- oder Früchtetee (2 - 3 Liter)", "Energy Drinks (2 Dosen)", "Bier (1 Liter)", "Mit Wasser verdünnten Wein (0,75 Liter)"], correctIndex: 0 },
			{ id: 523, ziffer: "3c", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Eine gute körperliche Kondition…", options: ["steigert die geistige Leistungsfähigkeit und Konzentrationsfähigkeit beim Autofahren", "hat keine Auswirkungen auf die geistige Leistungsfähigkeit und Konzentrationsfähigkeit", "vermindert die geistige Leistungsfähigkeit und Konzentrationsfähigkeit", "erhält man automatisch beim langen Autofahren"], correctIndex: 0 },
			{ id: 541, ziffer: "3d", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Die Tageszeit beeinflusst die Leistungsfähigkeit eines Menschen. Wann ist die Leistungsfähigkeit normalerweise am geringsten?", options: ["Zwischen 12 und 14 Uhr", "Zwischen 2 und 4 Uhr", "Zwischen 8 und 10 Uhr", "Zwischen 17 und 19 Uhr"], correctIndex: 1 },
			{ id: 542, ziffer: "3d", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wie kann vorzeitiger Ermüdung und herabgesetzter Aufmerksamkeit vorgebeugt werden?", options: ["Durch günstige Ernährung (fettarm, keine Süßigkeiten) und ausreichende Trinkmenge", "Durch möglichst langes Fahren ohne Pausen", "Durch hohes Schlafdefizit", "Sehr hohe warme Umgebungstemperatur im Fahrzeug"], correctIndex: 0 },
			{ id: 543, ziffer: "3d", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Auswirkungen auf die kraftfahrspezifische Leistungsfähigkeit hat der Konsum von Alkohol?", options: ["Deutliche Leistungssteigerung", "Verlängerung der Reaktionszeit", "Verbesserung der manuellen Geschicklichkeit", "Verbesserung der Konzentration"], correctIndex: 1 },
			{ id: 544, ziffer: "3d", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Trifft diese Aussage zu: \"Beim Lenken eines Nutzfahrzeuges kann die Herzfrequenz auf 140-160 Schläge pro Minute steigen.\"", options: ["Nein, die Herzfrequenz hat mit dem Lenken eines Nutzfahrzeuges nichts zu tun", "Nein, das ist viel zu hoch. Sie bewegt sich höchstens im Bereich zwischen 60-80 Schläge in der Minute in Stresssituationen", "Nein, diese Aussage ist auch für Gefahrensituationen nicht richtig", "Ja, diese Aussage ist richtig und darüber hinaus führt eine ständig zu hohe Herzfrequenz zu psychischem Stress und kann krank machen"], correctIndex: 3 },
			{ id: 545, ziffer: "3d", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wie hoch ist die durchschnittliche Herzfrequenz eines Menschen im Ruhezustand?", options: ["100 -120 Schläge in der Minute", "180 - 200 Schläge in der Minute", "60 - 80 Schläge in der Minute", "Über 200 Schläge in der Minute"], correctIndex: 2 },
			{ id: 546, ziffer: "3d", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Durch welches Essverhalten können Sie Ihre Leistungs- bzw. Konzentrationsfähigkeit positiv beeinflussen?", options: ["Ich esse in meiner Mittagspause drei Leberkäsesemmeln", "Ich esse in jeder Pause möglichst viel", "Ich esse mehrere kleine, kohlehydratreiche, fettarme Mahlzeiten über den Tag verteilt", "Ich esse nur einmal täglich, dafür jedoch eine vitaminreiche Mahlzeit"], correctIndex: 2 },
			{ id: 547, ziffer: "3d", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie haben noch 300 km zu fahren und bemerken, dass Sie müde werden. Was sollten Sie tun?", options: ["Ich trinke einen Energy-Drink zum Aufputschen", "Ich lege eine ausreichende Erholungspause ein und betätige mich dabei körperlich", "Ich fahre weiter und hoffe darauf, dass sich meine Müdigkeit nicht so verstärkt, dass ich fahruntüchtig werde", "Ich trinke einen Kaffee zum Aufputschen"], correctIndex: 1 },
			{ id: 548, ziffer: "3d", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie stehen beim Fahren im dichten Stadtverkehr unter Zeitdruck. Was sollten Sie tun?", options: ["Ich fahre möglichst schnell und nütze dabei jede Gelegenheit zum Spurwechsel", "Ich überschreite die vorgeschriebenen Geschwindigkeitsbeschränkungen so weit, dass kein Führerscheinentzug droht", "Ich mache die verlorene Zeit wieder gut, indem ich zu den vor mir fahrenden Fahrzeugen knapper auffahre", "Ich mache mir bewusst, dass schnelleres Fahren im Stadtverkehr meist nichts bringt und fahre normal weiter"], correctIndex: 3 },
			{ id: 549, ziffer: "3d", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie fahren mit einem Nutzfahrzeug und werden bei einer Fahrpause auf einen halben Liter Bier eingeladen. Wie verhalten Sie sich?", options: ["Ich trinke aus Kollegialität ein Bier mit, aber sicherlich kein Zweites", "Ich lehne strikt ab, weil schon kleine Alkoholmengen beeinträchtigen können", "Ich trinke ein Bier mit und nur wenn ich mich fit fühle, fahre ich weiter", "Ich trinke ein Bier mit, weil ich damit den Alkoholwert von 0,5 Promille nicht erreiche."], correctIndex: 1 },
			{ id: 550, ziffer: "3d", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie haben gestern ausgiebig gefeiert und viel Alkohol getrunken. Nach wenigen Stunden Schlaf sollten Sie heute als Berufskraftfahrer fahren. Welches Verhalten wäre richtig?", options: ["Ich achte besonders aufmerksam auf das eigenen Befinden und fahre nur dann, wenn ich keine Kopfschmerzen fühle", "Ich nehme ein ausgiebiges Frühstück zu mir und fahre los, wenn ich mich gut fühle", "Ich nehme aufputschende Medikamente ein und fahre vorsichtig los", "Ich fahre nicht, weil noch lange Zeit die Gefahr einer Alkoholbeeinträchtigung in Form von Restalkohol besteht"], correctIndex: 3 },
			{ id: 551, ziffer: "3d", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Auswirkungen hat Stress auf den Körper?", options: ["Man wird ruhig und konzentriert", "Häufiger Stress macht den Körper widerstandsfähig", "Blutdruck und Herzfrequenz steigen und es kann zur Verringerung der Informationsverarbeitung im Gehirn kommen", "Unter Stress trifft man leichter die richtigen Entscheidungen"], correctIndex: 2 },
			{ id: 571, ziffer: "3e", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie wollen in Österreich die Polizei alarmieren. Welche Notrufnummer ist dafür zu wählen?", options: ["122", "133 oder 112", "144", "166"], correctIndex: 1 },
			{ id: 572, ziffer: "3e", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Wie lautet die einheitliche europäische Notfallnummer?", options: ["112", "111", "133", "114"], correctIndex: 0 },
			{ id: 573, ziffer: "3e", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Ein hinter Ihnen fahrender Mopedfahrer fährt auf Ihr Fahrzeug auf. Dadurch verletzt er sich, will aber keine Verständigung der Polizei. Wie sollten Sie sich verhalten?", options: ["Ich leiste Erste Hilfe und verständige trotzdem sofort die Polizei", "Ich verständige die Polizei nur dann, wenn sich der Mopedfahrer nicht ausweisen kann", "Ich verständige in diesem Fall nur den nächsten Arzt", "Es reicht aus, wenn ich Erste Hilfe leiste. Dann muss die Polizei nicht verständigt werden"], correctIndex: 0 },
			{ id: 574, ziffer: "3e", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Was kann zur besseren Verarbeitung eines Unfallerlebnisses beitragen?", options: ["Wenn ich starke Beruhigungsmittel einnehme, um sofort wieder fahren zu können", "Wenn ich nicht mit anderen über das Unfallerlebnis spreche", "Wenn ich auf den Schock Alkohol trinke", "Wenn ich mir professionelle Hilfe hole, um das Unfallerlebnis aufzuarbeiten"], correctIndex: 3 },
			{ id: 591, ziffer: "3f", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Hat Ihr Fahrverhalten Auswirkungen auf das Ansehen des Unternehmens, für das Sie fahren?", options: ["Nein, sicher nicht", "Ja. Da Nutzfahrzeuge häufig Firmenaufschriften tragen, verbinden andere Verkehrsteilnehmer ein riskantes Fahrverhalten negativ mit meiner Firma", "Nein. Die anderen Verkehrsteilnehmer verbinden mein Fahrverhalten nicht mit meiner Firma", "Nein, solang mein Fahrzeug keine Firmenaufschrift trägt"], correctIndex: 1 },
			{ id: 592, ziffer: "3f", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Warum sollten Sie im Fahrdienst auf den Zustand Ihrer Kleidung achten?", options: ["Saubere und unbeschädigte Kleidung bewirkt, dass Kunden ein positives Bild von mir und der Firma, für die ich fahre, gewinnen", "Zerrissene Kleidung bewirkt, dass Kunden ein positives Bild von mir und der Firma, für die ich fahre, gewinnen", "Schmutzige Kleidung bewirkt, dass Kunden ein positives Bild von mir und der Firma, für die ich fahre, gewinnen", "Offensichtlich abgetragene Kleidung bewirkt, dass Kunden ein positives Bild von mir und der Firma, für die ich fahre, gewinnen"], correctIndex: 0 },
			{ id: 593, ziffer: "3f", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Warum sollten Sie im Fahrdienst ruhig und besonnen mit Kunden sprechen?", options: ["Ruhiges sprechen bewirkt, dass Kunden ein positives Bild von mir und von der Firma, für die ich fahre, gewinnen", "Ruhiges sprechen bewirkt, dass Kunden ein unvorteilhaftes Bild von mir gewinnen", "Ruhiges sprechen bewirkt, dass Kunden ein negatives Bild von der Firma, für die ich fahre, gewinnen", "Besonnenes sprechen bewirkt, dass Kunden ein negatives Bild von der Firma, für die ich fahre, gewinnen"], correctIndex: 0 },
			{ id: 594, ziffer: "3f", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Warum sollten Sie im Fahrdienst höflich mit Kunden umgehen?", options: ["Höflicher Umgang bewirkt, dass Kunden ein positives Bild von mir und von der Firma, für die ich fahre, gewinnen", "Höflicher Umgang bewirkt, dass Kunden ein unvorteilhaftes Bild von der Firma, für die ich fahre, gewinnen", "Höflicher Umgang bewirkt, dass Kunden ein negatives Bild von mir gewinnen", "Höflicher Umgang bewirkt, dass Kunden ein nur ein neutrales Bild von mir gewinnen"], correctIndex: 0 },
			{ id: 595, ziffer: "3f", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Hat der technische Zustand ihres Fahrzeuges Auswirkungen auf das Ansehen des Unternehmens, für das Sie fahren?", options: ["Nein, sicher nicht", "Ja. Da Nutzfahrzeuge häufig Firmenaufschriften tragen, verbinden Kunden einen schlechten technischen Zustand meines Fahrzeuges negativ mit meiner Firma", "Ja. Da Nutzfahrzeuge häufig Firmenaufschriften tragen, verbinden Kunden einen schlechten technischen Zustand meines Fahrzeuges positiv mit meiner Firma", "Nein, solang mein Fahrzeug keine Firmenaufschrift trägt"], correctIndex: 1 },
			{ id: 596, ziffer: "3f", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Hat die Sauberkeit ihres Fahrzeuges Auswirkungen auf das Ansehen des Unternehmens, für das Sie fahren?", options: ["Nein, sicher nicht", "Ja. Da Nutzfahrzeuge häufig Firmenaufschriften tragen, verbinden Kunden ein unsauberes Fahrzeug negativ mit meiner Firma", "Ja. Da Nutzfahrzeuge häufig Firmenaufschriften tragen, verbinden Kunden ein unsauberes Fahrzeug positiv mit meiner Firma", "Nein, solang mein Fahrzeug keine Firmenaufschrift trägt"], correctIndex: 1 },
			{ id: 621, ziffer: "3g", klasse: "C1, C1E, C, CE", frage: "Sie fahren Im Werkverkehr. Wann benötigen Sie keinen Fahrerqualifizierungsnachweis?", options: ["Wenn der Werkverkehr nur innerhalb Österreichs stattfindet", "Wenn nur Materialien befördert werden, die ich zur Berufsausübung benötige und das Lenken nicht die Haupttätigkeit darstellt", "Wenn nur Materialen befördert werden, die im Eigentum des Gewerbeinhabers stehen", "Wenn nur im Ortsgebiet gefahren wird"], correctIndex: 1 },
			{ id: 622, ziffer: "3g", klasse: "C1, C1E, C, CE", frage: "Wann verliert der Fahrerqualifizierungsnachweis seine Gültigkeit?", options: ["Wenn die Lenkberechtigung entzogen worden ist", "Wenn nicht alle 3 Jahren eine Weiterbildung erfolgt", "Wenn nicht alle 5 Jahren eine Weiterbildung erfolgt", "Wenn die Grundqualifikationsprüfung nicht alle 5 Jahre neu abgelegt wird"], correctIndex: 2 },
			{ id: 623, ziffer: "3g", klasse: "C1, C1E, C, CE", frage: "Wie lang ist ein Fahrerqualifizierungsnachweis gültig?", options: ["3 Jahre", "4 Jahre", "5 Jahre", "6 Jahre"], correctIndex: 2 },
			{ id: 624, ziffer: "3g", klasse: "C1, C1E, C, CE", frage: "Wie ist die Dauer der Weiterbildung für die Verlängerung des Fahrerqualifizierungsnachweises geregelt?", options: ["Es müssen mindestens 35 Stunden innerhalb von 3 Jahren nachgewiesen werden", "Es müssen mindestens 35 Stunden innerhalb von 5 Jahren nachgewiesen werden", "Es dürfen höchstens 25 Stunden innerhalb von 2 Jahren nachgewiesen werden", "Es dürfen höchstens 30 Stunden innerhalb von 4 Jahren nachgewiesen werden"], correctIndex: 1 },
			{ id: 625, ziffer: "3g", klasse: "C1, C1E, C, CE", frage: "Wo kann in Österreich eine rechtsgültige Weiterbildung für die Verlängerung des Fahrerqualifizierungsnachweises absolviert werden?", options: ["Bei einer ermächtigten Ausbildungsstätte", "Bei jeder Person, die in ihrem Führerschein den Code \"95\" eingetragen hat", "Bei jedem Güterbeförderungsunternehmen, das mehr als 5 LKW betreibt", "Bei jeder Ausbildungsstätte, die Stapler- und Krankurse anbieten darf"], correctIndex: 0 },
			{ id: 626, ziffer: "3g", klasse: "C1, C1E, C, CE", frage: "Für welche Transporte sind neben dem Fahrerqualifizierungsnachweis Zusatzqualifikationen notwendig?", options: ["Gefahrguttransporte sowie Transporte von Lebendtieren auf Langstrecken", "Schwerlasttransporte", "Temperaturgeführte Transporte", "Autotransporte"], correctIndex: 0 },
			{ id: 651, ziffer: "3h", klasse: "D1, D1E, D, DE", frage: "Welche Funktionen übernimmt ein Reiseleiter bei einer Busfahrt?", options: ["Er informiert die Reisegäste über den Ablauf der Reise und über die täglichen Reiseziele", "Er hat in erster Linie die Aufgabe, die Fahrerin bzw. den Fahrer beim Lenken des Omnibusses zu unterstützen", "Er kümmert sich darum, dass das Reisegepäck im Bus sicher verstaut ist", "Er kümmert sich darum, dass die Fahrerin bzw. den Fahrer beim Lenken des Omnibusses nicht ermüden"], correctIndex: 0 },
			{ id: 652, ziffer: "3h", klasse: "D1, D1E, D, DE", frage: "Sie befördern mit einem Omnibus eine Gruppe von Personen im Gelegenheitsverkehr von Wien nach Salzburg. Welche Dokumente müssen Sie als Lenker dabei mitführen?", options: ["Identitätsnachweise für alle mitfahrenden Personen", "Ein Fahrtenblatt aus dem EU-Fahrtenheft", "Die Zulassungsbescheinigung des Omnibusses", "Eine Abschrift der Konzessionsurkunde des Unternehmens"], correctIndex: 2 },
			{ id: 653, ziffer: "3h", klasse: "D1, D1E, D, DE", frage: "Der Fahrerqualifizierungsnachweis verliert seine Gültigkeit, wenn...", options: ["die Lenkerberechtigung entzogen wird", "innerhalb von 3 Jahren keine Weiterbildung erfolgt", "innerhalb von 5 Jahren keine Weiterbildung erfolgt", "die Grundqualifikationsprüfung nicht alle 5 Jahre wiederholt wird"], correctIndex: 2 },
			{ id: 654, ziffer: "3h", klasse: "D1, D1E, D, DE", frage: "Wie lang ist ein Fahrerqualifizierungsnachweis gültig?", options: ["3 Jahre", "4 Jahre", "5 Jahre", "6 Jahre"], correctIndex: 2 },
			{ id: 655, ziffer: "3h", klasse: "D1, D1E, D, DE", frage: "Wie ist die Dauer der Weiterbildung für die Verlängerung des Fahrerqualifizierungsnachweises geregelt?", options: ["Es müssen mindestens 35 Stunden innerhalb von 3 Jahren nachgewiesen werden", "Es müssen mindestens 35 Stunden innerhalb von 5 Jahren nachgewiesen werden", "Es dürfen höchstens 25 Stunden innerhalb von 2 Jahren nachgewiesen werden", "Es dürfen höchstens 30 Stunden innerhalb von 4 Jahren nachgewiesen werden"], correctIndex: 1 },
			{ id: 656, ziffer: "3h", klasse: "D1, D1E, D, DE", frage: "Wo kann in Österreich eine rechtsgültige Weiterbildung für die Verlängerung des Fahrerqualifizierungsnachweises absolviert werden?", options: ["Bei einer ermächtigten Ausbildungsstätte", "Bei jeder Person, die in ihrem Führerschein den Code \"95\" eingetragen hat", "Bei jedem Omnibusunternehmen, das mehr als 5 Omnibusse betreibt", "Bei jeder Ausbildungsstätte, die Stapler- und Krankurse anbieten darf"], correctIndex: 0 },
			{ id: 700, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Sie wollen ein Fahrzeug mit digitalem Kontrollgerät lenken. Wie sollten Sie sich bei Fahrtende verhalten, wenn Ihre Fahrerkarte defekt geworden oder verloren gegangen ist?", options: ["Ich fertige einen Tagesausdruck an. Dieser Ausdruck ist mit meinem Namen und der Nummer des Führerscheins oder Nummer der Fahrerkarte sowie meiner Unterschrift zu versehen. Sollten Tätigkeiten auf dem Ausdruck nicht aufscheinen, vermerke ich diese auf dem Ausdruck", "Ich muss sämtliche Daten aus dem Kontrollgerät auslesen", "Ich vermerke das Fahrtende in einer Notiz auf meinem Mobiltelefon", "Ich fotografiere den im Display angezeigten Kilometerstand"], correctIndex: 0 },
			{ id: 701, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Ihre Fahrerkarte ist defekt geworden oder verloren gegangen. Innerhalb welcher Frist müssen Sie eine Ersatzkarte beantragen?", options: ["Spätestens drei Tage nach dem Defekt oder Verlust der Fahrerkarte", "Spätestens sieben Tage nach dem Defekt oder Verlust der Fahrerkarte", "Spätestens 14 Tage nach dem Defekt oder Verlust der Fahrerkarte", "Spätestens bei der Rückkunft zum Betriebsstandort"], correctIndex: 1 },
			{ id: 702, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Tätigkeiten fallen unter den Begriff \"Bereitschaftszeit\"?", options: ["Wenn ich das Fahrzeug auf einer Fähre oder einem Zug begleite. Dabei darf ich den Arbeitsplatz verlassen. Diese Zeiten und ihre voraussichtliche Dauer müssen mir vorab bekannt sein", "Nur solche, bei denen ich das Fahrzeug belade", "Wenn ich am Fahrzeug einen Radwechsel vornehme", "Nur solche, bei denen ich das Fahrzeug entlade"], correctIndex: 0 },
			{ id: 703, ziffer: "2a", klasse: "C1, C1E, C, CE / D1, D1E, D, DE", frage: "Welche Tätigkeiten fallen unter den Begriff \"Bereitschaftszeit\"?", options: ["Wenn ich das Fahrzeug wegen eines Fahrverbotes abstellen muss. Dabei darf ich den Arbeitsplatz verlassen. Diese Zeiten und ihre voraussichtliche Dauer müssen mir vorab bekannt sein", "Nur solche, bei denen ich das Fahrzeug belade", "Wenn ich am Fahrzeug einen Radwechsel vornehme", "Nur solche, bei denen ich das Fahrzeug entlade"], correctIndex: 0 },
			{ id: 704, ziffer: "2c", klasse: "D1, D1E, D, DE", frage: "Welche Standortdaten zeichnet das Kontrollgerät Smart Tacho 2 (GEN 2 V 2) automatisch auf?", options: ["Die Geodaten zu Beginn und am Ende der täglichen Arbeitszeit bzw. nach jeweils drei Stunden Lenkzeit, beim erstmaligen Einsteigen der Fahrgäste am Beginn und das letztmalige Aussteigen am Ende einer Rundfahrt, bei jeder Überschreitung einer Grenze zu einem Mitgliedsstaat der EU", "Den Standort nach jeweils viereinhalb Stunden Lenkzeit", "Den vollständigen Fahrtverlauf", "Den Standort einer Lenkpause"], correctIndex: 0 }
       ];
/* ============================================================
  /* ============================================================
   Bus & LKW Questions Catalog - Complete Script
   ============================================================ */

let questionsData = [];
let currentIndex = 0;
let mode = null;
let userAnswers = {};
let timerInterval = null;
let timeLeft = 30 * 60; // 30 minutes in seconds

/* ===================== Shuffling Utilities ===================== */
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function shuffleQuestionOptions(question) {
    const indices = question.options.map((_, i) => i);
    const shuffledIndices = shuffleArray(indices);
    const newOptions = shuffledIndices.map(i => question.options[i]);
    const newCorrectIndex = shuffledIndices.indexOf(question.correctIndex);
    return { ...question, options: newOptions, correctIndex: newCorrectIndex };
}

/* ===================== German Text-to-Speech Settings ===================== */
let autoSpeakEnabled = false;
let deVoice = null;
let voicesReady = false;
let speakToken = 0; 
let activeSpeechButton = null; 

function scoreVoice(v) {
    const lang = (v.lang || '').replace('_', '-').toLowerCase();
    if (!lang.startsWith('de')) return -1;
    const n = v.name.toLowerCase();
    let s = 0;
    if (lang === 'de-de') s += 20;
    else if (lang === 'de-at' || lang === 'de-ch') s += 5;
    if (/natural|neural|online/.test(n)) s += 100;
    if (/google/.test(n)) s += 60;
    if (/premium|enhanced|erweitert|verbessert/.test(n)) s += 50;
    return s;
}

function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || !voices.length) return;

    const germanVoices = voices
        .map(v => ({ v, s: scoreVoice(v) }))
        .filter(x => x.s >= 0)
        .sort((a, b) => b.s - a.s)
        .map(x => x.v);

    if (!germanVoices.length) return;

    let saved = null;
    try { saved = localStorage.getItem('deVoiceName'); } catch (e) {}
    deVoice = germanVoices.find(v => v.name === saved) || germanVoices[0];
    voicesReady = true;

    const sel = document.getElementById('voiceSelect');
    if (sel) {
        sel.innerHTML = '';
        germanVoices.forEach(v => {
            const o = document.createElement('option');
            o.value = v.name;
            o.textContent = `${v.name} (${v.lang})`;
            if (v === deVoice) o.selected = true;
            sel.appendChild(o);
        });

        sel.onchange = function() {
            changeVoice(this.value);
        };
    }
}

if ('speechSynthesis' in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    let tries = 0;
    const voiceInterval = setInterval(() => {
        loadVoices();
        if (voicesReady || ++tries > 20) clearInterval(voiceInterval);
    }, 250);
}

function changeVoice(name) {
    const v = window.speechSynthesis.getVoices().find(x => x.name === name);
    if (v) {
        deVoice = v;
        try { localStorage.setItem('deVoiceName', name); } catch (e) {}
        stopSpeaking();
        const token = speakToken;
        speakGerman('Dies ist ein Test der deutschen Stimme.', 0.92, token);
    }
}

/* ===================== Audio & Pronunciation Handling ===================== */
const audioPlayer = new Audio();
const AUDIO_DIR = './audio/';
let stopCurrentMp3 = null;

function hasAudio(text) {
    if (typeof AUDIO_MAP === 'undefined') return false;
    if (!text) return false;

    const cleanText = text.trim().replace(/\s+/g, ' ');
    let audioFile = AUDIO_MAP[cleanText];
    
    if (!audioFile) {
        const foundKey = Object.keys(AUDIO_MAP).find(k => k.trim().replace(/\s+/g, ' ') === cleanText);
        if (foundKey) audioFile = AUDIO_MAP[foundKey];
    }
    return !!audioFile;
}

function playMp3(file) {
    return new Promise(resolve => {
        stopCurrentMp3 = () => resolve(true);
        audioPlayer.onended = () => resolve(true);
        audioPlayer.onerror = () => resolve(false);
        audioPlayer.src = AUDIO_DIR + file;
        audioPlayer.play().then(() => {}).catch(() => resolve(false));
    });
}

function stopSpeaking() {
    speakToken++;
    try { audioPlayer.pause(); } catch (e) {}
    if (stopCurrentMp3) { const f = stopCurrentMp3; stopCurrentMp3 = null; f(); }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    
    if (activeSpeechButton) {
        activeSpeechButton.classList.remove('speaking');
        activeSpeechButton = null;
    }
}

function splitForSpeech(text, maxLen = 120) {
    if (!text) return [];
    const cleanText = text.replace(/[\n\r]+/g, ' ').trim();
    const sentences = cleanText.split(/(?<=[.!?;:])\s+/);
    const chunks = [];
    sentences.forEach(s => {
        while (s.length > maxLen) {
            let cut = s.lastIndexOf(',', maxLen);
            if (cut < 30) cut = s.lastIndexOf(' ', maxLen);
            if (cut < 1) cut = maxLen;
            chunks.push(s.slice(0, cut + 1).trim());
            s = s.slice(cut + 1);
        }
        if (s.trim()) chunks.push(s.trim());
    });
    return chunks;
}

function speakChunk(text, rate) {
    return new Promise(resolve => {
        if (!('speechSynthesis' in window)) {
            resolve();
            return;
        }
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = deVoice ? deVoice.lang : 'de-DE';
        utter.rate = rate;
        utter.pitch = 1;
        utter.volume = 1;
        if (deVoice) utter.voice = deVoice;

        const guard = setTimeout(() => {
            window.speechSynthesis.cancel();
            resolve();
        }, 15000);

        utter.onend = () => { clearTimeout(guard); resolve(); };
        utter.onerror = () => { clearTimeout(guard); resolve(); };
        
        window.speechSynthesis.speak(utter);
    });
}

async function speakBrowser(text, rate = 0.92, token = speakToken) {
    if (!('speechSynthesis' in window) || !text) return;
    const chunks = splitForSpeech(text);
    for (const chunk of chunks) {
        if (token !== speakToken) return;
        await speakChunk(chunk, rate);
    }
}

async function speakGerman(text, rate = 0.92, token = speakToken) {
    if (!text) return;
    
    if (typeof AUDIO_MAP !== 'undefined') {
        const cleanText = text.trim().replace(/\s+/g, ' ');
        let audioFile = AUDIO_MAP[cleanText];
        if (!audioFile) {
            const foundKey = Object.keys(AUDIO_MAP).find(k => k.trim().replace(/\s+/g, ' ') === cleanText);
            if (foundKey) audioFile = AUDIO_MAP[foundKey];
        }

        if (audioFile) {
            const ok = await playMp3(audioFile);
            if (ok || token !== speakToken) return;
        }
    }
    
    await speakBrowser(text, rate, token);
}

async function speakOnClick(event, text) {
    event.stopPropagation();
    if (!('speechSynthesis' in window) && !hasAudio(text)) return;
    
    const clickedBtn = event.currentTarget;

    if (activeSpeechButton === clickedBtn && (window.speechSynthesis.speaking || !audioPlayer.paused)) {
        stopSpeaking();
        return;
    }

    stopSpeaking();
    
    activeSpeechButton = clickedBtn;
    clickedBtn.classList.add('speaking');

    const token = speakToken;
    await speakGerman(text, 0.92, token);

    if (token === speakToken) {
        clickedBtn.classList.remove('speaking');
        if (activeSpeechButton === clickedBtn) activeSpeechButton = null;
    }
}

async function speakCurrentQuestion() {
    const q = questionsData[currentIndex];
    if (!q) return;

    stopSpeaking();
    const token = speakToken;
    await new Promise(r => setTimeout(r, 100));
    if (token !== speakToken) return;

    await speakGerman(q.frage, 0.92, token);
    for (let i = 0; i < q.options.length; i++) {
        if (token !== speakToken) return;
        await speakGerman(`Antwort ${i + 1}.`, 0.92, token);
        if (token !== speakToken) return;
        await speakGerman(q.options[i], 0.92, token);
    }
}

function toggleAutoSpeak() {
    if (!('speechSynthesis' in window)) return;

    if (!autoSpeakEnabled) {
        const silentUtter = new SpeechSynthesisUtterance('');
        silentUtter.volume = 0;
        window.speechSynthesis.speak(silentUtter);
    }

    autoSpeakEnabled = !autoSpeakEnabled;
    const btn = document.getElementById('ttsToggle');

    if (autoSpeakEnabled) {
        if (!voicesReady) loadVoices();
        speakCurrentQuestion();
        if (btn) {
            btn.innerHTML = '<i class="fa-solid fa-volume-high"></i> Vorlesen: AN';
            btn.style.background = 'var(--success)';
        }
    } else {
        stopSpeaking();
        if (btn) {
            btn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> Vorlesen: AUS';
            btn.style.background = '';
        }
    }
}

/* ===================== Quiz Modes & Flow Control ===================== */
function setMode(selectedMode, event) {
    stopSpeaking();
    mode = selectedMode;
    document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('active'));
    if (event && event.currentTarget) event.currentTarget.classList.add('active');

    currentIndex = 0;
    userAnswers = {};

    if (mode === 'exam') {
        // Pick exactly 40 random questions for the exam mode
        const picked = shuffleArray(originalQuestions).slice(0, 40);
        questionsData = picked.map(shuffleQuestionOptions);
    } else {
        questionsData = originalQuestions.map(shuffleQuestionOptions);
    }

    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizContent').style.display = 'block';

    const mainHeader = document.getElementById('mainHeader');
    const quizModesSection = document.getElementById('quizModesSection');
    const searchBarSection = document.getElementById('searchBarSection');
    const jumpContainer = document.getElementById('jumpContainer');
    const examTimerHeader = document.getElementById('examTimerHeader');
    const historyContainer = document.getElementById('historyContainer');

    // Hide history container when starting a mode
    if (historyContainer) historyContainer.style.display = 'none';

    if (mode === 'exam') {
        mainHeader.style.display = 'none';
        quizModesSection.style.display = 'none';
        searchBarSection.style.display = 'none';
        jumpContainer.style.display = 'none';
        examTimerHeader.style.display = 'flex';
        startTimer();
    } else {
        mainHeader.style.display = 'none';
        quizModesSection.style.display = 'none';
        searchBarSection.style.display = 'flex';
        examTimerHeader.style.display = 'none';
        stopTimer();
    }
    renderQuestion();
}

function renderQuestion() {
    if (!questionsData.length) return;
    const q = questionsData[currentIndex];

    document.getElementById('questionNumber').textContent = `Frage ID: ${q.id}`;
    document.getElementById('questionZiffer').textContent = `Ziffer: ${q.ziffer}`;
    document.getElementById('questionKlasse').textContent = `Klasse: ${q.klasse}`;
    
    const questionContainer = document.getElementById('questionDe');
    const escapedQuestion = q.frage.replace(/['`]/g, "\\'").replace(/"/g, '&quot;');
    questionContainer.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
            <div style="flex: 1;">${q.frage}</div>
            <button type="button" class="tts-icon-btn" onclick="speakOnClick(event, '${escapedQuestion}')" title="Listen to question">
                <i class="fa-solid fa-volume-high"></i>
            </button>
        </div>
    `;

    document.getElementById('progressIndicator').textContent = `${currentIndex + 1} / ${questionsData.length}`;

    const submitBtn = document.getElementById('submitExamBtn');
    submitBtn.style.display = (mode === 'exam') ? 'inline-flex' : 'none';

    // Change "Next" button to "Finish" on the last question
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        if (currentIndex === questionsData.length - 1) {
            nextBtn.innerHTML = 'Finish <i class="fa-solid fa-check"></i>';
            nextBtn.className = 'btn btn-success';
            nextBtn.onclick = confirmSubmitExam;
        } else {
            nextBtn.innerHTML = 'Next <i class="fa-solid fa-arrow-right"></i>';
            nextBtn.className = 'btn';
            nextBtn.onclick = nextQuestion;
        }
    }

    const optionsContainer = document.getElementById('optionsList');
    optionsContainer.innerHTML = '';

    q.options.forEach((optDe, idx) => {
        const item = document.createElement('div');
        item.className = 'option-item';

        if (userAnswers[q.id] === idx) {
            item.classList.add('selected');
            if (mode === 'practice') {
                item.classList.add(idx === q.correctIndex ? 'correct' : 'incorrect');
            }
        } else if (mode === 'practice' && userAnswers[q.id] !== undefined && idx === q.correctIndex) {
            item.classList.add('correct');
        }

        const escapedOpt = optDe.replace(/['`]/g, "\\'").replace(/"/g, '&quot;');
        item.innerHTML = `
            <input type="radio" name="q_${q.id}" ${userAnswers[q.id] === idx ? 'checked' : ''}>
            <div style="flex:1; line-height:1.4; display: flex; justify-content: space-between; align-items: center; gap: 10px;">
                <div>${optDe}</div>
                <button type="button" class="tts-icon-btn" onclick="speakOnClick(event, '${escapedOpt}')" title="Listen to option">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>`;
        
        item.onclick = () => selectOption(idx);
        optionsContainer.appendChild(item);
    });

    updateJumpGrid();

    if (autoSpeakEnabled) {
        stopSpeaking();
        setTimeout(speakCurrentQuestion, 300);
    }
}

function selectOption(idx) {
    userAnswers[questionsData[currentIndex].id] = idx;
    renderQuestion();
}

function nextQuestion() {
    if (currentIndex < questionsData.length - 1) {
        currentIndex++;
        renderQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    document.getElementById('themeToggle').innerHTML = next === 'dark'
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
}

/* ===================== Exam Timer (30 Minutes) ===================== */
function startTimer() {
    stopTimer();
    timeLeft = 30 * 60; // Exactly 30 minutes
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            stopTimer();
            alert("Die Prüfungszeit ist abgelaufen! (Exam time has expired)");
            evaluateExam();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

function updateTimerDisplay() {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    document.getElementById('timerDisplay').textContent =
        `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/* ===================== Save Test Results ===================== */
function saveTestResult(score, total) {
    try {
        const resultData = {
            date: new Date().toLocaleDateString('nl-BE'),
            score: score,
            total: total
        };

        let history = [];
        const savedHistory = localStorage.getItem('exam_history');
        if (savedHistory) {
            history = JSON.parse(savedHistory);
        }

        history.push(resultData);
        localStorage.setItem('exam_history', JSON.stringify(history));
    } catch (e) {
        console.error("Error saving results:", e);
    }
}

/* ===================== Submit and Evaluate Exam ===================== */
function confirmSubmitExam() {
    if (confirm("Möchten Sie die Prüfung wirklich abgeben? (Do you really want to submit the exam?)")) {
        stopTimer();
        evaluateExam();
    }
}

function evaluateExam() {
    stopTimer();
    stopSpeaking();
    let correctCount = 0;
    const answeredCount = questionsData.filter(q => userAnswers[q.id] !== undefined).length;
    let wrongHtml = '';

    questionsData.forEach(q => {
        const choice = userAnswers[q.id];
        if (choice === q.correctIndex) {
            correctCount++;
        } else {
            const userText = choice !== undefined ? q.options[choice] : 'Nicht beantwortet';
            const correctText = q.options[q.correctIndex];
            wrongHtml += `
                <div style="text-align:left; background:rgba(220,38,38,.05); border:1px solid var(--danger); padding:14px; border-radius:10px; margin-bottom:12px;">
                    <strong style="color:var(--danger);">Frage ID: ${q.id} - Ziffer: ${q.ziffer}</strong><br>
                    <p style="margin:6px 0; font-weight:600; font-size:1.05rem;">${q.frage}</p>
                    <p style="color:var(--danger); margin:4px 0;"><i class="fa-solid fa-xmark"></i> Ihre Antwort: ${userText}</p>
                    <p style="color:var(--success); margin:4px 0;"><i class="fa-solid fa-check"></i> Richtige Antwort: ${correctText}</p>
                </div>`;
        }
    });

    saveTestResult(correctCount, questionsData.length);

    const percent = Math.round((correctCount / questionsData.length) * 100);
    const passed = percent >= 80;

    document.getElementById('quizCard').innerHTML = `
        <div style="text-align:center; padding:20px;">
            <i class="fa-solid ${passed ? 'fa-circle-check' : 'fa-circle-xmark'}"
               style="font-size:3.5rem; color:${passed ? 'var(--success)' : 'var(--danger)'}; margin-bottom:12px;"></i>
            <h2 style="margin-bottom:10px;">Prüfungsergebnis (Exam Result)</h2>
            <p style="font-size:1.1rem; margin-bottom:10px;">Beantwortete Fragen: ${answeredCount} von ${questionsData.length}</p>
            <p style="font-size:1.2rem; font-weight:bold; margin-bottom:15px; color:${passed ? 'var(--success)' : 'var(--danger)'};">
                Ergebnis: ${correctCount} (${percent}%) - ${passed ? 'Bestanden (Passed)' : 'Nicht bestanden (Failed)'}
            </p>
            ${wrongHtml ? `
                <div style="margin-top:25px; text-align:left;">
                    <h3 style="margin-bottom:14px; border-bottom:2px solid var(--border); padding-bottom:8px; font-size:1.2rem;">Fehleranalyse (Error Analysis):</h3>
                    ${wrongHtml}
                </div>` :
                '<p style="color:var(--success); font-weight:bold; margin:15px 0;">Hervorragend! Sie haben alle Fragen richtig beantwortet.</p>'}
            <div style="margin-top:25px;">
                <a href="https://www.expatnetwork.online/" class="btn"><i class="fa-solid fa-house"></i> Startseite</a>
            </div>
        </div>`;
}

/* ===================== Quick Jump & Search ===================== */
function toggleJumpGrid() {
    const grid = document.getElementById('jumpContainer');
    grid.style.display = grid.style.display === 'none' ? 'block' : 'none';
}

function updateJumpGrid() {
    const grid = document.getElementById('jumpGrid');
    grid.innerHTML = '';
    questionsData.forEach((q, idx) => {
        const btn = document.createElement('div');
        btn.className = `jump-btn ${currentIndex === idx ? 'current' : ''}`;
        btn.textContent = q.id;
        btn.onclick = () => {
            currentIndex = idx;
            renderQuestion();
            toggleJumpGrid();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        grid.appendChild(btn);
    });
}

function filterQuestions() {
    const term = document.getElementById('searchInput').value.toLowerCase().trim();
    if (!term) return;
    const idx = questionsData.findIndex(q =>
        q.id.toString() === term || q.frage.toLowerCase().includes(term)
    );
    if (idx !== -1) { currentIndex = idx; renderQuestion(); }
}

/* ===================== Exam History Management ===================== */
function renderExamHistory(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let history = [];
    try {
        const savedHistory = localStorage.getItem('exam_history');
        if (savedHistory) history = JSON.parse(savedHistory);
    } catch (e) {
        history = [];
    }

    if (history.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:var(--text-muted); padding:15px;">No exam history recorded yet.</p>';
        return;
    }

    let html = `
        <div style="margin-top: 20px; text-align: left;">
            <h3 style="margin-bottom: 12px; border-bottom: 2px solid var(--border); padding-bottom: 6px;">Exam History</h3>
            <ul style="list-style: none; padding: 0;">
    `;

    history.slice().reverse().forEach((res, index) => {
        const percent = Math.round((res.score / res.total) * 100);
        const passed = percent >= 80;
        
        html += `
            <li style="background: var(--card-bg, #f9f9f9); border: 1px solid var(--border); padding: 12px; border-radius: 8px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <strong>Exam #${history.length - index}</strong><br>
                    <span style="font-size: 0.9rem; color: var(--text-muted);">${res.date}</span>
                </div>
                <div style="text-align: right;">
                    <span style="font-weight: bold; color: ${passed ? 'var(--success)' : 'var(--danger)'};">
                        ${res.score} / ${res.total} (${percent}%)
                    </span><br>
                    <span style="font-size: 0.85rem; padding: 2px 6px; border-radius: 4px; background: ${passed ? 'rgba(34,197,94,0.1)' : 'rgba(220,38,38,0.1)'}; color: ${passed ? 'var(--success)' : 'var(--danger)'};">
                        ${passed ? 'Passed' : 'Failed'}
                    </span>
                </div>
            </li>
        `;
    });

    html += `
            </ul>
            <button onclick="clearExamHistory('${containerId}')" class="btn" style="background: var(--danger); margin-top: 10px; font-size: 0.9rem; padding: 6px 12px;">Clear History</button>
        </div>
    `;

    container.innerHTML = html;
}

function clearExamHistory(containerId) {
    if (confirm("Are you sure you want to clear the exam history?")) {
        try {
            localStorage.removeItem('exam_history');
            renderExamHistory(containerId);
        } catch (e) {
            console.error("Error clearing history:", e);
        }
    }
}