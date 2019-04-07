#Journal of the project

##Aim
lo scopo è creare una scena visitabile in terza persona tramite tastiera e mouse

##Creazione scena
la scena è stata inizialmente creata piatta per capire come creare gruppi di cubi in posizioni ricorsive x,x1,x2,x3... z,z1,z2,z3...
siamo passati poi alla creazione di oggetti fisici quali alberi/case
abbiamo deciso di implementare la map 3D a partire da un'immagine

le approssimazioni per le collisioni con i cubi e gli aggiornamenti di posizione sono fatti con il floor per la Y e il round per X e Z


##Creazione camera
la camera è gestita da un pivot che si muove e ruota sull'asseY così da avere l'asse Z sempre allineato alla cam
il movimento verticale è fatto invece dalla cam stessa e non dal pivot così da avere una rotazione sull'asse X senza ruotare il pivot che doveva mantenere il piano XZ parallelo all'asse XZ del piano World

##Creazione albero - tronco
Una volta inizializzata la scena base composta da un terreno grande x*y, abbiamo deciso di realizzare alcuni
elementi da inserire, primo tra tutti il tronco: un cubo 1x1x1 con texture diversa per la faccia rivolta verso 
l'alto, così da avere le sembianze di un tronco tagliato.
![Image from Minecraft](img/tronco.png)

Presa confidenza con i tronchi abbiamo deciso di implementare qualcosa di più complesso, e abbiamo optato per degli alberi completi.
![Image from Minecraft](img/albero.png)

Nella crezione degli oggetti ci siamo resi conto che la rotazione va ad intaccare le ombre degli oggetti quindi va evitata il più possibile

##HighMapping
durante l'implementazione dell'highmap, che è avvenuta tramite l'utilizzo dell'array generato dalla scala di grigi dell'immagine (per ogni valore di colore rimappato una y di un cubo), ci siamo inbattuti nel problema di generare i cubi riempitivi sotto il livello di Y, generando tutti i cubi il programma tende a rallentare parecchio di FPS
