export default function SignIn(params) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: true,
        user: {
          name: 'Carlos',
          email: 'henriqueprosdoskimi@hotmail.com',
        },
      });
    }, 2000);
  });
}
