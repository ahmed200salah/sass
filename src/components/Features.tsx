import EcoSystemIcon from "../assets/icons/ecosystem.svg";
const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className=" bg-black text-white">
      <div className="container justify-center items-center flex flex-col">
        <h2 className="text-7xl font-extrabold tracking-tighter text-center pt-7 max-md:text-3xl feature">
          Everything you need
        </h2>
        <p className="font-semibold text-xl max-md:text-base justify-center items-center w-[740px] max-md:w-[300px] text-center py-7 text-[#4D4D4D] feature">
          Enjoy customizable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </p>

        <div className="flex max-md:flex-col md:space-x-7 py-7 max-md:space-y-7 cursor-pointer featuree">
          {features.map((item, i) => (
            <div
              key={i}
              className="border border-white/30 rounded-lg px-5 py-7 gap-3 flex flex-col justify-center items-center hover:rotate-3 transition-all group "
            >
              <div className="inline-flex h-12 w-12 group-hover:bg-[#191a19] transition-all bg-white text-black justify-center items-center rounded-lg">
                <EcoSystemIcon className=" w-5 scale-125 group-hover:scale-150 transition-all group-hover:text-white" />
              </div>
              <h3 className="font-bold text-xl text-center pt-4">
                {item.title}
              </h3>
              <p className="text-[#4D4D4D] text-center font-semibold px-7 max-md:px-1 line-clamp-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
