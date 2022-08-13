import { Header, Footer, Message } from '../../components';

export const NotFoundPage = () => {
  return (
    <>
      <Header />
      <Message type='error' text='Page not found' />
      <Footer />
    </>
  );
};
