import instaLogo from "../assets/instaLogo.svg";
import linkedIn from "../assets/LinkedInLogo.svg";

const Footer = () => {
  return (
    <div className="h-[261px] bg-zinc-900 w-full flex-col text-white items-center">
      <div className="flex-col py-10">
        <div className="flex justify-center">
          <a href="https://www.instagram.com/ieee_lnmiit/" target="_blank">
            <img src={instaLogo}></img>
          </a>
          <a
            href="https://www.linkedin.com/company/ieee-sb-lnmiit/mycompany/"
            target="_blank"
          >
            <img src={linkedIn}></img>
          </a>
        </div>
        <h1 className="flex justify-center py-3 font-serif font-extrabold text-lg">
          IEEE Student Chapter, LNMIIT Jaipur
        </h1>
        <h1 className="flex justify-center font-serif font-semi-bold text-lg ">
          LNMIIT, Rupa ki Nangal, Post Sumel, via Jamdoli, Jaipur
        </h1>
        <p className="flex justify-center font-serif text-zinc-400 pt-9">
          Copyright © 2024 ieee - All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer