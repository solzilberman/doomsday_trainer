![image](https://user-images.githubusercontent.com/45021394/182700001-d4a14927-6104-4941-8eb7-1f41c963f6b1.png)


### What is this?
In 1973, John Conway described a *doomsday* algorithm to compute the day of the week given any date on the Gregorian Calendar. This is a web application to practice computing the doomsday algorithm mentally. 

### How to Use ?
Visit the live [application](https://solzilberman.github.io/doomsday_trainer/).

Enter computed date as indexed integer $0-6$

eg. `SUN=0, MON=1, ... SAT=6`

This application will track your success/fail ratio. 
**How many can you get in a row?**

### Learning the Doomsday Algorithm
Although this may appear confusing at first, it is actually quite easy to pickup after a few hours of practice. 

#### Here is a basic overview:
Certain days of each year are known as **doomsdays**.
- Any **doomsday** for a given year `X` will be the same day as all other **doomsdays**.
- Easy to remember **doomsdays**: $4/4, 6/6, 8/8, 10/10, 12/12, 5/9, 9/5, 7/11, 11/7$
- More are available online and require conditions based on if it is a leap year

Memorize these base years and their associated **doomsdays**:
- 1700-Sun
- 1800-Fri
- 1900-Wed
- 2000-Tue

Therefore, the algorithm is quite simple:
- calculate **doomsday** for a given year using base years as starting points
- calculate diffirence of `date_to_predict` from **doomsday** for given year.
- add this to that years **doomsday* and modulo by $7$.
- This should be the day the specific date fell on!

Example Solve:
1. date = $7/24/1889$
2. $1800$ = Fri year = $5$
3. $[5 + (89+\lfloor 89/4 \rfloor) \mod 7]=4$
4. Therefore **doomsday** for $1889=4$ (a Thursday).
5. We know one of our anchors is $7/11$ which is 13 away from needed date $7/24$.
6. So we take $13$(from step 5) and $4$ (step 3) and compute: $13+4\mod7=3$
7. Therefore `7/24/1889` was a $3$ (Wednesday). Confirm [here](https://www.google.com/search?q=what+day+was+07%2F24%2F1889)

Highly reccomend the video below to get started and understand the leap-year gotchas + tips and tricks to speed up computation.

#### Additional resources I used to learn this:
- [wikepedia](https://en.wikipedia.org/wiki/Doomsday_rule)
- [numberphile tutorial](https://www.youtube.com/watch?v=z2x3SSBVGJU)
- [Mike Boyd learning this over a weekend] https://youtu.be/eSpW4I5moiA
