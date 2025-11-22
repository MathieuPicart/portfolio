"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import BlurFade from "./magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  missions?: readonly {
    title: string;
    start: string;
    end: string;
    technologies: readonly string[];
    description: string;
    context: string;
    objectives: readonly string[];
    results: string;
  }[];
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  missions,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (missions) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,

              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-2 text-xs sm:text-sm"
          >
            {missions && missions.length > 0 ? (
              missions.map((mission, index) => (
                <div key={index} className="flex-grow items-center flex-col group my-4">
                  <div className="flex items-center justify-between gap-x-2">
                    <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm py-1">{mission.title}</h3>
                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                      {`${mission.start} - ${mission.end ?? "Present"}`}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {mission.technologies.map((technologie) => (
                      <BlurFade
                        key={technologie}
                        delay={BLUR_FADE_DELAY * 11}
                      >
                        <Badge>{technologie}</Badge>
                      </BlurFade>
                    ))}
                  </div>
                  <div>
                    <strong>Description: </strong>
                    <p className="text-xs sm:text-sm">{mission.description}</p>
                  </div>
                  <div>
                    <strong>Contexte: </strong>
                    <p className="text-xs sm:text-sm">{mission.context}</p>
                  </div>
                  <div>
                    <strong>Misssions clés: </strong>
                    <ul className="ml-5">
                      {mission.objectives.map((objective, i) => (
                        <li key={i} className="list-disc">{objective}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <strong>Résultat: </strong>
                    <p className="text-xs sm:text-sm">{mission.results}</p>
                  </div>
                </div>
              ))
            ) : null}
          </motion.div>
        </div>
      </Card>
    </Link>
  );
};
