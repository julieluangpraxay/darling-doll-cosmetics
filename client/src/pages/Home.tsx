export function Home() {
  return (
    <div>
      <div className="align-center m-auto flex w-4/5 justify-center p-8">
        <video
          autoPlay
          loop
          muted
          src="./images/cyberbabevideo.mp4"
          className="rounded-3xl"
        ></video>
      </div>
      <a href="https://www.instagram.com/darlingdollcosmetics/">
        <h1 className="bold p-8 text-center">FOLLOW US ON INSTAGRAM</h1>
        <div className="align-center m-auto flex w-1/4 columns-3 justify-center p-1">
          <img
            src="/images/home1.png"
            alt="darling doll cosmetics makeup picture"
            className="rounded-3xl p-4"
          />
          <img
            src="/images/home2.png"
            alt="darling doll cosmetics makeup picture"
            className="rounded-3xl p-4"
          />

          <img
            src="/images/home3.png"
            alt="darling doll cosmetics makeup picture"
            className="rounded-3xl p-4"
          />
        </div>
      </a>
    </div>
  );
}
