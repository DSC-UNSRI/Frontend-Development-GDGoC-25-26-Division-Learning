import { motion } from "framer-motion";
import { Instagram, Linkedin, Github, User } from "lucide-react";

interface TeamMember {
  name: string;
  university: string;
  major: string;
  batch: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
  image?: string;
  quote?: string;
  isLead?: boolean;
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard = ({ member, index }: TeamCardProps) => {
  const colorClasses = [
    "border-google-blue/30 hover:border-google-blue",
    "border-google-red/30 hover:border-google-red",
    "border-google-yellow/30 hover:border-google-yellow",
    "border-google-green/30 hover:border-google-green",
  ];

  const accentColors = [
    "bg-google-blue",
    "bg-google-red",
    "bg-google-yellow",
    "bg-google-green",
  ];

  const colorIndex = index % 4;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`bg-card rounded-2xl overflow-hidden shadow-sm border-2 transition-all duration-300 ${
        colorClasses[colorIndex]
      } ${member.isLead ? "md:col-span-2 lg:col-span-1" : ""}`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <User className="w-12 h-12 text-muted-foreground/40" />
          </div>
        )}
        {member.isLead && (
          <div
            className={`absolute top-3 right-3 ${accentColors[colorIndex]} text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold`}
          >
            Core Team
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5 pb-3">
        <h3 className="font-display text-sm sm:text-lg font-semibold mb-1 line-clamp-1">
          {member.name}
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm mb-1">{member.major}</p>
        <p className="text-muted-foreground text-xs mb-4">
          Batch {member.batch}
        </p>

        {/* Quote */}
        {member.quote && (
          <div className="mb-4 hidden sm:block">
            <p className="text-xs italic text-muted-foreground">
              "{member.quote}"
            </p>
          </div>
        )}

        {/* Social Links */}
        <div className="flex gap-2">
          {member.instagram && (
            <a
              href={
                member.instagram.startsWith("http")
                  ? member.instagram
                  : `https://${member.instagram}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-google-red hover:text-primary-foreground transition-colors duration-200"
            >
              <Instagram className="w-4 h-4" />
            </a>
          )}
          {member.linkedin && (
            <a
              href={
                member.linkedin.startsWith("http")
                  ? member.linkedin
                  : `https://${member.linkedin}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-google-blue hover:text-primary-foreground transition-colors duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {member.github && (
            <a
              href={
                member.github.startsWith("http")
                  ? member.github
                  : `https://${member.github}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
