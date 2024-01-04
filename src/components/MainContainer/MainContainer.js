import React , { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TitleRow from '../TitleRow/TitleRow';
import HeaderRow from '../HeaderRow/HeaderRow';
import Midhalf from '../Midhalf/Midhalf';
import GridForm from '../GridForm/GridForm';
import './MainContainer.scss'
import { Container, Row, Col } from 'react-bootstrap';

const MainContainer = () => {
	const [rawData, setRawData] = useState([]);
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

	const handleDiodeBoxClick = (id) => {
		const index = rawData.findIndex((data) => data.id === id);

		// if (index !== -1) {
		// 	setRawData([
		// 		...rawData.slice(0, index),
		// 		{ ...rawData[index], diode: !rawData[index].diode },
		// 		...rawData.slice(index + 1),
		// 	]);
		// }
		// Create a new array to avoid mutating the state directly*****
		const updatedRawData = [...rawData];
		//toggle the value of diode key, findIndex will return -1 if no element found
		if (index !== -1) {
			rawData[index].diode = !rawData[index].diode;
		}
		setRawData(updatedRawData);
		// console.log('current rawdata:', rawData);
	};
	const handleMaskBoxClick = (product) => {
		//alert(product);
		let updatedRawData = [...rawData];
		updatedRawData.forEach((data) => {
			if (data.product === product) {
				data.unmask = !data.unmask;
			}
		});
		setRawData(updatedRawData);
		//console.log('current rawdata:', rawData);
	};


	return (
		<Container>
			<Row className="rows">
				<Col xs={11} className="columns left-side">
					<TitleRow></TitleRow>
					<HeaderRow></HeaderRow>
					
					<GridForm prop1="1" prop2="2" rawData={rawData} handleDiodeBoxClick={handleDiodeBoxClick} handleMaskBoxClick={handleMaskBoxClick} ></GridForm>
					
					<Midhalf></Midhalf>
					
					<GridForm prop1="3" prop2="4" rawData={rawData} handleDiodeBoxClick={handleDiodeBoxClick} handleMaskBoxClick={handleMaskBoxClick}></GridForm>
					
					<Row className="rows">MISC Block</Row>
				</Col>
				<Col xs={1} className="columns right-side">
					I/Os
				</Col>
			</Row>
		</Container>
	);
};

export default MainContainer;
