class Ship
{
	constructor(id_ship) {
		this.createShip(id_ship);
	}

	/**
	 * Permet de construire un bateau
	 *	@param	id_ship		L'id du bateau à créer
	 */
	createShip(id_ship)
	{
		if (this.shipIdExist(id_ship)) {
			myGame.setShip(id_ship);
		} else{
			throw 'Undefined ' + id_ship;
		}
	}

	shipIdExist(s)
	{
		let shipExist = [
			'ship_2x1_a',
			'ship_2x1_b',
			'ship_3x1_a',
			'ship_4x1_a',
			'ship_5x1_a'
		];

		return shipExist.indexOf(s) != -1 ? true : false;
	}
}