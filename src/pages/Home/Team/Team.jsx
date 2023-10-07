import teamLead1 from "../../../../public/Resources/Dr-Fatiha.png";
import teamLead2 from "../../../../public/Resources/Alien-Brain.png";

const Team = () => {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-black">Meet Our Team Leaders</h3>

      <div className="block md:flex gap-7 justify-center p-5 drop-shadow">
        <div className="border border-black rounded-lg p-5 hover:bg-red-400 hover:border-none hover:text-white drop-shadow-2xl">
          <div className="flex gap-5">
            <img src={teamLead1} />
            <div className="text-left">
              <p className="text-lg font-bold mb-3">Dr. Fatiha Suu</p>
              <p>CEO</p>
              <p>
                <small>Specialist diet, health and yoga.</small>
              </p>
              <p className="mt-2 text-xs">
                <small>Contact: fatiha_suu@jmail.eom</small>
              </p>
            </div>
          </div>
        </div>
        <div className="border border-black rounded-lg p-5 hover:bg-red-200 drop-shadow-2xl">
          <div className="flex gap-5">
            <img src={teamLead2} />
            <div className="text-left">
              <p className="text-lg font-bold mb-3">Alien Brain</p>
              <p>Director</p>
              <p>
                <small>IT Specialist and support yoga tutor.</small>
              </p>
              <p className="mt-2 text-xs">
                <small>Contact: alien_coder@jmail.eom</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
