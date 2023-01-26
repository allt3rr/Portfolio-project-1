 var flakes_number = 50;
        var min_flakes_speed = 5;
        var max_flakes_speed = 50;
        var min_flakes_size = 1;
        var max_flakes_size = 5;
        
        //tablica na platki sniegu
        var snowFlakes = [];
        
        for(var i=0; i<flakes_number; i++){
            var flakes_speed = min_flakes_speed + Math.random() * (max_flakes_speed - min_flakes_speed);  // losowa prędkość
            var flakes_size = min_flakes_size + Math.random() * (max_flakes_size - min_flakes_size);  //losowy rozmiar
            
            snowFlakes.push({
                x: Math.random() * window.innerWidth, //losowa pozycja na osi x
                y: Math.random() * window.innerHeight, //losowa pozycja na osi y
                size: flakes_size,
                speed: flakes_speed,
            })
        }
    
        function drawSnowFlakes(){
            var canvas = document.getElementById("snowflakes");;
            
            var ctx = canvas.getContext('2d');
            
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            for (var i = 0; i < snowFlakes.length; i++) {
                var snowflake = snowFlakes[i];
                
                ctx.beginPath();
                ctx.arc(snowflake.x, snowflake.y, snowflake.size, 0, 2 * Math.PI);
                ctx.fill();
            
                snowflake.y += snowflake.speed;
            
                if(snowflake.y > canvas.height){
                    snowflake.y = 0;
                    }
            }
        }
    
        setInterval(function() {
            drawSnowFlakes();
        }, 33);