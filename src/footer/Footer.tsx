import LogoFooter from "@/assets/logos/footer.svg";
import Phone from "@/assets/icons/footer/phone.svg";
import Email from "@/assets/icons/footer/email.svg";

import Facebook from "@/assets/icons/footer/facebook.svg";
import Insta from "@/assets/icons/footer/insta.svg";
import Dribble from "@/assets/icons/footer/dribble.svg";
import LinkedIn from "@/assets/icons/footer/linkedin.svg";
import Twitter from "@/assets/icons/footer/twitter.svg";

const Footer = () => {
  return (
    <footer className="relative z-20 flex w-full items-center justify-center bg-dark-100">
      <div className="w-5/6 pb-11 pt-16">
        <div className="grid w-full grid-cols-1 gap-10 text-neutrals-20 sm:grid-cols-2 lg:grid-cols-[2fr,1fr,1fr,2fr]">
          <div className="flex flex-col gap-10">
            <img src={LogoFooter} alt="logo" width={160} height={29} />
            <div className="w-4/5 text-xl sm:text-lg">
              Платформа пошуку перевізників та бронювання поїздок
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-semibold sm:text-lg">Клієнтам</h1>
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:underline">
                Головна
              </a>
              <a href="#" className="hover:underline">
                Про нас
              </a>
              <a href="#" className="hover:underline">
                Ціни
              </a>
              <a href="#" className="hover:underline">
                Маршрути
              </a>
              <a href="#" className="hover:underline">
                Політика приватності
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-semibold sm:text-lg">Перевізникам</h1>
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:underline">
                Help Docs
              </a>
              <a href="#" className="hover:underline">
                Особистий кабінет
              </a>
              <a href="#" className="hover:underline">
                Оновлення
              </a>
              <a href="#" className="hover:underline">
                Контакти
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-semibold sm:text-lg">
              Зворотній зв’язок
            </h1>
            <div className="w-full xl:w-3/5">
              Маєш пропозиції щодо покращення сервісу - пиши нам!
            </div>
            <div className="flex flex-wrap gap-2 xl:flex-nowrap">
              <input
                type="text"
                placeholder="Email Address"
                className="w-full px-4 py-3 text-neutrals-100 placeholder-neutrals-40 outline-none sm:w-4/5 xl:w-3/5"
              />
              <button className="w-full bg-primary-100 px-6 py-3 font-semibold text-neutrals-0 sm:w-4/5 xl:w-2/5">
                Надіслати
              </button>
            </div>
            <div className="flex items-center gap-3">
              <img src={Phone} width={21} height={22} />
              <a href="tel:+380737555555" className="text-sm text-neutrals-40">
                +38 (073) 555 55 55
              </a>
            </div>
            <div className="flex items-center gap-3">
              <img src={Email} width={21} height={22} />
              <a
                href="mailto:gmail@gmail.com"
                className="text-sm text-neutrals-40"
              >
                gmail@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="my-11 border-t-2 border-gray-600"></div>

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="font-rubik font-medium text-neutrals-40">
            2024 @ Sprinters. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Insta} alt="Instagram" />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Dribble} alt="Dribble" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
