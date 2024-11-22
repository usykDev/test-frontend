import Twitter from "@/assets/icons/description/twitter.svg";
import Facebook from "@/assets/icons/description/facebook.svg";
import ArrowDown from "@/assets/icons/description/arrow-down.svg";
import ArrowUp from "@/assets/icons/description/arrow-up.svg";
import photoCar1 from "@/assets/photos/photo1.png";
import photoCar2 from "@/assets/photos/photo2.png";
import photoCar3 from "@/assets/photos/photo3.png";

import Flag from "react-world-flags";
import { useState } from "react";
import Calendar from "./Calendar";

const flags = [
  { code: "FR", name: "Франція" },
  { code: "IT", name: "Італія" },
  { code: "DE", name: "Німеччина" },
  { code: "NL", name: "Нідерланди" },
  { code: "ES", name: "Іспанія" },
  { code: "SE", name: "Швеція" },
  { code: "BE", name: "Бельгія" },
  { code: "PT", name: "Португалія" },
];

const Decsription = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <section className="flex w-full items-center justify-center py-20">
      <div className="flex flex-col gap-5 sm:w-5/6 md:w-11/12 md:flex-row lg:w-5/6 xl:gap-16">
        <div className="flex flex-col gap-10 md:w-4/6">
          <div className="flex flex-col gap-4">
            <h3 className="font-lato text-3xl font-bold text-neutrals-100">
              Опис перевізника
            </h3>
            <p className="text-neutrals-80">
              Stripe is a software platform for starting and running internet
              businesses. Millions of businesses rely on Stripe’s software tools
              to accept payments, expand globally, and manage their businesses
              online. Stripe has been at the forefront of expanding internet
              commerce, powering new business models, and supporting the latest
              platforms, from marketplaces to mobile commerce sites. We believe
              that growing the GDP of the internet is a problem rooted in code
              and design, not finance. Stripe is built for developers, makers,
              and creators. We work on solving the hard technical problems
              necessary to build global economic infrastructure—from designing
              highly reliable systems to developing advanced machine learning
              algorithms to prevent fraud.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-lato text-3xl font-bold text-neutrals-100">
              Ми у соц. мережах
            </h3>
            <div className="flex w-fit flex-col gap-4 font-semibold text-primary-100 lg:flex-row">
              <a
                href="https://twitter.com/stripe"
                target="_blank"
                className="flex items-center gap-3 border border-primary-100 p-2 hover:underline"
              >
                <img src={Twitter} width={20} height={16} />
                <div>twitter.com/stripe</div>
              </a>

              <a
                href="https://facebook.com/StripeHQ"
                className="flex items-center gap-3 border border-primary-100 p-2 hover:underline"
              >
                <img src={Facebook} width={10} height={20} />
                <div>facebook.com/StripeHQ</div>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="xl:h-[240px] xl:w-[752px]">
              <img
                src={photoCar1}
                alt="photoCar1"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="xl:h-[240px] xl:w-[752px]">
              <img
                src={photoCar2}
                alt="photoCar2"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="xl:h-[240px] xl:w-[752px]">
              <img
                src={photoCar3}
                alt="photoCar3"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <aside className="flex min-w-80 flex-col md:w-2/6">
          <div className="flex flex-col items-start gap-6">
            <h3 className="font-lato text-3xl font-bold text-neutrals-100">
              Обслуговуємо країни
            </h3>
            <div className="flex flex-col gap-4">
              {flags.slice(0, 5).map((flag) => (
                <div key={flag.code} className="flex gap-3">
                  <Flag code={flag.code} className="flag" />
                  <div>{flag.name}</div>
                </div>
              ))}
            </div>

            {isExpanded &&
              flags.slice(5).map((flag) => (
                <div
                  key={flag.code}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Flag
                    code={flag.code}
                    style={{
                      width: "40px",
                      height: "auto",
                      marginRight: "10px",
                    }}
                  />
                  {flag.name}
                </div>
              ))}

            <div className="flex gap-4">
              <button
                onClick={toggleExpand}
                className="font-semibold text-primary-100"
              >
                {isExpanded ? "Згорнути" : "Усі країни"}
              </button>
              <button onClick={toggleExpand}>
                <img src={isExpanded ? ArrowDown : ArrowUp} alt="" />
              </button>
            </div>
          </div>

          <div className="my-11 border border-neutrals-20"></div>

          <div className="flex flex-col gap-6">
            <h3 className="font-lato text-3xl font-bold text-neutrals-100">
              Календар поїздок
            </h3>
            <div className="w-full min-w-80">
              <Calendar />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Decsription;
