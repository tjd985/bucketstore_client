import styled from "styled-components";

function Badge({ name }: { name: string }) {
  return <StyledBadge>{name}</StyledBadge>;
}

const StyledBadge = styled.div`
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
  color: #999;
  background-color: #f4f4f4;
  padding: 3px 7px;
`;

export default Badge;
