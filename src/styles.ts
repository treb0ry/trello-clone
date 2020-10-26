import styled, { keyframes } from "styled-components";
interface AddItemButtonProps {
  dark?: boolean;
}
interface DragPreviewContainerProps {
  isHidden?: boolean;
  isPreview?: boolean;
}

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #94b5c2;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  transform: ${(props) => (props.isPreview ? "rotate(5deg)" : undefined)};
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
`;

export const ColumnContainer = styled(DragPreviewContainer)`
  background-color: #ebecf0;
  width: 300px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
  box-shadow: black 2px 2px 5px 0px;
  @media (max-width: 768px) {
    margin-right: 0px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

export const CardContainer = styled(DragPreviewContainer)`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
`;

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #eadcc1;
  border-radius: 3px;
  border: none;
  color: #000;
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #e8c78b;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const NewItemButton = styled.button`
  background-color: #423c6d;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
  transition: background 85ms ease-in;
  &:hover {
    background-color: #2b236b;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;

export const CustomDragLayerContainer = styled.div`
  height: 100%;
  width: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  z-index: 100;
`;
const trashAnimation = keyframes`
  0%,50%,100%{
    transform:rotate(0deg)
    
  }
  25%{
    transform:rotate(15deg)
  }
  75%{
    transform:rotate(-15deg)
  }
`;
const trashCapAnimation = keyframes`
  0%,100%{
    transform:translateY(0)
  }
  1%,99%{
    transform:translateY(-40px)
  }
`;

export const Svg = styled.svg`
  width: 25px;
  transition: color 85ms;
  &:hover {
    color: #efaeae;
    path:nth-child(3) {
      animation: ${trashCapAnimation} 200ms linear;
    }
    path:nth-child(4) {
      animation: ${trashCapAnimation} 200ms linear;
    }

    animation: ${trashAnimation} 200ms linear;
  }
`;
