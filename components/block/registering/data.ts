import type { ItemPost } from "./types";
import studentEmailLink from "./student-email";
import schoolEmailLink from "./school-email";

export const data: ItemPost[] = [
    {
        "id": "1",
        "title": "Student Registration",
        "meta": "Open Source",
        "description": "All students and schools are welcome to participate in the Hippo Olympiad.",
        "url": studentEmailLink,
        "featured": "/images/portfolio/PHOTO-2025-04-08-23-12-55 3.jpg",
    },
    {
        "id": "2",
        "title": "School Registration",
        "meta": "",
        "description": "Schools who wish to host the preliminary round of the Olympiad need to complete the Venue Approval Form and attach it to the email created by clicking the 'Inquire' button. Afterwords, you will get access to the online registration platform, where the school coordinator can register students.",
        "url": schoolEmailLink,
        "featured": "/images/portfolio/PHOTO-2025-04-06-18-23-09 5.jpg",
    },
];