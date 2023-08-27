import copyTextToClipboard from '@uiw/copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';
import { emojiConfig } from './config';
import { Wrap, Header, Tips, Body, Title, EmojiWrap, EmojiBody, EmojiItem, EmojiItemHover, EmojiCopy, EmojiCopySvg } from './style';
import type { EmojiConfigType } from './config';

const childData = (str: string)  => {
  return str.split(',');
}

function App() {

  const oncopy = (emoji: string) => {
    copyTextToClipboard(emoji, (isCopy) => {
      isCopy && toast.success('copy Successfully!')
    });
  }

  return (
    <Wrap>
      <Header>emoji</Header>
      <Tips>emoji data sourced from github set status.</Tips>
      <Body>
        {emojiConfig.map((item: EmojiConfigType, index: number) => (
          <EmojiWrap key={index}>
            <Title>{item.icon} {item.title}</Title>
            <EmojiBody>
              {childData(item.data).map((emoji: string, idx) => (
                <EmojiItem key={idx}>
                  <EmojiItemHover data-tip={emoji} onClick={() => oncopy(emoji)}>
                    {emoji}
                    <EmojiCopy>
                      <EmojiCopySvg />
                    </EmojiCopy>
                  </EmojiItemHover>
                </EmojiItem>
              ))}
            </EmojiBody>
          </EmojiWrap>
        ))}
      </Body>
      <Toaster />
    </Wrap>
  );
}

export default App;
