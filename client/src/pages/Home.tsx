export function Home() {
  return (
    <div>
      <div className="align-center m-auto flex w-11/12 justify-center p-8">
        <video
          autoPlay
          loop
          muted
          src="./images/cyberbabevideo.mp4"
          className="rounded-3xl"
        ></video>
      </div>
      <section className="relative overflow-hidden pb-20">
        <div className="container relative mx-auto">
          <div className=" text-center">
            <span className="mb-4 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-900">
              SOCIAL MEDIA
            </span>
            <h1 className="font-heading  mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
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
                    <img
                      src="saturn-assets/images/instagram-photos/icon-instagram.svg"
                      alt=""
                    />
                  </div>
                  <div className="pb-2">
                    <img
                      className="block aspect-square h-full w-full rounded"
                      src="/images/home1.png"
                      alt=""
                    />
                  </div>
                  <div className="p-1">
                    <div className="flex w-full pb-2">
                      <img
                        className="square mr-1.5"
                        src="saturn-assets/images/instagram-photos/heart-icon.svg"
                        alt=""
                      />
                      <svg
                        className="mr-2 w-6 text-red-600"
                        viewBox="0 0 64 64"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                      >
                        <path
                          vectorEffect="non-scaling-stroke"
                          d="M32.012,59.616c-1.119-.521-2.365-1.141-3.707-1.859a79.264,79.264,0,0,1-11.694-7.614C6.316,42,.266,32.6.254,22.076,0.244,12.358,7.871,4.506,17.232,4.5a16.661,16.661,0,0,1,11.891,4.99l2.837,2.889,2.827-2.9a16.639,16.639,0,0,1,11.874-5.02h0c9.368-.01,17.008,7.815,17.021,17.539,0.015,10.533-6.022,19.96-16.312,28.128a79.314,79.314,0,0,1-11.661,7.63C34.369,58.472,33.127,59.094,32.012,59.616Z"
                        ></path>
                      </svg>
                      <div className="mr-2">
                        <svg
                          aria-label="Comment"
                          fill="currentColor"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>Comment</title>
                          <path
                            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>

                      <svg
                        aria-label="Share Post"
                        fill="currentColor"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Share Post</title>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="22"
                          x2="9.218"
                          y1="3"
                          y2="10.083"
                        ></line>
                        <polygon
                          fill="none"
                          points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polygon>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">1,903 Likes</p>
                    <p className="tetx-gray-800 mt-2.5">
                      Darling Doll Lashes in acrylic cases are now SOLD OUT!
                    </p>
                  </div>
                </div>

                <div className="hidden w-full px-4 sm:block md:w-1/3 lg:w-1/4">
                  <div className="flex items-center justify-between px-4 py-5">
                    <img
                      src="saturn-assets/images/instagram-photos/icon-instagram.svg"
                      alt=""
                    />
                  </div>
                  <div className="pb-2">
                    <img
                      className="block h-full w-full rounded"
                      src="/images/package.jpg"
                      alt=""
                    />
                  </div>
                  <div className="p-1">
                    <div className="flex w-full pb-2">
                      <img
                        className="square mr-1.5"
                        src="saturn-assets/images/instagram-photos/heart-icon.svg"
                        alt=""
                      />
                      <svg
                        className="mr-2 w-6 text-red-600"
                        viewBox="0 0 64 64"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                      >
                        <path
                          vectorEffect="non-scaling-stroke"
                          d="M32.012,59.616c-1.119-.521-2.365-1.141-3.707-1.859a79.264,79.264,0,0,1-11.694-7.614C6.316,42,.266,32.6.254,22.076,0.244,12.358,7.871,4.506,17.232,4.5a16.661,16.661,0,0,1,11.891,4.99l2.837,2.889,2.827-2.9a16.639,16.639,0,0,1,11.874-5.02h0c9.368-.01,17.008,7.815,17.021,17.539,0.015,10.533-6.022,19.96-16.312,28.128a79.314,79.314,0,0,1-11.661,7.63C34.369,58.472,33.127,59.094,32.012,59.616Z"
                        ></path>
                      </svg>
                      <div className="mr-2">
                        <svg
                          aria-label="Comment"
                          fill="currentColor"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>Comment</title>
                          <path
                            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>

                      <svg
                        aria-label="Share Post"
                        fill="currentColor"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Share Post</title>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="22"
                          x2="9.218"
                          y1="3"
                          y2="10.083"
                        ></line>
                        <polygon
                          fill="none"
                          points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polygon>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">1,903 Likes</p>
                    <p className="tetx-gray-800 mt-2.5">
                      Darling Doll Lashes in acrylic cases are now SOLD OUT!
                    </p>
                  </div>
                </div>
                <div className="hidden px-4 md:block md:w-1/3 lg:w-1/4">
                  <div className="flex items-center justify-between px-4 py-5">
                    <img
                      src="saturn-assets/images/instagram-photos/icon-instagram.svg"
                      alt=""
                    />
                  </div>
                  <div className="pb-2">
                    <img
                      className="block h-full w-full rounded"
                      src="/images/home3.png"
                      alt=""
                    />
                  </div>
                  <div className="p-1">
                    <div className="flex w-full pb-2">
                      <img
                        className="square mr-1.5"
                        src="saturn-assets/images/instagram-photos/heart-icon.svg"
                        alt=""
                      />
                      <svg
                        className="mr-2 w-6 text-red-600"
                        viewBox="0 0 64 64"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                      >
                        <path
                          vectorEffect="non-scaling-stroke"
                          d="M32.012,59.616c-1.119-.521-2.365-1.141-3.707-1.859a79.264,79.264,0,0,1-11.694-7.614C6.316,42,.266,32.6.254,22.076,0.244,12.358,7.871,4.506,17.232,4.5a16.661,16.661,0,0,1,11.891,4.99l2.837,2.889,2.827-2.9a16.639,16.639,0,0,1,11.874-5.02h0c9.368-.01,17.008,7.815,17.021,17.539,0.015,10.533-6.022,19.96-16.312,28.128a79.314,79.314,0,0,1-11.661,7.63C34.369,58.472,33.127,59.094,32.012,59.616Z"
                        ></path>
                      </svg>
                      <div className="mr-2">
                        <svg
                          aria-label="Comment"
                          fill="currentColor"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>Comment</title>
                          <path
                            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>

                      <svg
                        aria-label="Share Post"
                        fill="currentColor"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Share Post</title>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="22"
                          x2="9.218"
                          y1="3"
                          y2="10.083"
                        ></line>
                        <polygon
                          fill="none"
                          points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polygon>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">1,903 Likes</p>
                    <p className="tetx-gray-800 mt-2.5">
                      Darling Doll Lashes in acrylic cases are now SOLD OUT!
                    </p>
                  </div>
                </div>
                <div className="hidden px-4 lg:block lg:w-1/4">
                  <div className="flex items-center justify-between px-4 py-5">
                    <img
                      src="saturn-assets/images/instagram-photos/icon-instagram.svg"
                      alt=""
                    />
                  </div>
                  <div className="pb-2">
                    <img
                      className="block h-full w-full rounded"
                      src="/images/home2.png"
                      alt=""
                    />
                  </div>
                  <div className="p-1">
                    <div className="flex w-full pb-2">
                      <img
                        className="square mr-1.5"
                        src="saturn-assets/images/instagram-photos/heart-icon.svg"
                        alt=""
                      />
                      <svg
                        className="mr-2 w-6 text-red-600"
                        viewBox="0 0 64 64"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                      >
                        <path
                          vectorEffect="non-scaling-stroke"
                          d="M32.012,59.616c-1.119-.521-2.365-1.141-3.707-1.859a79.264,79.264,0,0,1-11.694-7.614C6.316,42,.266,32.6.254,22.076,0.244,12.358,7.871,4.506,17.232,4.5a16.661,16.661,0,0,1,11.891,4.99l2.837,2.889,2.827-2.9a16.639,16.639,0,0,1,11.874-5.02h0c9.368-.01,17.008,7.815,17.021,17.539,0.015,10.533-6.022,19.96-16.312,28.128a79.314,79.314,0,0,1-11.661,7.63C34.369,58.472,33.127,59.094,32.012,59.616Z"
                        ></path>
                      </svg>
                      <div className="mr-2">
                        <svg
                          aria-label="Comment"
                          fill="currentColor"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>Comment</title>
                          <path
                            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>

                      <svg
                        aria-label="Share Post"
                        fill="currentColor"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Share Post</title>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="22"
                          x2="9.218"
                          y1="3"
                          y2="10.083"
                        ></line>
                        <polygon
                          fill="none"
                          points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polygon>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">1,903 Likes</p>
                    <p className="tetx-gray-800 mt-2.5">
                      Darling Doll Lashes in acrylic cases are now SOLD OUT!
                    </p>
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
