import Image from "next/image";

// Remove comments in TEAM_DATA when all pictures are available
// Whenever a picture becomes available, ensure it's placed in the public/ directory with the correct filename
// refer to TEAM_DATA below for filenames
// Simply uncomment the respective object in the array once picture has been placed in public folder
const TEAM_DATA = [
  {
    role: "President",
    name: "Mahrukh Usmani",
    image: "/president.jpeg", // stored in public/
  },
  // {
  //   role: "Secretary General",
  //   name: "Fizza Ali Jaffri",
  //   image: "/secretarygeneral.jpg",
  // },
  {
    role: "Director General",
    name: "Areeba Arif",
    image: "/vicepresident.jpeg",
  },
  // {
  //   role: "Academic Curator",
  //   name: "Soha Naveed",
  //   image: "/academiccurator.jpg",
  // },
  // {
  //   role: "Under-Secretary General",
  //   name: "Yusha Khalid",
  //   image: "/undersec1.jpg",
  // },
   //   role: "Under-Secretary General",
  //   name: "Misha Asim",
  //   image: "/undersec2.jpg",
  // },
  //   role: "Under-Secretary General",
  //   name: "Rana Mohammad Sarib Khan",
  //   image: "/undersec3.jpg",
  // },
  //   role: "Deputy Director General",
  //   name: "Mysha Zulfiqar",
  //   image: "/ddg1.jpg",
  // },
  //   role: "Deputy Director General",
  //   name: "Mubashir Anees",
  //   image: "/ddg2.jpg",
  // },
  //   role: "Deputy Director General",
  //   name: "Nabiha Sulman",
  //   image: "/ddg3.jpg",
  // },
];

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Page Header */}
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
            Meet the <span className="text-primary-700">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The dedicated individuals leading HUMUN with passion, diplomacy, and
            vision.
          </p>
        </header>

        {/* Team Grid */}
        <main className="space-y-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 gap-0 place-items-center justify-center">
            {TEAM_DATA.map((member, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center w-full max-w-xs"
              >
                {/* Profile Image */}
                <div className="relative w-full max-w-3xl h-96 border-4  rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Name + Role */}
                <div className="mt-4 space-y-1">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeamPage;
