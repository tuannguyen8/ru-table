import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TitleRow from '../TitleRow/TitleRow';
import HeaderRow from '../HeaderRow/HeaderRow';
import Midhalf from '../Midhalf/Midhalf';
import GridForm from '../GridForm/GridForm';
import MiscBlock from '../MiscBlock/MiscBlock';
import IOsComponent from '../IOsComponent/IOsComponent';
import { Container, Row, Col } from 'react-bootstrap';
import './MainContainer.scss';

const MainContainer = () => {
	const [dataSet, setDataSet] = useState([]);

	// To generate a random RGBA color
	const getRandomColor = () => {
		let r = Math.floor(Math.random() * 256);
		let g = Math.floor(Math.random() * 256);
		let b = Math.floor(Math.random() * 256);
		return `rgba(${r}, ${g}, ${b}, 0.7)`;
	};

	// To generate a random integer within a specified range [min, max]
	const getRandomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	// To get a random position in requirement range for a product
	const getPositionForProduct = () => {
		let firstNum = getRandomNumber(0, 18);
		let secondNum = getRandomNumber(40, 58);
		let randomNum = Math.random();
		let selectedNumber = randomNum < 0.5 ? firstNum : secondNum;
		return selectedNumber;
	};

	// To perform Fisher-Yates shuffle on an array of products
	const fisherYatesshuffled = (products) => {
		const shuffledproducts = [...products];

		//Iterate over the array in reverse order
		for (let i = shuffledproducts.length - 1; i > 0; i--) {
			// Generate a random j index from the array's remaining unshuffled section.
			const j = Math.floor(Math.random() * (i + 1));

			// Swap the current element with j-th element
			[shuffledproducts[i], shuffledproducts[j]] = [
				shuffledproducts[j],
				shuffledproducts[i],
			];
		}
		return shuffledproducts;
	};

	// To check if any two adjacent elements in the array
	// have the same 'product' property value
	const isAdjacentToEachOther = (arr) => {
		for (let i = 1; i < arr.length - 1; i++) {
			if (
				arr[i].product === arr[i - 1].product ||
				arr[i].product === arr[i + 1].product
			) {
				// Return "true" if no adjacent elements have the same 'product' property value
				return true;
			}
		}
		// Return "false" if no adjacent elements have the same 'product' property value
		return false;
	};

	// To shuffle the data to meet the constraint requirement.
	const shuffleProducts = (flatArray) => {
		// Separate Core i5 from products
		let i5Product = flatArray.filter(
			(product) => product.product === 'Core i5'
		);

		// Separate Core i4 from products
		let i4Product = flatArray.filter(
			(product) => product.product === 'Core i4'
		);

		//Get position for the Core i4 and Core i5 product
		let positionForI4 = getPositionForProduct();
		let positionForI5 = getPositionForProduct();

		//Seperate other products from Core i5 and Core i4
		let otherProducts = flatArray.filter(
			(product) =>
				product.product !== 'Core i4' && product.product !== 'Core i5'
		);

		// Using fisherYatesshuffled function to shuffled
		// the data that don't contain 'Core i4' and 'Core i5' product
		let shuffleProducts = fisherYatesshuffled(otherProducts);

		// To check if any two adjacent elements in the array
		// have the same 'product' property value
		let isAdjacent = isAdjacentToEachOther(shuffleProducts);

		// To keep shuffle the data until the constraint is satisfied.
		while (isAdjacent) {
			shuffleProducts = fisherYatesshuffled(otherProducts);
			isAdjacent = isAdjacentToEachOther(shuffleProducts);
		}

		let resultArray = [...shuffleProducts];

		//To insert the 'Core i4' and 'Core i5' products into the
		//array of objects data at the specified position
		resultArray.splice(positionForI4, 0, i4Product[0]);
		resultArray.splice(positionForI5, 0, i5Product[0]);

		return resultArray;
	};

	// To handle click events on diode cells,
	// Toggle the diode state of the objects by a given id. 
	// Following the diode state, display the background of the cells.
	const handleDiodeBoxClick = (id) => {
		// To find the index of the element by the given id
		let index = dataSet.findIndex((data) => data.id === id);

		// To create a new array by shallow copy to avoid mutating the state directly
		let updatedDataSet = [...dataSet];

		//toggle the value of diode key, findIndex will return -1 if no element found
		if (index !== -1) {
			updatedDataSet[index].diode = !updatedDataSet[index].diode;
		}

		setDataSet(updatedDataSet);
				
	};

	// To handle click events on unmask cells,
	// Toggle the unmask state of the all objects that have the same product name. 
	// Following the unmask state of objects, display the background of the cells.
	const handleMaskBoxClick = (product) => {
		let updatedDataSet = [...dataSet];
		updatedDataSet.forEach((data) => {
			if (data.product === product) {
				data.unmask = !data.unmask;
			}
		});
		setDataSet(updatedDataSet);
	};

	//To fetch data when the component mounts
	useEffect(() => {
		const fetchData = async () => {
			try {
				let response = await fetch('/dataset.json');
				let data = await response.json();

				// Create an array of repeated products based on the 'repeat' property
				let flatArray = data.reduce((acc, item) => {
					const productArray = [];

					for (let i = 0; i < item.repeat; i++) {
						productArray.push({
							product: item.product,
							diode: false,
							unmask: false,
							id: uuidv4(),
							background: getRandomColor(),
						});
					}
					return acc.concat(productArray);
				}, []);

				//To get the shuffled data that meet constrain requirement.
				let shuffledArray = shuffleProducts(flatArray);
				setDataSet(shuffledArray);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);

	return (
		<Container className="">
			<Row className="rows">
				<Col xs={11} className="columns left-side">
					<TitleRow></TitleRow>
					<HeaderRow></HeaderRow>
					<GridForm
						prop1="1"
						prop2="2"
						dataSet={dataSet}
						handleDiodeBoxClick={handleDiodeBoxClick}
						handleMaskBoxClick={handleMaskBoxClick}
					></GridForm>
					<Midhalf></Midhalf>
					<GridForm
						prop1="3"
						prop2="4"
						dataSet={dataSet}
						handleDiodeBoxClick={handleDiodeBoxClick}
						handleMaskBoxClick={handleMaskBoxClick}
					></GridForm>
					<MiscBlock></MiscBlock>
				</Col>
				<Col xs={1} className="columns right-side">
					<IOsComponent></IOsComponent>
				</Col>
			</Row>
		</Container>
	);
};

export default MainContainer;
