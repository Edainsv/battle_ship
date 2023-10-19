class Game
{
	constructor() {
		this.game = document.getElementById('game');
		this.coordonate = [];
		this.currentShip = false;
		this.ship = [];

		this.constructMap(this.game);
		this.selectShip(this.currentShip);
	}

	/**
	 *	Permet de construire la carte navale (10x10)
	 */
	constructMap()
	{
		for (let x = 0; x < 10; x++) {
			this.coordonate[x] = [];

			for (let y = 0; y < 10; y++) {
				this.coordonate[x][y] = document.createElement('div');
				this.coordonate[x][y].classList.add('coordonate');

				this.game.appendChild(this.coordonate[x][y]);

				this.coordonate[x][y].addEventListener('click', function (e) {

				});
			}
		}
	}


	/**
	 *	Permet de selectionner un type de bateau
	 */
	selectShip(currentShip)
	{
		let btn_ships = document.querySelectorAll('.ships')[0].children;

		for (let i = 0; i < btn_ships.length; i++) {
			btn_ships[i].children[0].addEventListener('click', (e) => {
				document.getElementById('selected_ship').innerText = e.target.value;

				this.currentShip = new Ship(e.target.value);
			});
		}

		return;

		btn_ships.addEventListener('click', (e) => {
			document.getElementById('selected_ship').innerText = e.target.value;

			this.currentShip = new Ship(e.target.value);
		})
	}


	/**
	 *	Place la bateau sur la grille
	 */
	setShip(shipId)
	{
		if (this.ship.indexOf(shipId) == -1) {
			this.ship.push({
				id: shipId,
				coordonate: false
			});
		}

		// console.log(this.ship);
	}

}
