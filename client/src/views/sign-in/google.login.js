let [user, setUser] = useState({});
let handleCallbackResponse = (response) => {
  console.log(response);
  let userObject = jwt_decode(response.credential);
  setUser(userObject);
};

let handleSignOut = () => {
  setUser({});
};

useEffect(() => {
  // Global Google
  google.accounts.id.initialize({
    client_id:
      "675117387116-dhvu74qrsqm5413trd2omucivq94qgje.apps.googleusercontent.com",
    callback: handleCallbackResponse,
  });

  google.accounts.id.renderButton(document.getElementById("signInButton"), {
    theme: "outline",
    size: "large",
  });
}, []);
