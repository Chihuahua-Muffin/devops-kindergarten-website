import React from 'react';
import { chakra, Box } from '@chakra-ui/react';
import SignUpForm from '#/components/UI/organisms/SignupForm';
import BackArrow from '#/components/UI/atomics/BackArrow';
import { LOGIN_PAGE_URL, CONTENT_WIDTH } from '#/constants';

export const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: CONTENT_WIDTH,
    height: '89vh',
  },
});

const SignUpPage = () => (
  <Container>
    <BackArrow href={LOGIN_PAGE_URL} />
    <SignUpForm />
  </Container>
);

export default SignUpPage;
