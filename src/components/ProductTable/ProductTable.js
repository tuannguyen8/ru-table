import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import './ProductTable.scss';

const ProductTable = ({ itemID }) => {
	const [isDiodeBoxClicked, setIsDiodeBoxClicked] = useState(false);
	const [rawData, setRawData] = useState([]);
	const [dataSet, setDataset] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/dataset.json');
				const data = await response.json();
				// console.log(data);

				const flatArray = data.reduce((acc, item) => {
					const productArray = [];

					for (let i = 0; i < item.repeat; i++) {
						productArray.push(item.product);
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

	//console.log('raw data111', rawData);
	const handleDiodeBoxClick = () => {
		setIsDiodeBoxClicked(!isDiodeBoxClicked);
	};

	//console.log("myrawData", rawData);

	const renderRows = () => {
		const rows = [];
		let numOfID = parseInt(itemID, 10);
		console.log('numb of ID:', rawData);
		//for (let i = 0; i < rawData.length; i++) {
		// for (let i = 0; i < rawData.length; i++) {
		// 	const item = rawData[i];

		if (itemID === '1') {
			for (let i = 0; i < 20; i++) {
				const item = rawData[i];
				rows.push(
					<Row key={i} className="rows product-rows">
						<Col
							onClick={handleDiodeBoxClick}
							xs={1}
							className={` columns product-columns diode-box ${
								isDiodeBoxClicked ? 'blue-background' : ''
							}`}
						></Col>
						<Col xs={1} className="columns product-columns unmask-box"></Col>
						<Col xs={1} className="columns product-columns ru-box">
							{i}
						</Col>
						<Col xs={8} className="columns product-columns products">
							{item}
						</Col>
					</Row>
				);
			}
		}
		if (itemID === '3') {
			for (let i = 20; i < 40; i++) {
				const item = rawData[i];
				rows.push(
					<Row key={i} className="rows product-rows">
						<Col
							onClick={handleDiodeBoxClick}
							xs={1}
							className={` columns product-columns diode-box ${
								isDiodeBoxClicked ? 'blue-background' : ''
							}`}
						></Col>
						<Col xs={1} className="columns product-columns unmask-box"></Col>
						<Col xs={1} className="columns product-columns ru-box">
							{i}
						</Col>
						<Col xs={8} className="columns product-columns products">
							{item}
						</Col>
					</Row>
				);
			}
		}
		if (itemID === '2') {
			for (let i = 40; i < 60; i++) {
				const item = rawData[i];
				rows.push(
					<Row key={i} className="rows product-rows">
						<Col xs={8} className="columns product-columns products">
							{item}
						</Col>
						<Col xs={1} className="columns product-columns ru-box">
							{i}
						</Col>
						<Col xs={1} className="columns product-columns unmask-box"></Col>
						<Col
							onClick={handleDiodeBoxClick}
							xs={1}
							className={` columns product-columns diode-box ${
								isDiodeBoxClicked ? 'blue-background' : ''
							}`}
						></Col>
					</Row>
				);
			}
		}

		if (itemID === '4') {
			for (let i = 60; i < 80; i++) {
				const item = rawData[i];
				rows.push(
					<Row key={i} className="rows product-rows">
						<Col xs={8} className="columns product-columns products">
							{item}
						</Col>
						<Col xs={1} className="columns product-columns ru-box">
							{i}
						</Col>
						<Col xs={1} className="columns product-columns unmask-box"></Col>
						<Col
							onClick={handleDiodeBoxClick}
							xs={1}
							className={` columns product-columns diode-box ${
								isDiodeBoxClicked ? 'blue-background' : ''
							}`}
						></Col>
					</Row>
				);
			}
		}
		//}

		return rows;
	};

	return <>{renderRows()}</>;
};

export default ProductTable;
