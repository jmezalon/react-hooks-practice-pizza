import React from "react";

function PizzaForm({
	pizzaData,
	setPizzaData,
	onEditPizza,
}) {

	if (!pizzaData) return null;
	const { topping, size, vegetarian } = pizzaData

	function onHandleSubmit(e) {
		e.preventDefault();
		fetch(`http://localhost:3001/pizzas/${pizzaData.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(pizzaData),
		})
		.then((r) => r.json())
		.then(onEditPizza)
	}


	function handleInputChange(event) {
		setPizzaData(event.target.name, event.target.value);
	  }
	
	  function handleRadioChange(event) {
		setPizzaData(event.target.name, event.target.value === "Vegetarian");
	  }

  
	return (
		<form onSubmit={onHandleSubmit}>
			<div className="form-row">
				<div className="col-5">
					<input
						className="form-control"
						type="text"
						name="topping"
						placeholder="Pizza Topping"
						value={topping}
						onChange={handleInputChange}
					/>
				</div>
				<div className="col" value={size} onChange={handleInputChange}>
					<select className="form-control" name="size">
						<option value="Small">Small</option>
						<option value="Medium">Medium</option>
						<option value="Large">Large</option>
					</select>
				</div>
				<div className="col">
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="vegetarian"
							value='Vegetarian'
							checked={vegetarian}
							onChange={handleRadioChange}
						/>
						<label className="form-check-label">Vegetarian</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="vegetarian"
							value='Not Vegetarian'
							checked={!vegetarian}
							onChange={handleRadioChange}
						/>
						<label className="form-check-label">Not Vegetarian</label>
					</div>
				</div>
				<div className="col">
					<button type="submit" className="btn btn-success">
						Submit
					</button>
				</div>
			</div>
		</form>
	);
}

export default PizzaForm;
