import "./HeroStyles.css";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="HeroImg" src={props.heroImg} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          
          <SignedOut>
            <SignInButton afterSignUpUrl="/main" afterSignInUrl="/main" className={props.btnClass}>
            {props.buttonText}
            </SignInButton>
          </SignedOut>
          <SignedIn>
            {/* <UserButton afterSignOutUrl='/'/> */}
            <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
          </SignedIn>
        </div>
      </div>
    </>
  );
}

export default Hero;
