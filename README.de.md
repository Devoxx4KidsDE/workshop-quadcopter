![Devoxx4Kids](http://www.devoxx4kids.de/wp-content/uploads/2015/07/cropped-header_hp.jpg)


[![Dependency Status](https://david-dm.org/Devoxx4KidsDE/workshop-quadcopter.svg)](https://david-dm.org/Devoxx4KidsDE/workshop-quadcopter)

# Devoxx4Kids quadcopter Workshop

Dieses Projekt beinhalted die Aufgaben für den Devoxx4Kids quadcopter Workshop.
Der Workshop wurde erstellt für Kinder zwischen 8 und 14 Jahren.
Die ersten drei Aufgaben präsentieren die Basics des Workshops, in denen alle Kinder selbst zu programmieren haben um die gegebene Aufgabe zu lösen.
Wenn sie diese Aufgaben meistern ist es ihnen Frei mit den QuadCoptern selbst zu testen

## Erste Aufgabe - Grundlegende Einweisung

Nutze die Anleitungen um zu lernen was man mit dem Quadcopter machen kann und lerne die 
Syntax:
* Rückwärts
* Vorwärts
* Links
* Rechts
* Hoch
* Runter
* im Uhrzeigersinn
* entgegen dem Uhrzeigersinn

## Zweite Aufgabe - Grundlegende Geometry

Fliege ein Rechteck und ein Dreieck

## Dritte Aufgabe - "Haus vom Nikolaus"

Fliege das berühmte "Haus vom Nikolaus". Es ist ein mathematisches Problem der Graphentheorie,in der ein Euler-pfad, aber kein Euler-Zyklus existiert (http://en.wikipedia.org/wiki/Eulerian_path).

Die Kinder sollten diese Aufgabe mit absoluten Werten und der Funktion go() lösen.

## Präsentation

Die Präsentation und Handouts für die Kinder sind verfügbar im Präsentations Ordner:
([200~https://github.com/Devoxx4KidsDE/workshop-quadcopter/tree/master/presentation)

## Installation

Prüfen Sie das mit dem https://github.com/derTobsch/ardrone-autonomy repository, Seite and Seite

```sh
git clone git@github.com:Devoxx4KidsDE/workshop-quadcopter.git
git clone https://github.com/derTobsch/ardrone-autonomy.git
```
Gehe in den 'workshop-quadcopter' Ordner
```sh
cd workshop-quadcopter
```
Installiere alle abhängigkeiten via npm ( Node muss installiert werden http://nodejs.org/ )

```sh
npm install
```
## Wie es zu benutzen ist

Gehe in den 'workshop-quadcopter' Ordner
```sh
cd workshop-quadcopter
```
Starte eine Mission welche bereits im Workshop Ordner ist mit
```sh
node startMission.js $mission-name
```

Hinweis: Du brauchst nicht den ganzen Pfad oder die Dateierweiterung. 
Der Name der Datei genügt.
Ebenfalls sicher gehen das man 'ardrone-autonomy' installiert hat

### Beispiel
```sh
node startMission.js one
```


english version : https://github.com/Devoxx4KidsDE/workshop-quadcopter/blob/master/README.md
