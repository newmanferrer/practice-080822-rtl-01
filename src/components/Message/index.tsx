import { MessageWrapper, MessageStyled } from './StyledComponents';

interface MessageProps {
  type?: 'success' | 'warn' | 'error';
  text: string;
  dataTestid?: string;
}

export const Message = ({ type, text, dataTestid }: MessageProps) => {
  return (
    <MessageWrapper data-testid={dataTestid} type={type}>
      <MessageStyled type={type}>{text}</MessageStyled>
    </MessageWrapper>
  );
};
