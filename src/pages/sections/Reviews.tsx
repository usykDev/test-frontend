// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import userBen from "@/assets/users/user-Ben.png";
import userCraig from "@/assets/users/user-Craig.png";
import User1 from "@/assets/users/user1.png";
import User2 from "@/assets/users/user2.png";
import star from "@/assets/icons/star.svg";
import useMediaQuery from "@/hooks/useMediaQuery";

const users = [
  {
    id: 1,
    image: userBen,
    name: "Ben Yardley",
    from: "Київ",
    to: "Кишинів",
    date: "1 May 2023",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    rate: 5,
  },
  {
    id: 2,
    image: userCraig,
    name: "Craig Martin",
    from: "Львів",
    to: "Париж",
    date: "1 May 2023",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    rate: 5,
  },
  {
    id: 3,
    image: User1,
    name: "Alex Smith",
    from: "Berlin",
    to: "Lviv",
    date: "10 June 2023",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    rate: 4,
  },
  {
    id: 4,
    image: User2,
    name: "Jane Roe",
    from: "Kyiv",
    to: "Warsaw",
    date: "15 July 2023",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    rate: 4,
  },
  {
    id: 5,
    image: User1,
    name: "Emily Davis",
    from: "Lviv",
    to: "Warsaw",
    date: "5 August 2023",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    rate: 5,
  },

  {
    id: 6,
    image: User1,
    name: "Alex Smith",
    from: "Berlin",
    to: "Dnipro",
    date: "10 June 2023",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    rate: 4,
  },
  {
    id: 7,
    image: User2,
    name: "Jane Roe",
    from: "Kyiv",
    to: "Warsaw",
    date: "15 July 2023",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    rate: 4,
  },
  {
    id: 8,
    image: User1,
    name: "Emily Davis",
    from: "Kyiv",
    to: "Rome",
    date: "5 August 2023",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    rate: 5,
  },
];

const Reviews = () => {
  const isAboveBigScreens = useMediaQuery("(min-width: 1535px)");

  return (
    <section className="flex w-full justify-center overflow-hidden bg-neutrals-10 pb-11 pt-16">
      <div className="absolute left-0 top-0 h-full w-full bg-white [clip-path:polygon(0_0,6%_0,0_10%)]"></div>

      <div className="flex w-5/6 flex-col gap-4 px-4 md:flex-row lg:gap-8">
        <div className="flex w-full flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h2 className="font-lato text-4xl font-bold text-neutrals-100 md:text-5xl">
              Що <span className="text-blue-100">кажуть люди?</span>
            </h2>
            <p className="text-base text-neutrals-100 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className="w-fit rounded-md bg-primary-100 px-6 py-3 text-neutrals-0">
            Залишити відгук
          </button>
        </div>

        <div className="relative z-0 w-full gap-8 md:w-1/2">
          {isAboveBigScreens && (
            <>
              {" "}
              <div className="before:content-rectangleSmall before:absolute before:-top-20 before:right-14 before:z-[-1]"></div>
              <div className="before:content-rectanglesBig before:absolute before:-bottom-16 before:-right-44 before:z-[-1]"></div>
            </>
          )}
          <Swiper
            className="swiper_container_offers w-full"
            slidesPerView={1}
            grabCursor={true}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next-offers",
              prevEl: ".swiper-button-prev-offers",
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            spaceBetween={16}
            breakpoints={{
              1100: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
            }}
          >
            {users.map((user) => (
              <SwiperSlide key={user.name}>
                <div className="flex min-h-[411px] max-w-full flex-col items-start gap-4 rounded-lg bg-neutrals-0 p-6 shadow-lg">
                  <div className="flex gap-5">
                    <div className="h-[72px] w-[72px] shrink-0">
                      <img
                        src={user.image}
                        alt={`${user.name}'s avatar`}
                        className="rounded-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col gap-2 font-roboto">
                      <div className="text-xl font-semibold text-neutrals-100 md:text-2xl">
                        {user.name}
                      </div>
                      <div className="text-sm font-semibold text-primary-100">
                        {user.from} - {user.to}
                      </div>
                      <div className="text-sm text-neutrals-80">
                        {user.date}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  <div className="mt-4 flex gap-1">
                    {[...Array(user.rate)].map((_, index) => (
                      <img key={index} src={star} alt="star" />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Reviews;
