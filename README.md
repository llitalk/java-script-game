# java-script-game
guess my number game only simple js, html and css 

html no library including 
only vanilaJs

**include google fonts!
here my html ex:
    <link rel="stylesheet" type="text/css" href="./main.css" />
    <link href="https://fonts.googleapis.com/css?family=Trade+Winds&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Fredoka+One&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Satisfy&display=swap" rel="stylesheet" />
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>game</title>
    </head>

    <body>
        <div class="title">
            <h1>guess my number</h1>
        </div>
        <div class="container">
            <h4>Game Rules</h4>
            <hr />
            <p>all you need to do => is to enter number less then 10</p>
            <p>then you will be compare to computer guess</p>
            <p>WINNER? it's easy the heigh number is the winner</p>

            <br />
            <br />

            <h4>let's play</h4>
            <div class="game">
                <input type="number" name="" id="playerValue" placeholder="Enter Your Number" />
                <button onclick="gameclickBtn()" id="buttngame">Start Game</button>
            </div>

            <br />
            <br />
        </div>

        <script src="app.js"></script>
    </body>
</html>
