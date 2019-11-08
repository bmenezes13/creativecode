# Domino Clock

When researching interesting and unsual clocks in search of some inspiration, I came across this image of a wall clock made up of three domino pieces (source: http://www.instantshift.com/2013/07/08/coolest-and-unusual-clocks/).

When wanting to apply this idea in p5js, I wanted to expand it as much as I can. While the source of inspiration only counted hours and minutes, I wanted my clock to display seconds, as well as the date.

https://editor.p5js.org/bmenezes13/present/sokpOCL3Q

I used the standard date and time format (m/dd/yy and 00:00:00, respectively) and rotated them to be vertical, with month and hour on top, and year and seconds at the bottom. With both months and hours only counting up to twelve, they were each only designated one domino each, while the other measurements were each designated two dominos, one for each possible digit (in the case of a 0, the domino is left blank). 
