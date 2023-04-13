(() => {
  let playing = true,
    activeHole = 1,
    dead = 0,
    lost = 0;

  const holeList = document.querySelectorAll('.hole')
    
  for(let i=0; i < holeList.length; i++ ){
      holeList[i].addEventListener('click', holeHandler)
  }

  function holeHandler(event){
    if(event.target.classList.contains( 'hole_has-mole' )){
        dead++;
        document.querySelector('#dead').innerText = dead
        if(dead >= 10){
          alert('Вы победили!');
          reset()
        }
    } else {
        lost++;
        document.querySelector('#lost').innerText = lost
        if(lost >= 5){
          alert("Вы проиграли!")
          reset()
        }
    }
    if(lost >4){
        playing = false
    }
  }

  function reset(){
    dead = 0
    lost = 0
    document.querySelector('#lost').innerText = 0
    document.querySelector('#dead').innerText = 0
  }


  const stop = () => playing = true,
    getHole = index => document.getElementById(`hole${index}`),
    deactivateHole = index =>
      getHole( index ).className = 'hole',
    activateHole = index =>
      getHole( index ).className = 'hole hole_has-mole',
    next = () => setTimeout(() => {
      if ( !playing ) {
        return;
      }
      
      deactivateHole( activeHole );
      activeHole = Math.floor( 1 + Math.random() * 9 );
      activateHole( activeHole );
      next();
    }, 800 );

  next();
})();
