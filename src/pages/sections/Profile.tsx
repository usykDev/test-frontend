import ProfileImg from "@/assets/profie.svg";
import Phone from "@/assets/icons/stripe/phone-primary.svg";
import Web from "@/assets/icons/stripe/web.svg";

import Market from "@/assets/icons/stripe/market.svg";
import Tranport from "@/assets/icons/stripe/transport.svg";
import People from "@/assets/icons/stripe/people.svg";
import Location from "@/assets/icons/stripe/location.svg";
import City from "@/assets/icons/stripe/city.svg";
import useMediaQuery from "@/hooks/useMediaQuery";

const Profile = () => {
  const isAboveBigScreens = useMediaQuery("(min-width: 1535px)");

  return (
    <section className="flex w-full items-center justify-center overflow-hidden bg-neutrals-10 pb-16">
      {isAboveBigScreens && (
        <div className="relative z-0">
          {" "}
          <div className="before:absolute before:-left-40 before:-top-40 before:z-[-1] before:content-rectangle"></div>
        </div>
      )}

      <div className="z-10 flex w-5/6 flex-col">
        <nav className="my-11 text-sm text-neutrals-60">
          <ol className="flex flex-wrap items-center space-x-2">
            <li>
              <a href="/" className="hover:underline">
                Головна
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="/carrier-profile" className="hover:underline">
                Профіль перевізника
              </a>
            </li>
            <li>/</li>
            <li className="text-neutrals-100">Stripe</li>
          </ol>
        </nav>

        <div className="flex flex-col gap-8 lg:flex-row">
          <img src={ProfileImg} alt="Profile" width={172} height={172} />

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                <h2 className="font-lato text-5xl font-bold text-neutrals-100">
                  Stripe
                </h2>
                <div className="w-fit border border-primary-100 px-3 py-1 text-primary-100">
                  43 Поїздок
                </div>
              </div>

              <div className="flex flex-col gap-8 font-semibold text-primary-100 lg:flex-row">
                <a
                  href="https://stripe.com"
                  target="_blank"
                  className="flex items-center gap-1 hover:underline"
                >
                  <img src={Web} width={24} height={24} />
                  <div>https://stripe.com</div>
                </a>

                <a
                  href="tel:+380737555555"
                  className="flex items-center gap-1 hover:underline"
                >
                  <img src={Phone} width={24} height={24} />
                  <div>+38 (073) 555 55 55</div>
                </a>
              </div>
            </div>

            <div className="grid w-full grid-cols-1 justify-between justify-items-stretch gap-8 md:grid-cols-2 2xl:grid-cols-5">
              <div className="flex w-fit gap-4">
                <div className="min-h-11 min-w-11">
                  <img src={Market} alt="Market" width={44} height={44} />
                </div>
                <div className="gap flex flex-col gap-1">
                  <div className="text-neutrals-80 after:content-[':']">
                    На ринку від
                  </div>
                  <div className="font-semibold text-neutrals-100">
                    Травень 31, 2011
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="min-h-11 min-w-11">
                  <img src={People} alt="Market" />
                </div>
                <div className="gap flex flex-col gap-1">
                  <div className="text-neutrals-80 after:content-[':']">
                    Перевезених пасажирів
                  </div>
                  <div className="font-semibold text-neutrals-100">4000+</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="min-h-11 min-w-11">
                  {" "}
                  <img src={Tranport} alt="Market" />
                </div>
                <div className="gap flex flex-col gap-1">
                  <div className="text-neutrals-80 after:content-[':']">
                    Автопарк
                  </div>
                  <div className="font-semibold text-neutrals-100">8 бусів</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="min-h-11 min-w-11">
                  {" "}
                  <img src={Location} alt="Market" />
                </div>
                <div className="gap flex flex-col gap-1">
                  <div className="text-neutrals-80 after:content-[':']">
                    Обслуговуємо
                  </div>
                  <div className="font-semibold text-neutrals-100">8 країн</div>
                </div>
              </div>

              <div className="relative z-0 flex gap-4">
                {isAboveBigScreens && (
                  <div className="before:absolute before:-bottom-20 before:-right-44 before:z-[-1] before:content-rectanglesLeft"></div>
                )}
                <div className="min-h-11 min-w-11">
                  {" "}
                  <img src={City} alt="Market" />
                </div>
                <div className="gap flex flex-col gap-1">
                  <div className="text-neutrals-80 after:content-[':']">
                    Місто
                  </div>
                  <div className="font-semibold text-neutrals-100">Львів</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
