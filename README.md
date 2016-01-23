![Devoxx4Kids](http://www.devoxx4kids.de/wp-content/uploads/2015/07/cropped-header_hp.jpg)


[![Dependency Status](https://david-dm.org/Devoxx4KidsDE/workshop-quadcopter.svg)](https://david-dm.org/Devoxx4KidsDE/workshop-quadcopter)

# Devoxx4Kids quadcopter workshops

This project keeps the tasks for the Devoxx4Kids quadcopter workshop.
This workshop was made for 8 to 14 year old kids. The first three workshops represented the basic workshop package, 
which all kids have to program in their way to succeed the given exercise. If they succeeded, they were free
to try what they want with the quadcopter.


## First exercise - Basic instructions

Use all instructions of the quadcopter to learn what you can do and learn the syntax:
* Backward
* Forward
* Left
* Right
* Up
* Down
* Clockwise
* Counterclockwise

## Second exercise - Basic geometry

Fly a rectangle and a triangle.

## Third exercise - "Haus vom Nikolaus"

Fly the famous "Haus of Nikolaus". It is a mathematical problem of the graph theory,
where a euler path but no euler cycle does exists (http://en.wikipedia.org/wiki/Eulerian_path).

The kids should solve this exercise with absolute values and the function go().


# Presentation

The presentation and a handout for the kids are available in the presentation directory.


# Installation

Check this out with the https://github.com/derTobsch/ardrone-autonomy repository side by side.

```sh
git clone git@github.com:Devoxx4KidsDE/workshop-quadcopter.git
git clone https://github.com/derTobsch/ardrone-autonomy.git
```

Go to the 'workshop-quadcopter' directory
```sh
cd workshop-quadcopter
```

Install all dependencies via npm (Node has to be installed, http://nodejs.org/)
```sh
npm install
```

# How to use

Go to the 'workshop-quadcopter' directory
```sh
cd workshop-quadcopter
```

Start a mission which is located in the workshop directory with
```sh
node startMission.js $mission-name
```

Hint: You do not need to use the full path or the file extension. The name of the file suffices. 
Also make sure that you installed 'ardrone-autonomy'


### Example
```sh
node startMission.js one
```