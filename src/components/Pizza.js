import React from "react";

function Pizza({ pizzaObj: { size, topping }, pizzaObj, populatePizzaForm }) {
	return (
		<tr>
			<td>{topping}</td>
			<td>{size}</td>
			<td>{pizzaObj.vegetarian ? "Vegetarian" : "Not Vegetarian"}</td>
			<td>
				<button
					onClick={() => populatePizzaForm(pizzaObj)}
					type="button"
					className="btn btn-primary"
				>
					Edit Pizza
				</button>
			</td>
		</tr>
	);
}

export default Pizza;
