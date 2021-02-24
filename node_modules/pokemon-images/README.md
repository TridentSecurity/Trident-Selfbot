# pokemon-images
Images of pokemon from the pokemon api -> 
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png

# usage
```js
import Pokemon from 'pokemon-images';
var SquirtleImg = Pokemon.getSprite('squirtle');
console.log(SquirtleImg); // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
```

# todo
- [ ] add images based off of pokemon numbers
  - [ ] Pokemon.getSprite(7) === Pokemon.getSprite('squirtle')
- [ ] upgrade package to es6
- [ ] add all of the non default images (back, shiny etc.)
