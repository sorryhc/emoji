import { emojiConfig } from './config';
import type { EmojiConfigType } from './config';
import { Wrap, Header, Tips, Body, Title, EmojiWrap, EmojiBody, EmojiItem, EmojiItemHover } from './style';

const child = (str: string)  => {
  return str.split(',');
}

function App() {
  return (
    <Wrap>
      <Header>emoji</Header>
      {/* <Tips>22</Tips> */}
      <Body>
        {emojiConfig.map((item: EmojiConfigType, index: number) => (
          <EmojiWrap key={index}>
            <Title>{item.icon} {item.title}</Title>
            <EmojiBody>
              {child(item.data).map((emoji: string, idx) => (
                <EmojiItem key={idx}>
                  <EmojiItemHover>
                    {emoji}
                  </EmojiItemHover>
                </EmojiItem>
              ))}
            </EmojiBody>
          </EmojiWrap>
        ))}
      </Body>
    </Wrap>
  );
}

export default App;
