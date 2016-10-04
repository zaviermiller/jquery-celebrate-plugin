# star-particle-system
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
