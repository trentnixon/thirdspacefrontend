import styled from 'styled-components';

export const ContainerTransparentColumn = styled.div`
	position: absolute;
	left: 20.31%;
	right: 22.45%;
	top: 0%;
	bottom: 0%;

  flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
`;

export const GlassDefault = styled.div`
	box-sizing: border-box;
	background: radial-gradient(
		97.01% 88.57% at 50% 8%,
		rgba(255, 255, 255, 0.7) 0%,
		rgba(255, 255, 255, 0.3) 100%
	);
	backdrop-filter: blur(0.9px);

`;

export const VerticalDrop = styled(GlassDefault)`
	position: absolute;
	left: 0%;
	right: 0%;
	top: 0%;
	bottom: 0%;
	flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
`;


export const DefaultContainer = styled.div`
	position: relative;
	z-index: 100;
	width: 100%;
	height:100%
`;