import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
	const [pizzas, setPizzas] = useState([]);
	const [pizzaData, setPizzaData] = useState(null);

	useEffect(() => {
		fetch("http://localhost:3001/pizzas")
			.then((r) => r.json())
			.then(setPizzas);
	}, []);

	function handlePopulate(name, value) {
		setPizzaData({
			...pizzaData,
			[name]: value,
		});
	}

	function handlePatchSubmit(updatePizza) {
		const updatedPizzas = pizzas.map((item) => {
			if (item.id === updatePizza.id) {
				return updatePizza;
			} else {
				return item;
			}
		});
		setPizzas(updatedPizzas);
	}

	return (
		<>
			<Header />
			<PizzaForm
				pizzaData={pizzaData}
				setPizzaData={handlePopulate}
				onEditPizza={handlePatchSubmit}
			/>
			<PizzaList pizzas={pizzas} populatePizzaForm={setPizzaData} />
		</>
	);
}

export default App;
