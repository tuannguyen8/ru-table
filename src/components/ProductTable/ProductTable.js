import React, { useState, useEffect, useMemo } from 'react';
import { Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import './ProductTable.scss';

const ProductTable = ({ itemID }) => {
	//const [isDiodeBoxClicked, setIsDiodeBoxClicked] = useState([]);
	const [rawData, setRawData] = useState([]);
	//const [dataSet, setDataset] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/dataset.json');
				const data = await response.json();
				// console.log(data);

				const flatArray = data.reduce((acc, item) => {
					const productArray = [];

					for (let i = 0; i < item.repeat; i++) {
						productArray.push({
							product: item.product,
							diode: false,
							unmask: false,
							id: uuidv4(),
						});
					}
					return acc.concat(productArray);
				}, []);
				setRawData(flatArray);

				//console.log('myflatArray', flatArray);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);
	// const handleDiodeBoxClick = (event) => {
	// 	const clickedDiode = event.target;
	// 	const dataKey = event.target.getAttribute('data-key');
	// 	console.log('current value data-key:', dataKey);

	// 	if (rawData) {
	// 		for (let i = 0; i < rawData.length; i++) {
	// 			if (rawData[i].id === dataKey) {
	// 				if (rawData[i].diode === true) {
	// 					rawData[i].diode = false;
	// 				} else {
	// 					rawData[i].diode = true;
	// 				}
	// 				break;
	// 			}
	// 		}
	// 	}
	// 	setDataset(rawData);
	// 	console.log('current rawdata:', dataSet);
	// 	const clickedClass = event.target.className;
	// 	let isClickedClass = clickedClass.includes('blue-background');
	// 	//console.log(isClickedClass);
	// 	if (!isClickedClass) {
	// 		clickedDiode.classList.add('blue-background');
	// 	} else {
	// 		clickedDiode.classList.remove('blue-background');
	// 	}
	// 	// setIsDiodeBoxClicked(!isDiodeBoxClicked);
	// };
	//console.log("myrawData", rawData);
	const handleDiodeBoxClick = (id) => {
		const index = rawData.findIndex((data) => data.id === id);
        // Create a new array to avoid mutating the state directly*****
        const updatedRawData = [...rawData];
        //toggle the value of diode
		if (index !== -1) {
			rawData[index].diode = !rawData[index].diode;
		}
		setRawData(updatedRawData);
        //setRawData(rawData)
		console.log('current rawdata:', rawData);
	};
	const renderRows = () => {
		const rows = [];
		switch (itemID) {
			case '1':
				for (let i = 0; i < 20; i++) {
					let item = rawData[i];
					// let item = dataSet[i];
					//console.log("current item:", item);
					if (item) {
						//let currentID = item.id;
						//console.log("CurrentID: ", currentID)
						rows.push(
							<Row className="rows product-rows">
								<Col
									data-key={item.id}
									// onClick={handleDiodeBoxClick}
									onClick={() => handleDiodeBoxClick(item.id)}
									xs={1}
									className={`columns product-columns diode-box ${
										item.diode ? 'blue-background' : ''
									}`}
								></Col>
								<Col
									value={item.product}
									xs={1}
									className="columns product-columns unmask-box"
								></Col>
								<Col xs={1} className="columns product-columns ru-box">
									{i}
								</Col>
								<Col xs={8} className="columns product-columns products">
									{item.product}
								</Col>
							</Row>
						);
					}
				}
				break;
			case '2':
				for (let i = 40; i < 60; i++) {
					const item = rawData[i];
					if (item) {
						rows.push(
							<Row key={uuidv4()} className="rows product-rows">
								<Col xs={8} className="columns product-columns products">
									{item.product}
								</Col>
								<Col xs={1} className="columns product-columns ru-box">
									{i}
								</Col>
								<Col
									xs={1}
									className="columns product-columns unmask-box"
								></Col>
								<Col
									onClick={handleDiodeBoxClick}
									xs={1}
									// className={` columns product-columns diode-box ${
									// 	isDiodeBoxClicked ? 'blue-background' : ''
									// }`}
									className={`columns product-columns diode-box ${
										item.diode ? 'blue-background' : ''
									}`}
								></Col>
							</Row>
						);
					}
				}
				break;
			case '3':
				for (let i = 20; i < 40; i++) {
					const item = rawData[i];
					if (item) {
						rows.push(
							<Row key={uuidv4()} className="rows product-rows">
								<Col
									onClick={handleDiodeBoxClick}
									xs={1}
									// className={` columns product-columns diode-box ${
									// 	isDiodeBoxClicked ? 'blue-background' : ''
									// }`}
									className={`columns product-columns diode-box ${
										item.diode ? 'blue-background' : ''
									}`}
								></Col>
								<Col
									xs={1}
									className="columns product-columns unmask-box"
								></Col>
								<Col xs={1} className="columns product-columns ru-box">
									{i}
								</Col>
								<Col xs={8} className="columns product-columns products">
									{item.product}
								</Col>
							</Row>
						);
					}
				}
				break;
			case '4':
				for (let i = 60; i < 80; i++) {
					const item = rawData[i];
					if (item) {
						rows.push(
							<Row key={uuidv4()} className="rows product-rows">
								<Col xs={8} className="columns product-columns products">
									{item.product}
								</Col>
								<Col xs={1} className="columns product-columns ru-box">
									{i}
								</Col>
								<Col
									xs={1}
									className="columns product-columns unmask-box"
								></Col>
								<Col
									onClick={handleDiodeBoxClick}
									xs={1}
									// className={` columns product-columns diode-box ${
									// 	isDiodeBoxClicked ? 'blue-background' : ''
									// }`}
									className={`columns product-columns diode-box ${
										item.diode ? 'blue-background' : ''
									}`}
								></Col>
							</Row>
						);
					}
				}
				break;
			default:
		}
		return rows;
	};

	return <>{renderRows()}</>;
};

export default ProductTable;
