import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Github,
  Quote,
  GraduationCap,
  Calendar,
} from "lucide-react";
import type { TeamMember } from "@/data/data";

interface CoreTeamSpotlightProps {
  member: TeamMember;
}

const ensureUrl = (url: string) => {
  if (url.startsWith("http")) return url;
  return `https://${url}`;
};

const CoreTeamSpotlight = ({ member }: CoreTeamSpotlightProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full max-w-4xl mx-auto"
    >
      {/* Background decorative elements */}
      <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 rounded-3xl blur-xl" />

      <div className="relative grid md:grid-cols-5 gap-0 rounded-2xl overflow-hidden bg-card border border-border/50 shadow-sm">
        {/* Left: Image section */}
        <div className="md:col-span-2 relative overflow-hidden">
          <div className="aspect-[8/6] sm:aspect-[4/3] md:aspect-auto md:h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full min-h-[320px] bg-gradient-to-br from-primary/10 via-accent/5 to-primary/20 flex items-center justify-center">
                <span className="text-7xl font-bold text-primary/20">
                  {member.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
          {/* Badge overlay */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1.5 rounded-full bg-google-green text-primary-foreground text-xs font-semibold tracking-wide uppercase shadow-lg">
              Core Team
            </span>
          </div>
        </div>

        {/* Right: Info section */}
        <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center space-y-6">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              {member.name}
            </h3>
            <div className="mt-1 h-1 w-12 rounded-full bg-google-green" />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <GraduationCap className="w-4 h-4 text-google-green" />
              <span className="text-sm font-medium">{member.major}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4 text-google-green" />
              <span className="text-sm font-medium">Batch {member.batch}</span>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative pl-5 border-l-2 border-google-green/30"
          >
            <Quote className="absolute -left-3 -top-1 w-5 h-5 text-google-green/40 bg-card" />
            <p className="text-muted-foreground italic text-sm md:text-base leading-relaxed">
              "{member.quote}"
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex gap-3 pt-2"
          >
            {[
              { icon: Instagram, url: member.instagram, label: "Instagram" },
              { icon: Linkedin, url: member.linkedin, label: "LinkedIn" },
              { icon: Github, url: member.github, label: "GitHub" },
            ].map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={ensureUrl(url)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-xl bg-secondary hover:bg-google-green text-muted-foreground hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CoreTeamSpotlight;
