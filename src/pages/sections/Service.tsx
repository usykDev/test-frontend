import Conditioner from "@/assets/icons/service/conditioner.svg";
import Wifi from "@/assets/icons/service/wifi.svg";
import Tv from "@/assets/icons/service/tv.svg";
import Wc from "@/assets/icons/service/wc.svg";
import Comfort from "@/assets/icons/service/comfort.svg";
import Care from "@/assets/icons/service/care.svg";

const service = [
  { icon: Conditioner, label: "Кондиціонер" },
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Tv, label: "Телевізор" },
  { icon: Wc, label: "Санвузол" },
  { icon: Comfort, label: "Комфорт" },
  { icon: Care, label: "Догляд" },
];

const Service = () => {
  return (
    <section className="flex w-full items-center justify-center py-16">
      <div className="flex w-5/6 flex-col gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="font-lato text-3xl font-bold text-neutrals-100">
            Сервіс
          </h3>
          <div className="text-lg text-neutrals-80">
            Найкращі умови для вашого комфорту
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {service.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 sm:text-left xl:justify-center"
            >
              <div className="h-12 w-12 flex-shrink-0">
                <img
                  src={feature.icon}
                  alt={feature.label}
                  className="object-contain"
                />
              </div>
              <div className="font-lato text-base font-bold text-neutrals-100 sm:text-xl md:text-2xl">
                {feature.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
