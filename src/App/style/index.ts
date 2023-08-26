import styled from 'styled-components';

export const Wrap = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

export const Header = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  padding: 100px 0 40px;
  @media (max-width: 768px) {
    padding: 40px 0 30px;
  }
`;

export const Tips = styled.div`
  font-size: 14px;
  text-align: center;
  padding-bottom: 30px;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

export const EmojiWrap = styled.div`
  background: #fff;
  padding: 30px;
  padding-bottom: 0;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const Body = styled.div`
  padding-bottom: 40px;
  ${EmojiWrap}:last-child {
    margin-bottom: 0;
  }
`;

export const EmojiBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
`;

export const EmojiItem = styled.div`
  font-size: 22px;
  font-weight: bold;
  width: ${100 / 11}%;
  @media (max-width: 768px) {
    width: ${100 / 6}%;
  }
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const EmojiItemHover = styled.div`
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background: #ebf6ff;
  }
`;