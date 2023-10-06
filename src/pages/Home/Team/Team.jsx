import teamLead1 from "../../../../public/Resources/Dr-Fatiha.png";
import teamLead2 from "../../../../public/Resources/Alien-Brain.png";

const Team = () => {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-black">Meet Our Team Leaders</h3>

      <div className="block md:flex gap-7 justify-center p-5 drop-shadow">
        <div className="border border-purple-700 rounded-lg p-5 hover:bg-purple-300 drop-shadow-2xl">
          <div className="flex gap-5">
            <img src={teamLead1} />
            <div className="text-left">
              <p>Dr. Fatiha Suu</p>
              <p>CEO</p>
              <p>
                <small>Specialist diet, health and yoga.</small>
              </p>
            </div>
          </div>
        </div>
        <div className="border border-purple-700 rounded-lg p-5 hover:bg-purple-300 drop-shadow-2xl">
          <div className="flex gap-5">
            <img src={teamLead2} />
            <div className="text-left">
              <p>Alien Brain</p>
              <p>Manager</p>
              <p>
                <small>IT Specialist and support yoga tutor.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
