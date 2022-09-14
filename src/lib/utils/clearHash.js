const removeHashes = (hash) => {
  if (hash === '#welcome') {
    window.history.replaceState({}, '', '/');
  } else if (hash === '#signIn') {
    window.history.replaceState({}, '', '/signIn');
  } else if (hash === '#userSignIn') {
    window.history.replaceState({}, '', '/userSignIn');
  } else if (hash === '#wall') {
    window.history.replaceState({}, '', '/wall');
  }
};

const sendRoute = (hash) => {
  const changeHash = hash.slice(1).split('/')[1] || '/';
  const getWord = hash.slice(1);
  const route = `${changeHash}${getWord}`;
  if (route === '/welcome') {
    return '/';
  }
  return route;
};

export { removeHashes, sendRoute };
