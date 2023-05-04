import styled from "styled-components";

export const ModuleContainer = styled.div`
  padding: 0px;
  border-radius: 5px;
  margin:0 2px;
  min-width:100px
`;

export const TimelineContainer = styled.div`
  padding: 0px;
`;

export const TimelineContainerHorizontail = styled.div`
padding: 0px;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: flex-start;
align-content: flex-start;
justify-content: flex-start;
position: fixed;
bottom: 0;
left: 0;
width: 100%;
z-index:1000;  
border-top:1px solid gray;
`;

export const TimelineContainerHorizontailInternal = styled.div`
padding: 0 10px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-items: flex-start;
align-content: flex-start;
justify-content: flex-start;

width: 100%;
z-index:1000;  

background-color:#262626;
margin-top:3px`;

export const DropIndicator = styled.div`
  height: 100%;
  width: 5px;
  background-color: #007bff;
  margin: 0 5px;
`;
