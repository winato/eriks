import styled from 'styled-components';

const borderColor = '#f2f2f2';
const blueColor = '#034ea1';

const Heading = styled.h1`
  font-size: 2rem;
  color: ${blueColor};
`
const ProductsHolder = styled.div`
  overflow-x: auto;
  display: flex;
  padding-bottom: 2rem;
  @media (min-width: 576px) {
    overflow-x: hidden;
  }
`

const BlueBorder = styled.div`
  border-bottom: 4px solid ${blueColor};
  margin-bottom: 2rem;
`

const StyledTable = styled.table`
  width: 100%;
  border-top: 1px solid ${borderColor};
  padding: 1.2rem;
  border-collapse: collapse;
  @media (min-width: 576px) {
    table-layout: fixed;
  }
`

const StyledTd = styled.td`
  padding: .8rem 1rem;
  border-right: 1px solid ${(props) => props.paddignRight ? borderColor : 'transparent'};
  font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
  width: ${(props) => props.width};
  display: ${(props) => props.hideOnMobile ? 'none' : 'table-cell'};
  @media (min-width: 576px) {
    display: table-cell;
  }
`

const StyledTr = styled.tr`
  border-bottom: 1px solid ${borderColor};
  :last-of-type {
    border-bottom: none;
  }
  background-color: ${(props) => props.different ? '#fafafa' : 'transparent'};
`

const StyledTh = styled.th`
  padding: .8rem 1rem;
  border-right: 1px solid ${(props) => props.paddignRight ? borderColor : 'transparent'};
  display: ${(props) => props.hideOnMobile ? 'none' : 'table-cell'};
  @media (min-width: 576px) {
    display: table-cell;
  }
`

const StyledBadge = styled.div`
  padding-top: .8rem;
  border-top: 1px solid ${borderColor};
`

const EmptyTable = styled.tr`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`

const StyledFieldLabel = styled.span`
  padding-right: .4rem;
  @media (min-width: 576px) {
    display: none;
  }
`

const HideOnDesktop = styled.span`
  display: block;
  @media (min-width: 576px) {
    display: none;
  }
`

export {
  Heading,
  ProductsHolder,
  StyledTable,
  StyledTd,
  StyledTh,
  StyledTr,
  StyledBadge,
  EmptyTable,
  BlueBorder,
  StyledFieldLabel,
  HideOnDesktop,
}
