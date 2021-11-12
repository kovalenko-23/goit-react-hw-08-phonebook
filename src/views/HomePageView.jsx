import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: antiquewhite;
`;

export default function HomePageView() {
  return (
    <Wrapper>
      <h1>Home page!</h1>
    </Wrapper>
  );
}
