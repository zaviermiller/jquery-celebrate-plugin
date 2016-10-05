# .celebrate()
## Syntax:

 `$('.example').celebrate({unicode:"\u2606", color: "black", particles: 5, radius: 200)`
  
  Lets walk through it.
 
### Unicode
 
 This option is where you put the unicode for the symbols. **Make sure it is in the syntax as below, or you will get an error.** A  list of all unicode symbols can be found [here] (http://www.fileformat.info/info/unicode/category/So/list.htm)
 
#### Example:
 `$('.example').celebrate({unicode:"\u2606"})`
 
### Color

This option is for setting the color of the particles. You can use either the HTML 5 colors, or Hex codes. **If you use Hex codes make sure to have the "#"** 

#### Example:
`$('.example').celebrate({unicode:"\u2606", color:"green"})`
`$('.example').celebrate({unicode:"\u2606", color:"#1bf5a2"})`

### Particles

This option allows you to set the number of particles. The default is 5, so make sure to change it if you want any other amount (unless of course you want 5 particles).

#### Example:
`$('.example').celebrate({unicode:"\u2606", color:"green", particles: 5})`

### Radius

This option lets you change how far the particles will go. The default is 200, and, in my opinion, the best for a celebration.

#### Example:
`$('.example').celebrate({unicode:"\u2606", color:"green", particles: 5, radius: 200})`

### Start Size

This option lets you set the size of the particles as they start the animation. **Make sure that you do not add "px" to the end of your number!**

#### Example:
`$('.example').celebrate({unicode:"\u2606", color:"green", particles: 5, radius: 200, start_size: 15,})`

### End Size

This option lets you set the minimum and maximum values that the particles can be at the end of the animation. Since the size of the particles at the end of the animation is random, you will not set a definite number, just a range. **Again, please do not use "px" when setting your number!**

#### Example:

`$('.example').celebrate({unicode:"\u2606", color:"green", particles: 5, radius: 200, start_size: 15, min_end_size: 40, max_end_size: 75})`

### Duration

This option lets you set the minimum and maximum time that the particles will last. Again, since the duration is random, you will set a range, not a set time. **The time is in milliseconds (as usual in jQuery), so 400, would equal 4 seconds.**
## Other Things:
### (I will be updating this list as I can think of more things that are needed info)

If you want to edit the particles, you can use the CSS class "particle"

The function can be stacked up, if you would like to know the correct way to do so, please check the demo files code, and look at the "lucky charms".
