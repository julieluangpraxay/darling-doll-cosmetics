export function Home() {
  return (
    <div>
      <div className="align-center m-auto flex w-4/5 justify-center p-8 ">
        <video
          autoPlay
          loop
          muted
          src="./images/cyberbabevideo.mp4"
          className="rounded-3xl"
        ></video>
      </div>

      <section className="relative overflow-hidden">
        <img
          className="absolute left-0 top-0 -ml-20 mt-4 md:-ml-0"
          src="saturn-assets/images/content/stars-left-top.svg"
          alt=""
        />
        <div className="container relative mx-auto">
          <div className=" text-center">
            <span className="mb-4 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-900">
              SOCIAL MEDIA
            </span>
            <h1 className="font-heading xs:text-6xl mb-4 text-4xl font-bold text-gray-900 md:text-7xl">
              <span>Follow us on </span>
              <span className="font-serif italic">instagram</span>
            </h1>
          </div>
          <div className="relative mx-auto max-w-sm sm:max-w-7xl">
            <img
              className="absolute right-0 top-0 -mt-40"
              src="saturn-assets/images/instagram-photos/blue-center-light.png"
              alt=""
            />

            <div className="px-6">
              <div className="-mx-4 flex">
                <div className="w-full px-4 md:w-1/3 lg:w-1/4">
                  <div className="flex items-center justify-between px-4 py-5">
                    <span className="text-sm">@darlingdollcosmetics</span>
                    <img
                      src="saturn-assets/images/instagram-photos/icon-instagram.svg"
                      alt=""
                    />
                  </div>
                  <div className="h-72">
                    <img
                      className="block aspect-square h-full w-full"
                      src="/images/home1.png"
                      alt=""
                    />
                  </div>
                  <div className="px-4 pb-5 pt-4">
                    <span className="tetx-gray-800 mb-2.5 block text-sm">
                      This is example post
                    </span>
                    <div className="flex items-center">
                      <img
                        className="square mr-1.5"
                        src="saturn-assets/images/instagram-photos/heart-icon.svg"
                        alt=""
                      />
                      <span className="text-sm text-gray-500">12.903</span>
                    </div>
                  </div>
                </div>
                <div className="hidden w-full px-4 sm:block md:w-1/3 lg:w-1/4">
                  <div className="flex items-center justify-between px-4 py-5">
                    <span className="text-sm">@darlingdollcosmetics</span>
                    <img
                      src="saturn-assets/images/instagram-photos/icon-instagram.svg"
                      alt=""
                    />
                  </div>
                  <div className="h-72">
                    <img
                      className="block h-full w-full"
                      src="/images/package.jpg"
                      alt=""
                    />
                  </div>
                  <div className="px-4 pb-5 pt-4">
                    <span className="tetx-gray-800 mb-2.5 block text-sm">
                      This is example post
                    </span>
                    <div className="flex items-center">
                      <img
                        className="mr-1.5"
                        src="saturn-assets/images/instagram-photos/heart-icon.svg"
                        alt=""
                      />
                      <span className="text-sm text-gray-500">12.903</span>
                    </div>
                  </div>
                </div>
                <div className="hidden px-4 md:block md:w-1/3 lg:w-1/4">
                  <div className="flex items-center justify-between px-4 py-5">
                    <span className="text-sm">@darlingdollcosmetics</span>
                    <img
                      src="saturn-assets/images/instagram-photos/icon-instagram.svg"
                      alt=""
                    />
                  </div>
                  <div className="h-72">
                    <img
                      className="block h-full w-full"
                      src="/images/home3.png"
                      alt=""
                    />
                  </div>
                  <div className="px-4 pb-5 pt-4">
                    <span className="tetx-gray-800 mb-2.5 block text-sm">
                      This is example post
                    </span>

                    <div className="flex items-center">
                      <img
                        className="mr-1.5"
                        src="saturn-assets/images/instagram-photos/heart-icon.svg"
                        alt=""
                      />
                      <span className="text-sm text-gray-500">12.903</span>
                    </div>
                  </div>
                </div>
                <div className="hidden px-4 lg:block lg:w-1/4">
                  <div className="flex items-center justify-between px-4 py-5">
                    <span className="text-sm">@darlingdollcosmetics</span>
                    <img
                      src="saturn-assets/images/instagram-photos/icon-instagram.svg"
                      alt=""
                    />
                  </div>
                  <div className="h-72">
                    <img
                      className="block h-full w-full"
                      src="/images/home2.png"
                      alt=""
                    />
                  </div>
                  <div className="px-4 pb-5 pt-4">
                    <span className="tetx-gray-800 mb-2.5 block text-sm">
                      This is example post
                    </span>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500">12,903</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
