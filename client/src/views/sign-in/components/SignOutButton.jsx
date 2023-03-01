import { Button, ButtonGroup } from "@chakra-ui/react";

let SignInButton = ({ handleSignOut }) => (
  <Button
    colorScheme="blue"
    onClick={() => handleSignOut()}
    id="signOutButton"
    title="Sign Out"
  >
    Sign Out
  </Button>
);

export default SignInButton;
