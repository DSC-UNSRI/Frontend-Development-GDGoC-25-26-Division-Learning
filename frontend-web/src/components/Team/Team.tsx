import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import CoreTeamSpotlight from "./CoreTeamSpotlight";
import { coreTeam, members } from "@/data/data";

const Team = () => {
  return (
    <section id="team" className="py-20 px-4 bg-background">
      <div className="container mx-auto px-4 space-y-20">
        {/* Core Team Section */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Meet the <span className="text-google-green">Core Team</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Leading the Frontend Development division
            </p>
          </motion.div>

          {/* Core Team Spotlight */}
          <div className="flex flex-col gap-8">
            <CoreTeamSpotlight member={coreTeam} />
          </div>
        </div>

        {/* Members Section */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our <span className="text-google-red">Members</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Talented developers ready to learn and grow together
            </p>
          </motion.div>

          {/* Members Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {members.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
