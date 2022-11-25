import Header from '../header';
import Footer from '../footer';
import UserPageWrapper from '../user-page-wrapper';
import SignInForm from '../sign-in-form';

export const SignInPage = () => {
  return (
    <UserPageWrapper>
      <Header wide noUserBlock>
        Sign In
      </Header>
      <SignInForm />
      <Footer />
    </UserPageWrapper>
  );
};
