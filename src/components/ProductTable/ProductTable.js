import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import './ProductTable.scss';

const ProductTable = ({ itemID, rawData, handleDiodeBoxClick,handleMaskBoxClick }) => {
	// const [rawData, setRawData] = useState([]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const response = await fetch('/dataset.json');
	// 			const data = await response.json();
	// 			// console.log(data);

	// 			const flatArray = data.reduce((acc, item) => {
	// 				const productArray = [];

	// 				for (let i = 0; i < item.repeat; i++) {
	// 					productArray.push({
	// 						product: item.product,
	// 						diode: false,
	// 						unmask: false,
	// 						id: uuidv4(),
	// 					});
	// 				}
	// 				return acc.concat(productArray);
	// 			}, []);
	// 			setRawData(flatArray);

	// 			//console.log('myflatArray', flatArray);
	// 		} catch (error) {
	// 			console.error('Error fetching data:', error);
	// 		}
	// 	};
	// 	fetchData();
	// }, []);

	// const handleDiodeBoxClick = (id) => {
	// 	const index = rawData.findIndex((data) => data.id === id);

	// 	// if (index !== -1) {
	// 	// 	setRawData([
	// 	// 		...rawData.slice(0, index),
	// 	// 		{ ...rawData[index], diode: !rawData[index].diode },
	// 	// 		...rawData.slice(index + 1),
	// 	// 	]);
	// 	// }
	// 	// Create a new array to avoid mutating the state directly*****
	// 	const updatedRawData = [...rawData];
	// 	//toggle the value of diode key, findIndex will return -1 if no element found
	// 	if (index !== -1) {
	// 		rawData[index].diode = !rawData[index].diode;
	// 	}
	// 	setRawData(updatedRawData);
	// 	// console.log('current rawdata:', rawData);
	// };
	// const handleMaskBoxClick = (product) => {
	// 	//alert(product);
	// 	let updatedRawData = [...rawData];
	// 	updatedRawData.forEach((data) => {
	// 		if (data.product === product) {
	// 			data.unmask = !data.unmask;
	// 		}
	// 	});
	// 	setRawData(updatedRawData);
	// 	//console.log('current rawdata:', rawData);
	// };
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
							<Row key={uuidv4()} className="rows product-rows">
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
									onClick={() => handleMaskBoxClick(item.product)}
									xs={1}
									className={`columns product-columns unmask-box ${
										item.unmask ? 'yellow-background' : ''
									}`}
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
									value={item.product}
									onClick={() => handleMaskBoxClick(item.product)}
									xs={1}
									className={`columns product-columns unmask-box ${
										item.unmask ? 'yellow-background' : ''
									}`}
								></Col>
								<Col
									data-key={item.id}
									onClick={() => handleDiodeBoxClick(item.id)}
									xs={1}
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
					let item = rawData[i];

					if (item) {
						rows.push(
							<Row key={uuidv4()} className="rows product-rows">
								<Col
									data-key={item.id}
									onClick={() => handleDiodeBoxClick(item.id)}
									xs={1}
									className={`columns product-columns diode-box ${
										item.diode ? 'blue-background' : ''
									}`}
								></Col>
								<Col
									value={item.product}
									onClick={() => handleMaskBoxClick(item.product)}
									xs={1}
									className={`columns product-columns unmask-box ${
										item.unmask ? 'yellow-background' : ''
									}`}
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
									value={item.product}
									onClick={() => handleMaskBoxClick(item.product)}
									xs={1}
									className={`columns product-columns unmask-box ${
										item.unmask ? 'yellow-background' : ''
									}`}
								></Col>
								<Col
									data-key={item.id}
									onClick={() => handleDiodeBoxClick(item.id)}
									xs={1}
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
