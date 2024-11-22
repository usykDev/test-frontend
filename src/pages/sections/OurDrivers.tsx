import Inst from "@/assets/icons/our-drivers/inst.svg";
import linkedIn from "@/assets/icons/our-drivers/linked-in.svg";

import User1 from "@/assets/users/user1.png";
import User2 from "@/assets/users/user2.png";
import User3 from "@/assets/users/user3.png";
import { useEffect, useState } from "react";

const users = [
  {
    id: 1,
    image: User1,
    name: "Олександр",
    experience: "5 років",
    inst: "https://www.instagram.com",
    linkedIn: "https://www.linkedin.com",
  },
  {
    id: 2,
    image: User2,
    name: "Володимир",
    experience: "7 років",
    inst: "https://www.instagram.com",
    linkedIn: "https://www.linkedin.com",
  },
  {
    id: 3,
    image: User1,
    name: "Ірина",
    experience: "1 рік",
    inst: "https://www.instagram.com",
    linkedIn: "https://www.linkedin.com",
  },
  {
    id: 4,
    image: User2,
    name: "Михайло",
    experience: "1 рік",
    inst: "https://www.instagram.com",
    linkedIn: "https://www.linkedin.com",
  },

  {
    id: 5,
    image: User3,
    name: "Юлія",
    experience: "2 роки",
    inst: "https://www.instagram.com",
    linkedIn: "https://www.linkedin.com",
  },
  {
    id: 6,
    image: User1,
    name: "Ігор",
    experience: "3 роки",
    inst: "https://www.instagram.com",
    linkedIn: "https://www.linkedin.com",
  },
  {
    id: 7,
    image: User2,
    name: "Дмитро",
    experience: "7 років",
    inst: "https://www.instagram.com",
    linkedIn: "https://www.linkedin.com",
  },
];

const OurDrivers = () => {
  const [visibleUsers, setVisibleUsers] = useState<number>(5);

  const updateVisibleUsers = () => {
    const width = window.innerWidth;

    if (width >= 1024) {
      setVisibleUsers(5);
    } else if (width >= 768) {
      setVisibleUsers(3);
    } else {
      setVisibleUsers(2);
    }
  };

  useEffect(() => {
    updateVisibleUsers();
    window.addEventListener("resize", updateVisibleUsers);

    return () => {
      window.removeEventListener("resize", updateVisibleUsers);
    };
  }, []);

  return (
    <section className="flex w-full items-center justify-center">
      <div className="flex w-5/6 flex-col gap-6 border-t py-20">
        <div className="flex items-center justify-between">
          <h3 className="font-lato text-3xl font-bold text-neutrals-100">
            Наші водії
          </h3>
          <a
            href="/carrier-profile/stripe/all-drivers"
            className="font-semibold text-primary-100 hover:underline"
          >
            Усі водії ({users.length})
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {users.slice(0, visibleUsers).map((user) => (
            <div
              key={user.id}
              className="flex flex-col items-center justify-center gap-4 rounded-md border p-6 text-center"
            >
              <div className="h-[80px] w-[80px]">
                <img
                  src={user.image}
                  alt={`${user.name}'s avatar`}
                  className="rounded-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-1">
                <div className="text-lg font-semibold text-neutrals-100">
                  {user.name}
                </div>
                <div className="text-sm text-neutrals-60">
                  Досвід роботи: {user.experience}
                </div>
              </div>

              <div className="flex gap-3">
                <a href={user.inst} className="h-6 w-6">
                  <img src={Inst} alt="Instagram" className="object-contain" />
                </a>
                <a href={user.linkedIn} className="h-6 w-6">
                  <img
                    src={linkedIn}
                    alt="LinkedIn"
                    className="object-contain"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDrivers;
