window.onload = function(){
 
    var stage = document.getElementById('stage');

    var context = stage.getContext("2d");

    document.addEventListener("keydown", keyPush);
    setInterval(game, 100);

    const vel = 1;

    var velocidade_x = velocidade_y = 0;
    var posicao_x = 10;
    var posicao_y = 15;

    var tamanho_da_peca = 30;

    var quantidade_de_pecas = 20;

    var apple_x = apple_y = 5;

    var trail = [];
    tail = 5;

    function game(){
        posicao_x += velocidade_x;
        posicao_y += velocidade_y;
        if (posicao_x <0) {
            posicao_x = quantidade_de_pecas-1;
        }
        if (posicao_x > quantidade_de_pecas-1) {
            posicao_x = 0;
        }
        if (posicao_y < 0) {
            posicao_y = quantidade_de_pecas-1;
        }
        if (posicao_y > quantidade_de_pecas-1) {
            posicao_y = 0;
        }

        context.fillStyle = "black";
        context.fillRect(0,0, stage.width, stage.height);

        context.fillStyle = "blue";
        context.fillRect(apple_x*tamanho_da_peca, apple_y * tamanho_da_peca, tamanho_da_peca,tamanho_da_peca);

        context.fillStyle = "orange";
        for (var i = 0; i < trail.length; i++) {
            context.fillRect(trail[i].x*tamanho_da_peca, trail[i].y*tamanho_da_peca, tamanho_da_peca-1,tamanho_da_peca-1);
            if (trail[i].x == posicao_x && trail[i].y == posicao_y)
            {
                velocidade_x = velocidade_y = 0;
                tail = 5;


                

            }
        }

        trail.push({x:posicao_x,y:posicao_y })
        while (trail.length > tail) {
            trail.shift();
        }

        if (apple_x==posicao_x && apple_y==posicao_y){
            tail++;
            apple_x = Math.floor(Math.random()*quantidade_de_pecas);
            apple_y = Math.floor(Math.random()*quantidade_de_pecas);
        }

    }

    function keyPush(event){

        

        switch () {
            case 37: // Left
                velocidade_x = -vel;
                velocidade_y = 0;
                break;
            case 38: // up
                velocidade_x = 0;
                velocidade_y = -vel;
                break;
            case 39: // right
                velocidade_x = vel;
                velocidade_y = 0;
                break;
            case 40: // down
                velocidade_x = 0;
                velocidade_y = vel;
                break;          
            default:
                break;
        }
    }
}