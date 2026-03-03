"use client";

import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { ArrowRight } from "lucide-react";

export function HippoTimeline() {
    const timelineData = [
        { date: '8-9 May 2026', title: 'PRELIMINARY ROUNDS', subtitle: "Mexico", description: 'The first step of the Hippo journey — your first test, right near home, maybe even in your own school! Also available online.' },
        { date: '29 & 30 May 2026', title: 'NATIONAL FINALS', subtitle: "Mexico", description: 'Only the top 20% make it here — the best of the best competing in major cities across the country or online!' },
        { title: 'PLAY-OFF QUALIFIERS', description: 'If you scored more than 50% of the top scorer’s result, you can participate in the Play-Off Qualifiers and still compete for a spot in the World Finals.', learnmore: true, url: 'https://hippo-thecontest.org/play-off/' },
        { title: 'CONTINENTAL ROUND - QUALIFIERS', description: 'If you didn’t pass the National Finals but still scored more than 70% of the top scorer’s result, you can participate in the Continental Round — an extra chance to reach the World Finals.', learnmore: true, url: 'https://hippo-thecontest.org/continental-rounds/' },
        { date: '28 September - 1 October 2026', title: 'WORLD FINALS', subtitle: "Venue: Spoleto, Italy", description: 'The World Finals bring together the top students from around the globe: those who qualified directly from the National Finals, the winners of the Continental Rounds, and the champions of the Play-Off Qualifiers. This is the ultimate stage of the Contest, where the best of the best compete for the world title.' },
    ];
  return (
    <Timeline className="" horizontal>
        {timelineData.map((item, index) => (
            <TimelineItem key={index} className="md:w-1/5 ">
                <TimelinePoint />
                    <TimelineContent>
                        {item.date && <TimelineTime className="border border-default-medium px-1.5 py-0.5 rounded">{item.date}</TimelineTime>}
                        <TimelineTitle>{item.title}</TimelineTitle>
                        <ol className="mt-3 divide-y divide-default"></ol>
                        <div className="text-body">
                            <div className="text-base font-normal mb-1">{item.subtitle}</div>
                        </div>
                        <TimelineBody>
                            <p>{item.description}</p>
                        </TimelineBody>
                        {item.learnmore == true && 
                        <a href={item.url} target="_blank">
                            <Button className="bg-[#fbba00] dark:bg-[#97bddd] dark:text-[#000]" color="#97bddd">
                                Learn More
                                <ArrowRight className="ml-2 h-3 w-3" />
                            </Button>
                        </a>}
                    </TimelineContent>
            </TimelineItem>
        ))}

    </Timeline>
  );
}
