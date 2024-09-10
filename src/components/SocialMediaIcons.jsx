const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={require("../assets/linkedin.png")} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Choon38"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={require("../assets/github.png")} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
