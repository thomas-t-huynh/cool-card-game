import styled from 'styled-components'

export const Container = styled.div`
	height: 160px;
	width: 114px;
	background: burlywood;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	border: 1px solid black;
	border-radius: 3px;
`

export const Name = styled.h4`
	margin: 0;
`

export const Portrait = styled.div`
	background: white;
	height: 60%;
	width: 80%;
	border: 1px solid black;
`

export const StatContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 80%;
`

export const Stat = styled.div`
	width: 45%;
	height: 25px;
	background: white;
	display: flex;
	justify-content: center;
	background: gold;
	border: 1px solid black;
`
