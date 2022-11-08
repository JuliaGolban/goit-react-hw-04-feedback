import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  color: #2a2a2a;
  font-weight: 500;
`;

const ItemGeneral = styled(Item)`
  text-transform: uppercase;
`;

export { List, Item, ItemGeneral };
