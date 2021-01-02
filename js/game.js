class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();
                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     //players[index - 1].x = x;
                     //players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);
                         console.log("a")

                         
                     }
                    
                     
                 
                 }
                
                
                 
                 if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
                if(keyIsDown(32) && gameState === 1){
                    fire = createSprite(player.x,player.y,10,10)
                    fire.velocityY = -6
                    fire.addImage(fireimg)
                    fireGroup.add(fire)
                }
                 if (frameCount % 30 === 0) {
                     enemies = createSprite(random(100, 950), 0, 100, 100);
                     enemies.velocityY = 6;
                     //var rand = Math.round(random(1,5));
                     enemies.addImage(enemy_img)
                 }
                 
                  if (player.index !== null) {
                     //fill code here, to destroy the objects.
                    // for(var i = 0; i<enemies.length; i++){
                    //     if(fruitGroup.get(i).isTouching(players)){
                    //         fruitGroup.get(i).destroy()
                    //         player.update()
                    //         score -= 1
                    //     }
                    // }
                  }
                
                  fill("white");
                  textSize(25);
                  text("Aliens Left : "+score,830,25)
         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}